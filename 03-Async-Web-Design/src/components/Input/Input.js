import { showGallery } from "../../../main";
import './Input.css'

export const searchWord = () => {
    const inputHTML = document.querySelector('#buscar');
    const section = document.querySelector('.gallery')
    inputHTML.addEventListener('keyup', async (e) => {
        try {
            const word = e.target.value;
                if(word === ''){
                    showGallery();
                }

            const newImages = await fetch (`https://api.unsplash.com/search/photos?query=${word}&client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&count=40`);
            const element = await newImages.json();
            section.innerHTML = '';
            element.results.forEach(c => {
                const img = document.createElement('img');
                img.classList.add('photo');
                img.src = c.urls.small;
                section.appendChild(img);
                
            })
            } catch (error) {
                console.log(error);
            }
        })
    }
