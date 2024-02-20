import YTBFrame from "../YTBFrame/YTBFrame";
import ZServices from "../../services/services";
import "./Package.scss";
import { useEffect, useState } from "react";

export default function Package({ name, data, isUniqueText = false }) {
    const [lang, setLang] = useState(ZServices.LANG.fr);

    useEffect(() => {
        const language = localStorage.getItem(ZServices.LANG.stocker_name);
        setLang(language || ZServices.LANG.fr);
    }, []);

    return (
        <div id="package-container">
            <span className="title-ft" id="package-title">
                {ZServices.isFrench(lang) ? name.fr : name.en}
            </span>

            {isUniqueText ? (
                <div id="unique-text-container">
                    {
                        <span id="text-ft unique-text">
                            {ZServices.isFrench(lang)
                                ? data.text.fr
                                : data.text.en}
                        </span>
                    }
                </div>
            ) : (
                <div id="package-content-list-container">
                    {data
                        ? Object.keys(data).map((i, k1) => (
                            <div className="package-content-list" key={k1}>
                                {data[i].is_img ? (
                                    <div className="package-content-list-video-container">
                                        <img
                                            src={data[i].url}
                                            alt={`Image of ${data[i].name_en}`}
                                        />
                                    </div>
                                ) : (
                                    <div className="package-content-list-video-container">
                                        <YTBFrame
                                            link={`https://cdpn.io/pen/debug/oNPzxKo?v=${data[i].url}`}
                                        />
                                    </div>
                                )}

                                <div className="package-content-list-desc-container">
                                    <div className="package-content-list-desc-name-container">
                                        <span className="text-ft package-content-list-desc-name">
                                            {ZServices.isFrench(lang)
                                                ? data[i].name_fr
                                                : data[i].name_en}
                                        </span>
                                    </div>

                                    {data[i] ? (
                                        <div className="package-content-list-desc-points-container">
                                            {Object.keys(
                                                ZServices.isFrench(lang)
                                                    ? data[i].desc_fr
                                                    : data[i].desc_en
                                            ).map((j, k2) => (
                                                <span
                                                    className="text-ft package-content-list-desc-points"
                                                    key={k2}
                                                >
                                                    -{" "}
                                                    {ZServices.isFrench(lang)
                                                        ? data[i].desc_fr[j]
                                                        : data[i].desc_en[j]}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))
                        : null}
                </div>
            )}
        </div>
    );
}
