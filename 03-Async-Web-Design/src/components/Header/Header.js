export const divApp = document.querySelector("#app");
export const header = document.createElement("header");

import showGallery, { section } from "../Card/Card";
import "./Header.css";
// Agregar contenido al Header
header.innerHTML += `
    <div class="header-links">
        <img class="logo" src="/LogoPinterest.svg" alt="Logo Pinterest">
        <p id='inicio'>Inicio</p>
        <p>Explorar</p>
        <p>Crear</p>
    </div>
    <input type="search" name="search" id="buscar" placeholder="Buscar">
    <div class="header-icons">
        <img src="/alert-icon.svg" alt="Alerts">
        <img src="/messages-icon.svg" alt="Messages">
        <img class="profile" src="https://i.pinimg.com/75x75_RS/50/01/2b/50012b40b879e0d913eb7f36af8d1fb8.jpg" alt="Profile">
        <img src="arrow-icon.svg" alt="Arrow">
    </div>
    
`;

export const refreshGallery = () => {
    const refreshButton = document.getElementById("inicio");
    console.log(refreshButton);
    refreshButton.addEventListener("click", () => {
        section.innerHTML = "";
        showGallery(section);
    });
};


