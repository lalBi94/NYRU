import "./Home.scss";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import ZServices from "../../services/services";
import datas from "./data/data.json";
import paths from "../../services/data/paths.json";

export default function Home() {
    const [lang, setLang] = useState(ZServices.LANG.en);

    useEffect(() => {
        ZServices.changeTitle(datas.ptitle)
        const language = localStorage.getItem(ZServices.LANG.stocker_name);

        if (!language) {
            localStorage.setItem(
                ZServices.LANG.stocker_name,
                ZServices.LANG.fr
            );
            setLang(ZServices.LANG.fr);
        } else {
            setLang(language);
        }
    }, []);

    return (
        <div id="home-container">
            <span id="home-title" className="title-ft">{datas.htitle}</span>

            <div id="home-content-container">
                <div className="home-content">
                    <Button
                        handle={() => {
                            ZServices.goTo(
                                `/NYRU/#/${datas.vfx_target}`
                            );
                        }}
                        text={
                            ZServices.isFrench(lang)
                                ? datas.trad_vfx.fr
                                : datas.trad_vfx.en
                        }
                    />
                    <Button
                        handle={() => {
                            ZServices.goTo(
                                `/NYRU/#/${datas.sfx_target}`
                            );
                        }}
                        text={
                            ZServices.isFrench(lang)
                                ? datas.trad_sfx.fr
                                : datas.trad_sfx.fr
                        }
                    />
                    <Button
                        handle={() => {
                            ZServices.goTo(
                                `/NYRU/#/${datas.gfx_target}`
                            );
                        }}
                        text={
                            ZServices.isFrench(lang)
                                ? datas.trad_gfx.fr
                                : datas.trad_gfx.fr
                        }
                    />
                </div>

                <div className="home-content">
                    <Button
                        handle={() => {
                            ZServices.goTo(
                                `/NYRU/#/${datas.vis_target}`
                            );
                        }}
                        text={
                            ZServices.isFrench(lang)
                                ? datas.trad_vis.fr
                                : datas.trad_vis.fr
                        }
                    />
                    <Button
                        handle={() => {
                            ZServices.goTo(
                                `/NYRU/#/${datas.tit_target}`
                            );
                        }}
                        text={
                            ZServices.isFrench(lang)
                                ? datas.trad_tit.fr
                                : datas.trad_tit.en
                        }
                    />
                    <Button
                        handle={() => {
                            ZServices.goTo(
                                `/NYRU/#/${datas.abo_target}`
                            );
                        }}
                        text={
                            ZServices.isFrench(lang)
                                ? datas.trad_abo.fr
                                : datas.trad_abo.en
                        }
                    />
                </div>
            </div>

            <div id="home-desc-term-container">
                <span className="home-desc-term">
                    {`VFX = ${
                        ZServices.isFrench(lang)
                            ? datas.expl_vfx.fr
                            : datas.expl_vfx.en
                    }`}
                </span>
                <span className="home-desc-term">
                    {`SFX = ${
                        ZServices.isFrench(lang)
                            ? datas.expl_sfx.fr
                            : datas.expl_sfx.en
                    }`}
                </span>
                <span className="home-desc-term">
                    {`GFX = ${
                        ZServices.isFrench(lang)
                            ? datas.expl_gfx.fr
                            : datas.expl_gfx.en
                    }`}
                </span>
            </div>
        </div>
    );
}
