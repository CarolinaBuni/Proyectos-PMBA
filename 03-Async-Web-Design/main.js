
import { searchWord } from './src/components/Input/Input';
import { footer } from './src/pages/Footer/Footer';
import { divApp, header } from './src/pages/Header/Header';
import './style.css';

// Función para mostrar imágenes random al cargarse la página
export const showGallery = async () => {
    const section = document.querySelector('.gallery');
    try {
        const response = await fetch("https://api.unsplash.com/photos/random?client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&count=30");
        const res = await response.json();
        const imageElements = [];
        for (const c of res) {
            const imageDiv = document.createElement('div')
            const img = document.createElement("img");

            img.classList.add('photo')
            img.src = c.urls.small;
            imageDiv.classList.add('imgContainer')
            imageDiv.appendChild(img)
            section.appendChild(imageDiv)
            imageElements.push(img); // Agregar las imágenes al array
        }
         // Función para inicializar Masonry después de que todas las imágenes estén cargadas
         function initializeMasonry() {
            const masonry = new Masonry('.gallery', {
                itemSelector: '.imgContainer',
                columnWidth: '.imgContainer',
                gutter: 15
            });
        }
        // Contar las imágenes que están cargadas
        let imagesLoaded = 0;
        imageElements.forEach(img => {
            img.addEventListener('load', () => {
                imagesLoaded++;
                if (imagesLoaded === imageElements.length) {
                    initializeMasonry(); // Inicializar Masonry cuando todas las imágenes estén cargadas
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
};

document.body.appendChild(footer)



showGallery()


divApp.appendChild(header);

searchWord();