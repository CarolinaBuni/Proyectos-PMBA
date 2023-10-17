import { PROJECTS } from './src/components/Projects';
import './style.css';

const header$$ = document.querySelector('header');
const headerButton = document.createElement('button');
headerButton.textContent = 'CONTACT ME';

header$$.appendChild(headerButton);

const sectionElement = document.createElement('section');
const imageElement = document.createElement('img');
const h1 = document.createElement('h1');
h1.textContent = 'I AM CAROLINA';

imageElement.className = 'hero';
imageElement.src = './public/assets/hero.png';
imageElement.alt = 'hero';

const aside = document.createElement('aside');
const ulElement = document.createElement('ul');
ulElement.className = 'ulElement';

ulElement.innerHTML = `
    <li>
        <a href="https://github.com/CarolinaBuni">
        <img class="link" src="./public/assets/logoGithub.png" alt="Logo GitHub">
        </a>
    </li>
    <li>
        <a href="https://www.instagram.com/carou_pipoca/">
        <img class="link"  src="./public/assets/logoInstagram.png" alt="Logo Instagram">
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/carolina-buni-de-jes%C3%BAs-48b23822b/">
        <img class="link"  src="./public/assets/logoLinkedin.png" alt="Logo LinkedIn">
        </a>
    </li>
    <li>
        <a href="URL_del_enlace1">
        <img class="link"  src="./public/assets/logoGithub.png" alt="Descripción de la imagen 1">
        </a>
    </li>
    <li>
        <a href="URL_del_enlace1">
        <img class="link"  src="./public/assets/logoGithub.png" alt="Descripción de la imagen 1">
        </a>
    </li>
`

// for(let i = 0; i < 5; i++){
//     const liElement = document.createElement('li');


//     const imgLogoElement = document.createElement('img');
//     imgLogoElement.src = './public/assets/logoGithub.png'
//     imgLogoElement.alt = 'Logo Github'


//     const linkElement = document.createElement('a');
//     linkElement.href = 'https://github.com/CarolinaBuni';

//     liElement.appendChild(linkElement);
//     linkElement.appendChild(imgLogoElement);
//     ulElement.appendChild(liElement);
// }


aside.appendChild(ulElement);


sectionElement.appendChild(imageElement);
sectionElement.appendChild(h1);
document.body.appendChild(sectionElement);
document.body.appendChild(aside)







