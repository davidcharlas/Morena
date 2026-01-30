import React from 'react'
import SectionTitle from './SectionTitle'
import PostHorizontal from './PostHorizontal'

export default function DailyNews() {
    const newsArr = [
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
        <div className='daily-news-wrapper'>
            <SectionTitle title={"Daily News"} />
            <div className="daily-news-container">
                {newsArr.map((item, index) => (
                    <PostHorizontal
                        key={index}
                        title={item.title}
                        posted={item.posted}
                        img={item.img}
                        reverse={true}
                    />
                ))
                }
            </div>
        </div>
    )
}
