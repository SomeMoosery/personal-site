import { useCallback, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EXIT_MS, PageTransitionContext } from '../context/pageTransition';

// Lets the current page swipe its photos away before the route actually changes.
export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // The page we're leaving. Once the route changes this no longer matches, so `leaving` resets itself.
  const [leavingFrom, setLeavingFrom] = useState<string | null>(null);
  const leaving = leavingFrom === pathname;

  const go = useCallback((path: string) => {
    if (path === pathname || leaving) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      navigate(path);
      return;
    }
    setLeavingFrom(pathname);
    window.setTimeout(() => navigate(path), EXIT_MS);
  }, [pathname, leaving, navigate]);

  return (
    <PageTransitionContext.Provider value={{ leaving, go }}>
      {children}
    </PageTransitionContext.Provider>
  );
}
