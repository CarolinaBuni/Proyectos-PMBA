import { showGallery } from "../Card/Card";
import "./Input.css";

// Función para buscar fotos por palabra introducida en el input
export const searchWord = async (section) => {
     // Obtener el elemento del input para buscar
    const inputHTML = document.querySelector("#buscar");

   // Declarar variables para el manejo de Masonry y la palabra de búsqueda
    let masonry;
    let word = "";

  // Escuchar el evento 'keyup' en el input
    inputHTML.addEventListener("keyup", async (e) => {
    try {
        // Verificar si la tecla presionada es 'Enter'
        if (e.key === "Enter") {
        word = e.target.value;

        // Si la palabra está vacía, mostrar la galería predeterminada y salir
        if (word === "") {
            await showGallery(section);
            return;
        }
        } else {
        // Si la tecla no es 'Enter', salir
        return;
        }
       // Inicializar un array para almacenar todos los resultados de la búsqueda
        let allResults = [];

      // Hacer peticiones a la API para obtener resultados de búsqueda en varias páginas
        for (let page = 1; page <= 3; page++) {
        const newImages = await fetch(
            `https://api.unsplash.com/search/photos?query=${word}&client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&per_page=10&page=${page}`
        );
        const element = await newImages.json();
        allResults = allResults.concat(element.results);
        console.log(newImages);
        }
      // Verifica que section esté definido antes de manipularlo
        if (!section) {
        console.error("La sección no está definida.");
        return;
        }
      // Limpiar el contenido actual de la sección
        section.innerHTML = "";

      // Crear elementos de imagen y contenedor para cada resultado
        await Promise.all(
        allResults.map(async (c) => {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("imgContainer");

            const img = new Image();
            img.classList.add("photo");
            img.src = c.urls.small;
            // Esperar a que la imagen se cargue antes de agregarla al contenedor
            await new Promise((resolve) => (img.onload = resolve));

            // Agregar la imagen al contenedor y el contenedor a la sección
            imgContainer.appendChild(img);
            section.appendChild(imgContainer);
        })
        );

      // Inicializar Masonry después de que todas las imágenes estén cargadas
        masonry = new Masonry(".gallery", {
        itemSelector: ".imgContainer",
        ifFitWidth: true,
        gutter: 0,
        });
    } catch (error) {
        console.log(error);
    }
    });
};
