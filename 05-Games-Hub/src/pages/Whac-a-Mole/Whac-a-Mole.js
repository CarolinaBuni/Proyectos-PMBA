import { limpiarResultado } from "../Trivial/Trivial";
import "./Whac-a-Mole.css";

let COUNT = 0;
let intervalo;
let pausado = true;
let juegoFinalizado = false;

export const initMole = () => {
     juegoFinalizado = false;
     clearInterval( intervalo );
     limpiarResultado();
     document.body.classList.add( 'restringir-desbordamiento' );
     const divContent = document.querySelector( '.content' );
     divContent.innerHTML = "";

     const contadorTopos = document.createElement( 'h2' );
     const jugar = document.createElement( "button" );
     const pausar = document.createElement( "button" );
     const audio = document.createElement( "audio" );


     audio.src = "/public/assets/Whack-a-Mole/SMASH sound effect for editing_gjyKS5j88_Q (mp3cut.net) (1).mp3";
     jugar.textContent = "Jugar";
     pausar.textContent = "Pausar";
     contadorTopos.textContent = `Puntos ${ COUNT }`;
     jugar.className = "boton-topo";
     pausar.className = "boton-topo";
     contadorTopos.className = "contador";



     jugar.addEventListener( "click", () => {
          pausado = !pausado;
          toggleButton( jugar, pausar );
          iniciarJuego();
     } );
     pausar.addEventListener( "click", () => {
          pausado = !pausado;
          toggleButton( jugar, pausar );
          clearInterval( intervalo );
     } );

     toggleButton( jugar, pausar );

     divContent.append( audio );
     divContent.append( jugar );
     divContent.append( pausar );
     divContent.appendChild( contadorTopos );

};

const createTopo = () => {
     if ( juegoFinalizado ) return;
     const divContent = document.querySelector( '.content' );

     let randomLeft = Math.random() * ( window.innerWidth - 100 );
     let randomeTop = Math.random() * ( window.innerHeight - 200 );


     const imgTopo = document.createElement( 'img' );
     imgTopo.className = "topo";
     imgTopo.style.top = `${ randomeTop + 150 }px`;
     imgTopo.style.left = `${ randomLeft }px`;
     imgTopo.classList.add( "aplastar" );

     imgTopo.addEventListener( "click", ( e ) => aplastarTopo( e ) );



     imgTopo.src = '/public/assets/Whack-a-Mole/topo.png';
     divContent.append( imgTopo );

     comprobar();
};

const aplastarTopo = ( e ) => {
     const audio = document.querySelector( "audio" );
     audio.play();
     audio.volume = 0.20;
     e.target.classList.add( "topoAplastado" );
     COUNT++;
     repintarTexto( COUNT );
     e.target.classList.remove( "aplastar" );
};

const repintarTexto = ( cont ) => {
     const texto = document.querySelector( '.contador' );
     texto.textContent = `Puntos ${ cont }`;
};

const comprobar = () => {
     if ( juegoFinalizado ) return;
     const allTopos = document.querySelectorAll( '.topo.aplastar' );

     if ( allTopos.length > 100 ) {
          mostrarPopUpPerdida();
          finalizarJuego();
          clearInterval( intervalo );
     }
};

const iniciarJuego = () => {
     intervalo = setInterval( () => {
          createTopo();
     }, 1000 );
     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {
               intervalo = setInterval( () => {
                    createTopo();
               }, 900 );
          }
     }, 5000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {
               intervalo = setInterval( () => {
                    createTopo();
               }, 800 );
          }
     }, 10000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 700 );
          }
     }, 15000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 600 );
          }
     }, 20000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 500 );
          }
     }, 25000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 500 );
          }
     }, 25000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 400 );
          }
     }, 30000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 300 );
          }
     }, 35000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 200 );
          }
     }, 40000 );

     setTimeout( () => {
          clearInterval( intervalo );
          if ( !pausado ) {

               intervalo = setInterval( () => {
                    createTopo();
               }, 100 );
          }
     }, 60000 );
};

const toggleButton = ( jugar, pausar ) => {

     if ( pausado ) {
          jugar.classList.add( "show" );
          pausar.classList.remove( "show" );
     } else {
          pausar.classList.add( "show" );
          jugar.classList.remove( "show" );
     };
};

export const finalizarJuego = () => {
     juegoFinalizado = true;
     const divContent = document.querySelector( '.restringir-desbordamiento' );
     if ( divContent ) { // Verifica si divContent no es null
          divContent.classList.remove( 'restringir-desbordamiento' ); // Quitar la clase al finalizar el juego
     }

};

export function mostrarPopUpPerdida() {
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
}

export function detenerWhacAMole() {
     clearInterval( intervalo ); // Detiene la generación de topos

     document.querySelectorAll( '.resultado-whacamole' ).forEach( popUp => {
          popUp.remove();
     } );
}
