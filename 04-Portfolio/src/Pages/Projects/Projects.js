// Importo la función main$$ del módulo principal y los datos de proyectos
import { main$$ } from "../../../main";
import { PROJECTS } from "../../Data/DataProjects";
// Importo el archivo CSS asociado a la sección de Proyectos
import "./Projects.css";
// Función para renderizar la sección de Proyectos
export const renderProjects = () => {
    // Creo un elemento section para los proyectos y añado id y clase
	const sectionProjects = document.createElement("section");
	sectionProjects.setAttribute('id', 'projects');
    sectionProjects.classList.add('projects')
    // Establecemos el contenido HTML para el título de proyectos
    sectionProjects.innerHTML = `
            <div class='projects-title'>
                <div class='divider'></div>
                <p>MY PROJECTS</p>
                <div class='divider'></div>
            </div>
        `
    // Creo un elemento ul para la lista de proyectos
	const projectsUl = document.createElement("ul");
    // Iteramos sobre los datos de proyectos y creamos un elemento li para cada proyecto
    for (const project of PROJECTS) {
        const newLi = document.createElement("li");
        // Establecemos el contenido HTML para cada proyecto
        newLi.innerHTML += `
                    <img src="${project.image}" alt="${project.title}"/>
                    <div class="content">
                        <h2>${project.title}</h2>
                        <p>${project.tech.join(" - ")}</p>

                            <a href="${project.link}" target='_blank'>
                                <img src="/assets/enlace.png" alt="icono enlace"/>
                            </a>
                            <a href="${project.github}" target='_blank'>
                                <img src="/assets/iconoGitHub.svg" alt="icono GitHub"/>
                            </a>
                    </div>
        `;
        // Agrego el elemento li a la lista de proyectos
        projectsUl.appendChild(newLi);
    }

	
    // Agrego la lista de proyectos a la sección de proyectos
    sectionProjects.appendChild(projectsUl);
    // Agrego la sección de proyectos al contenedor principal
    main$$.appendChild(sectionProjects)
};
