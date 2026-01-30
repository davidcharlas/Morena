import React from "react";

export default function PostHorizontal({ title, img, posted, reverse }) {
  return (
    <div className={`horizontal-post ${reverse ? 'reverse' : ''}`}>
      <img src={`/imgs/${img}.jpg`} alt={title} />
      <div className="horizontal-post-content">
        <h4 className="hover-border-bottom">{title}</h4>
        <span>{posted}</span>
      </div>
    </div>
  );
}