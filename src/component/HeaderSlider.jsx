import React, { useEffect, useRef, useState } from 'react'

export default function HeaderSlider() {
  const news = [
    "Why is Child Development So Important in the Early Years",
    "Sed odio eros, dictum non augue et, tincidunt.",
    "Business Discussion Tips To Have Receptive Communications",
    "Breaking: New Technology Revolutionizes Industry Standards",
    "Global Markets React to Economic Policy Changes"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  const startAutoPlay = () => {
    stopAutoPlay()
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev =>
        prev === news.length - 1 ? 0 : prev + 1
      )
    }, 4000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const nextNews = () => {
    setCurrentIndex(prev =>
      prev === news.length - 1 ? 0 : prev + 1
    )
    startAutoPlay()
  }

  const prevNews = () => {
    setCurrentIndex(prev =>
      prev === 0 ? news.length - 1 : prev - 1
    )
    startAutoPlay()
  }

  useEffect(() => {
    startAutoPlay()
    return stopAutoPlay
  }, [])

  return (
    <div
      className="slider-container"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="breaking-news-badge">
        <img src="/rss.png" alt="" width="24px" />
        <span>Breaking News</span>
      </div>

      <div className="slider-content">
        <div className="text-wrapper">
          {news.map((item, index) => (
            <div
              key={index}
              className={`news-item ${index === currentIndex ? 'active' : ''}`}
            >
              <span className="hover-border-bottom">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button className="nav-button" onClick={prevNews}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button className="nav-button" onClick={nextNews}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
