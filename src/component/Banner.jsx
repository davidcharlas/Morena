
export default function Banner() {
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
                <div className="card-item">
                    <img src="/imgs/banner-1.jpg" alt="banner-img" />
                    <h3>Back to school - Captions and ideas for schools and universities</h3>
                </div>
                <div className="card-item">
                    <img src="/imgs/banner-2.jpg" alt="banner-img" />
                    <h3>People Break Down Covid 19 Home Quarantine Rule.</h3>
                </div>
                <div className="card-item">
                    <img src="/imgs/banner-3.jpg" alt="banner-img" />
                    <h3>Duis tempor purus rutrum, tincidunt lacus.</h3>
                </div>
                <div className="card-item">
                    <img src="/imgs/banner-4.jpg" alt="banner-img" />
                    <h3>Winter Fashion Trends: They only looks you need</h3>
                </div>
            </div>
        </div>
    )
}
