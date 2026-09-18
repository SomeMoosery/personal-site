import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { DECKS_H, DECKS_W, useDj } from '../context/dj';
import { usePageTransition } from '../context/pageTransition';

type DotLottieElement = HTMLElement & { dotLottie?: { play: () => void; stop: () => void } };
type Mode = 'slot' | 'docked';

const DOCK_MARGIN = 16;
const FLIP_MS = 650;

// The decks render once for the whole app so the Lottie never remounts.
// On the homepage they sit over the hero's slot; everywhere else they dock bottom-right.
export default function Decks() {
  const { status, track, toggle, slot } = useDj();
  const { leaving } = usePageTransition();
  const { pathname } = useLocation();
  const docked = pathname !== '/' || leaving;
  const isPlaying = status === 'playing';

  const outer = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<DotLottieElement>(null);
  const slotPagePos = useRef<{ top: number; left: number } | null>(null);
  const lastMode = useRef<Mode | null>(null);

  // Keep the decks spinning only while music is playing
  useEffect(() => {
    const player = lottieRef.current?.dotLottie;
    if (!player) return;
    if (isPlaying) player.play();
    else player.stop();
  }, [isPlaying]);

  useLayoutEffect(() => {
    const el = outer.current;
    if (!el) return;

    const placeOverSlot = () => {
      if (!slot) return;
      const r = slot.getBoundingClientRect();
      slotPagePos.current = { top: r.top + window.scrollY, left: r.left + window.scrollX };
      el.style.top = `${slotPagePos.current.top}px`;
      el.style.left = `${slotPagePos.current.left}px`;
    };

    const dockRect = () => ({
      left: document.documentElement.clientWidth - DOCK_MARGIN - DECKS_W,
      top: document.documentElement.clientHeight - DOCK_MARGIN - DECKS_H,
    });

    if (docked) {
      el.style.top = '';
      el.style.left = '';
    } else {
      placeOverSlot();
    }

    // FLIP: jump to the new spot, then animate from where it visibly was.
    const to: Mode | null = docked ? 'docked' : slot ? 'slot' : null;
    const from = lastMode.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (from && to && from !== to && !reduced) {
      const first = from === 'docked'
        ? dockRect()
        : slotPagePos.current && { left: slotPagePos.current.left - window.scrollX, top: slotPagePos.current.top - window.scrollY };
      if (first) {
        const last = el.getBoundingClientRect();
        el.animate(
          [{ transform: `translate(${first.left - last.left}px, ${first.top - last.top}px)` }, { transform: 'none' }],
          { duration: FLIP_MS, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' },
        );
      }
    }
    if (to) lastMode.current = to;

    if (docked || !slot) return;
    const observer = new ResizeObserver(placeOverSlot);
    observer.observe(slot);
    observer.observe(document.body);
    window.addEventListener('resize', placeOverSlot);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', placeOverSlot);
    };
  }, [docked, slot]);

  const hidden = !docked && !slot;

  return (
    <div
      ref={outer}
      className={`decks-dock ${docked ? 'is-docked' : ''}`}
      style={{ width: DECKS_W, height: DECKS_H, visibility: hidden ? 'hidden' : undefined }}
    >
      <div className="decks-body">
        <button
          type="button"
          onClick={toggle}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? 'Stop the music' : 'Play a few songs'}
          className="decks overflow-hidden bg-transparent border-0 p-0"
          style={{ height: '175px', marginBottom: '-60px' }}
        >
          <dotlottie-wc
            ref={lottieRef}
            src="https://lottie.host/dd10aa3e-1c62-43de-b554-80ef77c2de40/yCbNKVsaDn.lottie"
            style={{ width: '300px', height: '300px', marginTop: '-85px', pointerEvents: 'none' }}
            loop
          />
        </button>
      </div>
      {/* Outside the scaled body so it stays readable when docked; re-keyed to fade in at its new spot */}
      <div key={docked ? 'docked' : 'slot'} className="decks-label font-heading font-bold text-red" aria-live="polite">
          {status === 'error' ? (
            <p className="text-lg">The decks are down. Try again?</p>
          ) : isPlaying && track ? (
            <>
              <p className="text-xs uppercase tracking-wide text-green">Now playing</p>
              <a
                href={track.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base leading-tight truncate hover:text-green transition-colors"
              >
                {track.title} · {track.artist}
              </a>
            </>
          ) : (
            !docked && <p className="text-lg">Tap the decks and set the mood</p>
          )}
      </div>
    </div>
  );
}
