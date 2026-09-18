import { createContext, useContext } from 'react';

// How long the outgoing page gets to animate its photos away before the route changes
export const EXIT_MS = 600;

export type PageTransitionValue = {
  // True while the current page plays its exit animation
  leaving: boolean;
  go: (path: string) => void;
};

export const PageTransitionContext = createContext<PageTransitionValue | null>(null);

export function usePageTransition() {
  const value = useContext(PageTransitionContext);
  if (!value) throw new Error('usePageTransition must be used inside <PageTransitionProvider>');
  return value;
}
