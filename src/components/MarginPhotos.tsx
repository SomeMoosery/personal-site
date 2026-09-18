import { useEffect, useRef, type CSSProperties } from 'react';
import type { MarginPhoto } from '../data/photos';
import { usePageTransition } from '../context/pageTransition';

// Photos parked in the page gutters. They slide in from the sides on arrival, back out
// when the visitor navigates away, and drift at their own pace while scrolling.
// Only shown from xl up, where the gutters are wide enough to hold them.
export default function MarginPhotos({ photos }: { photos: MarginPhoto[] }) {
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const { leaving } = usePageTransition();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      photos.forEach((p, i) => {
        const node = nodes.current[i];
        if (node) node.style.transform = `translate3d(0, ${-y * p.depth}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [photos]);

  return (
    <div className="hidden xl:block absolute inset-0 z-10 pointer-events-none">
      {photos.map((p, i) => (
        <div
          key={p.src}
          ref={(el) => { nodes.current[i] = el; }}
          className="absolute"
          style={{ top: p.top, [p.side]: p.inset, width: p.width }}
        >
          <figure
            className={`m-0 ${leaving ? 'margin-out' : 'margin-in'}`}
            style={{
              '--in-x': p.side === 'left' ? '-40vw' : '40vw',
              '--in-r': p.side === 'left' ? '-8deg' : '8deg',
              animationDelay: leaving ? `${i * 40}ms` : `${150 + i * 70}ms`,
            } as CSSProperties}
          >
            <img src={p.src} alt={p.alt} className="block w-full h-auto" />
          </figure>
        </div>
      ))}
    </div>
  );
}
