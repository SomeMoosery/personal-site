import { useEffect, useRef, useState } from 'react';
import { HOME_PHOTOS as PHOTOS, HOME_PILE } from '../data/photos';

// Each photo flies off its nearest side, slightly tumbling, staggered so they don't move as one sheet.
const exitStyle = (side: -1 | 1, i: number) => ({
  '--out-x': `${side * 70}vw`,
  '--out-y': `${((i * 37) % 21) - 10}vh`,
  '--out-r': `${side * (6 + (i % 3) * 5)}deg`,
  animationDelay: `${i * 15}ms`,
}) as React.CSSProperties;

type Motion = { dx: number; dy: number; px: number; py: number };

const PARALLAX_PX = 22;
const DRAG_THRESHOLD_PX = 4;

export default function PhotoScatter({ leaving = false }: { leaving?: boolean }) {
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const motion = useRef<Motion[]>(PHOTOS.map(() => ({ dx: 0, dy: 0, px: 0, py: 0 })));
  const pointer = useRef({ x: 0, y: 0 });
  const returning = useRef(false);
  const topZ = useRef(PHOTOS.length);
  const [zs, setZs] = useState(() => PHOTOS.map((_, i) => i + 1));
  const [dragging, setDragging] = useState<number | null>(null);
  const [moved, setMoved] = useState(false);

  // One rAF loop eases every photo toward the cursor-driven parallax target.
  // Writes straight to style.transform so React doesn't re-render per frame.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!reduced) window.addEventListener('pointermove', onMove);

    let frame = 0;
    const tick = () => {
      let settled = true;
      motion.current.forEach((m, i) => {
        const depth = PHOTOS[i].depth;
        m.px += (pointer.current.x * PARALLAX_PX * depth - m.px) * 0.08;
        m.py += (pointer.current.y * PARALLAX_PX * depth - m.py) * 0.08;
        if (returning.current) {
          m.dx *= 0.82;
          m.dy *= 0.82;
          if (Math.abs(m.dx) > 0.5 || Math.abs(m.dy) > 0.5) settled = false;
          else { m.dx = 0; m.dy = 0; }
        }
        const node = nodes.current[i];
        if (node) node.style.transform = `translate3d(${m.dx + m.px}px, ${m.dy + m.py}px, 0)`;
      });
      if (returning.current && settled) returning.current = false;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const bringToFront = (i: number) => {
    topZ.current += 1;
    const z = topZ.current;
    setZs((prev) => prev.map((v, j) => (j === i ? z : v)));
  };

  const onPointerDown = (i: number) => (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    returning.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
    bringToFront(i);
    setDragging(i);

    const m = motion.current[i];
    const start = { x: e.clientX, y: e.clientY, dx: m.dx, dy: m.dy };
    const target = e.currentTarget;

    const move = (ev: PointerEvent) => {
      const ox = ev.clientX - start.x;
      const oy = ev.clientY - start.y;
      if (Math.hypot(ox, oy) > DRAG_THRESHOLD_PX) setMoved(true);
      m.dx = start.dx + ox;
      m.dy = start.dy + oy;
    };
    const up = () => {
      setDragging(null);
      target.removeEventListener('pointermove', move);
      target.removeEventListener('pointerup', up);
      target.removeEventListener('pointercancel', up);
    };
    target.addEventListener('pointermove', move);
    target.addEventListener('pointerup', up);
    target.addEventListener('pointercancel', up);
  };

  const resetTable = () => {
    returning.current = true;
    setMoved(false);
  };

  return (
    <>
      {/* Desktop: scattered, draggable, drifting */}
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none" aria-label="Photos">
        {PHOTOS.map((p, i) => (
          <div
            key={p.src}
            ref={(el) => { nodes.current[i] = el; }}
            onPointerDown={onPointerDown(i)}
            className={`scatter-photo absolute pointer-events-auto touch-none select-none ${dragging === i ? 'is-dragging' : ''}`}
            style={{ ...p.pos, width: p.width, zIndex: zs[i] }}
          >
            <figure className={`m-0 ${leaving ? 'photo-out' : 'photo-in'}`} style={leaving ? exitStyle(p.pos.left ? -1 : 1, i) : { animationDelay: `${120 + i * 70}ms` }}>
              <img src={p.src} alt={p.alt} draggable={false} loading="eager" className="block w-full h-auto" />
            </figure>
          </div>
        ))}
      </div>

      {moved && !leaving && (
        <button type="button" onClick={resetTable} className="reset-table hidden lg:block absolute left-8 bottom-8 z-20">
          ↺ Reset the table
        </button>
      )}

      {/* Mobile + tablet: a tidy pile, tap to pull one forward */}
      <div className="lg:hidden relative w-full max-w-md mx-auto mt-10 aspect-[4/5]">
        {HOME_PILE.map(({ src, style }, k) => {
          const i = PHOTOS.findIndex((p) => p.src === src);
          const p = PHOTOS[i];
          return (
            <button
              key={p.src}
              type="button"
              onClick={() => bringToFront(i)}
              className="pile-photo absolute p-0 border-0 bg-transparent"
              style={{ ...style, zIndex: zs[i] }}
              aria-label={`Bring forward: ${p.alt}`}
            >
              <figure className={`m-0 ${leaving ? 'photo-out' : 'photo-in'}`} style={leaving ? exitStyle(k % 2 ? 1 : -1, k) : { animationDelay: `${120 + k * 90}ms` }}>
                <img src={p.src} alt={p.alt} draggable={false} className="block w-full h-auto" />
              </figure>
            </button>
          );
        })}
      </div>
    </>
  );
}
