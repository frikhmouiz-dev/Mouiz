import fs from 'node:fs';
import path from 'node:path';

const logosDir = path.resolve(process.cwd(), 'public/logos');

const extraClubs = [
  { file: 'real-sociedad.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/Real%20Sociedad.png' },
  { file: 'girona.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/Girona%20FC.png' },
  { file: 'werder-bremen.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Germany%20-%20Bundesliga/SV%20Werder%20Bremen.png' },
  { file: 'schalke.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Germany%20-%20Bundesliga/FC%20Schalke%2004.png' },
  { file: 'salzburg.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Austria%20-%20Bundesliga/FC%20Red%20Bull%20Salzburg.png' },
  { file: 'basel.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Switzerland%20-%20Super%20League/FC%20Basel%201893.png' },
  { file: 'dinamo-zagreb.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Croatia%20-%20SuperSport%20HNL/GNK%20Dinamo%20Zagreb.png' }
];

async function run() {
  for (const item of extraClubs) {
    const dest = path.join(logosDir, item.file);
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`Saved ${item.file}`);
      } else {
        console.warn(`Could not fetch ${item.file}: ${res.status}`);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
run();
