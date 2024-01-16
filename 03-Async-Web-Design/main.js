import { searchWord } from './src/components/Input/Input';
import { footer } from './src/components/Footer/Footer';
import { divApp, header } from './src/components/Header/Header';
import { section, showGallery } from './src/components/Card/Card';
import './style.css';


// showGallery();

// divApp.appendChild(section);

// document.body.appendChild(divApp);


// divApp.appendChild(header);

// divApp.appendChild(footer);

// searchWord();

// const initializeApp = async () => {
//     // Agregar header al divApp
//     divApp.appendChild(header);
  
//     // Llenar la sección .gallery con imágenes
//     await showGallery();
  
//     // Agregar section al divApp
//     divApp.appendChild(section);
  
//     // Agregar footer al divApp
//     divApp.appendChild(footer);
  
//     // Agregar divApp al cuerpo del documento
//     document.body.appendChild(divApp);
  
//     // Ejecutar la función searchWord después de agregar todos los elementos al DOM
//     searchWord(section);
//   };
  
//   initializeApp();
const initializeApp = async () => {
  // Llenar la sección .gallery con imágenes
  await showGallery();

  // Agregar header, section y footer directamente al divApp
  divApp.appendChild(header);
  divApp.appendChild(section);
  divApp.appendChild(footer);

  // Agregar divApp al cuerpo del documento
  document.body.appendChild(divApp);

  // Ejecutar la función searchWord después de agregar todos los elementos al DOM
  searchWord(section);
};

initializeApp();