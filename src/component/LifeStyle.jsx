import React from 'react'
import SectionTitle from './SectionTitle'
import PostHorizontal from './PostHorizontal'
import FollowUs from './FollowUs'
import DailyNews from './DailyNews'
import TravelNews from './TravelNews'
import TopCategory from './TopCategory'
import RecentPosts from './RecentPosts'
import Button from './Button'
import Training from './Training'
import SportsNews from './SportsNews'
// import '../lifestyle.css'

export default function LifeStyle() {
    const horzontalArr = [
        {
            title: "Go For Western Economy With These Pioneering",
            posted: "July 23, 2024",
            img: "life-style-2"
        },
        {
            title: "Apple wants the same apps to run on iPhones and macs!",
            posted: "May 23, 2024",
            img: "life-style-3"
        },
        {
            title: "Duis tempor purus rutrum, tincidunt lacus.",
            posted: "March 30, 2024",
            img: "life-style-4"
        },
        {
            title: "Winter Fashion Trends: The only looks you need",
            posted: "February 23, 2024",
            img: "life-style-5"
        },
    ]
    return (
        <section className="container lifestyle d-flex flex-column flex-xl-row gap-4">

            <div>
                <div><SectionTitle title={"Lifestyle"} /></div>
                <div style={{ display: 'flex' }}>
                    <div className="life-style-container d-flex flex-xl-row flex-sm-column">
                        <div>
                            <img src="/imgs/life-style-1.jpg" alt="" />
                            <div className="life-style-1-content">
                                <div style={{ color: "white" }} className="menu-card-meta"><span>Lifestyle</span> August 11, 2024</div>
                                <h3 className="hover-border-bottom">Study Finds Link Between Social Media Use and Decling Mental Health in Teens</h3>
                            </div>
                        </div>
                        <div className="horizonta-posts">
                            {horzontalArr.map((item, index) => (
                                <PostHorizontal
                                    key={index}
                                    title={item.title}
                                    posted={item.posted}
                                    img={item.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="travel-news">
                    <TravelNews />
                </div>
                <div>
                    <RecentPosts />
                </div>
                <div className="read-more-btn">
                    <Button text={"Read More"} textColor={"#e34e36"} bgColor={"#ffe1df"} />
                </div>
                <div className="sport-news">
                    <SportsNews />
                </div>
            </div>
            <div className='vertical-links'>
                <FollowUs />
                <DailyNews />
                <TopCategory />
                <Training />
                <div className="ads" style={{ marginTop: "50px" }}>
                    <div className="sponsored">
                        <span>ADVERTISEMENT</span>
                        <img width="300" height="600" src="/imgs/ads-1.jpg" alt="ADVT" />
                    </div>
                </div>
            </div>

        </section>
    )
}
