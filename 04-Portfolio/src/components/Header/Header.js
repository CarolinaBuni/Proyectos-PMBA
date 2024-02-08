// Importamos la función homeContainer del módulo principal
import { homeContainer } from '../../../main';
// Importamos el archivo CSS asociado al Header
import './Header.css';

// Función para configurar el Header
export function headerData() {
    // Creo un elemento header
    const header$$ = document.createElement('header');
    // Creo un elemento nav y le agregamos una clase
    const nav$$ = document.createElement('nav');
    nav$$.classList.add('nav-bar');
    // Creo un elemento ul y le agregamos una clase
    const navUl$$ = document.createElement('ul');
    navUl$$.classList.add('ul-nav-bar');
    
    const divApp = document.getElementById('app');
    console.log(divApp);
    // Agrego contenido HTML al ul con enlaces a diferentes secciones
    navUl$$.innerHTML = `
        <li class='li-nav-bar'>
            <a href="#education">Education</a>
        </li>
        <li class='li-nav-bar'>
            <a href="#experience">Experience</a>
        </li>
        <li class='li-nav-bar'>
            <a href="#projects">Projects</a>
        </li>
        <li class='li-nav-bar'>
            <a href="#contact">Contact</a>
        </li>
    `
    // Agrego el ul como hijo del nav
    nav$$.appendChild(navUl$$)
    // Agrego el nav como hijo del header
    header$$.appendChild(nav$$);
    // Agrego el header al contenedor principal
    homeContainer.appendChild(header$$);
    // Agrego el contenedor principal como hijo del elemento con el id 'app'
    divApp.appendChild(homeContainer);
    

    

};



