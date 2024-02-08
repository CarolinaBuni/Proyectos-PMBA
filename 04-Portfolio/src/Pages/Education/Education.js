// Importo la función main$$ del módulo principal y los datos de educación
import { main$$ } from '../../../main';
import { educationData } from '../../Data/educationData';
// Importo el archivo CSS asociado a la sección de Educación
import './Education.css';
// Función para renderizar la sección de Educación
export const renderEducation = () => {
     // Creo una lista para almacenar los datos de educación
     const lista = [];
     // Creo un elemento section
     const sectionData = document.createElement('section');
     // Creo un div para el título de educación y le añado un clase
     const educationTitle = document.createElement('div');
     educationTitle.classList.add('education-title');
     // Creo un div para contener los estudios y añado clase
     const studiesContainer = document.createElement('div');
     studiesContainer.classList.add('study-container')
     // Establecemos el contenido HTML del título de educación
     educationTitle.innerHTML = `
          <div class='divider'></div>
          <p>MY EDUCATION</p>
          <div class='divider'></div>
     `

     sectionData.setAttribute('id', 'education');
     sectionData.classList.add('education');
     sectionData.appendChild(educationTitle);
     // Recorremos los datos de educación y los agregamos a la lista vacía
     for(let i = 0; i < educationData.length; i++){
          const education = educationData[i];
          lista.push(education);
     }
     for (const element of lista) {
          const article = document.createElement('article');
          article.innerHTML = `
          <h3>${element.title}</h3>
          <p>${element.location}</p>
          <p>${element.year}</p>
          `
           // Agrego el artículo al contenedor de estudios y luego a la sección de educación
          studiesContainer.appendChild(article);
          sectionData.appendChild(studiesContainer);
     }
     // Agrego la sección de educación al contenedor principal
     main$$.appendChild(sectionData)
}

