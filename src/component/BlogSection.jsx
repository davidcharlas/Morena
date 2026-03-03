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
        <section className="container-fluid editor-section">
            <div className="container p-0 gx-4 eleven">
                <div className="row g-2 g-lg-5 g-md-5">

                    {/* LEFT FEATURED CARD */}
                    <div className="editors-left-card col-12 col-xl-6 px-0">
                        <article>
                            <div className="hzz row g-0 overflow-hidden rounded flex-row justify-content-center">

                                <div className="col-12 col-lg-12 col-xl-6 d-flex flex-column justify-content-center order-2 order-lg-1" style={
                                    {
                                        gap: "12px",
                                        padding: "35px",
                                    }}>
                                    <div className="menu-card-meta">
                                        <span>spain</span> August 11, 2016
                                    </div>
                                    <h3 className="hover-border-bottom fs-20">Most Beautiful Things You Can Buy on Black Friday</h3>
                                    <p className="c-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendu…</p>
                                </div>

                                <div className="col-12 col-lg-6 p-0 order-1 order-lg-2 d-flex justify-content-end">
                                    <img
                                        className="w-100 h-100 imgss"
                                        src="/imgs/editor-1.jpg"
                                        alt="img"
                                        style={{ objectFit: 'cover', minHeight: '260px' }}
                                    />
                                </div>

                            </div>
                        </article>
                    </div>

                    {/* RIGHT ARTICLES */}
                    <div className="col-12 col-xl-6">
                        <div className="row g-0">
                            {articleArray.map((item, index) => (
                                <div className="editor-right-blog col-12 col-sm-6" key={index}>
                                    <Article img={item.img} title={item.title} bgc={"#fff"} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}