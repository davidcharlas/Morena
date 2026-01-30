import React from 'react'
import SectionTitle from './SectionTitle'
import "../recentpost.css"

export default function RecentPosts() {
    const recentPostsArr = [
        {
            img: "recent-1",
            title: "Stores see a lack of customers as everything goes online",
            posted: "October 12, 2024",
            category: "DESIGN"
        },
        {
            img: "recent-2",
            title: "Great time at the river! What a perfect way to cool off on a hot summer day.",
            posted: "October 12, 2024",
            category: "SPORT"
        },
        {
            img: "recent-3",
            title: "Stores see a lack of customers as everything goes online",
            posted: "October 12, 2024",
            category: "SPAIN"
        },
        {
            img: "recent-4",
            title: "Stores see a lack of customers as everything goes online",
            posted: "October 12, 2024",
            category: "SPAIN"
        },
        {
            img: "recent-5",
            title: "Stores see a lack of customers as everything goes online",
            posted: "October 12, 2024",
            category: "SPAIN"
        },
        {
            img: "recent-6",
            title: "Stores see a lack of customers as everything goes online",
            posted: "October 12, 2024",
            category: "SPAIN"
        },
    ]

    return (
        <div>
            <div style={{ marginBottom: "30px" }}>
                <div style={{marginLeft:"50px",marginTop: "50px"}}><SectionTitle title={"Recent Posts _"} /></div>
            </div>
            <div className="recent-post">
                {recentPostsArr.map((item, index) => (
                    <div key={index} className="recent-post-card">
                        <img src={`/imgs/${item.img}.jpg`} alt={item.title} />
                        <div className="menu-card-meta">
                            <span>{item.category}</span>
                            {item.posted}
                        </div>
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}