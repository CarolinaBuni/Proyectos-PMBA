// Importo la función homeContainer del módulo principal
import { homeContainer } from "../../../main";
// Importo el archivo CSS asociado a la sección "About"
import "./About.css";


// Función para agregar el perfil en la sección "About"
export const ponerProfile = () => {
  // Creo un elemento section y agrego clase
  const sectionProfile$$ = document.createElement("section");
  sectionProfile$$.classList.add("sectionHero");
  // Creo un elemento h1 para el título
  const h1SectionProfile$$ = document.createElement("h1");
  h1SectionProfile$$.textContent = "I AM CAROLINA";
  // Creo un elemento img para la imagen del hero
  const imgSectionProfile$$ = document.createElement("img");
  imgSectionProfile$$.classList.add("hero");
  imgSectionProfile$$.src = "/assets/hero.webp";
  imgSectionProfile$$.alt = "hero";

  // Agrego los elementos al section
  sectionProfile$$.appendChild(imgSectionProfile$$);
  sectionProfile$$.appendChild(h1SectionProfile$$);
  // Agrego el section al contenedor principal
  homeContainer.appendChild(sectionProfile$$);
};




