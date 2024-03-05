import { initTicTacToe } from "../../pages/TicTacToe/TicTacToe";
import { initTrivial } from "../../pages/Trivial/Trivial";
import { initMole } from "../../pages/Whac-a-Mole/Whac-a-Mole";
import "./Header.css";

export const Header = (divApp) => {
     const header = document.createElement('header');
     const buttonTicTacToe = document.createElement('button');
     const buttonWhac = document.createElement('button');
     const buttonTrivial = document.createElement('button');
     

     buttonTicTacToe.textContent = "Tic Tac Toe";
     buttonWhac.textContent = "Whach a Mole";
     buttonTrivial.textContent = "Trivial";

     buttonTicTacToe.addEventListener("click", initTicTacToe);
     buttonWhac.addEventListener("click", initMole);
     buttonTrivial.addEventListener("click", initTrivial);


     divApp.append(header);
     header.appendChild(buttonTicTacToe);
     header.appendChild(buttonWhac);
     header.appendChild(buttonTrivial);
};

