import Button from "../components/Button/Button";
import "./Layout.scss";
import { useState } from "react";
import ZServices from "../services/services";
import paths from "../services/data/paths.json"

export default function Layout({ children }) {
    const [lang, setLang] = useState("FR");

    const set_lang = (lang) => {
        localStorage.setItem(ZServices.LANG.stocker_name, lang);
        window.location.reload();
    };

    useState(() => {
        setLang(localStorage.getItem("nyru_lang"));
    }, []);

    return (
        <div id="layout-container">
            <div id="layout-lang-container">
                <Button
                    handle={() => {
                        ZServices.goTo(paths.home)
                    }}
                    logo={
                        <div id="btn-div-spe">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                                {" "}
                                <g>
                                    {" "}
                                    <path fill="none" d="M0 0h24v24H0z" />{" "}
                                    <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM8 15v2h8v-2H8z" />{" "}
                                </g>{" "}
                            </svg>
                        </div>
                    }
                />

                <Button
                    text={"EN"}
                    fc={!ZServices.isFrench(lang) ? "#000" : null}
                    bg={!ZServices.isFrench(lang) ? "#fff" : null}
                    handle={() => {
                        set_lang("EN");
                    }}
                />
                <Button
                    text={"FR"}
                    fc={ZServices.isFrench(lang) ? "#000" : null}
                    bg={ZServices.isFrench(lang) ? "#fff" : null}
                    handle={() => {
                        set_lang("FR");
                    }}
                />
            </div>

            <main id="main-container">{children}</main>
        </div>
    );
}
