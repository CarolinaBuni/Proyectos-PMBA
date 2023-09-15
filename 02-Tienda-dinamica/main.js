// Datos de productos
const products = [
    {
        nombre: 'Espejo Iriel',
        imagen: "../assets/EspejoIriel.webp",
        precio: 289,
        seller: "Hannun",
        descripcion: "Espejo ventana"
    },
    {
        nombre: 'Mesita noche Hairpin',
        imagen: "/assets/MesitaHairpin.webp",
        precio: 119.90,
        seller: "Zara Home",
        descripcion: "Madera maciza y patas hairpin de acero"
    },
    {
        nombre: "Espejo Spieël",
        imagen: "/assets/EspejoSpieël.webp",
        precio: 289,
        seller: "Amazon",
        descripcion: "Espero pared de madera"
    },
    {
        nombre: "Jarrón Amaral",
        imagen: "/assets/JarrónAmaral.webp",
        precio: 29,
        seller: "Maisons du Monde",
        descripcion: "Cerámica torneada a mano 10, 15 y 20 cm"
    },
    {
        nombre: "Jarrón Baris",
        imagen: "/assets/JarrónBaris.webp",
        precio: 35.90,
        seller: "Ikea",
        descripcion: "Vidrio reciclado 23 y 33 cm"
    },
    {
        nombre: "Mesita de noche con cajones Marnie",
        imagen: "/assets/MesitaMarnie.webp",
        precio: 87.90,
        seller: "Hannun",
        descripcion: "Cajones con malla de rafia natural, 67 cm alto"
    },
    {
        nombre: "Jarrón Xandru",
        imagen: "/assets/JarrónXandru.webp",
        precio: 15,
        seller: "Hannun",
        descripcion: "Cerámica torneada a mano 12 x 21 cm"
    },
    {
        nombre: "Macetero Nico",
        imagen: "/assets/MaceteroNico.webp",
        precio: 35,
        seller: "Ikea",
        descripcion: "Madera de pino recuperada 25 x 22 x 25 cm"
    },
    {
        nombre: "Vela Cottage",
        imagen: "/assets/VelaCottage.webp",
        precio: 15,
        seller: "Zara Home",
        descripcion: "Cera de soja vegana 55, 95 y 435 gr"
    },
    {
        nombre: "Jarrón Enol",
        imagen: "/assets/JarrónEnol.webp",
        precio: 50,
        seller: "Leroy Merlin",
        descripcion: "Cerámica torneada a mano 12 x 15 cm"
    },
    {
        nombre: "Vela Mint & Lemongrass",
        imagen: "/assets/VelaMint&Lemongrass.webp",
        precio: 15,
        seller: "Leroy Merlin",
        descripcion: "Cera de soja vegana 120 y 225 gr"
    },
    {
        nombre: "Macetero Bohan",
        imagen: "/assets/MaceteroBohan.webp",
        precio: 65,
        seller: "Hannun",
        descripcion: "Madera de abeto sostenible 56 x 50 x 20 cm"
    }
];

// Crear la barra de navegación y enlaces
const nav = document.querySelector("nav");

nav.innerHTML += `
    <ul class="linkList">
    <li class="link">
        <a href="#">Home</a>
    </li>
    <li class="link">
        <a href="#">About</a>
    </li>
    <li class="link">
        <a href="#">Contact</a>
    </li>
    <li class="link">
        <a href="#">Support</a>
    </li>
    </ul>
`
// Manejar el menú hamburguesa en pantalla móvil
const menuHamburguesa = document.querySelector(".hamburguesa");
const abrirMenu = () => {
    nav.classList.toggle("abierto");
}
menuHamburguesa.addEventListener("click", abrirMenu);

const cerrarMenu = () => {
    if (window.innerWidth > 560) {
        nav.classList.remove("abierto");
    }
}
window.addEventListener("resize", cerrarMenu);


// Función para pintar productos en la página
const pintarProductos = (productos) => {

    const divProductos = document.querySelector("#productos");

    divProductos.innerHTML = "";

    for (const producto of productos) {
        divProductos.innerHTML += `
            <div class="producto">
                <div class="image-container">
                    <img class="imagen" src="${producto.imagen}">
                </div>
                <h3><span class="producto-nombre">${producto.nombre}</span><span>&#x2661;</span></h3>
                <p>${producto.descripcion}</p>
                <p>${producto.seller}</p>
                <p>${producto.precio}€</p>
            </div>
        `
    }
}


// Inicializar la página con todos los productos
pintarProductos(products);

// Llenar el select con opciones de filtro por vendedor
const fillSelect = () => {
    const select = document.querySelector("#sellers");
    const allSellers = [];

    for (const product of products) {
        if (!allSellers.includes(product.seller)) {
            allSellers.push(product.seller);
        }
    }

    select.innerHTML = "<option value='todas'>Todos</option>"

    for (const seller of allSellers) {
        select.innerHTML += `
        <option value="${seller}">${seller}</option>`
    }
}
fillSelect();

// Función para filtrar productos por vendedor y precio
const botonFiltrar = document.querySelector("#filtrar");
const filtrar = () => {

    const select = document.querySelector("#sellers");
    const price = document.querySelector("#price");

    const filteredElements = products.filter((prenda) => (prenda.seller === select.value || select.value === "todas") && (prenda.precio <= price.valueAsNumber || !price.valueAsNumber));
    // Mostrar todos los productos filtrados
    pintarProductos(filteredElements);

}
botonFiltrar.addEventListener("click", filtrar);

// Limpiar los filtros y mostrar todos los productos
const botonLimpiar = document.querySelector("#limpiar");
const limpiarFiltros = () => {
    const select = document.querySelector("#sellers");
    select.value = "todas";

    const price = document.querySelector("#price");
    price.value = "";

    pintarProductos(products);
}
botonLimpiar.addEventListener("click", limpiarFiltros);

// Crear el formulario de suscripción a la newsletter en el pie de página
const footer$$ = document.querySelector('footer');
footer$$.innerHTML += `<form id="newsletterForm">
<input type="email" id="emailInput" class="inputNewsletter" placeholder="Correo electrónico" required>
<input type="submit" class="buttonSubmit" value="ACEPTAR">
<div class="containerCheckbox">
    <input type="checkbox" id="aceptoCheckbox" required>
    <label for="aceptoCheckbox">Acepto recibir las comunicaciones comerciales, ofertas y las últimas novedades de HANNUN.</label>
</div>
</form>`







