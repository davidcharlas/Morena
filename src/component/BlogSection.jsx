import "../blog-section.css"
import Article from './Article'
export default function BlogSection() {
    const articleArray= [
        {
            img: "editor-2",
            title: "Stores see a lack of customers as evertyhing goes online"
        },
        {
            img: "editor-3",
            title: "Business Discussion Tips To Have Receptive Communications"
        }
    ]
    return (
        <section className="editor-section" style={{height: "451px"}}>
            <div className="editor-left-blog">
                <article>
                    <div className="leftside">
                        <div className="menu-card-meta"><span>spain</span> August 05, 2024</div>
                        <h3>Most Beautiful Things You Can But on Black Friday</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendu…</p>
                    </div>
                    <div className="rightside">
                        <img src="/imgs/editor-1.jpg" alt="" />
                    </div>
                </article>
            </div>
            <div className="editor-right-blog">
      {articleArray.map((item, index) => (
        <Article key={index} img={item.img} title={item.title}/>
      ))}
    </div>
        </section>
    )
}
