import BlogSection from "./BlogSection";
import SectionTitle from "./SectionTitle";


export default function EditorCard() {
    const cardArray = [
        {
            img: "car-1",
            title: "Moving through: the everyday urban jungle of your city",
            bgc: "#FFE1DF",
            posted: "August 04, 2024",
        },
        {
            img: "car-2",
            title: "Is Britain's likely next leader a great brain?",
            bgc: "#F1F4F9",
            posted: "August 04, 2024",
        },
    ];

    return (
        <>
            <div className="container">
                <section className="editor">
                    <div className="editor-title"><SectionTitle title={"Editor Pick's"} /></div>
                    <div className="editor-card">
                        {cardArray.map((card, index) => (
                            <article
                                className="editor-card-item d-flex flex-column flex-lg-row"
                                key={index}
                                style={{ backgroundColor: card.bgc }}
                            >
                                <img
                                    src={`/imgs/${card.img}.jpg`}
                                    alt={card.title}
                                    className="editor-img"
                                />

                                <div className="card-details" style={{ display: "grid" }}>
                                    <div className="menu-card-meta">
                                        <span style={{ backgroundColor: "white" }}>cars</span> {card.posted}
                                    </div>
                                    <h3 className="hover-border-bottom">{card.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
