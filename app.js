// ╔══════════════════════════════════════════════════════╗
// ║  BIBLIOTECA VIRTUAL DE OCOZOCOAUTLA — DATA & ENGINE  ║
// ║  AUTO-SYNC CON ARCHIVE.ORG                           ║
// ╚══════════════════════════════════════════════════════╝

// ═══════════════════ ARCHIVE.ORG COLLECTIONS CONFIG ═══════════════════
// Para agregar una nueva sala, solo agrega un nuevo objeto aquí.
// identifier = el ID de tu item en archive.org
// category   = la clave interna (sin acentos)
// name       = nombre visible
// icon       = HTML entity del ícono
// rootFolder = carpeta raíz dentro del item (null si los archivos están en la raíz)
const COLLECTIONS = [
  {
    identifier: "anarquismo-en-pdf",
    category: "anarquismo",
    name: "Anarquismo",
    icon: "&#9876;",
    rootFolder: "ANARQUISMO"
  },
  {
    identifier: "eduardo-kohn-how-forests-think-toward-an-anthropology-beyond-the-human-universit",
    category: "antropologia",
    name: "Antropología",
    icon: "&#9763;",
    rootFolder: null
  },
  {
    identifier: "Sirin-Albi-La-Carcel-del-Feminismo",
    category: "feminismo",
    name: "Feminismo",
    icon: "&#9792;",
    rootFolder: null
  },
  {
    identifier: "spinoza-tratado-de-la-reforma-del-entendimiento_202605",
    category: "filosofia",
    name: "Filosofía",
    icon: "&#8734;",
    rootFolder: null
  },
  {
    identifier: "marx_20260508",
    category: "marxismo",
    name: "Marxismo",
    icon: "&#9733;",
    rootFolder: null
  }
];

// ═══════════════════ CACHE CONFIG ═══════════════════
const CACHE_KEY = "coitateca_library_cache";
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 horas

// ═══════════════════ GLOBAL STATE ═══════════════════
let LIBRARY = {};
let currentView = 'home';
let currentCategory = null;
let currentAuthor = null;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ═══════════════════ INIT ═══════════════════
document.addEventListener('DOMContentLoaded', async () => {
  runBootSequence();
  initNav();
  initClock();
  createPixelStars();

  // Intentar cargar desde cache primero para mostrar rápido
  const cached = loadFromCache();
  if (cached) {
    LIBRARY = cached;
    renderCategories();
    initSearch();
    initStatusBar();
  }

  // Fetch fresco en background (o si no hay cache)
  try {
    const fresh = await fetchAllCollections();
    LIBRARY = fresh;
    saveToCache(fresh);
    renderCategories();
    initSearch();
    initStatusBar();
  } catch (err) {
    console.warn("Error fetching from Archive.org, using cache/fallback:", err);
    if (!cached) {
      // Sin cache y sin red — mostrar mensaje
      const grid = $('#categories-grid');
      if (grid) grid.innerHTML = '<p style="color:var(--neon-red);padding:20px;">⚠ Error al conectar con Archive.org. Recarga la página.</p>';
    }
  }
});

// ═══════════════════ CACHE ═══════════════════
function loadFromCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { timestamp, data } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_DURATION_MS) return null;
    return data;
  } catch { return null; }
}

function saveToCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      data
    }));
  } catch (e) {
    console.warn("Could not save cache:", e);
  }
}

// ═══════════════════ FETCH ALL COLLECTIONS ═══════════════════
async function fetchAllCollections() {
  const library = {};

  const results = await Promise.allSettled(
    COLLECTIONS.map(col => fetchCollection(col))
  );

  results.forEach((result, i) => {
    const col = COLLECTIONS[i];
    if (result.status === 'fulfilled' && result.value) {
      library[col.category] = result.value;
    } else {
      // Fallback: categoría vacía
      library[col.category] = {
        name: col.name,
        icon: col.icon,
        authors: []
      };
    }
  });

  return library;
}

// ═══════════════════ FETCH SINGLE COLLECTION ═══════════════════
async function fetchCollection(col) {
  const url = `https://archive.org/metadata/${col.identifier}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const meta = await resp.json();
  const files = meta.files || [];

  return parseCollectionFiles(files, col);
}

// ═══════════════════ PARSE FILES INTO AUTHORS/BOOKS ═══════════════════
function parseCollectionFiles(files, col) {
  // Solo archivos originales que sean PDF o DOC
  const validExts = ['.pdf', '.doc', '.docx', '.epub'];
  const originalFiles = files.filter(f => {
    if (f.source !== 'original') return false;
    const name = (f.name || '').toLowerCase();
    return validExts.some(ext => name.endsWith(ext));
  });

  const authorsMap = new Map(); // authorKey -> { name, books[] }
  const downloadBase = `https://archive.org/download/${col.identifier}/`;

  originalFiles.forEach(f => {
    const filePath = f.name;
    const parsed = parseFilePath(filePath, col);
    if (!parsed) return;

    const { authorName, bookTitle, fileExt } = parsed;
    const authorKey = authorName.toLowerCase().trim();

    if (!authorsMap.has(authorKey)) {
      authorsMap.set(authorKey, {
        name: authorName,
        years: "",
        books: []
      });
    }

    const downloadUrl = downloadBase + encodeFilePath(filePath);

    // Evitar duplicados
    const author = authorsMap.get(authorKey);
    const already = author.books.some(b => b.title === bookTitle);
    if (!already) {
      author.books.push({
        title: bookTitle,
        year: fileExt.toUpperCase().replace('.', ''),
        url: downloadUrl
      });
    }
  });

  // Ordenar autores alfabéticamente
  const authors = Array.from(authorsMap.values())
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));

  // Ordenar libros de cada autor
  authors.forEach(a => {
    a.books.sort((x, y) => x.title.localeCompare(y.title, 'es'));
  });

  return {
    name: col.name,
    icon: col.icon,
    authors
  };
}

// ═══════════════════ PARSE FILE PATH ═══════════════════
function parseFilePath(filePath, col) {
  const parts = filePath.replace(/\\/g, '/').split('/');
  const fileName = parts[parts.length - 1];
  const ext = getExtension(fileName);

  // Determinar si hay carpeta raíz que saltar
  let relevantParts = [...parts];
  if (col.rootFolder && relevantParts[0] === col.rootFolder) {
    relevantParts.shift();
  }

  // Caso 1: Estructura CARPETA/Autor/Autor - Título/archivo.ext
  // La mayoría de tus colecciones usan: Apellido, Nombre/Apellido, Nombre - Título/archivo
  if (relevantParts.length >= 3) {
    const authorFolder = relevantParts[0];
    const bookFolder = relevantParts[1];
    return {
      authorName: cleanAuthorName(authorFolder),
      bookTitle: extractTitleFromPath(bookFolder, authorFolder),
      fileExt: ext
    };
  }

  // Caso 2: Autor - Título.ext (archivo directamente, como en feminismo)
  if (relevantParts.length === 1 || (relevantParts.length === 2 && relevantParts[0] === relevantParts[relevantParts.length - 1])) {
    const baseName = fileName.replace(/\.[^.]+$/, '');
    const parsed = parseAuthorTitle(baseName);
    return {
      authorName: parsed.author,
      bookTitle: parsed.title,
      fileExt: ext
    };
  }

  // Caso 3: Carpeta/archivo.ext (2 niveles)
  if (relevantParts.length === 2) {
    const folder = relevantParts[0];
    const baseName = fileName.replace(/\.[^.]+$/, '');

    // Intentar extraer autor del nombre de carpeta o archivo
    const hasDash = baseName.includes(' - ');
    if (hasDash) {
      const parsed = parseAuthorTitle(baseName);
      return {
        authorName: parsed.author,
        bookTitle: parsed.title,
        fileExt: ext
      };
    }

    // Usar la carpeta como autor y el archivo como título
    const parsed = parseAuthorTitle(folder);
    if (parsed.author !== parsed.title) {
      return {
        authorName: parsed.author,
        bookTitle: cleanTitle(baseName),
        fileExt: ext
      };
    }

    return {
      authorName: "Varios Autores",
      bookTitle: cleanTitle(baseName),
      fileExt: ext
    };
  }

  return null;
}

// ═══════════════════ HELPER: Parse "Autor - Título" ═══════════════════
function parseAuthorTitle(str) {
  // Patrón: "Apellido, Nombre - Título"
  const dashIdx = str.indexOf(' - ');
  if (dashIdx > 0) {
    const author = cleanAuthorName(str.substring(0, dashIdx).trim());
    const title = cleanTitle(str.substring(dashIdx + 3).trim());
    return { author, title };
  }

  // Sin dash, todo es título, autor desconocido
  return {
    author: "Varios Autores",
    title: cleanTitle(str)
  };
}

// ═══════════════════ HELPER: Clean Author Name ═══════════════════
function cleanAuthorName(raw) {
  let name = raw.trim();

  // Quitar trailing underscore o punto
  name = name.replace(/[_\.]+$/, '');

  // Si tiene formato "Apellido, Nombre", invertir
  if (name.includes(', ')) {
    const [last, first] = name.split(', ');
    if (first && last && first.length > 1) {
      name = `${first.trim()} ${last.trim()}`;
    }
  }

  return name;
}

// ═══════════════════ HELPER: Extract Title ═══════════════════
function extractTitleFromPath(bookFolder, authorFolder) {
  let title = bookFolder;

  // Remover el prefijo "Autor - " si existe
  const dashIdx = title.indexOf(' - ');
  if (dashIdx > 0) {
    title = title.substring(dashIdx + 3);
  }

  // Remover sufijos como [Anarquismo en PDF]
  title = title.replace(/\s*\[.*?\]\s*/g, '');

  return cleanTitle(title);
}

// ═══════════════════ HELPER: Clean Title ═══════════════════
function cleanTitle(raw) {
  let title = raw.trim();
  // Quitar extensión si quedó
  title = title.replace(/\.(pdf|doc|docx|epub)$/i, '');
  // Quitar underscores por espacios
  title = title.replace(/_/g, ' ');
  // Quitar corchetes de metadata
  title = title.replace(/\s*\[.*?\]\s*/g, '');
  // Limpiar espacios múltiples
  title = title.replace(/\s{2,}/g, ' ').trim();
  return title;
}

// ═══════════════════ HELPER: Get Extension ═══════════════════
function getExtension(filename) {
  const match = filename.match(/\.[^.]+$/);
  return match ? match[0].toLowerCase() : '';
}

// ═══════════════════ HELPER: Encode File Path for URL ═══════════════════
function encodeFilePath(filePath) {
  return filePath.split('/').map(part => encodeURIComponent(part)).join('/');
}

// ═══════════════════ BOOT SEQUENCE ═══════════════════
function runBootSequence() {
  const bootScreen = document.getElementById('boot-screen');
  const bootText = document.getElementById('boot-text');
  if(!bootScreen) return;
  
  const lines = [
    "BIOS Date 05/08/26 20:55:21 Ver 1.00",
    "CPU: COITA-CORE(TM) Processor @ 3.2GHz",
    "Memory Test: 640K OK",
    " ",
    "Initializing Library Modules...",
    "Loading Anarchism.sys ... OK",
    "Loading Anthropology.sys ... OK",
    "Loading Feminism.sys ... OK",
    "Loading Marxism.sys ... OK",
    " ",
    "Syncing with Archive.org ...",
    "Access Granted.",
    "Starting BibliotecaVirtual..."
  ];

  let currentLine = 0;
  bootText.innerHTML = "";
  
  const interval = setInterval(() => {
    if (currentLine < lines.length) {
      bootText.innerHTML += lines[currentLine] + "<br>";
      currentLine++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        bootScreen.style.display = 'none';
      }, 800);
    }
  }, 120);
}

// ═══════════════════ PIXEL STARS ═══════════════════
function createPixelStars() {
  const container = $('.pixel-grid');
  for (let i = 0; i < 8; i++) {
    const star = document.createElement('div');
    star.className = 'pixel-star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 3) + 's';
    container.appendChild(star);
  }
}

// ═══════════════════ NAVIGATION ═══════════════════
function initNav() {
  const hamburger = $('.hamburger');
  const navLinks = $('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  $$('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ═══════════════════ STATUS BAR ═══════════════════
function initStatusBar() {
  const totalBooks = Object.values(LIBRARY).reduce((sum, cat) => {
    return sum + cat.authors.reduce((s, a) => s + a.books.length, 0);
  }, 0);
  const totalAuthors = Object.values(LIBRARY).reduce((sum, cat) => sum + cat.authors.length, 0);

  const statusBar = $('.status-bar');
  statusBar.innerHTML = `
    <span class="status-section">${totalBooks} textos disponibles</span>
    <span class="status-section">${totalAuthors} autores</span>
    <span class="status-section">${Object.keys(LIBRARY).length} salas</span>
    <span style="margin-left:auto; color: var(--cyan);">v2.0.0 // auto-sync</span>
  `;
}

// ═══════════════════ CLOCK ═══════════════════
function initClock() {
  const clockEl = document.createElement('span');
  clockEl.className = 'status-section neon-clock';
  clockEl.style.color = '#0f0';
  clockEl.style.fontFamily = "'Space Mono', monospace";
  clockEl.style.fontWeight = 'bold';
  clockEl.style.textShadow = '0 0 5px #0f08';
  
  $('.status-bar').appendChild(clockEl);

  setInterval(() => {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('es-MX', { hour12: false });
  }, 1000);
}

// ═══════════════════ RENDER CATEGORIES ═══════════════════
function renderCategories() {
  const grid = $('#categories-grid');
  grid.innerHTML = '';

  Object.entries(LIBRARY).forEach(([key, cat]) => {
    const totalBooks = cat.authors.reduce((s, a) => s + a.books.length, 0);
    const card = document.createElement('div');
    card.className = 'cat-card win-window';
    card.onclick = () => navigateTo('authors', key);
    card.innerHTML = `
      <div class="win-titlebar">
        <span>${cat.name.toLowerCase()}.exe</span>
        <div class="win-buttons">
          <div class="win-btn">_</div>
          <div class="win-btn">□</div>
          <div class="win-btn">x</div>
        </div>
      </div>
      <div class="win-body">
        <img class="cat-bg-img" src="cat_${key}.png" alt="" onerror="this.style.display='none'">
        <div class="cat-content">
          <span class="cat-icon">${cat.icon}</span>
          <div>
            <div class="cat-name">${cat.name}</div>
            <div class="cat-count">${cat.authors.length} autores // ${totalBooks} textos</div>
          </div>
        </div>
        <span class="cat-corner">[ENTER]</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ═══════════════════ RENDER AUTHORS ═══════════════════
function renderAuthors(catKey) {
  const cat = LIBRARY[catKey];
  const grid = $('#authors-grid');

  $('#authors-breadcrumb').innerHTML = `
    <a onclick="navigateTo('home')">~/inicio</a>
    <span class="sep">/</span>
    <span class="current">${cat.name}</span>
  `;

  $('#authors-section-title').textContent = cat.name;

  grid.innerHTML = '';
  cat.authors.forEach((author, idx) => {
    const card = document.createElement('div');
    card.className = 'author-card';
    card.onclick = () => navigateTo('books', catKey, idx);
    card.innerHTML = `
      <div class="author-name">${author.name}</div>
      <div class="author-meta">${author.years ? author.years + ' // ' : ''}${author.books.length} texto${author.books.length > 1 ? 's' : ''}</div>
    `;
    grid.appendChild(card);
  });
}

// ═══════════════════ RENDER BOOKS ═══════════════════
function renderBooks(catKey, authorIdx) {
  const cat = LIBRARY[catKey];
  const author = cat.authors[authorIdx];
  const list = $('#books-list');

  $('#books-breadcrumb').innerHTML = `
    <a onclick="navigateTo('home')">~/inicio</a>
    <span class="sep">/</span>
    <a onclick="navigateTo('authors', '${catKey}')">${cat.name}</a>
    <span class="sep">/</span>
    <span class="current">${author.name}</span>
  `;

  $('#books-author-name').textContent = author.name;
  $('#books-author-meta').textContent = `${author.years ? author.years + ' // ' : ''}${cat.name}`;

  list.innerHTML = '';
  author.books.forEach(book => {
    const item = document.createElement('div');
    item.className = 'book-item';

    // Construir URL de "leer en línea" — reemplazar /download/ por /details/
    const readUrl = book.url.replace('/download/', '/details/');

    item.innerHTML = `
      <div class="book-info">
        <div class="book-title"><span style="margin-right:8px; font-size:1.1em;">&#128190;</span>${book.title}</div>
        <div class="book-year">${book.year}</div>
      </div>
      <div style="display:flex; gap:8px;">
        <a href="${readUrl}" target="_blank" rel="noopener" class="book-download" style="border-color:var(--neon-purple); color:var(--neon-purple);">
          [&#128065;] Leer en línea
        </a>
        <a href="${book.url}" target="_blank" rel="noopener" class="book-download">
          [&darr;] Descargar
        </a>
      </div>
    `;
    list.appendChild(item);
  });
}

// ═══════════════════ VIEW NAVIGATION ═══════════════════
function navigateTo(view, catKey = null, authorIdx = null) {
  const bar = $('.loading-bar');
  bar.style.width = '0%';
  bar.style.display = 'block';
  requestAnimationFrame(() => {
    bar.style.width = '70%';
    setTimeout(() => {
      bar.style.width = '100%';
      setTimeout(() => { bar.style.display = 'none'; bar.style.width = '0%'; }, 300);
    }, 200);
  });

  $$('.view').forEach(v => v.classList.remove('active'));

  currentView = view;
  currentCategory = catKey;
  currentAuthor = authorIdx;

  switch (view) {
    case 'home':
      $('#home-view').classList.add('active');
      break;
    case 'authors':
      renderAuthors(catKey);
      $('#authors-view').classList.add('active');
      break;
    case 'books':
      renderBooks(catKey, authorIdx);
      $('#books-view').classList.add('active');
      break;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  $('.search-results-panel').classList.remove('active');
  $('.search-input').value = '';
}

// ═══════════════════ SEARCH ═══════════════════
function initSearch() {
  const input = $('.search-input');
  const panel = $('.search-results-panel');

  // Remove old listener by cloning
  const newInput = input.cloneNode(true);
  input.parentNode.replaceChild(newInput, input);

  newInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length < 2) {
      panel.classList.remove('active');
      return;
    }

    const results = [];

    Object.entries(LIBRARY).forEach(([catKey, cat]) => {
      cat.authors.forEach((author, aIdx) => {
        if (author.name.toLowerCase().includes(q)) {
          results.push({
            type: 'Autor',
            name: author.name,
            sub: cat.name,
            action: () => navigateTo('books', catKey, aIdx)
          });
        }
        author.books.forEach(book => {
          if (book.title.toLowerCase().includes(q)) {
            results.push({
              type: 'Libro',
              name: book.title,
              sub: `${author.name} // ${cat.name}`,
              action: () => navigateTo('books', catKey, aIdx)
            });
          }
        });
      });
    });

    if (results.length === 0) {
      panel.innerHTML = `
        <div class="win-titlebar">
          <span>resultados.log</span>
          <div class="win-buttons"><div class="win-btn">x</div></div>
        </div>
        <div class="win-body">
          <div class="search-result-item">
            <div class="sr-name" style="color:var(--text-dim)">Sin resultados para "${e.target.value}"</div>
          </div>
        </div>
      `;
      panel.classList.add('active');
      return;
    }

    panel.innerHTML = `
      <div class="win-titlebar">
        <span>resultados.log — ${results.length} encontrado${results.length > 1 ? 's' : ''}</span>
        <div class="win-buttons"><div class="win-btn" onclick="document.querySelector('.search-results-panel').classList.remove('active')">x</div></div>
      </div>
      <div class="win-body" style="padding:0;">
        ${results.slice(0, 15).map(r => `
          <div class="search-result-item">
            <div class="sr-type">${r.type}</div>
            <div class="sr-name">${r.name}</div>
            <div class="sr-sub">${r.sub}</div>
          </div>
        `).join('')}
      </div>
    `;

    panel.querySelectorAll('.search-result-item').forEach((el, i) => {
      if (results[i]) el.onclick = results[i].action;
    });

    panel.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search') && !e.target.closest('.search-results-panel')) {
      panel.classList.remove('active');
    }
  });
}

// ═══════════════════ SMOOTH SCROLL TO SALAS ═══════════════════
function scrollToSalas() {
  const el = document.getElementById('salas');
  if (el) {
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
