import { divApp } from '../Header/Header';
import './Card.css';

// Función para mostrar imágenes random al cargarse la página
export const section = document.querySelector('.gallery');

// Función para mostrar imágenes random al cargarse la página
export const showGallery = async () => {
    return new Promise(async (resolve) => {
        try {
            // Obtener imágenes aleatorias desde la API de Unsplash
            const response = await fetch("https://api.unsplash.com/photos/random?client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&count=30");
            const res = await response.json();

            // Crear elementos de imagen y contenedor
            const imageElements = [];
            for (const c of res) {
                const imageDiv = document.createElement('div')
                const img = document.createElement("img");
                // console.log(c);

                // Configurar la imagen y el contenedor
                img.classList.add('photo')
                img.src = c.urls.small;
                img.alt = c.alt_description;

                imageDiv.classList.add('imgContainer');
                imageDiv.appendChild(img);
                section.appendChild(imageDiv);
                imageElements.push(img);
            }
            
            // Función para inicializar Masonry después de que todas las imágenes estén cargadas
            function initializeMasonry() {
                const masonry = new Masonry('.gallery', {
                    itemSelector: '.imgContainer',
                    isFitWidth: true,
                    gutter: 0
                });
            }

            // Contar las imágenes que están cargadas
            let imagesLoaded = 0;
            imageElements.forEach(img => {
                img.addEventListener('load', () => {
                    imagesLoaded++;
                    if (imagesLoaded === imageElements.length) {
                        initializeMasonry(); // Inicializar Masonry cuando todas las imágenes estén cargadas
                        resolve();  // Resuelve la promesa después de cargar las imágenes
                    }
                });
            });
        } catch (error) {
            console.log(error);
            resolve();  
        }
    });
};

export default showGallery;