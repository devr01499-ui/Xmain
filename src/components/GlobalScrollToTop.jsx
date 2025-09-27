import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GlobalScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Additional scroll to top attempts
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Multiple attempts to ensure scroll to top
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 25);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 200);
    setTimeout(scrollToTop, 500);

    // Force scroll to top on any remaining scroll
    const forceScroll = () => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    setTimeout(forceScroll, 50);
    setTimeout(forceScroll, 100);
    setTimeout(forceScroll, 200);
    setTimeout(forceScroll, 500);

    // Final aggressive scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // For mobile browsers
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 1000);

  }, [pathname]);

  // Also scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return null;
};

export default GlobalScrollToTop;
