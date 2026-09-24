import fs from 'node:fs';
import path from 'node:path';

const logosDir = path.resolve(process.cwd(), 'public/logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

const clubs = [
  { file: 'real-madrid.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/Real%20Madrid.png' },
  { file: 'barcelona.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/FC%20Barcelona.png' },
  { file: 'manchester-united.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Manchester%20United.png' },
  { file: 'liverpool.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Liverpool%20FC.png' },
  { file: 'arsenal.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Arsenal%20FC.png' },
  { file: 'chelsea.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Chelsea%20FC.png' },
  { file: 'manchester-city.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Manchester%20City.png' },
  { file: 'tottenham.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Tottenham%20Hotspur.png' },
  { file: 'juventus.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A/Juventus%20FC.png' },
  { file: 'ac-milan.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A/AC%20Milan.png' },
  { file: 'inter-milan.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A/Inter%20Milan.png' },
  { file: 'bayern-munich.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Germany%20-%20Bundesliga/Bayern%20Munich.png' },
  { file: 'borussia-dortmund.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Germany%20-%20Bundesliga/Borussia%20Dortmund.png' },
  { file: 'paris-saint-germain.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201/Paris%20Saint-Germain.png' },
  { file: 'atletico-madrid.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/Atl%C3%A9tico%20de%20Madrid.png' },
  { file: 'sevilla.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/Sevilla%20FC.png' },
  { file: 'napoli.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A/SSC%20Napoli.png' },
  { file: 'roma.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A/AS%20Roma.png' },
  { file: 'sporting-cp.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Portugal%20-%20Liga%20Portugal/Sporting%20CP.png' },
  { file: 'benfica.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Portugal%20-%20Liga%20Portugal/SL%20Benfica.png' },
  { file: 'porto.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Portugal%20-%20Liga%20Portugal/FC%20Porto.png' },
  { file: 'ajax.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Netherlands%20-%20Eredivisie/Ajax%20Amsterdam.png' },
  { file: 'monaco.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201/AS%20Monaco.png' },
  { file: 'lyon.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201/Olympique%20Lyonnais.png' },
  { file: 'marseille.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201/Olympique%20de%20Marseille.png' },
  { file: 'bayer-leverkusen.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Germany%20-%20Bundesliga/Bayer%2004%20Leverkusen.png' },
  { file: 'aston-villa.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Aston%20Villa.png' },
  { file: 'newcastle.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Newcastle%20United.png' },
  { file: 'everton.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/Everton%20FC.png' },
  { file: 'west-ham.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/England%20-%20Premier%20League/West%20Ham%20United.png' },
  { file: 'villarreal.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/Villarreal%20CF.png' },
  { file: 'valencia.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga/Valencia%20CF.png' },
  { file: 'psv.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Netherlands%20-%20Eredivisie/PSV%20Eindhoven.png' },
  { file: 'feyenoord.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Netherlands%20-%20Eredivisie/Feyenoord%20Rotterdam.png' },
  { file: 'lazio.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A/SS%20Lazio.png' },
  { file: 'fiorentina.png', url: 'https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A/ACF%20Fiorentina.png' }
];

async function download() {
  console.log(`Starting download of ${clubs.length} club logos...`);
  for (const item of clubs) {
    const dest = path.join(logosDir, item.file);
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.warn(`Failed ${item.file}: status ${res.status}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`Saved ${item.file} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${item.file}:`, e.message);
    }
  }
  console.log('Download completed!');
}

download();
