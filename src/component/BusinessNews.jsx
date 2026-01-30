import React from 'react'
import PostHorizontal from './PostHorizontal'
import SectionTitle from './SectionTitle'

export default function BusinessNews() {
  return (
    <div className='business-news-container'>
      <div className="business-news">
        <div style={{ marginBottom: "20px" }}><SectionTitle title={"Business News"} /></div>
        <div className="life-style-container" style={{ margin: "0", height: "auto" }}>
          <img src="/imgs/business-1.jpg" alt="" style={{ width: "396px", height: "278px" }} />
          <div className="life-style-1-content" style={{ width: "390px", top: "150px" }}>
            <div style={{ color: "white" }} className="menu-card-meta"><span>business</span> August 11, 2024</div>
            <h3 style={{ width: "90%" }}>Everything You Wanted to Know About mega city's</h3>
          </div>
        </div>
        <div className="small-list">
          <PostHorizontal title={"New Study Reveals Surprising Benefits of Meditation on Brain Health"} img={"training-2"} posted={"August 04, 2024"} reverse={true} />
          <PostHorizontal title={"Go For Western Economy With These Pioneering"} img={"training-3"} posted={"August 03, 2024"} reverse={true} />
        </div>
      </div>
      <div className="sponsored">
        <span>SPONSORED</span>
        <img src="/imgs/morena.png" alt="" />
      </div>
      <div className="pet-friends">
        <div className="business-news">
          <div style={{ marginBottom: "20px" }}><SectionTitle title={"Pet Friends"} /></div>
          <div className="life-style-container" style={{ margin: "0", height: "auto" }}>
            <img src="/imgs/pet-1.jpg" alt="" style={{ width: "396px", height: "278px" }} />
            <div className="life-style-1-content" style={{ width: "390px", top: "150px" }}>
              <div style={{ color: "white" }} className="menu-card-meta"><span>business</span> August 11, 2024</div>
              <h3 style={{ width: "90%" }}>Everything You Wanted to Know About mega city's</h3>
            </div>
          </div>
          <div className="small-list">
            <PostHorizontal title={"New Study Reveals Surprising Benefits of Meditation on Brain Health"} img={"news-2"} posted={"August 04, 2024"} reverse={true} />
            <PostHorizontal title={"Go For Western Economy With These Pioneering"} img={"news-3"} posted={"August 03, 2024"} reverse={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
