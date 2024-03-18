import { limpiarResultado } from "../Trivial/Trivial";
import "./Whac-a-Mole.css";

let COUNT = 0;
let intervalo;
let timeouts = []; 
let pausado = true;
let juegoActivo = false;
let jugar, pausar; 


export const initMole = () => {
    limpiarResultado();
    COUNT = 0; // Reiniciar la puntuación al iniciar el juego
    limpiarResultado();

    document.body.classList.add( 'restringir-desbordamiento' );
    const divContent = document.querySelector( '.content' );
    divContent.innerHTML = "";
    juegoActivo = true;

    const contadorTopos = document.createElement( 'h2' );
    jugar = document.createElement( "button" );
    pausar = document.createElement( "button" );
    const audio = document.createElement( "audio" );

    audio.src = "/public/assets/Whack-a-Mole/SMASH sound effect for editing_gjyKS5j88_Q (mp3cut.net) (1).mp3";
    jugar.textContent = "Jugar";
    pausar.textContent = "Pausar";
    contadorTopos.textContent = `Puntos ${ COUNT }`;
    jugar.className = "boton-topo";
    pausar.className = "boton-topo";
    contadorTopos.className = "contador";

    jugar.addEventListener( "click", () => {
        pausado = false;
        toggleButton( jugar, pausar );
        iniciarJuego();
    } );
    pausar.addEventListener( "click", () => {
        pausado = true;
        toggleButton( jugar, pausar );
        clearInterval( intervalo );
    } );

    toggleButton( jugar, pausar );

    divContent.append( audio );
    divContent.append( jugar );
    divContent.append( pausar );
    divContent.appendChild( contadorTopos );
};

const iniciarJuego = () => {
    juegoActivo = true; 
    intervalo = setInterval( createTopo, 1000 );
    // Restablece los timeouts para el aumento de velocidad
    establecerAumentoVelocidad();
};

const establecerAumentoVelocidad = () => {
    const velocidades = [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ];
    velocidades.forEach( ( velocidad, index ) => {
        let timeout = setTimeout( () => {
            if ( !pausado ) {
                clearInterval( intervalo );
                intervalo = setInterval( createTopo, velocidad );
            }
        }, 5000 * ( index + 1 ) );
        timeouts.push( timeout ); // Guarda el timeout para limpiarlo después
    } );
};



const createTopo = () => {
    if ( pausado || !juegoActivo ) return;

    const divContent = document.querySelector( '.content' );
    let randomLeft = Math.random() * ( window.innerWidth - 100 );
    let randomeTop = Math.random() * ( window.innerHeight - 200 );

    const imgTopo = document.createElement( 'img' );
    imgTopo.className = "topo";
    imgTopo.style.top = `${ randomeTop + 150 }px`;
    imgTopo.style.left = `${ randomLeft }px`;
    imgTopo.classList.add( "aplastar" );

    imgTopo.addEventListener( "click", aplastarTopo );

    imgTopo.src = '/public/assets/Whack-a-Mole/topo.png';
    divContent.append( imgTopo );

    comprobar();
};

const aplastarTopo = ( e ) => {
    if ( !pausado && !e.target.classList.contains( "topoAplastado" ) && juegoActivo ) {
        const audio = document.querySelector( "audio" );
        audio.play();
        audio.volume = 0.20;
        e.target.classList.add( "topoAplastado" );
        COUNT++;
        repintarTexto( COUNT );
        setTimeout( () => e.target.remove(), 500 );
    }
};

const repintarTexto = ( cont ) => {
    const texto = document.querySelector( '.contador' );
    if ( texto ) { // Verifica que el elemento exista antes de intentar acceder a su propiedad
        texto.textContent = `Puntos ${ cont }`;
    }
};

const comprobar = () => {
    const allTopos = document.querySelectorAll( '.topo.aplastar' );

    if ( allTopos.length > 100 ) {
        mostrarPopUpPerdida();
    }
};

const mostrarPopUpPerdida = () => {
    pausado = true; 
    toggleButton( jugar, pausar ); // Actualiza los botones para reflejar el estado pausado
    finalizarJuego(); // Detiene la generación de topos y limpia el juego

    const divResultadoWhacAMole = document.createElement( 'div' );
    divResultadoWhacAMole.className = 'resultado-whacamole';
    divResultadoWhacAMole.style = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: black;
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 1000;`;
    divResultadoWhacAMole.innerHTML = `<h2>Los topos te han ganado esta vez. ¡Inténtalo de nuevo!</h2>`;

    document.body.appendChild( divResultadoWhacAMole );

    setTimeout( () => {
        divResultadoWhacAMole.remove();
    }, 5000 );
};

const toggleButton = ( jugar, pausar ) => {
    if ( pausado ) {
        jugar.classList.remove( "oculto" ); 
        pausar.classList.add( "oculto" ); 
    } else {
        pausar.classList.remove( "oculto" ); 
        jugar.classList.add( "oculto" ); 
    }
};

const limpiarJuego = () => {
    clearInterval( intervalo ); 
    timeouts.forEach( clearTimeout ); 
    timeouts = []; 
};

export const finalizarJuego = () => {
    limpiarJuego();
    juegoActivo = false;
    COUNT = 0;
    repintarTexto( COUNT );
    const topos = document.querySelectorAll( '.topo' );
    topos.forEach( topo => topo.remove() );
};
