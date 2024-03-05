import "./style.css";
import { changeTheme } from "./src/components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./src/components/Navbar/Navbar";
import { Footer } from "./src/components/Footer/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Divider } from "./src/components/Divider/Divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
Home();
changeTheme();
footer.insertAdjacentHTML("beforebegin", Divider());

