import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollMemory = () => {
  const location = useLocation();
  const scrollPositions = useRef(new Map());
  const isNavigating = useRef(false);

  useEffect(() => {
    // Always scroll to top for all routes
    window.scrollTo(0, 0);


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