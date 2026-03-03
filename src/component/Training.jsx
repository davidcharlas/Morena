import React from 'react'
import SectionTitle from './SectionTitle'
import "../training.css"
import PostHorizontal from './PostHorizontal'

export default function Training() {
    const trainingArr = [
        {
            img: "news-1",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },
        {
            img: "news-2",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },
        {
            img: "news-3",
            title: "Disney Announces Plans for Theme Park on the Moon",
            posted: "August 10, 2024"
        },
    ]
    return (
        <div className='training-container'>
            <SectionTitle title={"Training"} />
            <div className="training-card">
                <div className="life-style-container">
                    <img src="/imgs/training-1.jpg" alt="" />
                    <div className="life-style-1-content">
                        <div style={{ color: "white" }} className="menu-card-meta"><span>business</span> August 11, 2024</div>
                        <h3 style={{ width: "90%" }}>Everything You Wanted to Know About mega city's</h3>
                    </div>
                </div>
            </div>
            <div className='training-section-posts'>
                {trainingArr.map((item, index) => (
                    <PostHorizontal
                        key={index}
                        img={item.img}
                        title={item.title}
                        posted={item.posted}
                        reverse={true}
                    />
                ))}
            </div>
        </div>
    )
}
