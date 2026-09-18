import { useState, type ReactNode } from 'react';
import { DjContext } from '../context/dj';
import { useDjSet } from '../hooks/useDjSet';

// Lives above the routes so the music keeps playing between pages.
export default function DjProvider({ children }: { children: ReactNode }) {
  const dj = useDjSet();
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  return (
    <DjContext.Provider value={{ ...dj, slot, setSlot }}>
      {children}
    </DjContext.Provider>
  );
}
