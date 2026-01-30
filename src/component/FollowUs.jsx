import React from 'react'
import SectionTitle from './SectionTitle'
import '../follow.css'

export default function FollowUs() {
    const socialMedia = [
        {
            svg: "dribble",
            followers: "73.6"
        },
        {
            svg: "facebook",
            followers: "73.6"
        },
        {
            svg: "instagram",
            followers: "73.6"
        },
        {
            svg: "linkedin",
            followers: "73.6"
        },
        {
            svg: "twitter",
            followers: "73.6"
        },
        {
            svg: "youtube",
            followers: "73.6"
        },
    ]
    return (
        <div className='follow-us-div'>
            <SectionTitle title={"Follow Us"} />
            <div className="follow-us-cards">
                {socialMedia.map((item, index) => (
                    <div key={index} className="follow-us-card">
                        <div className="follow-us-card-icon">
                            <img src={`/svgs/${item.svg}.png`} alt="Social Media Icon" />
                        </div>
                        <div className="follow-us-card-followers">
                            <span>{item.followers}k Followers</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
