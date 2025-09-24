import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Smooth scroll as backup
    setTimeout(scrollToTop, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
