import { Link, type LinkProps } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { usePageTransition } from '../context/pageTransition';

// A Link that lets the current page animate out first. Modified clicks (new tab etc.) behave normally.
export default function TransitionLink({ to, onClick, ...rest }: LinkProps & { to: string }) {
  const { go } = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    go(to);
  };

  return <Link to={to} onClick={handleClick} {...rest} />;
}
