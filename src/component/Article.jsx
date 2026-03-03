
export default function Article({ img, title, bgc, tColor }) {
    return (
        <div className="article-post">
            <img src={`/imgs/${img}.jpg`} alt={title} />
            <div style={{color: `${tColor}`}} className="menu-card-meta"><span style={{ backgroundColor: `${bgc}`, }}>design</span> August 06, 2024</div>
            <h3 className="hover-border-bottom">{title}</h3>
        </div>
    );
}
