// ╔══════════════════════════════════════════════════════╗
// ║  BIBLIOTECA VIRTUAL DEL SOCONUSCO — DATA & ENGINE  ║
// ╚══════════════════════════════════════════════════════╝

const LIBRARY = {
  anarquismo: {
    name: "Anarquismo",
    icon: "&#9876;", // ⚔
    authors: [
      {
        name: "Mijaíl Bakunin",
        years: "1814–1876",
        books: [
          { title: "Dios y el Estado", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20Dios%20y%20el%20Estado/Bakunin%2C%20Mijail%20-%20Dios%20y%20el%20Estado.doc" },
          { title: "El Patriotismo", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20El%20Patriotismo/Bakunin%2C%20Mijail%20-%20El%20Patriotismo.doc" },
          { title: "El principio del estado", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20El%20principio%20del%20estado/Bakunin%2C%20Mijail%20-%20El%20principio%20del%20estado.pdf" },
          { title: "Federalismo, Socialismo Y Antiteologismo", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20Federalismo%2C%20Socialismo%20Y%20Antiteologismo/Bakunin%2C%20Mijail%20-%20Federalismo%2C%20Socialismo%20Y%20Antiteologismo.doc" },
          { title: "La asociación roja", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20La%20asociacion%20roja/Bakunin%2C%20Mijail%20-%20La%20asociacion%20roja.pdf" },
          { title: "La mujer el matrimonio y la familia", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20La%20mujer%20el%20matrimonio%20y%20la%20familia/Bakunin%2C%20Mijail%20-%20La%20mujer%20el%20matrimonio%20y%20la%20familia.pdf" },
          { title: "La política del consejo", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20La%20politica%20del%20consejo/Bakunin%2C%20Mijail%20-%20La%20politica%20del%20consejo.pdf" },
          { title: "Patria y nacionalidad", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20Patria%20y%20nacionalidad/Bakunin%2C%20Mijail%20-%20Patria%20y%20nacionalidad.pdf" },
          { title: "Socialismo sin Estado Anarquismo", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Bakunin%2C%20Mijail/Bakunin%2C%20Mijail%20-%20Socialismo%20sin%20Estado%20Anarquismo/Bakunin%2C%20Mijail%20-%20Socialismo%20sin%20Estado%20Anarquismo.pdf" }
        ]
      },
      {
        name: "Noam Chomsky",
        years: "1928–",
        books: [
          { title: "Apuntes Sobre Anarquismo", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20Apuntes%20Sobre%20Anarquismo/Chomsky%2C%20Noam%20-%20Apuntes%20Sobre%20Anarquismo.pdf" },
          { title: "Conversaciones Libertarias", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20Conversaciones%20Libertarias/Chomsky%2C%20Noam%20-%20Conversaciones%20Libertarias.doc" },
          { title: "Democracia Y Mercados", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20Democracia%20Y%20Mercados/Chomsky%2C%20Noam%20-%20Democracia%20Y%20Mercados.doc" },
          { title: "El Control De Los Medios de Comunicación", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20El%20Control%20De%20Los%20Medios%20de%20Comunicacion/Chomsky%2C%20Noam%20-%20El%20Control%20De%20Los%20Medios%20de%20Comunicacion.pdf" },
          { title: "La Actualidad del Anarquismo", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20La%20Actualidad%20del%20Anarquismo/Chomsky%2C%20Noam%20-%20La%20Actualidad%20del%20Anarquismo.pdf" },
          { title: "La Responsabilidad De Los Intelectuales", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20La%20Responsabilidad%20De%20Los%20Intelectuales/Chomsky%2C%20Noam%20-%20La%20Responsabilidad%20De%20Los%20Intelectuales.pdf" },
          { title: "Sobre El Anarquismo", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20Sobre%20El%20Anarquismo/Chomsky%2C%20Noam%20-%20Sobre%20El%20Anarquismo.pdf" },
          { title: "El Control De Nuestras Vidas", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Chomsky%2C%20Noam/Chomsky%2C%20Noam%20-%20El%20Control%20De%20Nuestras%20Vidas/Chomsky%2C%20Noam%20-%20El%20Control%20De%20Nuestras%20Vidas.pdf" }
        ]
      },
      {
        name: "Emma Goldman",
        years: "1869–1940",
        books: [
          { title: "Antología de Ensayos", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Goldman%2C%20Emma/Emma%20Goldman%20-%20Antolog%C3%ADa%20de%20Ensayos/Emma%20Goldman%20-%20Antolog%C3%ADa%20de%20Ensayos.pdf" },
          { title: "La mujer más peligrosa del mundo", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Goldman%2C%20Emma/Emma%20Goldman%20-%20La%20mujer%20m%C3%A1s%20peligrosa%20del%20mundo.%20Textos%20Feministas/Emma%20Goldman%20-%20La%20mujer%20m%C3%A1s%20peligrosa%20del%20mundo.%20Textos%20Feministas.pdf" },
          { title: "La palabra como arma", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Goldman%2C%20Emma/Emma%20Goldman%20-%20La%20palabra%20como%20arma/Emma%20Goldman%20-%20La%20palabra%20como%20arma.pdf" },
          { title: "Viviendo mi vida", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Goldman%2C%20Emma/Emma%20Goldman%20-%20Viviendo%20mi%20vida/Emma%20Goldman%20-%20Viviendo%20mi%20vida.pdf" },
          { title: "Qué Significa Verdaderamente el Anarquismo", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Goldman%2C%20Emma/Goldman%2C%20Emma%20-%20Que%20Significa%20Verdaderamente%20el%20Anarquismo/Goldman%2C%20Emma%20-%20Que%20Significa%20Verdaderamente%20el%20Anarquismo.doc" }
        ]
      },
      {
        name: "Peter Kropotkin",
        years: "1842–1921",
        books: [
          { title: "Cartas a Lenin", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Kropotkin%2C%20Peter/Kropotkin%2C%20Peter%20-%20Cartas%20a%20Lenin/Kropotkin%2C%20Peter%20-%20Cartas%20a%20Lenin.doc" },
          { title: "El Apoyo Mutuo", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Kropotkin%2C%20Peter/Kropotkin%2C%20Peter%20-%20El%20Apoyo%20Mutuo/Kropotkin%2C%20Peter%20-%20El%20Apoyo%20Mutuo.doc" },
          { title: "El Estado", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Kropotkin%2C%20Peter/Kropotkin%2C%20Peter%20-%20El%20Estado/Kropotkin%2C%20Peter%20-%20El%20Estado.doc" },
          { title: "La Conquista Del Pan", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Kropotkin%2C%20Peter/Kropotkin%2C%20Peter%20-%20La%20Conquista%20Del%20Pan/Kropotkin%2C%20Peter%20-%20La%20Conquista%20Del%20Pan.doc" },
          { title: "La moral Anarquista", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Kropotkin%2C%20Peter/Kropotkin%2C%20Peter%20-%20La%20moral%20Anarquista/Kropotkin%2C%20Peter%20-%20La%20moral%20Anarquista.doc" },
          { title: "Las Prisiones", year: "DOC", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Kropotkin%2C%20Peter/Kropotkin%2C%20Peter%20-%20Las%20Prisiones/Kropotkin%2C%20Peter%20-%20Las%20Prisiones.doc" }
        ]
      },
      {
        name: "Errico Malatesta",
        years: "1853–1932",
        books: [
          { title: "Amor y anarquía", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Malatesta%2C%20Errico_/Malatesta%2C%20Errico%20-%20Amor%20y%20anarqu%C3%ADa.pdf" },
          { title: "Entre campesinos", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Malatesta%2C%20Errico_/Entre%20campesinos.pdf" }
        ]
      },
      {
        name: "Pierre J. Proudhon",
        years: "1809–1865",
        books: [
          { title: "El principio federativo", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Proudhon%2C%20Pierre%20J_/proudhon-el-principio-federativo.pdf" },
          { title: "Qué es la propiedad", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Proudhon%2C%20Pierre%20J_/que-es-la-propiedad%20PROUDHON.pdf" }
        ]
      },
      {
        name: "Rudolf Rocker",
        years: "1873–1958",
        books: [
          { title: "Anarcosindicalismo, teoría y práctica", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Rocker%2C%20Rudolf/Anarcosindicalismo%2C%20teor%C3%ADa%20y%20pr%C3%A1ctica.pdf" },
          { title: "Anarquismo y organización", year: "PDF", url: "https://archive.org/download/anarquismo-en-pdf/ANARQUISMO/Rocker%2C%20Rudolf/Anarquismo%20y%20organizaci%C3%B3n.pdf" }
        ]
      }
    ]
  },
  antropologia: {
    name: "Antropología",
    icon: "&#9763;", // ☣
    authors: [
      {
        name: "Eduardo Kohn",
        years: "1968–",
        books: [
          { title: "How Forests Think", year: "PDF", url: "#" }
        ]
      }
    ]
  },
  feminismo: {
    name: "Feminismo",
    icon: "&#9792;", // ♀
    authors: [
      {
        name: "Simone de Beauvoir",
        years: "1908–1986",
        books: [
          { title: "El Segundo Sexo", year: "PDF", url: "#" },
          { title: "Memorias de una joven formal", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Silvia Federici",
        years: "1942–",
        books: [
          { title: "Calibán y la Bruja", year: "PDF", url: "#" },
          { title: "El Patriarcado del Salario", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Angela Davis",
        years: "1944–",
        books: [
          { title: "Mujeres, Raza y Clase", year: "PDF", url: "#" },
          { title: "Autobiografía", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Bell Hooks",
        years: "1952–2021",
        books: [
          { title: "El Feminismo es para Todo el Mundo", year: "PDF", url: "#" },
          { title: "Teoría Feminista: De los márgenes al centro", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Shulamith Firestone",
        years: "1945–2012",
        books: [
          { title: "La dialéctica del sexo", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Alexandra Kollontai",
        years: "1872–1952",
        books: [
          { title: "La mujer en el desarrollo social", year: "PDF", url: "#" }
        ]
      }
    ]
  },
  filosofia: {
    name: "Filosofía",
    icon: "&#8734;", // ∞
    authors: [
      {
        name: "Michel Foucault",
        years: "1926–1984",
        books: [
          { title: "Vigilar y Castigar", year: "PDF", url: "#" },
          { title: "Historia de la Sexualidad", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Friedrich Nietzsche",
        years: "1844–1900",
        books: [
          { title: "Así Habló Zaratustra", year: "PDF", url: "#" },
          { title: "Más Allá del Bien y del Mal", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Gilles Deleuze",
        years: "1925–1995",
        books: [
          { title: "Mil Mesetas", year: "PDF", url: "#" },
          { title: "El Anti-Edipo", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Slavoj Zizek",
        years: "1949–",
        books: [
          { title: "El Sublime Objeto de la Ideología", year: "PDF", url: "#" },
          { title: "Bienvenidos al desierto de lo real", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Hannah Arendt",
        years: "1906–1975",
        books: [
          { title: "Los orígenes del totalitarismo", year: "PDF", url: "#" },
          { title: "La condición humana", year: "PDF", url: "#" }
        ]
      }
    ]
  },
  historia: {
    name: "Historia",
    icon: "&#9200;", // ⏰
    authors: [
      {
        name: "David Harvey",
        years: "1935–",
        books: [
          { title: "Breve historia del neoliberalismo", year: "PDF", url: "#" },
          { title: "Los límites del capitalismo", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Herbert Marcuse",
        years: "1898–1979",
        books: [
          { title: "El hombre unidimensional", year: "PDF", url: "#" },
          { title: "Eros y civilización", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Neil Faulkner",
        years: "1958–2022",
        books: [
          { title: "De los neandertales a los neoliberales", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Robert Paxton",
        years: "1932–",
        books: [
          { title: "Anatomía del fascismo", year: "PDF", url: "#" }
        ]
      }
    ]
  },
  marxismo: {
    name: "Marxismo",
    icon: "&#9733;", // ★
    authors: [
      {
        name: "Karl Marx",
        years: "1818–1883",
        books: [
          { title: "El Capital — Tomo I", year: "PDF", url: "#" },
          { title: "Manifiesto del Partido Comunista", year: "PDF", url: "#" },
          { title: "Manuscritos Económico-Filosóficos", year: "PDF", url: "#" }
        ]
      },
      {
        name: "V.I. Lenin",
        years: "1870–1924",
        books: [
          { title: "El Estado y la Revolución", year: "PDF", url: "#" },
          { title: "Imperialismo, Fase Superior del Capitalismo", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Rosa Luxemburgo",
        years: "1871–1919",
        books: [
          { title: "Reforma o Revolución", year: "PDF", url: "#" },
          { title: "La Acumulación del Capital", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Antonio Gramsci",
        years: "1891–1937",
        books: [
          { title: "Cuadernos de la Cárcel", year: "PDF", url: "#" },
          { title: "Cartas desde la Cárcel", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Leon Trotsky",
        years: "1879–1940",
        books: [
          { title: "La Revolución Traicionada", year: "PDF", url: "#" },
          { title: "Historia de la Revolución Rusa", year: "PDF", url: "#" }
        ]
      },
      {
        name: "Clara Zetkin",
        years: "1857–1933",
        books: [
          { title: "La cuestión femenina y la lucha de clases", year: "PDF", url: "#" }
        ]
      }
    ]
  }
};

// ═══════════════════ STATE ═══════════════════
let currentView = 'home';
let currentCategory = null;
let currentAuthor = null;

// ═══════════════════ DOM REFS ═══════════════════
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ═══════════════════ INIT ═══════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  initSearch();
  initNav();
  initStatusBar();
  initClock();
  initDraggable();
  createPixelStars();
});

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

  // Close mobile menu on link click
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
    <span style="margin-left:auto; color: var(--cyan);">v1.0.0</span>
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

// ═══════════════════ DRAGGABLE WINDOWS ═══════════════════
function initDraggable() {
  $$('.draggable-popup').forEach(popup => {
    const titlebar = popup.querySelector('.win-titlebar');
    let isDragging = false;
    let startX, startY, initialX, initialY;

    titlebar.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialX = popup.offsetLeft;
      initialY = popup.offsetTop;
      popup.style.zIndex = 10001; // Bring to front
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      popup.style.left = initialX + dx + 'px';
      popup.style.top = initialY + dy + 'px';
      // Disable bottom/right constraints for absolute positioning
      popup.style.right = 'auto';
      popup.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      popup.style.zIndex = popup.id === 'winamp-player' ? 9000 : 10000;
    });
  });
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
        <img class="cat-bg-img" src="cat_${key}.png" alt="">
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
  const container = $('#authors-view');
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
      <div class="author-meta">${author.years} // ${author.books.length} texto${author.books.length > 1 ? 's' : ''}</div>
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
  $('#books-author-meta').textContent = `${author.years} // ${cat.name}`;

  list.innerHTML = '';
  author.books.forEach(book => {
    const item = document.createElement('div');
    item.className = 'book-item';
    item.innerHTML = `
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-year">${book.year}</div>
      </div>
      <a href="${book.url}" target="_blank" rel="noopener" class="book-download">
        [&darr;] Descargar
      </a>
    `;
    list.appendChild(item);
  });
}

// ═══════════════════ VIEW NAVIGATION ═══════════════════
function navigateTo(view, catKey = null, authorIdx = null) {
  // Loading bar effect
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

  // Hide all views
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

  // Close search
  $('.search-results-panel').classList.remove('active');
  $('.search-input').value = '';
}

// ═══════════════════ SEARCH ═══════════════════
function initSearch() {
  const input = $('.search-input');
  const panel = $('.search-results-panel');

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length < 2) {
      panel.classList.remove('active');
      return;
    }

    const results = [];

    Object.entries(LIBRARY).forEach(([catKey, cat]) => {
      cat.authors.forEach((author, aIdx) => {
        // Match author
        if (author.name.toLowerCase().includes(q)) {
          results.push({
            type: 'Autor',
            name: author.name,
            sub: cat.name,
            action: () => navigateTo('books', catKey, aIdx)
          });
        }
        // Match books
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
          <div class="search-result-item" onclick="this.dataset.idx">
            <div class="sr-type">${r.type}</div>
            <div class="sr-name">${r.name}</div>
            <div class="sr-sub">${r.sub}</div>
          </div>
        `).join('')}
      </div>
    `;

    // Attach click handlers
    panel.querySelectorAll('.search-result-item').forEach((el, i) => {
      if (results[i]) el.onclick = results[i].action;
    });

    panel.classList.add('active');
  });

  // Close on outside click
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
