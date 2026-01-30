import React, { useState, useEffect } from 'react';
import "../scroller.css"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 100vh (viewport height)
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTop;