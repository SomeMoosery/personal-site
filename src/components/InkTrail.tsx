import { useEffect, useRef } from 'react';

const LIFETIME_MS = 650;
const MAX_JUMP_PX = 140;

type Point = { x: number; y: number; t: number };

// A short red ink line that follows the cursor and dries up behind it.
// Only on fine pointers, and never when the visitor prefers reduced motion.
export default function InkTrail() {
  const svg = useRef<SVGSVGElement>(null);
  const path = useRef<SVGPathElement>(null);

  useEffect(() => {
    const host = svg.current?.parentElement;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!host || !fine || reduced) return;

    const points: Point[] = [];
    let frame = 0;

    const draw = () => {
      const now = performance.now();
      while (points.length && now - points[0].t > LIFETIME_MS) points.shift();

      if (points.length < 2) {
        path.current?.setAttribute('d', '');
        frame = 0;
        return;
      }

      // Quadratic curves through midpoints keep the line soft instead of jagged.
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length - 1; i++) {
        const mx = (points[i].x + points[i + 1].x) / 2;
        const my = (points[i].y + points[i + 1].y) / 2;
        d += ` Q ${points[i].x} ${points[i].y} ${mx} ${my}`;
      }
      const last = points[points.length - 1];
      d += ` L ${last.x} ${last.y}`;
      path.current?.setAttribute('d', d);
      frame = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // The cursor re-entering the page shouldn't draw a streak across it.
      const last = points[points.length - 1];
      if (last && Math.hypot(x - last.x, y - last.y) > MAX_JUMP_PX) points.length = 0;
      points.push({ x, y, t: performance.now() });
      if (!frame) frame = requestAnimationFrame(draw);
    };

    host.addEventListener('pointermove', onMove);
    return () => {
      host.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg ref={svg} className="absolute inset-0 w-full h-full pointer-events-none z-30" aria-hidden="true">
      <path
        ref={path}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red"
      />
    </svg>
  );
}
