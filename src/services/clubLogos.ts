import { CLUBS_DATA } from '../data/clubsData';
import { Club } from '../types/game';

// Central map linking Club Name to Logo Path as required by the brief:
// { "Real Madrid": "/logos/real-madrid.png", "Barcelona": "/logos/barcelona.png", ... }
export const CLUB_LOGOS_MAP: Record<string, string> = {};

// Populate mapping for both English names, Arabic names, and IDs
Object.values(CLUBS_DATA).forEach((club) => {
  CLUB_LOGOS_MAP[club.nameEn] = club.defaultLogo;
  CLUB_LOGOS_MAP[club.nameAr] = club.defaultLogo;
  CLUB_LOGOS_MAP[club.id] = club.defaultLogo;
  club.aliases.forEach((alias) => {
    CLUB_LOGOS_MAP[alias] = club.defaultLogo;
  });
});

const CUSTOM_LOGOS_STORAGE_KEY = 'guess_transfers_custom_logos_v1';

// Load user-customized logos from localStorage if available
function loadCustomLogos(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(CUSTOM_LOGOS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load custom logos', e);
    return {};
  }
}

let customLogosCache: Record<string, string> = loadCustomLogos();

export function registerCustomLogo(clubId: string, logoUrlOrBase64: string): void {
  customLogosCache[clubId] = logoUrlOrBase64;
  try {
    localStorage.setItem(CUSTOM_LOGOS_STORAGE_KEY, JSON.stringify(customLogosCache));
  } catch (e) {
    console.warn('Could not save custom logo to localStorage', e);
  }
}

export function resetCustomLogos(): void {
  customLogosCache = {};
  try {
    localStorage.removeItem(CUSTOM_LOGOS_STORAGE_KEY);
  } catch (e) {
    console.warn(e);
  }
}

/**
 * Normalizes any string or filename for smart matching:
 * - strips file extension (.png, .svg, .webp, .jpg)
 * - removes underscores, hyphens, extra whitespace, lowercases
 * - strips punctuation
 */
export function normalizeFilenameKey(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .toLowerCase()
    .replace(/\.(png|svg|webp|jpg|jpeg)$/i, '')
    .replace(/[_\-\.]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Smart filename matcher as requested by the brief:
 * Matches "Real_Madrid.png", "real-madrid.png", "Real Madrid.png", "real_madrid.png",
 * "realmadrid.png", "FC Barcelona.png", "al-nassr.png" to their respective Club object.
 */
export function findClubByFilename(filename: string): Club | null {
  const normalized = normalizeFilenameKey(filename);
  const compact = normalized.replace(/\s+/g, '');

  for (const club of Object.values(CLUBS_DATA)) {
    // Check ID match
    if (club.id.toLowerCase() === compact || club.id.replace(/-/g, ' ') === normalized) {
      return club;
    }

    // Check English name
    if (club.nameEn.toLowerCase() === normalized) {
      return club;
    }
    if (club.nameEn.toLowerCase().replace(/[\s\-_]+/g, '') === compact) {
      return club;
    }

    // Check aliases
    for (const alias of club.aliases) {
      const normAlias = normalizeFilenameKey(alias);
      if (normAlias === normalized || normAlias.replace(/\s+/g, '') === compact) {
        return club;
      }
    }

    // Common football prefixes/suffixes (e.g., "fc barcelona" vs "barcelona", "arsenal fc" vs "arsenal")
    const strippedClubName = club.nameEn.toLowerCase().replace(/\b(fc|cf|afc|sc|club|sfc)\b/g, '').trim().replace(/\s+/g, '');
    if (strippedClubName.length >= 3 && compact.includes(strippedClubName)) {
      return club;
    }
  }

  return null;
}

/**
 * Returns the resolved logo URL for a club (by ID, English name, or Arabic name).
 * Prioritizes custom logos uploaded by the user, then the central map, then default.
 */
export function getClubLogo(clubIdOrName: string): string {
  if (!clubIdOrName) return '/logos/real-madrid.png';

  // 1. Check custom user-uploaded logo
  const club = findClub(clubIdOrName);
  if (club && customLogosCache[club.id]) {
    return customLogosCache[club.id];
  }

  // 2. Check direct mapping
  if (CLUB_LOGOS_MAP[clubIdOrName]) {
    return CLUB_LOGOS_MAP[clubIdOrName];
  }

  // 3. Check club object
  if (club) {
    return club.defaultLogo;
  }

  // 4. Fallback default
  return `/logos/${normalizeFilenameKey(clubIdOrName).replace(/\s+/g, '-')}.png`;
}

/**
 * Finds a Club by ID, English name, Arabic name, or alias.
 */
export function findClub(query: string): Club | null {
  if (!query) return null;
  const q = query.trim();

  // Direct ID check
  if (CLUBS_DATA[q]) return CLUBS_DATA[q];

  const lowerQ = q.toLowerCase();
  for (const club of Object.values(CLUBS_DATA)) {
    if (
      club.id.toLowerCase() === lowerQ ||
      club.nameEn.toLowerCase() === lowerQ ||
      club.nameAr === q ||
      club.aliases.some((a) => a.toLowerCase() === lowerQ || a === q)
    ) {
      return club;
    }
  }

  // Fallback to filename matching
  return findClubByFilename(q);
}

/**
 * Get all available clubs as an array
 */
export function getAllClubs(): Club[] {
  return Object.values(CLUBS_DATA);
}
