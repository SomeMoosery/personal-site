// Look up Apple Music IDs for src/data/playlist.ts.
// Usage: npm run find-track -- "pedro raffaella carra"
const query = process.argv.slice(2).join(' ').trim();
if (!query) {
  console.error('Usage: npm run find-track -- "song title artist"');
  process.exit(1);
}

const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=8&country=US`;
const { results } = await (await fetch(url)).json();

const playable = results.filter((r) => r.previewUrl);
if (playable.length === 0) {
  console.log('No matches with a preview. Try fewer words, or the artist name alone.');
  process.exit(0);
}

for (const r of playable) {
  const line = `{ id: ${r.trackId}, title: ${JSON.stringify(r.trackName)}, artist: ${JSON.stringify(r.artistName)} },`;
  console.log(`${line}  // ${r.collectionName}, ${r.releaseDate.slice(0, 4)}`);
}
