import "./YTBFrame.scss";

export default function YTBFrame({link}) {
    return (
        <iframe
            src={link}
            className="ytb-frame"
            title="YouTube video player"
            frameborder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    );
}
