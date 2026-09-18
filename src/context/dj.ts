import { createContext, useContext } from 'react';
import type { DjStatus, Track } from '../hooks/useDjSet';

// Footprint of the decks, shared by the hero's slot and the floating decks.
export const DECKS_W = 300;
export const DECKS_H = 170;

export type DjContextValue = {
  status: DjStatus;
  track: Track | null;
  toggle: () => void;
  // The spot in the homepage hero the decks sit over. Null on every other page.
  slot: HTMLElement | null;
  setSlot: (el: HTMLElement | null) => void;
};

export const DjContext = createContext<DjContextValue | null>(null);

export function useDj() {
  const value = useContext(DjContext);
  if (!value) throw new Error('useDj must be used inside <DjProvider>');
  return value;
}
