import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top when pathname changes
    window.scrollTo(0, 0);
    
    // Additional scroll to top with smooth behavior
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Multiple attempts to ensure scroll to top works
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 150);
    setTimeout(scrollToTop, 300);
    
    // Force scroll to top on any remaining scroll
    const forceScroll = () => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    };
    
    setTimeout(forceScroll, 100);
    setTimeout(forceScroll, 200);
    
    // Additional aggressive scroll to top for all browsers
    const aggressiveScroll = () => {
      // Try multiple methods to ensure scroll to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // For mobile browsers
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    };
    
    // Run aggressive scroll multiple times
    setTimeout(aggressiveScroll, 10);
    setTimeout(aggressiveScroll, 25);
    setTimeout(aggressiveScroll, 50);
    setTimeout(aggressiveScroll, 100);
    setTimeout(aggressiveScroll, 200);
    setTimeout(aggressiveScroll, 500);
    
    // Final check and force scroll
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 1000);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;
