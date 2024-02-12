// // Importo la función homeContainer del módulo principal
// import { homeContainer } from "../../../main";
// // Importo el archivo CSS asociado a los botones para abrir
// import "./ButtonsToOpen.css";
// // Función para crear y agregar el botón para abrir about me
// export function buttonOpen() {
// 	const buttonOpen = document.createElement("button");
// 	const buttonOpenImg = document.createElement("img");
//     // Añado clases y atributos al botón y la imagen
// 	buttonOpen.classList.add("btnClickToOpen");
// 	buttonOpenImg.src = "/assets/ClickToOpen.svg";
// 	buttonOpenImg.setAttribute("alt", "Click to open");
//     // Añado la imagen al botón
// 	buttonOpen.appendChild(buttonOpenImg);
//     // Creo un div para contener el botón
// 	const divButton = document.createElement("div");
// 	divButton.id = "divBtn";
//     // Agrego un evento de clic al botón para mostrar información adicional
// 	buttonOpen.addEventListener("click", (e) => {
//         // Creo un párrafo con información adicional
// 		const aboutP = document.createElement("p");
// 		aboutP.textContent =
// 			"Bornt in São Paulo (Brasil), 23 years ago I moved to Spain. After more than 12 years working in Health and Retail sector, I am looking for my first opportunity as Software Developer.I am passionate about technology since I was a child and I have being studing and getting certified on several technologies, specially Python programming language, JavaScript, Java, Cloud Computing and development frameworks for Artificial Intelligence and Data Science.Although my previous experience is not directly related to technology, I strongly beleive it proves I am a hard-working, commited and extremely responsible person with outstanding varied skills.";

//         // Agrego el párrafo al div
// 		divButton.appendChild(aboutP);
//         // Oculto el botón al hacer click en él
// 		buttonOpen.style.display = "none";
// 	});
//     // Agrego el botón al div
// 	divButton.appendChild(buttonOpen);
//     // Agrego el div al contenedor principal
// 	homeContainer.appendChild(divButton);
// };

import { homeContainer } from "../../../main";
import "./ButtonsToOpen.css";

export function buttonOpen() {
	const buttonOpen = document.createElement( "button" );
	const buttonOpenImg = document.createElement( "img" );

	buttonOpen.classList.add( "btnClickToOpen" );
	buttonOpenImg.src = "/assets/ClickToOpen.svg";
	buttonOpenImg.setAttribute( "alt", "Click to open" );

	buttonOpen.appendChild( buttonOpenImg );

	const divButton = document.createElement( "div" );
	divButton.id = "divBtn";

	const aboutP = document.createElement( "p" );
	aboutP.textContent = "Bornt in São Paulo (Brasil), 23 years ago I moved to Spain. After more than 12 years working in Health and Retail sector, I am looking for my first opportunity as Software Developer.I am passionate about technology since I was a child and I have being studing and getting certified on several technologies, specially Python programming language, JavaScript, Java, Cloud Computing and development frameworks for Artificial Intelligence and Data Science.Although my previous experience is not directly related to technology, I strongly beleive it proves I am a hard-working, commited and extremely responsible person with outstanding varied skills.";
	aboutP.style.display = "none"; // Inicialmente el párrafo está oculto

	divButton.appendChild( buttonOpen );
	divButton.appendChild( aboutP ); // Agrego el párrafo al div, pero está oculto

	buttonOpen.addEventListener( "click", () => {
		aboutP.style.display = "block"; // Mostrar el párrafo
		buttonOpen.style.display = "none"; // Ocultar el botón
	} );

	aboutP.addEventListener( "click", () => {
		aboutP.style.display = "none"; // Ocultar el párrafo
		buttonOpen.style.display = "block"; // Mostrar el botón
	} );

	homeContainer.appendChild( divButton );
}
