export const PROJECTS = [
    { image: "/public/assets/web-resposive.jpg",
        title: "Página Web Responsive",
        description: "",
        tech: ["HTML5", "CSS3"], 
        github: "",
        link: "https://fancy-madeleine-a461ff.netlify.app",
    },
    { image: "/public/assets/tienda-dinamica.jpg",
        title: "Tienda Dinámica",
        description: "",
        tech: ["HTML5", "CSS3", "JavaScript"], 
        github: "",
        link: "https://hannunstore.netlify.app",
    },
    { image: "/public/assets/color-flipper.jpg",
        title: "Color Flipper",
        tech: ["HTML5", "CSS3", "JavaScript"], 
        description: "",
        github: "",
        link: "https://color-flipper-carolina-buni.netlify.app",
    },
    { image: "",
        title: "",
        description: "",
        tech: ["React", "HTML5", "CSS3", "JavaScript"], 
        github: "",
        link: "",
    },
    { image: "",
        title: "",
        description: "",
        tech: ["React", "HTML5", "CSS3", "JavaScript"], 
        github: "",
        link: "",
    },
];

const renderProjects = () => {
    const main$$ = document.querySelector('main');
    const ulProjects = document.createElement('ul');

    PROJECTS.forEach((project) => {
        ulProjects.innerHTML += `
            <li>
                <img src="${project.image}" alt="${project.title}"/>
                <div class="content">
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                    <p>${project.tech.join(" - ")}</p>
                    <a href="${project.link}">
                        <img src="/public/assets/enlace.png"/>
                    </a>
                </div>      
            </li>
        `
    });
    main$$.appendChild(ulProjects);
};