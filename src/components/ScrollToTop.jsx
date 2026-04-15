import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}