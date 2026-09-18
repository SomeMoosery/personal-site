// The songs the DJ decks play: Carter's "Operating" playlist, matched to Apple Music IDs.
// Preview URLs are looked up fresh at runtime (they rotate), so only IDs live here.
// Street Sounds (Disco Galaxy) and ALICE. (jev.) aren't in Apple's US catalog.
//
// To add a song: `npm run find-track -- "song title artist"`, then paste the line it prints.
// To remove one: delete its line. Order doesn't matter; the set is shuffled on every visit.
export type PlaylistEntry = { id: number; title: string; artist: string };

export const PLAYLIST: PlaylistEntry[] = [
  { id: 1299686723, title: 'Pedro', artist: 'Raffaella Carrà' },
  { id: 1299686718, title: "A far l'amore comincia tu", artist: 'Raffaella Carrà' },
  { id: 1653090493, title: 'Journey (Take Me Where You Wanna)', artist: 'Don Diablo' },
  { id: 1842444457, title: 'Dracula', artist: 'Tame Impala' },
  { id: 1828036635, title: '12 to 12', artist: 'sombr' },
  { id: 1825622269, title: 'collide', artist: 'Łaszewo' },
  { id: 1588014124, title: "California Dreamin'", artist: 'Chris Lorenzo, High Jinx' },
  { id: 215669931, title: 'Come Thru', artist: 'Violator, N.O.R.E., Styles' },
  { id: 1640463908, title: 'Delilah (pull me out of this)', artist: 'Fred again.., Delilah Montagu' },
  { id: 217000135, title: 'Nas Is Like', artist: 'Nas' },
  { id: 274987204, title: 'Cosa hai messo nel caffè?', artist: 'Riccardo Del Turco' },
  { id: 1583784528, title: 'Nessuno Mi Può Giudicare', artist: 'Caterina Caselli' },
  { id: 1746102744, title: 'you and i', artist: 'wes mills' },
  { id: 1577524159, title: 'Sabato Italiano', artist: 'I Coccodrilli, Whodamanny, Milord' },
  { id: 1852398970, title: 'WHERE IS MY HUSBAND! (Remix)', artist: 'RAYE, David Guetta, Hypaton' },
  { id: 1676086003, title: 'Substitution', artist: 'Purple Disco Machine, Kungs, Julian Perretta' },
  { id: 1631381055, title: 'In alto mare', artist: 'Loredana Bertè' },
  { id: 1583784529, title: 'Tutto nero (Paint It Black)', artist: 'Caterina Caselli' },
];
