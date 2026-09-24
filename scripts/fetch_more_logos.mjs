import fs from 'node:fs';
import path from 'node:path';

const logosDir = path.resolve(process.cwd(), 'public/logos');

const moreClubs = [
  { file: 'lyon.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201/Olympique%20Lyon.png' },
  { file: 'marseille.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201/Olympique%20Marseille.png' },
  { file: 'lille.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201/LOSC%20Lille.png' },
  { file: 'west-ham.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/West%20Ham%20United.png' },
  { file: 'leicester-city.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Leicester%20City.png' }
];

async function run() {
  for (const item of moreClubs) {
    const dest = path.join(logosDir, item.file);
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`Saved ${item.file}`);
      }
    } catch (e) {
      console.error(e);
    }
  }
}
run();
