import { limpiarResultado } from "../Trivial/Trivial";
import { detenerWhacAMole } from "../Whac-a-Mole/Whac-a-Mole";

import "./TicTacToe.css";



export const initTicTacToe = () => {
    detenerWhacAMole();
    limpiarResultado();
    const divContent = document.querySelector( '.content' );
    divContent.innerHTML = "";


    const board = document.createElement( 'div' );
    const divButtons = document.createElement( 'div' );
    const buttonX = document.createElement( 'button' );
    const buttonO = document.createElement( 'button' );

    // Inicializar contadores de victorias
    let winsX = 0;
    let winsO = 0;

    buttonX.textContent = 'X';
    buttonO.textContent = 'O';

    buttonX.className = 'x';
    buttonO.className = 'o';
    divButtons.className = 'div-buttons';
    board.className = "board";

    board.innerHTML = `
        <div class="div1"> </div>
        <div class="div2"> </div>
        <div class="div3"> </div>
        <div class="div4"> </div>
        <div class="div5"> </div>
        <div class="div6"> </div>
        <div class="div7"> </div>
        <div class="div8"> </div>
        <div class="div9"> </div>
        `;

    divContent.innerHTML = "";
    divButtons.appendChild( buttonX );
    divButtons.appendChild( buttonO );
    divContent.append( divButtons );

    divContent.appendChild( board );

    let currentPlayer;
    const boardState = [
        [ '', '', '' ],
        [ '', '', '' ],
        [ '', '', '' ]
    ];

    const xImage = '/public/assets/Prs/xImage.svg';
    const oImage = '/public/assets/Prs/oImage.svg';

    let gameActive = false;

    const cells = document.querySelectorAll( '.board > div' );

    function disableButtons() {
        buttonX.disabled = true;
        buttonO.disabled = true;
    }

    // Función para iluminar el botón del jugador actual
    function highlightCurrentPlayer() {
        buttonX.classList.remove( 'highlight' );
        buttonO.classList.remove( 'highlight' );
        if ( currentPlayer === 'X' ) {
            buttonX.classList.add( 'highlight' );
        } else if ( currentPlayer === 'O' ) {
            buttonO.classList.add( 'highlight' );
        }
    }

    buttonX.addEventListener( 'click', () => {
        currentPlayer = 'X';
        disableButtons();
        gameActive = true;
        highlightCurrentPlayer();
    } );

    buttonO.addEventListener( 'click', () => {
        currentPlayer = 'O';
        disableButtons();
        gameActive = true;
        highlightCurrentPlayer();
    } );

    cells.forEach( ( cell, index ) => {
        cell.addEventListener( 'click', () => {
            if ( !gameActive ) return;
            const row = Math.floor( index / 3 );
            const col = index % 3;

            if ( boardState[ row ][ col ] === '' ) {
                boardState[ row ][ col ] = currentPlayer;

                cell.style.backgroundImage = `url(${ currentPlayer === 'X' ? xImage : oImage })`;
                cell.style.backgroundSize = 'cover';
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                checkGameStatus();
                highlightCurrentPlayer();
            }
        } );
    } );

    function checkGameStatus() {
        let winner = null;
        for ( let i = 0; i < 3; i++ ) {
            if ( boardState[ i ][ 0 ] && boardState[ i ][ 0 ] === boardState[ i ][ 1 ] && boardState[ i ][ 1 ] === boardState[ i ][ 2 ] ) {
                winner = boardState[ i ][ 0 ];
                break;
            }
            if ( boardState[ 0 ][ i ] && boardState[ 0 ][ i ] === boardState[ 1 ][ i ] && boardState[ 1 ][ i ] === boardState[ 2 ][ i ] ) {
                winner = boardState[ 0 ][ i ];
                break;
            }
        }
        if ( boardState[ 0 ][ 0 ] && boardState[ 0 ][ 0 ] === boardState[ 1 ][ 1 ] && boardState[ 1 ][ 1 ] === boardState[ 2 ][ 2 ] ) {
            winner = boardState[ 0 ][ 0 ];
        }
        if ( boardState[ 0 ][ 2 ] && boardState[ 0 ][ 2 ] === boardState[ 1 ][ 1 ] && boardState[ 1 ][ 1 ] === boardState[ 2 ][ 0 ] ) {
            winner = boardState[ 0 ][ 2 ];
        }

        let isDraw = boardState.flat().every( cell => cell !== '' );

        if ( winner || isDraw ) {
            setTimeout( () => {
                mostrarPopUpResultado( winner, isDraw );
                resetGame();
            }, 100 );
        }
    }

    function mostrarPopUpResultado( winner, isDraw ) {
        const divResultado = document.createElement( 'div' );
        divResultado.className = 'resultado-tictactoe';

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

        if ( winner ) {
            divResultado.innerHTML = `<h2>¡Jugador ${ winner } gana!</h2>`;
        } else if ( isDraw ) {
            divResultado.innerHTML = `<h2>¡Es un empate!</h2>`;
        }

        document.body.appendChild( divResultado );

        // Cerrar el pop-up después de 3 segundos
        setTimeout( () => {
            document.body.removeChild( divResultado );
        }, 3000 );
    }

    function resetGame() {
        boardState.forEach( row => row.fill( '' ) );
        cells.forEach( cell => {
            cell.textContent = '';
            cell.style.backgroundImage = '';
        } );
        buttonX.disabled = false;
        buttonO.disabled = false;
        gameActive = false;
    }
};