import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    // Track page view
    const pageTitle = document.title || pathname;
    trackPageView(pathname, pageTitle);
  }, [pathname]);

  return null;
}
