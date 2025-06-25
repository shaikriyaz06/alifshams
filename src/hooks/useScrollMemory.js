import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollMemory = () => {
  const location = useLocation();
  const scrollPositions = useRef(new Map());
  const isNavigating = useRef(false);

  useEffect(() => {
    const currentPath = location.pathname;
    const savedPosition = scrollPositions.current.get(currentPath);

    if (savedPosition !== undefined) {
      // Restore scroll position for visited routes
      setTimeout(() => {
        window.scrollTo(0, savedPosition);
      }, 0);
    } else {
      // Scroll to top for new routes
      window.scrollTo(0, 0);
    }

    // Save scroll position when leaving the page
    const handleBeforeUnload = () => {
      scrollPositions.current.set(currentPath, window.scrollY);
    };

    const handleScroll = () => {
      if (!isNavigating.current) {
        scrollPositions.current.set(currentPath, window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  // Mark navigation start
  useEffect(() => {
    isNavigating.current = true;
    const timer = setTimeout(() => {
      isNavigating.current = false;
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}; 