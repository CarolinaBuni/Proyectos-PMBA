// Creo los productos
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

// Creo la barra de navegación y creo el ul con sus li > a
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


// Recorrermos la lista de productos y se crea un div para cada uno

const pintarProductos = (productos) => {

    const divProductos = document.querySelector("#productos");

    divProductos.innerHTML = "";

    for (const producto of productos) {
        divProductos.innerHTML += `
            <div class="producto">
                <div class="image-container">
                    <img class="imagen" src="${producto.imagen}">
                </div>
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>${producto.seller}</p>
                <p>${producto.precio}€</p>
            </div>
        `
    }
}

pintarProductos(products);

//Opciones del filtro
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

// FILTROS
const botonFiltrar = document.querySelector("#filtrar");

const filtrar = () => {

    const select = document.querySelector("#sellers");
    const price = document.querySelector("#price");

    const filteredElements = products.filter((prenda) => (prenda.seller === select.value || select.value === "todas") && (prenda.precio <= price.valueAsNumber || !price.valueAsNumber));

    pintarProductos(filteredElements);

}

botonFiltrar.addEventListener("click", filtrar);


const botonLimpiar = document.querySelector("#limpiar");

const limpiarFiltros = () => {
    const select = document.querySelector("#sellers");
    select.value = "todas";

    const price = document.querySelector("#price");
    price.value = "";

    pintarProductos(products);
}

botonLimpiar.addEventListener("click", limpiarFiltros);


// FOOTER
const footer$$ = document.querySelector('footer');

// footer$$.innerHTML += `<div class="divNewsletter">
// <h3>Suscríbete a nuestra newsletter</h3>
// <form id="newsletterForm">
//     <input type="email" id="emailInput" class="inputNewsletter" placeholder="Correo electrónico" required>
//     <div class="containerCheckbox">
//         <input type="checkbox" id="aceptoCheckbox" required>
//         <label for="aceptoCheckbox">Acepto recibir las comunicaciones comerciales, ofertas y las últimas novedades de HANNUN.</label>
//     </div>
//     <input type="submit" class="buttonSubmit" value="ACEPTAR">
// </form>
// </div>`

// document.addEventListener("DOMContentLoaded", function () {
//     const newsletterForm = document.getElementById("newsletterForm");

//     newsletterForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Evita que el formulario se envíe automáticamente

//         // Validación adicional (si es necesario)
//         const emailInput = document.getElementById("emailInput");
//         const aceptoCheckbox = document.getElementById("aceptoCheckbox");

//         if (!emailInput.validity.valid) {
//             alert("Por favor, ingresa una dirección de correo electrónico válida.");
//         } else if (!aceptoCheckbox.checked) {
//             alert("Debes aceptar recibir las comunicaciones comerciales antes de enviar el formulario.");
//         } else {
//             // Aquí puedes enviar el formulario, por ejemplo, mediante una solicitud AJAX
//             // o realizar cualquier otra acción que necesites.
//             alert("Formulario enviado con éxito.");
//             newsletterForm.reset(); // Limpia el formulario después del envío
//         }
//     });
// });


// Caja donde se pone el correo electrónico
// const inputNewsletter = document.createElement('input');
// inputNewsletter.classList.add('inputNewsletter')
// inputNewsletter.setAttribute('placeholder', '   Correo electrónico'); // Aquí defines el texto del placeholder

// // Botón de enviar Newsletter
// const submitButton = document.createElement('input');
// submitButton.setAttribute('type', 'submit');

// submitButton.classList.add('buttonSubmit');
// submitButton.value = "ACEPTAR"


// Título Newsletter
// const h3 = document.createElement('h3');
// h3.innerText = "Suscríbete a nuestra newsletter"

// const divFooter = document.createElement('div');
// divFooter.classList.add('divNewsletter')
// divFooter.appendChild(inputNewsletter);
// divFooter.appendChild(submitButton);

// div para checkbox y label

// const checkboxContainer = document.createElement('div');
// checkboxContainer.classList.add('containerCheckbox');

// const checkboxInput = document.createElement('input');
// checkboxInput.setAttribute('type', 'checkbox');

// const checkboxLabel = document.createElement('label');
// checkboxLabel.innerHTML += `Acepto recibir las comunicaciones comerciales, ofertas y las últimas novedades de HANNUN.`;




// footer$$.append(h3);
// footer$$.appendChild(divFooter);

// footer$$.appendChild(checkboxContainer);
// checkboxContainer.appendChild(checkboxInput);
// checkboxContainer.appendChild(checkboxLabel);






