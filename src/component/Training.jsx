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
            <SectionTitle title={"Training _"} />
            <div className="training-card">
                <div className="life-style-container" style={{ height: "276px"}}>
                    <img style={{ width: "380px", height: "266px" }} src="/imgs/training-1.jpg" alt="" />
                    <div className="life-style-1-content" style={{ top: "140px", width: "290px", height: "110px" }}>
                        <div style={{ color: "white" }} className="menu-card-meta"><span>business</span> August 11, 2024</div>
                        <h3 style={{ width: "90%" }}>Everything You Wanted to Know About mega city's</h3>
                    </div>
                </div>
            </div>
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
    )
}
