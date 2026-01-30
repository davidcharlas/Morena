import React from 'react'
import SectionTitle from './SectionTitle'
import Article from './Article'
export default function TravelNews() {
    const articlesArr = [
        {
            title: "Events Held In paris Beautiful And Amazing Things",
            img: "travel-1",
        },
        {
            title: "Metro city's should make road with protection in mind",
            img: "travel-2",
        },
        {
            title: "Mexico City Visits and What Should Be Done in 2024",
            img: "travel-3",
        },
        
    ]
    return (
        <div>
            <div className="travel-title">
                <SectionTitle title={"Travel News"} />
            </div>
            <div className="travel-news-container">
                {articlesArr.map((item, index) => (
                    <Article key={index} img={item.img} title={item.title} />
                ))}
            </div>
        </div>
    )
}
