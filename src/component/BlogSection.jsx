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
            <div className="container p-0 gx-4 eleven">
                <div className="row g-0">

                    {/* LEFT FEATURED CARD */}
                    <div className="editors-left-card col-12 col-lg-6 px-0">
                        <article>
                            <div className="hzz row g-0 overflow-hidden rounded flex-row">

                                {/* TEXT - order-2 on mobile (below image), order-1 on desktop (left) */}
                                <div className="col-6 d-flex flex-column justify-content-center p-3 order-2 order-lg-1">
                                    <div className="menu-card-meta">
                                        <span>spain</span> August 11, 2016
                                    </div>
                                    <h3 className="hover-border-bottom">Most Beautiful Things You Can Buy on Black Friday</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendu…</p>
                                </div>

                                {/* IMAGE - order-1 on mobile (above text), order-2 on desktop (right) */}
                                <div className="col-12 col-sm-6 p-0 order-1 order-lg-2">
                                    <img
                                        className="w-100 h-100"
                                        src="/imgs/editor-1.jpg"
                                        alt="img"
                                        style={{ objectFit: 'cover', minHeight: '260px' }}
                                    />
                                </div>

                            </div>
                        </article>
                    </div>

                    {/* RIGHT ARTICLES - each gets col-6 so they sit side by side on desktop */}
                    <div className="col-12 col-lg-6">
                        <div className="row g-0">
                            {articleArray.map((item, index) => (
                                <div className="editor-right-blog col-12 col-sm-6" key={index}>
                                    <Article img={item.img} title={item.title} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
