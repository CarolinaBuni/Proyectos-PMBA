// Importamos el archivo CSS asociado a ButtonSend
import "./ButtonSend.css";

// Definimos una función para configurar la animación del formulario
export const setupFormAnimation = () => {
	const form = document.getElementById("contactForm");
	const rocketSvg = document.getElementById("rocketSvg");
	const sendText = document.querySelector(".send");
	const doneText = document.querySelector(".done");

	// Define la animación GSAP para el botón
	let t1 = gsap
		.timeline({ paused: true }) // Creamos una línea de tiempo de GSAP pausada
		.to(rocketSvg, {
			x: "-=40",
			duration: 0.4,
			ease: "power1.out",
		})
		.to(
			rocketSvg,
			{ rotate: 45, duration: 0.3, ease: "power2.out" },
			"-=0.2"
		)
		.to(
			rocketSvg,
			{
				x: "+=170",
				opacity: 0,
				duration: 0.9,
				ease: "power2.inOut",
			},
			"-=0.1"
		)
		.to(
			sendText,
			{ opacity: 0, duration: 0.3, ease: "power2.out" },
			"-=0.6"
		)
		.fromTo(
			doneText,
			{ opacity: 0, x: -10 },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				ease: "power2.out",
			},
			"-=0.3"
		);

	// Controlador del evento submit para el formulario
	form.addEventListener("submit", function (event) {
		event.preventDefault(); // Previene el envío predeterminado del formulario

		if (this.checkValidity()) {
			t1.restart(); // Reproduce la animación
			t1.eventCallback("onComplete", () => {
				form.reset(); // Limpia el formulario después de la animación
				console.log(
					'Formulario "enviado" y datos eliminados'
				);
			});
		} else {
			this.reportValidity(); // Muestra los mensajes de error predeterminados del navegador
		}
	});
};
