import React from 'react'
import SectionTitle from './SectionTitle'
import "../sports.css"
import Article from './Article'

export default function SportsNews() {
    const sportsNewsArr = [
        {
            img: "sports-2",
            title: "The heart of Nintendo's new console isn't the Switch"
        },
        {
            img: "sports-3",
            title: "Winter is coming. Have you ever considered going solo?"
        },
        {
            img: "sports-4",
            title: "Study Finds Link Between Social Media Use and Declining Mental Health in Teens"
        }
    ]
    return (
        <div>
            <div style={{ margin: "20px 0px" }}><SectionTitle title={"Sports News"} /></div>
            <div className="horizontal-post-card">
                <div className="horizontal-post-image">
                    <img src="/imgs/sports-1.jpg" alt="Swimming" />
                </div>
                <div className="horizontal-post-content" style={{padding:"20px"}}>
                    <div className="menu-card-meta"><span style={{ backgroundColor: "white" }}>sport</span> August 11, 2024</div>
                    <h3 className="horizontal-post-title hover-border-bottom" style={{lineHeight: "1.2", letterSpacing:"-0.9px"}}>
                        Great time at the river! What a perfect way to cool off on a hot summer day.
                    </h3>
                    <p className="horizontal-post-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendum...
                    </p>
                </div>
            </div>
            <div className="sports-articles">
                {sportsNewsArr.map((item, index) => (
                    <Article
                        key={index}
                        img={item.img}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}
