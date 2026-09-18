// The songs the DJ decks play: Carter's "Operating" playlist, matched to Apple Music IDs.
// Preview URLs are looked up fresh at runtime (they rotate), so only IDs live here.
// Street Sounds (Disco Galaxy) and ALICE. (jev.) aren't in Apple's US catalog.
//
// To add a song: `npm run find-track -- "song title artist"`, then paste the line it prints.
// To remove one: delete its line. Order doesn't matter; the set is shuffled on every visit.
export type PlaylistEntry = { id: number; title: string; artist: string };

export const PLAYLIST: PlaylistEntry[] = [
  { id: 1299686723, title: 'Pedro', artist: 'Raffaella Carrà' },
  { id: 1653090493, title: 'Journey (Take Me Where You Wanna)', artist: 'Don Diablo' },
  { id: 1842444457, title: 'Dracula', artist: 'Tame Impala' },
  { id: 1828036635, title: '12 to 12', artist: 'sombr' },
  { id: 1825622269, title: 'collide', artist: 'Łaszewo' },
  { id: 1588014124, title: "California Dreamin'", artist: 'Chris Lorenzo, High Jinx' },
  { id: 1640463908, title: 'Delilah (pull me out of this)', artist: 'Fred again.., Delilah Montagu' },
  { id: 274987204, title: 'Cosa hai messo nel caffè?', artist: 'Riccardo Del Turco' },
  { id: 1746102744, title: 'you and i', artist: 'wes mills' },
  { id: 1676086003, title: 'Substitution', artist: 'Purple Disco Machine, Kungs, Julian Perretta' },
  { id: 1886102177, title: 'Four Seasons', artist: 'Digitalism' },
  { id: 6783809551, title: 'ten toes', artist: 'KTmelodies' },
  { id: 697196420, title: 'Face to Face', artist: 'Daft Punk' },
  { id: 1724935211, title: 'Neverender', artist: 'Justice, Tame Impala' },
  { id: 1741469044, title: 'Changes', artist: 'Empire Of The Sun' },
  { id: 1728320482, title: 'Low Sun', artist: 'Hermanos Gutiérrez' },
  { id: 1838177306, title: 'CURIOUS (feat. Toro y Moi)', artist: 'Sam Gellaitry, Toro y Moi' },
  { id: 850569480, title: 'On Melancholy Hill', artist: 'Gorillaz' },
];
