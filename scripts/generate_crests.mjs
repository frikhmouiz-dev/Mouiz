import fs from 'node:fs';
import path from 'node:path';

const logosDir = path.resolve(process.cwd(), 'public/logos');

const svgs = {
  'al-nassr.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="anYellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFDD00"/>
        <stop offset="100%" stop-color="#D4AF37"/>
      </linearGradient>
      <linearGradient id="anBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#002D62"/>
        <stop offset="100%" stop-color="#0B132B"/>
      </linearGradient>
    </defs>
    <!-- Shield -->
    <path d="M100 15 L175 35 C175 120, 100 175, 100 185 C100 175, 25 120, 25 35 Z" fill="url(#anYellow)" stroke="#002D62" stroke-width="6"/>
    <path d="M100 25 L165 43 C165 115, 100 165, 100 172 C100 165, 35 115, 35 43 Z" fill="url(#anBlue)"/>
    <!-- Crown -->
    <path d="M70 75 L80 90 L100 65 L120 90 L130 75 L125 105 L75 105 Z" fill="url(#anYellow)" stroke="#D4AF37" stroke-width="2"/>
    <!-- Map Shape & Emblem -->
    <circle cx="100" cy="125" r="24" fill="none" stroke="#FFDD00" stroke-width="4"/>
    <path d="M92 120 Q100 110 108 120 T100 135 Z" fill="#FFDD00"/>
    <text x="100" y="58" font-family="Arial, sans-serif" font-weight="900" font-size="16" fill="#FFDD00" text-anchor="middle" letter-spacing="1">AL NASSR</text>
  </svg>`,

  'al-hilal.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="hilalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0057B7"/>
        <stop offset="100%" stop-color="#002B7F"/>
      </linearGradient>
    </defs>
    <path d="M100 15 L175 35 C175 125, 100 180, 100 185 C100 180, 25 125, 25 35 Z" fill="url(#hilalBlue)" stroke="#FFFFFF" stroke-width="5"/>
    <!-- 2 White stripes forming crescent H -->
    <path d="M75 50 Q130 50 130 100 Q130 150 75 150 Q110 130 110 100 Q110 70 75 50 Z" fill="#FFFFFF"/>
    <circle cx="85" cy="100" r="14" fill="#FFFFFF"/>
    <text x="100" y="172" font-family="Arial, sans-serif" font-weight="900" font-size="14" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">AL HILAL</text>
  </svg>`,

  'al-ittihad.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="ittGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFD700"/>
        <stop offset="100%" stop-color="#FFA500"/>
      </linearGradient>
    </defs>
    <rect x="25" y="25" width="150" height="150" rx="20" fill="#0A0A0A" stroke="#FFD700" stroke-width="6"/>
    <!-- Tiger stripes / 1 shape -->
    <path d="M50 40 L65 40 L65 160 L50 160 Z" fill="#FFD700"/>
    <path d="M80 40 L95 40 L95 160 L80 160 Z" fill="#FFD700"/>
    <circle cx="130" cy="85" r="28" fill="#FFD700"/>
    <circle cx="130" cy="85" r="20" fill="#0A0A0A"/>
    <text x="130" y="145" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#FFD700" text-anchor="middle">1</text>
    <text x="100" y="188" font-family="Arial, sans-serif" font-weight="900" font-size="13" fill="#FFD700" text-anchor="middle">AL ITTIHAD</text>
  </svg>`,

  'al-ahly.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="ahlyRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D91424"/>
        <stop offset="100%" stop-color="#9E0C18"/>
      </linearGradient>
    </defs>
    <path d="M100 15 L170 35 C170 120, 100 180, 100 185 C100 180, 30 120, 30 35 Z" fill="url(#ahlyRed)" stroke="#D4AF37" stroke-width="5"/>
    <!-- Eagle Wings -->
    <path d="M60 90 Q100 60 100 95 Q100 60 140 90 Q120 125 100 140 Q80 125 60 90 Z" fill="#D4AF37"/>
    <circle cx="100" cy="75" r="7" fill="#D4AF37"/>
    <!-- Stars -->
    <polygon points="100,28 103,34 110,34 104,38 106,44 100,40 94,44 96,38 90,34 97,34" fill="#D4AF37"/>
    <text x="100" y="165" font-family="Arial, sans-serif" font-weight="900" font-size="13" fill="#FFFFFF" text-anchor="middle">AL AHLY</text>
  </svg>`,

  'inter-miami.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="85" fill="#0A0A0A" stroke="#F5B6CD" stroke-width="8"/>
    <!-- Two Herons -->
    <path d="M75 125 C75 90, 95 80, 95 65 C85 70, 75 80, 75 125 Z" fill="#F5B6CD"/>
    <path d="M125 125 C125 90, 105 80, 105 65 C115 70, 125 80, 125 125 Z" fill="#F5B6CD"/>
    <polygon points="100,85 105,95 115,95 107,102 110,112 100,105 90,112 93,102 85,95 95,95" fill="#F5B6CD"/>
    <!-- Eclipse Sun -->
    <circle cx="100" cy="65" r="10" fill="#F5B6CD"/>
    <text x="100" y="155" font-family="Arial, sans-serif" font-weight="900" font-size="12" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">INTER MIAMI</text>
  </svg>`,

  'santos.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <path d="M100 15 L175 35 C175 125, 100 180, 100 185 C100 180, 25 125, 25 35 Z" fill="#FFFFFF" stroke="#000000" stroke-width="6"/>
    <!-- Top left globe & star, right diagonal stripes -->
    <path d="M30 40 L100 40 L100 100 L30 100 Z" fill="#FFFFFF"/>
    <circle cx="65" cy="70" r="18" fill="#000000"/>
    <!-- Stripes on right and bottom -->
    <path d="M100 40 L170 40 L170 110 L100 110 Z" fill="#000000"/>
    <path d="M100 40 L100 170 C100 170 160 120 165 90 Z" fill="#000000"/>
    <text x="100" y="145" font-family="Arial, sans-serif" font-weight="900" font-size="15" fill="#FFFFFF" text-anchor="middle">S.F.C.</text>
  </svg>`,

  'boca-juniors.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <path d="M100 15 L175 35 C175 125, 100 180, 100 185 C100 180, 25 125, 25 35 Z" fill="#003566" stroke="#FFC300" stroke-width="6"/>
    <path d="M30 85 L170 85 L165 120 L35 120 Z" fill="#FFC300"/>
    <text x="100" y="110" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#003566" text-anchor="middle">CABJ</text>
  </svg>`,

  'river-plate.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="85" fill="#FFFFFF" stroke="#000000" stroke-width="6"/>
    <!-- Red diagonal sash -->
    <path d="M40 50 L150 160 L165 145 L55 35 Z" fill="#ED1C24"/>
    <circle cx="100" cy="100" r="28" fill="#FFFFFF" stroke="#000000" stroke-width="3"/>
    <text x="100" y="107" font-family="Arial, sans-serif" font-weight="900" font-size="15" fill="#000000" text-anchor="middle">CARP</text>
  </svg>`,

  'leicester-city.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="85" fill="#003090" stroke="#FDBE11" stroke-width="8"/>
    <!-- Fox head inside cinquefoil flower -->
    <path d="M100 55 L130 95 L118 135 L82 135 L70 95 Z" fill="#FDBE11"/>
    <polygon points="100,105 85,75 100,88 115,75" fill="#FFFFFF"/>
    <circle cx="92" cy="98" r="3" fill="#003090"/>
    <circle cx="108" cy="98" r="3" fill="#003090"/>
    <text x="100" y="165" font-family="Arial, sans-serif" font-weight="900" font-size="11" fill="#FFFFFF" text-anchor="middle">LEICESTER</text>
  </svg>`,

  'west-ham.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <path d="M100 15 L175 35 C175 125, 100 180, 100 185 C100 180, 25 125, 25 35 Z" fill="#7A263A" stroke="#1BB1E7" stroke-width="7"/>
    <!-- Crossed Hammers -->
    <g stroke="#1BB1E7" stroke-width="8" stroke-linecap="round">
      <line x1="60" y1="135" x2="140" y2="70"/>
      <line x1="140" y1="135" x2="60" y2="70"/>
    </g>
    <!-- Hammer heads -->
    <rect x="52" y="60" width="22" height="14" rx="2" fill="#F3A700" transform="rotate(-38 63 67)"/>
    <rect x="126" y="60" width="22" height="14" rx="2" fill="#F3A700" transform="rotate(38 137 67)"/>
    <text x="100" y="160" font-family="Arial, sans-serif" font-weight="900" font-size="12" fill="#1BB1E7" text-anchor="middle">WEST HAM</text>
  </svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(logosDir, filename);
  fs.writeFileSync(filePath, content.trim(), 'utf-8');
  console.log(`Created SVG: ${filename}`);
}
