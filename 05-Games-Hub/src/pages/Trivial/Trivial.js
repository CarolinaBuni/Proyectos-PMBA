import { finalizarJuego } from "../Whac-a-Mole/Whac-a-Mole";
import "./Trivial.css";

const preguntas = [
     {
          pregunta: "¿Cuál es el nombre del Hokage que le dio a Naruto su nombre?",
          respuestas: [ "Tsunade Senju", "Hiruzen Sarutobi", "Minato Namikaze", "Kakashi Hatake" ],
          correcta: "Minato Namikaze",
     },
     {
          pregunta: "¿Qué técnica le permite a Naruto crear clones de sombra?",
          respuestas: [ "Rasengan", "Kage Bunshin no Jutsu", "Chidori", "Amaterasu" ],
          correcta: "Kage Bunshin no Jutsu",
     },
     {
          pregunta: "¿Cuál es el nombre del equipo de Naruto?",
          respuestas: [ "Equipo 7", "Equipo 8", "Equipo 10", "Equipo Gai" ],
          correcta: "Equipo 7",
     },
     {
          pregunta: "¿Quién es el maestro del Equipo 7?",
          respuestas: [ "Might Guy", "Kurenai Yuuhi", "Asuma Sarutobi", "Kakashi Hatake" ],
          correcta: "Kakashi Hatake",
     },
     {
          pregunta: "¿Qué animal está sellado dentro de Naruto?",
          respuestas: [
               "Perro Ninja (Pakkun)",
               "Serpiente Blanca (Orochimaru)",
               "Zorro de Nueve Colas (Kurama)",
               "Halcón Gigante (Hawk)",
          ],
          correcta: "Zorro de Nueve Colas (Kurama)",
     },
     {
          pregunta: "¿Cuál es el nombre del clan al que pertenece Sasuke?",
          respuestas: [ "Clan Uchiha", "Clan Hyuga", "Clan Nara", "Clan Akimichi" ],
          correcta: "Clan Uchiha",
     },
     {
          pregunta: "¿Qué jutsu utiliza Sasuke para copiar las técnicas de sus oponentes?",
          respuestas: [ "Amaterasu", "Mangekyou Sharingan", "Chidori", "Sharingan" ],
          correcta: "Sharingan",
     },
     {
          pregunta: "¿Quién es la kunoichi que tiene un enamoramiento con Sasuke?",
          respuestas: [ "Hinata Hyuga", "Sakura Haruno", "Ino Yamanaka", "Tenten" ],
          correcta: "Sakura Haruno",
     },
     {
          pregunta: "¿Cuál es el nombre del examen que deben pasar los ninjas para convertirse en Chunin?",
          respuestas: [ "Examen Chunin", "Examen Genin", "Examen Jounin", "Examen Hokage" ],
          correcta: "Examen Chunin",
     },
     {
          pregunta: "¿Qué aldea es la principal rival de Konohagakure?",
          respuestas: [
               "Aldea de la Hoja (Konohagakure)",
               "Aldea de la Arena (Sunagakure)",
               "Aldea de la Nube (Kumogakure)",
               "Aldea de la Niebla (Kirigakure)",
          ],
          correcta: "Aldea de la Arena (Sunagakure)",
     },
     {
          pregunta: "¿Cuál es el nombre del ataque más poderoso de Naruto?",
          respuestas: [ "Chidori", "Rasengan", "Rasen-Shuriken", "Amaterasu" ],
          correcta: "Rasen-Shuriken",
     },
     {
          pregunta: "¿Quién es el padre de Naruto?",
          respuestas: [ "Kakashi Hatake", "Hiruzen Sarutobi", "Tsunade Senju", "Minato Namikaze" ],
          correcta: "Minato Namikaze",
     },
     {
          pregunta: "¿Qué es el Mangekyou Sharingan?",
          respuestas: [
               "Una forma avanzada del Sharingan que otorga nuevas habilidades",
               "Un jutsu que permite copiar las técnicas de los oponentes",
               "Un tipo de chakra especial",
               "Un arma legendaria",
          ],
          correcta: "Una forma avanzada del Sharingan que otorga nuevas habilidades",
     },
     {
          pregunta: "¿Quién es el líder de Akatsuki?",
          respuestas: [ "Madara Uchiha", "Pain", "Madara Uchiha", "Zetsu" ],
          correcta: "Pain",
     }
];


let juegoFinalizado = false; // variable para controlar el estado del juego
let respuestasSeleccionadas = {};

export const initTrivial = () => {
     juegoFinalizado = false; // Restablecer el estado del juego al iniciar
     respuestasSeleccionadas = {};



     const scroll = document.querySelector( '.restringir-desbordamiento' );
     if ( scroll ) { // Verificar si el elemento existe antes de intentar acceder a su classList
          scroll.classList.remove( 'restringir-desbordamiento' );
     }
     finalizarJuego();
     limpiarResultado();

     const divContent = document.querySelector( '.content' );
     divContent.innerHTML = "";

     const divPreguntas = document.createElement( "div" );
     divPreguntas.className = "divPreguntas";
     divContent.append( divPreguntas );

     preguntas.forEach( ( card, i ) => {
          const card$$ = document.createElement( 'div' );
          const preguntas$$ = document.createElement( 'h2' );
          card$$.className = 'card';
          preguntas$$.textContent = card.pregunta;
          card$$.append( preguntas$$ );

          card.respuestas.forEach( ( respuesta ) => {
               const respuesta$$ = document.createElement( 'h3' );
               respuesta$$.textContent = respuesta;
               card$$.append( respuesta$$ );
               divPreguntas.append( card$$ );

               respuesta$$.addEventListener( 'click', () => {
                    if ( !juegoFinalizado && respuestasSeleccionadas[ i ] === undefined ) {
                         // Marca la respuesta seleccionada y desactiva las demás
                         card$$.querySelectorAll( 'h3' ).forEach( el => {
                              if ( el !== respuesta$$ ) {
                                   el.classList.add( 'disabled' ); // Desactiva las no seleccionadas
                              }
                         } );

                         respuestasSeleccionadas[ i ] = { respuesta: respuesta, elemento: respuesta$$ };
                         respuesta$$.classList.add( 'seleccionada' );
                    }

                    if ( !juegoFinalizado && Object.keys( respuestasSeleccionadas ).length === preguntas.length ) {
                         juegoFinalizado = true;
                         mostrarResultados( respuestasSeleccionadas );
                    }
               } );

          } );
     } );
};

function mostrarResultados( respuestasSeleccionadas ) {
     let puntos = 0;
     Object.entries( respuestasSeleccionadas ).forEach( ( [ indice, { respuesta, elemento } ] ) => {
          const pregunta = preguntas[ indice ];
          if ( respuesta === pregunta.correcta ) {
               elemento.classList.add( 'correcta' );
               puntos++;
          } else {
               elemento.classList.add( 'incorrecta' );
          }
     } );

     mostrarResultado( puntos );
}

function mostrarResultado( puntos ) {
     const divResultado = document.createElement( 'div' );
     divResultado.className = 'resultado';
     divResultado.style = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: black;
          color: white;
          padding: 20px;
          border-radius: 10px;
          z-index: 1000;`;

     divResultado.innerHTML = `<h2>Has obtenido ${ puntos } ${ puntos === 1 ? 'punto' : 'puntos' }.</h2>`;

     document.body.appendChild( divResultado );

     setTimeout( () => {
          document.body.removeChild( divResultado );
          reiniciarJuego(); // Llama a la función de reinicio del juego
     }, 5000 );
};

function reiniciarJuego() {
     juegoFinalizado = true; // Asegura que el juego se marca como finalizado antes de reiniciar
     const respuestasElems = document.querySelectorAll( '.divPreguntas .card h3' );
     respuestasElems.forEach( elem => {
          elem.classList.remove( 'seleccionada', 'correcta', 'incorrecta', 'disabled' );
     } );
     initTrivial(); // Reinicia el juego
}



export function limpiarResultado() {
     const divResultadoExistente = document.querySelector( '.resultado' );
     if ( divResultadoExistente ) {
          divResultadoExistente.remove();
     }
}