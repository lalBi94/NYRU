import "./Button.scss";
import "hover.css";

export default function Button({ text, logo, handle, fc, bg }) {
    return (
        <button
            style={{ color: fc || null, background: bg || null }}
            className="button-container hvr-grow"
            onClick={handle}
        >
            {text ? <span>{text}</span> : logo}
        </button>
    );
}