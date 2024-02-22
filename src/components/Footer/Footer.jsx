import "./Footer.scss";
import cursor from "./assets/footer-cursor.svg";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import ZServices from "../../services/services";

export default function Footer() {
    const [lang, setLang] = useState(ZServices.LANG.fr);

    useEffect(() => {
        const language = localStorage.getItem(ZServices.LANG.stocker_name);
        setLang(language || ZServices.LANG.fr);
    }, []);

    return (
        <footer id="footer-container">
            <div id="footer-top-section-container">
                <div id="footer-top-section-contact-container">
                    <img
                        className="footer-top-section-contact-cursor one-c"
                        src={cursor}
                        alt="Cursor"
                    />
                    <Button
                        text="Contact"
                        handle={() => {
                            ZServices.goTo("/NYRU/#/contact");
                        }}
                    />
                    <img
                        className="footer-top-section-contact-cursor two-c"
                        src={cursor}
                        alt="Cursor"
                    />
                </div>
            </div>

            <div id="footer-bottom-section-container">
                <span
                    onClick={() => {
                        ZServices.goTo("/NYRU/#/sfx");
                    }}
                    className="text-ft footer-bottom-section-link"
                >
                    SFX
                </span>
                <span
                    onClick={() => {
                        ZServices.goTo("/NYRU/#/vfx");
                    }}
                    className="text-ft footer-bottom-section-link"
                >
                    VFX
                </span>
                <span
                    onClick={() => {
                        ZServices.goTo("/NYRU/#/gfx");
                    }}
                    className="text-ft footer-bottom-section-link"
                >
                    GFX
                </span>
                <span
                    onClick={() => {
                        ZServices.goTo("/NYRU/#/visuals");
                    }}
                    className="text-ft footer-bottom-section-link"
                >
                    {ZServices.isFrench(lang) ? "Visuels" : "Visuals"}
                </span>
                <span
                    onClick={() => {
                        ZServices.goTo("/NYRU/#/titlecard");
                    }}
                    className="text-ft footer-bottom-section-link"
                >
                    {ZServices.isFrench(lang)
                        ? "Cartes de titre"
                        : "Title Cards"}
                </span>
                <span
                    onClick={() => {
                        ZServices.goTo("/NYRU/#/about");
                    }}
                    className="text-ft footer-bottom-section-link"
                >
                    {ZServices.isFrench(lang) ? "A Propos" : "About Me"}
                </span>
            </div>
        </footer>
    );
}
