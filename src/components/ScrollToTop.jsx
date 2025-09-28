import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Smooth scroll after a brief delay
    const smoothScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      smoothScroll();
    });
    
    // Fallback for stubborn browsers
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 100);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;
