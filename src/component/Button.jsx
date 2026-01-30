import React from 'react'
import "../button.css"
export default function Button({text, textColor, bgColor}) {
    return (
        <button
            className="more-posts-btn"
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
        >
            {text}
            <span className="arrow">→</span>
        </button>
    )
}
