import React from "react";

export default function Article({ img, title }) {
    return (
        <div className="article-post">
            <img src={`/imgs/${img}.jpg`} alt={title} />
            <div className="menu-card-meta"><span style={{ backgroundColor: "white" }}>design</span> August 06, 2024</div>
            <h3 className="hover-border-bottom">{title}</h3>
        </div>
    );
}
