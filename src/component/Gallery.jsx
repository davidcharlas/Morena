import React from 'react'
import "../gallery.css"
import SectionTitle from './SectionTitle'
// import PostHorizontal from './PostHorizontal'
import PostHorizontal from './PostHorizontal'

export default function Gallery() {
    const slContArr = [
        {
            img: "slcont-1",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },
        {
            img: "slcont-2",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },
        {
            img: "slcont-3",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },
        {
            img: "slcont-4",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },
        {
            img: "slcont-5",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },

    ]
    return (
        <section className="gallery">
            <div className="gallery-content">
                <div style={{ marginBottom: "14px", color: "white"}}><SectionTitle title={"Gallery _"} /></div>
                <div className="gallery-items">
                    <div className="gallery-thumbnail">
                        <img src="/imgs/gallery-1.jpg" alt="Gallery Image 1" />
                        <div className="gallery-overlay">
                            <div style={{ display: "block" }} className="menu-card-meta"><span>business</span> August 05, 2024</div>
                            <h3>Go For Western Economy With These Pioneering</h3>
                        </div>
                    </div>
                    <div className="gallery-gradient">
                        <div className='sl-cont' style={{color: "white"}}>
                            {slContArr.map((item, index) => (
                                <PostHorizontal
                                    key={index}
                                    title={item.title}
                                    posted={item.posted}
                                    img={item.img}
                                    reverse={false}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
