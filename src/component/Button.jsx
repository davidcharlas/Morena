import "../button.css"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Button({ text, textColor, bgColor }) {
    return (
        <button
            className="more-posts-btn"
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
        >
            {text}
            {/* <span className="arrow">→</span> */}
            <FaArrowRightLong fontWeight={"bold"}/>
            {/* <i class="fa-solid fa-arrow-right-long"></i> */}
        </button>
    )
}
