import { showGallery } from "../../../main";
import './Input.css'

// export const searchWord = () => {
//     const inputHTML = document.querySelector('#buscar');
//     const section = document.querySelector('.gallery')
//     let masonry;

//     inputHTML.addEventListener('keyup', async (e) => {
//         try {
//             const word = e.target.value;
//                 if(word === ''){
//                     showGallery();
//                 }

//             const newImages = await fetch (`https://api.unsplash.com/search/photos?query=${word}&client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&per_page=20`);
//             const element = await newImages.json();

//             section.innerHTML = '';

//             element.results.forEach(c => {
//                 const img = document.createElement('img');
//                 const imgContainer = document.createElement('div')

//                 img.classList.add('photo');
//                 imgContainer.classList.add('imgContainer')


//                 img.src = c.urls.small;
//                 imgContainer.appendChild(img)
//                 section.appendChild(imgContainer);
                
//             });

//             if (!masonry) {
//                 masonry = new Masonry('.gallery', {
//                     itemSelector: '.imgContainer',
//                     columnWidth: '.imgContainer',
//                     gutter: 15
//                 });
//             } else {
//                 setTimeout(() => {
//                     masonry.reloadItems(); // Recargar elementos para librería Masonry
//                     masonry.layout(); // Volver a organizar con Masonry
//                 }, 100);
//             }
//             } catch (error) {
//                 console.log(error);
//             }
//         })
//     }

export const searchWord = async () => {
    const inputHTML = document.querySelector('#buscar');
    const section = document.querySelector('.gallery');
    let masonry;

    inputHTML.addEventListener('keyup', async (e) => {
        try {
            const word = e.target.value;
            if (word === '') {
                showGallery();
                return;
            }

            let allResults = [];

            // Hacer múltiples solicitudes para obtener más de 10 resultados
            for (let page = 1; page <= 4; page++) { // Por ejemplo, obtener 40 resultados (4 páginas x 10 resultados)
                const newImages = await fetch (`https://api.unsplash.com/search/photos?query=${word}&client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&per_page=10&page=${page}`);
                const element = await newImages.json();
                allResults = allResults.concat(element.results);
            }

            section.innerHTML = '';

            allResults.forEach(c => {
                const img = document.createElement('img');
                const imgContainer = document.createElement('div');

                img.classList.add('photo');
                imgContainer.classList.add('imgContainer');

                img.src = c.urls.small;
                imgContainer.appendChild(img);
                section.appendChild(imgContainer);
            });

            if (!masonry) {
                masonry = new Masonry('.gallery', {
                    itemSelector: '.imgContainer',
                    columnWidth: '.imgContainer',
                    gutter: 15
                });
            } else {
                setTimeout(() => {
                    masonry.reloadItems();
                    masonry.layout();
                }, 200);
            }
        } catch (error) {
            console.log(error);
        }
    });
};
