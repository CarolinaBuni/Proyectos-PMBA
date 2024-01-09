
import { searchWord } from './src/components/Input/Input';
import { divApp, header } from './src/pages/Header/Header';
import './style.css';

export const showGallery = async () => {
    const section = document.querySelector('.gallery');
    try {
        const response = await fetch("https://api.unsplash.com/photos/random?client_id=Apv4rswnoZ0Lp7xGFFJbnS520XpHA1J1dCSILs53y64&count=40");
        const res = await response.json();
        for (const c of res) {
            const img = document.createElement("img");

            img.classList.add('photo')
            img.src = c.urls.small;
            section.appendChild(img)
        }
    } catch (error) {
        console.log(error);
    }
};


showGallery()


divApp.appendChild(header);

searchWord();