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
            <div className="container row flex-lg-column p-0 gx-4">
                <div className="editors-left-card col-6">
                    <article>
                        <div className="leftside row">
                            <div className="col col-sm-12 d-flex flex-lg-row p-0 justify-content-between flex-md-column flex-sm-column">
                                <div className="col left-card-meta d-flex flex-column align-items-center mt-5">
                                <div className="menu-card-meta"><span>spain</span> August 11, 2024</div>
                                <h3 className="hover-border-bottom">Most Beautiful Things You Can But on Black Friday</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendu…</p>
                            </div>
                            <div className="left-card-img col col-sm-12 grow">
                                <img className="" src="/imgs/editor-1.jpg" alt="img" />
                            </div>
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
