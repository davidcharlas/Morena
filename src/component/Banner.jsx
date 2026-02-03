
export default function Banner() {
    const banners = [
        {
            img: "/imgs/banner-1.jpg",
            title: "Back to school - Captions and ideas for schools and universities",
        },
        {
            img: "/imgs/banner-2.jpg",
            title: "People Break Down Covid 19 Home Quarantine Rule.",
        },
        {
            img: "/imgs/banner-3.jpg",
            title: "Duis tempor purus rutrum, tincidunt lacus.",
        },
        {
            img: "/imgs/banner-4.jpg",
            title: "Winter Fashion Trends: They only looks you need",
        },
    ];
    return (
        <div className="banner">
            <div className="banner-post">
                <div className="banner-meta">
                    <div style={{ color: "white" }} className="menu-card-meta"><span>business</span> August 11, 2024</div>
                </div>
                <div className="banner-title">
                    <h3><a className="hover-border-bottom" href="#">New Study Reveals Surprising Benefits of <br /> Meditation on Brain Health</a></h3>
                </div>
                <div className="banner-discription">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendum pretium. Suspendisse ligula neque, ultri...</p>
                </div>
            </div>
            <div className="banner-card">
                {banners.map((banner, index) => (
                    <div key={index} className="card-item">
                        <img src={banner.img} alt="banner-img" />
                        <h3>{banner.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
