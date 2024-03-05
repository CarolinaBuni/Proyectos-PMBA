import { Header } from './src/components/Header/Header';
import { initTicTacToe } from './src/pages/TicTacToe/TicTacToe';
import { initTrivial } from './src/pages/Trivial/Trivial';
import { initMole } from './src/pages/Whac-a-Mole/Whac-a-Mole';
import './style.css'


const divApp = document.querySelector("#app");
Header(divApp);

const divContent = document.createElement("div");

divContent.className = "content"
divApp.appendChild(divContent);

initMole();
initTicTacToe();
initTrivial();

