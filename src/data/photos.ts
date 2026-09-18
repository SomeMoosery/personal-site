// Every photo on the site lives here, and each one appears on exactly one page.

export type ScatterPhoto = {
  src: string;
  alt: string;
  // Placement as a share of the hero. Clusters of two overlap on purpose.
  pos: { top: string; left?: string; right?: string };
  width: string;
  // How strongly the photo drifts with the cursor. Higher reads as "closer".
  depth: number;
};

export type MarginPhoto = {
  src: string;
  alt: string;
  side: 'left' | 'right';
  // Vertical placement as a share of the page, and distance in from the side edge
  top: string;
  inset: string;
  width: string;
  // Extra scroll drift. Positive rises faster than the page, negative lags behind it.
  depth: number;
};

export const HOME_PHOTOS: ScatterPhoto[] = [
  { src: '/photos/wine-bar.jpg', alt: 'Carter and Abby toasting with natural wine', pos: { top: '9%', left: '2%' }, width: '13vw', depth: 0.6 },
  { src: '/photos/mirror.jpg', alt: 'Mirror selfie with friends at a bar', pos: { top: '21%', left: '12%' }, width: '8.5vw', depth: 1.1 },
  { src: '/photos/singapore.jpg', alt: 'Carter and Abby overlooking Marina Bay, Singapore', pos: { top: '7%', right: '3%' }, width: '15vw', depth: 0.5 },
  { src: '/photos/kissaten.jpg', alt: 'Counter of a Japanese kissaten lined with Tiger Coffee tins', pos: { top: '25%', right: '13%' }, width: '10vw', depth: 0.9 },
  { src: '/photos/koshien.jpg', alt: 'Carter and friends at a Hanshin Tigers game', pos: { top: '50%', left: '4%' }, width: '10vw', depth: 0.8 },
  { src: '/photos/noodles.jpg', alt: 'Carter slurping noodles face-first', pos: { top: '62%', left: '13%' }, width: '7.5vw', depth: 0.4 },
  { src: '/photos/boat.jpg', alt: 'Carter on a boat between limestone islands', pos: { top: '46%', right: '4%' }, width: '13vw', depth: 0.7 },
  { src: '/photos/night-out.jpg', alt: 'Carter, Abby and friends out at night', pos: { top: '56%', right: '15%' }, width: '8vw', depth: 1.2 },
  { src: '/photos/brooklyn.jpg', alt: 'Carter at Fulton Ferry Landing with the Brooklyn Bridge behind', pos: { top: '76%', left: '23%' }, width: '8vw', depth: 0.5 },
  { src: '/photos/string-lights.jpg', alt: 'Carter and a friend under string lights', pos: { top: '81%', right: '25%' }, width: '11vw', depth: 0.9 },
];

// Mobile/tablet homepage pile: a subset of HOME_PHOTOS, referenced by src
export const HOME_PILE: { src: string; style: { top: string; left?: string; right?: string; width: string } }[] = [
  { src: '/photos/singapore.jpg', style: { top: '0%', left: '4%', width: '58%' } },
  { src: '/photos/koshien.jpg', style: { top: '10%', right: '4%', width: '38%' } },
  { src: '/photos/wine-bar.jpg', style: { top: '44%', left: '10%', width: '46%' } },
  { src: '/photos/noodles.jpg', style: { top: '38%', right: '10%', width: '30%' } },
  { src: '/photos/string-lights.jpg', style: { top: '64%', right: '2%', width: '44%' } },
];

export const MENU_PHOTOS: MarginPhoto[] = [
  { src: '/photos/salumi.jpg', alt: 'Carter behind a huge board of salumi and red wine', side: 'left', top: '9%', inset: '1.5vw', width: '11vw', depth: 0.12 },
  { src: '/photos/da-adolfo.jpg', alt: 'Carter over a plate of pasta at Da Adolfo in Positano', side: 'left', top: '52%', inset: '3vw', width: '8vw', depth: 0.05 },
  { src: '/photos/friendsgiving.jpg', alt: 'Carter and Abby with the Friendsgiving spread they cooked', side: 'right', top: '8%', inset: '2vw', width: '11vw', depth: 0.08 },
  { src: '/photos/thanksgiving.jpg', alt: 'Carter at the kitchen island during Thanksgiving', side: 'right', top: '42%', inset: '4vw', width: '8vw', depth: 0.18 },
];

export const ABOUT_PHOTOS: MarginPhoto[] = [
  { src: '/photos/golden-gate.jpg', alt: 'Carter and Abby with the Golden Gate Bridge behind them', side: 'left', top: '8%', inset: '1.5vw', width: '11vw', depth: 0.1 },
  { src: '/photos/sorrento.jpg', alt: 'Carter and Abby at sunset across the bay from Vesuvius', side: 'left', top: '48%', inset: '2.5vw', width: '10vw', depth: 0.16 },
  { src: '/photos/amalfi.jpg', alt: 'Carter and Abby on a hillside above the Amalfi Coast', side: 'right', top: '14%', inset: '2vw', width: '11vw', depth: 0.12 },
];

export const CONTACT_PHOTOS: MarginPhoto[] = [
  { src: '/photos/winery-snow.jpg', alt: 'Carter, Abby and family at a waterfront wine tasting in the snow', side: 'left', top: '22%', inset: '1.5vw', width: '11vw', depth: 0.1 },
  { src: '/photos/graduation.jpg', alt: 'Carter and friends in caps and gowns at UW–Madison commencement', side: 'right', top: '26%', inset: '3vw', width: '9vw', depth: 0.15 },
];

if (import.meta.env.DEV) {
  const all = [HOME_PHOTOS, MENU_PHOTOS, ABOUT_PHOTOS, CONTACT_PHOTOS].flat().map((p) => p.src);
  const dupes = all.filter((src, i) => all.indexOf(src) !== i);
  if (dupes.length) console.warn('[photos] used on more than one page:', dupes);
}
