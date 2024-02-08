import { aside$$ } from "./src/components/Aside/Aside";
import { setupFormAnimation } from "./src/components/ButtonSend/ButtonSend";
import { buttonOpen } from "./src/components/ButtonToOpen/ButtonToOpen";
import { headerData } from "./src/components/Header/Header";

import { ponerProfile } from "./src/Pages/About/About";
import { Contact } from "./src/Pages/ContactMe/ContactMe";
import { renderEducation } from "./src/Pages/Education/Education";
import { renderExperience } from "./src/Pages/Experience/Experience";
import { renderProjects } from "./src/Pages/Projects/Projects";

import "./style.css";

export const divApp = document.getElementById("app");

export const homeContainer = document.createElement("div");
homeContainer.setAttribute("id", "home-container");
headerData();

export const main$$ = document.createElement("main");

main$$.setAttribute("id", "main");
divApp.appendChild(main$$);

ponerProfile();
aside$$();
buttonOpen();
renderEducation();
renderExperience();
renderProjects();
Contact();
setupFormAnimation();