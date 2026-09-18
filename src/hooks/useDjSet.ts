import { useCallback, useEffect, useRef, useState } from 'react';
import { PLAYLIST } from '../data/playlist';

export type Track = { title: string; artist: string; previewUrl: string; appleUrl: string };
export type DjStatus = 'idle' | 'playing' | 'error';

type Deck = { el: HTMLAudioElement; gain: GainNode };

const CROSSFADE_S = 3;
const QUICK_FADE_S = 0.4;

function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Looks up fresh 30-second preview URLs from Apple's public iTunes API. No key, no login.
async function fetchTracks(): Promise<Track[]> {
  const ids = PLAYLIST.map((t) => t.id).join(',');
  const res = await fetch(`https://itunes.apple.com/lookup?id=${ids}&entity=song&country=US`);
  if (!res.ok) throw new Error(`iTunes lookup failed: ${res.status}`);
  const { results } = (await res.json()) as {
    results: { trackId: number; previewUrl?: string; trackViewUrl?: string }[];
  };
  const byId = new Map(results.map((r) => [r.trackId, r]));
  return PLAYLIST.flatMap((entry) => {
    const hit = byId.get(entry.id);
    if (!hit?.previewUrl) return [];
    return [{ title: entry.title, artist: entry.artist, previewUrl: hit.previewUrl, appleUrl: hit.trackViewUrl ?? '' }];
  });
}

// Two decks crossfading through shuffled previews, like a tiny DJ set.
// Gain runs through Web Audio because iOS ignores HTMLAudioElement.volume.
export function useDjSet() {
  const [status, setStatus] = useState<DjStatus>('idle');
  const [track, setTrack] = useState<Track | null>(null);

  const tracks = useRef<Promise<Track[]> | null>(null);
  const queue = useRef<Track[]>([]);
  const position = useRef(0);
  const ctx = useRef<AudioContext | null>(null);
  const decks = useRef<Deck[]>([]);
  const active = useRef(0);
  const fading = useRef(false);
  const playing = useRef(false);

  // Prefetch so the first click can start audio inside the user gesture (iOS requires it).
  useEffect(() => {
    tracks.current = fetchTracks();
    tracks.current.then((list) => { queue.current = shuffle(list); }).catch(() => {});
  }, []);

  const rampTo = (deck: Deck, value: number, seconds: number) => {
    const now = ctx.current!.currentTime;
    deck.gain.gain.cancelScheduledValues(now);
    deck.gain.gain.setValueAtTime(deck.gain.gain.value, now);
    deck.gain.gain.linearRampToValueAtTime(value, now + seconds);
  };

  const load = useCallback((deckIndex: number, next: Track, fadeIn: number) => {
    const deck = decks.current[deckIndex];
    deck.el.src = next.previewUrl;
    deck.gain.gain.setValueAtTime(0, ctx.current!.currentTime);
    // If the browser refuses (autoplay policy), don't claim to be playing.
    deck.el.play().catch((err: DOMException) => {
      if (err.name !== 'NotAllowedError' || deckIndex !== active.current) return;
      playing.current = false;
      setStatus('idle');
    });
    rampTo(deck, 1, fadeIn);
    setTrack(next);
  }, []);

  const advance = useCallback((fade: number) => {
    if (!playing.current || fading.current || queue.current.length === 0) return;
    fading.current = true;
    position.current = (position.current + 1) % queue.current.length;
    const outgoing = decks.current[active.current];
    const incoming = 1 - active.current;
    load(incoming, queue.current[position.current], fade);
    rampTo(outgoing, 0, fade);
    window.setTimeout(() => outgoing.el.pause(), fade * 1000 + 50);
    active.current = incoming;
    window.setTimeout(() => { fading.current = false; }, fade * 1000);
  }, [load]);

  const ensureDecks = useCallback(() => {
    if (ctx.current) return;
    const audio = new AudioContext();
    ctx.current = audio;
    decks.current = [0, 1].map((i) => {
      const el = new Audio();
      el.crossOrigin = 'anonymous';
      el.preload = 'auto';
      const gain = audio.createGain();
      audio.createMediaElementSource(el).connect(gain).connect(audio.destination);
      el.addEventListener('timeupdate', () => {
        if (i !== active.current || !el.duration) return;
        if (el.currentTime >= el.duration - CROSSFADE_S) advance(CROSSFADE_S);
      });
      el.addEventListener('ended', () => { if (i === active.current) advance(QUICK_FADE_S); });
      el.addEventListener('error', () => { if (i === active.current && el.src) advance(QUICK_FADE_S); });
      return { el, gain };
    });
  }, [advance]);

  const start = useCallback(async () => {
    ensureDecks();
    void ctx.current!.resume();
    if (queue.current.length === 0) {
      try {
        queue.current = shuffle(await (tracks.current ?? fetchTracks()));
      } catch {
        setStatus('error');
        return;
      }
      if (queue.current.length === 0) { setStatus('error'); return; }
    }
    playing.current = true;
    setStatus('playing');
    load(active.current, queue.current[position.current], QUICK_FADE_S);
  }, [ensureDecks, load]);

  const stop = useCallback(() => {
    playing.current = false;
    setStatus('idle');
    decks.current.forEach((deck) => rampTo(deck, 0, QUICK_FADE_S));
    window.setTimeout(() => {
      if (playing.current) return;
      decks.current.forEach((deck) => deck.el.pause());
      // Next press picks up with a fresh song rather than the tail of this one.
      position.current = (position.current + 1) % Math.max(queue.current.length, 1);
    }, QUICK_FADE_S * 1000 + 50);
  }, []);

  const toggle = useCallback(() => {
    if (playing.current) stop();
    else void start();
  }, [start, stop]);

  useEffect(() => () => {
    playing.current = false;
    decks.current.forEach((deck) => deck.el.pause());
    void ctx.current?.close();
  }, []);

  return { status, track, toggle };
}
