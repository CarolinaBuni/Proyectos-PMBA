// Importo la función homeContainer del módulo principal
import { homeContainer } from "../../../main";
// Importo el archivo CSS asociado al aside
import "./Aside.css";

// Defino la función aside$$ que crea y agrega el aside al DOM
export const aside$$ = () => {
    // Creación elemento aside
	const aside = document.createElement("aside");
    // Añado la clase "aside" al elemento aside
	aside.classList.add("aside");
    // Creación un elemento ul
	const asideUl = document.createElement("ul");
    // Añado la clase "asideUl" al elemento ul
	asideUl.classList.add("asideUl");
    // Añado contenido HTML al ul utilizando innerHTML
	asideUl.innerHTML = `
    <li>
        <a href="https://github.com/CarolinaBuni" target="_blank">
            <img class="link" src="/assets/logoGithub.png" alt="Logo GitHub">
        </a>
    </li>
    <li>
        <a href="https://www.instagram.com/carou_pipoca/" target="_blank">
            <img class="link"  src="./assets/logoInstagram.png" alt="Logo Instagram" target="_blank">
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/carolina-buni-de-jes%C3%BAs-48b23822b/" target="_blank">
            <img class="link"  src="/assets/logoLinkedin.png" alt="Logo LinkedIn">
        </a>
    </li>
    `;
    // Agrego el elemento ul como hijo del elemento aside
	aside.appendChild(asideUl);
     // Agrego el elemento aside como hijo del contenedor principal (homeContainer)
	homeContainer.appendChild(aside)
};

