// Array de productos
const products = [
    {
        image: './assets/GTAV.jpg',
        name: 'Grand Theft Auto V',
        price: 69.90,
        seller: 'PlayStation Store'
    },
    {
        image: './assets/GrandTheftAutoOnline.webp',
        name: 'Grand Theft Auto Online',
        price: 79.90,
        seller: 'Amazon'
    },
    {
        image: './assets/RedDeadOnline.webp',
        name: 'Red Dead Online',
        price: 59.90,
        seller:  'Epic Games'
    },
    {
        image: './assets/RedDeadRedemption.webp',
        name: 'Red Dead Redemption II',
        price: 69.90,
        seller: 'Amazon'
    },
    {
        image: './assets/LANoire.webp',
        name: 'L.A Noire',
        price: 19.90,
        seller: 'Steam'
    },
    {
        image: './assets/MaxPayne.webp',
        name: 'Max Payne 3',
        price: 19.90,
        seller:  'Xbox'
    },
    {
        image: './assets/Manhunt2.webp',
        name: 'Manhunt 2',
        price: 9.90,
        seller: 'Amazon'
    },
    {
        image: './assets/Bully.webp',
        name: 'Bully',
        price: 14.90,
        seller:'Google Play'
    },
    {
        image: './assets/RedDeadUndead.webp',
        name: 'Red Dead Redemption Undead',
        price: 69.90,
        seller: 'Xbox 360'
    },
    {
        image: './assets/TheWarriors.webp',
        name: 'The Warriors',
        price: 59.90,
        seller: 'Xbox 360'
    },
];

// Creación del encabezado, navegación y elementos iniciales
const header = document.createElement('header');
header.innerHTML += `
<!-- Icono de menú -->
    <img src="./assets/Menu.svg" alt="Icono Menu" class="menu">
    <!-- Navegación -->
    <nav class="nav-bar">
        <ul>
            <li class="links">
                <a href="#">Newswire</a>
            </li>
            <li class="links">
                <a href="#">Juegos</a>
            </li>
            <li class="links">
                <a href="#">Vídeos</a>
            </li>
            <li class="links">
                <a href="#">Descargas</a>
            </li>
            <li class="links share">
                <a href="#">Asistencia técnica</a>
            </li>
            <li class="links share">
                <a href="#">Social Club</a>
            </li>
            <li class="links share">
                <a href="#">Launcher</a>
            </li>
            <li class="links share">
                <a href="#">Store</a>
            </li>
        </ul>
    </nav>
    <!-- Logo de RockStar y usuario -->
    <img src="./assets/LogoRockStar.svg" alt="Logo RockStar" class='logo'>
    <img src="./assets/user.svg" alt="Logo User" class='user'>
    
    
`;
const body = document.querySelector('body');
body.insertBefore(header, body.firstChild);

// Referencia a la barra de navegación
const nav = document.querySelector('.nav-bar')


// Función para abrir y cerrar menu
const menu = document.querySelector('.menu');
const openMenu = () => {
    nav.classList.toggle('open');
};

menu.addEventListener('click', openMenu);

const closeMenu = () => {
    if (window.innerWidth > 560){
        nav.classList.remove('open')
    }
};

window.addEventListener('resize', closeMenu);


// Sección principal del héroe
const section = document.createElement('section');
section.classList.add('hero')
section.innerHTML = `
<!-- Contenedor de la imagen del Hero -->
    <div class="hero-img-container">
        <img src="./assets/Hero.avif" alt="Hero">
    </div>

<!-- Contenedor de la información del Hero -->
    <div class="hero-info-container">
        <p>Grand Theft Auto Online</p>
        <h1>Halloween en GTA <span>Online</span></h1>
        <button class="now ahora">VER AHORA</button>
    </div> 

`;
// Insertar la sección del Hero después del encabezado
body.insertBefore(section, header.nextSibling);



// Div que contendrá los productos
const divProductos = document.querySelector('.products');

// Función para renderizar los productos en el DOM
const renderProducts = (products) => {
    divProductos.innerHTML = '';

    for (const product of products) {
        divProductos.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="seller">${product.seller} </p>
                <p>${product.price}€</p>
            </div>
            <button class='now'>Añadir a carrito</button>
        </div>
        `
    }
};

// Renderizar los productos iniciales
renderProducts(products);

// Sección de filtros
const filterSection = document.querySelector('.filter');

// Div para agrupar la etiqueta y el select de "Filtrar por vendedor"
const sellerFilterDiv = document.createElement('div');

const sellerLabel = document.createElement('label');
sellerLabel.textContent = 'Filtrar por vendedor:';

const select = document.createElement('select');
select.name = 'vendedor';
select.id = 'vendedor'
select.classList.add('select');

const selectId = 'vendedor';
select.id = selectId;
sellerLabel.setAttribute('for', selectId)

// Obtener todos los vendedores únicos
const allSellers = [];

for (const product of products) {
    if (!allSellers.includes(product.seller)) {
        allSellers.push(product.seller);
    }
}

// Opciones del select para cada vendedor
select.innerHTML = "<option value='todas'>Todos</option>";

for (const seller of allSellers) {
    select.innerHTML += `<option value="${seller}">${seller}</option>`;
}

// Agregar la etiqueta y el select al div
sellerLabel.appendChild(select);
sellerFilterDiv.appendChild(sellerLabel); 
sellerFilterDiv.appendChild(select); 

filterSection.appendChild(sellerFilterDiv); 

// Etiqueta y input para filtrar por precio
const priceLabel = document.createElement('label');
priceLabel.textContent = 'Filtrar por precio:';


const filterInput = document.createElement('input');
filterInput.setAttribute('type', 'number');
filterInput.setAttribute('placeholder', 'Precio máximo');
filterInput.classList.add('filter-input');
filterInput.id = 'precio';

const filterId = 'precio';
filterId.id = filterId;
priceLabel.setAttribute('for', filterId)

// Agregar el input al div
priceLabel.appendChild(filterInput);

// Agregar la etiqueta y el input al filtro
filterSection.appendChild(priceLabel);

// Div para contener los botones
const buttonDiv = document.createElement('div');

// Botón para filtrar productos
const filterButton = document.createElement('button');
filterButton.textContent = 'Buscar';
filterButton.classList.add('filter-button', 'now');

// Agregar evento de escucha al botón de búsqueda
filterButton.addEventListener('click', () => {
    const selectedSeller = select.value;
    const filterNumber = parseFloat(filterInput.value);

    // Filtrar productos por vendedor y precio
    const filteredProducts = products.filter(product => {
        if (selectedSeller === 'todas') {
            return true; // Mostrar todos los productos si se selecciona "Todos" como vendedor
        } else {
            return product.seller === selectedSeller;
        }
    });

    const filteredProductsByPrice = filterNumber
        ? filteredProducts.filter(product => product.price <= filterNumber)
        : filteredProducts;

    // Renderizar productos filtrados
    renderProducts(filteredProductsByPrice);
});

// Agregar el botón de filtrar al div
buttonDiv.appendChild(filterButton);
filterSection.appendChild(buttonDiv);

// Botón para limpiar filtros
const clearFiltersButton = document.createElement('button');
clearFiltersButton.textContent = 'Limpiar Filtros';
clearFiltersButton.classList.add('clear-filters-button', 'now');

// Agregar evento de escucha al botón de limpiar filtros
clearFiltersButton.addEventListener('click', () => {
    select.value = 'todas'; // Restablece el select
    filterInput.value = ''; // Restablece el input
    renderProducts(products); // Muestra todos los productos nuevamente
});

// Agregar el botón de limpiar filtros al div
buttonDiv.appendChild(clearFiltersButton);

const footer = document.createElement('footer');

// Insertar el footer al final del documento
footer.innerHTML += `<nav class='footer-nav'>
<!-- Menú de enlaces en el footer -->
    <ul>
        <li>
            <a href="#">Contact</a>
        </li>
        <li>
            <a href="#">Empleo</a>
        </li>
        <li>
            <a href="#">Suscríbete</a>
        </li>
    </ul>
    <!-- Selector de idiomas -->
   <label for="idiomas">
        <span class='earth'>
            <select name="idiomas" id="idiomas" aria-label="Selecciona un idioma">
                <option value="espanol">Español</option>
                <option value="ingles">Inglés</option>
                <option value="portugues">Portugués</option>
                <option value="aleman">Alemán</option>
                <option value="frances">Francés</option>
                <option value="italiano">Italiano</option>
            </select>
        </span>
    </label> 
</nav>

<nav class='second-footer-nav'>
<!-- Enlaces adicionales en el footer -->
    <ul>
        <li>
            <a href="#">Corporación</a>
        </li>
        <li>
            <a href="#">Privacidad</a>
        </li>
        <li>
            <a href="#">Cookie Settings</a>
        </li>
        <li>
            <a href="#">POLÍTICA DE COOKIES-ROCKSTAR GAMES</a>
        </li>
        <li>
            <a href="#">Aviso Legal</a>
        </li>
        <li>
            <a href="#">No quiero que vendáis mis datos</a>
        </li>
    </ul>
<!-- Iconos de redes sociales -->
    <div class="social">
        <a href="#">
            <img src="./assets/twitch.svg" alt="twitch">
        </a>
        <a href="#">
            <img src="./assets/IG.svg" alt="instagram">
        </a>
        <a href="#">
            <img src="./assets/twitter.svg" alt="twitter">
        </a>
        <a href="#">
            <img src="./assets/YT.svg" alt="youtube">
        </a>
        <a href="#">
            <img src="./assets/facebook.svg" alt="facebook">
        </a>
    </div>
</nav>
<nav class="final-footer">
<!-- Enlaces y año en el footer -->
    <p>Rockstar Games</p>
    <ul>
        <li>
            <a href="#">New York</a>
        </li>
        <li>
            <a href="#">London</a>
        </li>
        <li>
            <a href="#">París</a>
        </li>
        <li>
            <a href="#">Bogotá</a>
        </li>
    </ul>
    <h3>MCMXCVIII</h3>
</nav>

`;
document.body.appendChild(footer)