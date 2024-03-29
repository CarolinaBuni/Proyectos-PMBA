import "./Projects.css";
import { projects } from "../data/projects";
import { Divider } from "../src/components/Divider/Divider";
import { ProjectCard } from "../src/components/ProjectCard/ProjectCard"
import { cleanPage } from "../utils/cleanPage";

export const Projects = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="projects">     
    <h2>Featured Projects</h2>     
    ${Divider()}     
    <div class="projects-container">
    </div>     
    </section>`;
    const container = document.querySelector(".projects-container");
    for (const project of projects) {
        const figure = document.createElement("figure");
        figure.innerHTML = ProjectCard(project);
        container.appendChild(figure);
    }
};
