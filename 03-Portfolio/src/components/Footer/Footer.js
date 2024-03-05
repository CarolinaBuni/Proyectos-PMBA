import { Button } from "../Button/Button";
import "./Footer.css";

export const Footer = () => `
<h2>Contact</h2> 
    <div> 
        ${Button("/public/LogoTwitter.png", "Twitter")} 
        ${Button("/public/LogoGitHub.png","GitHub")} 
        ${Button("/public/LogoLinkedin.png", "LinkedIn")} 
        ${Button("/public/LogoTelegram.png","Telegram")} 
    </div> 
`;
