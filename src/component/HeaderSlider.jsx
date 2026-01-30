import React from 'react'

export default function HeaderSlider() {
  return (
    <div class="slider-container">
      <div class="breaking-news-badge">
        <img src="/rss.png" alt="" width={"24px"}/>
        <span>Breaking News</span>
      </div>

      <div class="slider-content">
        <div class="text-wrapper">
          <div class="news-item"><span className='hover-border-bottom'>Why is Child Development So Important in the Early Years</span></div>
          <div class="news-item"><span className='hover-border-bottom'>Sed odio eros, dictum non augue et, tincidunt.</span></div>
          <div class="news-item"><span className='hover-border-bottom'>Business Discussion Tips To Have Receptive Communications</span></div>
          <div class="news-item"><span className='hover-border-bottom'>Breaking: New Technology Revolutionizes Industry Standards</span></div>
          <div class="news-item"><span className='hover-border-bottom'>Global Markets React to Economic Policy Changes</span></div>
        </div>
      </div>

      <div class="slider-controls">
        <button class="nav-button" >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
        <button class="nav-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
