import "../blog-section.css"
import Article from './Article'
export default function BlogSection() {
    const articleArray = [
        {
            img: "editor-2",
            title: "Stores see a lack of customers as everything goes online"
        },
        {
            img: "editor-3",
            title: "Business Discussion Tips To Have Receptive Communications"
        }
    ]
    return (
        <section className="editor-section container-fluid">
            <div className="container row p-0 gx-4 eleven">
                <div className="editors-left-card col-6">
                    <article>
                        <div className="hzz row g-0 overflow-hidden rounded flex-sm-column flex-lg-row">

                            {/* Text - drives the height */}
                            <div className="col-6 d-flex flex-column justify-content-center p-2">
                                <div className="menu-card-meta"><span>spain</span> August 11, 2024</div>
                                <h3 className="hover-border-bottom">Most Beautiful Things You Can But on Black Friday</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendu…</p>
                            </div>

                            {/* Image - stretches to match text height */}
                            <div className="col-6 p-0">
                                <img
                                    className="w-100 h-100"
                                    src="/imgs/editor-1.jpg"
                                    alt="img"
                                    style={{ objectFit: 'cover', width: '286px', height: '310px'}}
                                />
                            </div>

                        </div>
                    </article>
                </div>
                <div className="editor-right-blog col-lg-6">
                    {articleArray.map((item, index) => (
                        <Article key={index} img={item.img} title={item.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}
