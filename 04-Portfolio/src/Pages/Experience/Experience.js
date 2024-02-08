// Importo la función main$$ del módulo principal y los datos de experiencia
import { main$$ } from "../../../main";
import { experienceData } from "../../Data/dataExperience";
// Importo el archivo CSS asociado a la sección de Experiencia
import './Experience.css'

// Función para renderizar la sección de Experiencia
export const renderExperience = () => {
     // Creo un elemento section para la experiencia y establezco el id y la clase
     const sectionExperience = document.createElement('section');
     sectionExperience.setAttribute('id', 'experience');
     sectionExperience.classList.add('experience');
     // Agrego la sección de experiencia al contenedor principal
     main$$.appendChild(sectionExperience);
     // Establezco el contenido HTML para el título de experiencia
     sectionExperience.innerHTML = `
          <div class='experience-title'>
               <div class='divider'></div>
               <p>MY WORK EXPERIENCE</p>
               <div class='divider'></div>
          </div>
     `
     // Creo un contenedor para la experiencia y añado clase
     const experienceContainer = document.createElement('div');
     experienceContainer.classList.add('experience-container');
     // Iteramos sobre los datos de experiencia y creamos un elemento article para cada entrada
     for (const data of experienceData) {
          const article = document.createElement('article');
          article.innerHTML = `
               <p>${data.title}</p>
               <p>${data.startYear} - ${data.endYear}</p>
               <p>${data.points}</p>
          `
          // Agrego el artículo al contenedor de experiencia
          experienceContainer.appendChild(article);
           // Agrego el contenedor de experiencia a la sección de experiencia
          sectionExperience.appendChild(experienceContainer)
     }
};
