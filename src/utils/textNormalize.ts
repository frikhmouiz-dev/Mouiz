/**
 * Normalizes Arabic text by standardizing letter forms, removing harakat and kashida.
 */
export function normalizeArabic(text: string): string {
  if (!text) return '';

  return text
    // Remove Arabic diacritics (harakat / tashkeel)
    .replace(/[\u064B-\u065F\u0670]/g, '')
    // Remove tatweel (kashida)
    .replace(/\u0640/g, '')
    // Normalize alif with hamza / madda to plain alif
    .replace(/[إأآا]/g, 'ا')
    // Normalize alif maqsura to yaa
    .replace(/ى/g, 'ي')
    // Normalize taa marbouta to haa
    .replace(/ة/g, 'ه')
    // Normalize hamzas
    .replace(/ئ/g, 'ي')
    .replace(/ؤ/g, 'و')
    // Remove punctuation & special symbols
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'«»]/g, ' ')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * Normalizes English text for comparison
 */
export function normalizeEnglish(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics like é, è, ó, ç
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Computes Levenshtein edit distance between two strings
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Checks whether user input matches a player's official names or aliases
 */
export function isPlayerMatch(input: string, player: { nameAr: string; nameEn: string; aliases: string[] }): boolean {
  if (!input || !input.trim()) return false;

  const raw = input.trim();
  const normArInput = normalizeArabic(raw);
  const normEnInput = normalizeEnglish(raw);

  const targetsAr = [player.nameAr, ...player.aliases].map(normalizeArabic);
  const targetsEn = [player.nameEn, ...player.aliases].map(normalizeEnglish);

  // 1. Direct exact or substring match in Arabic
  for (const target of targetsAr) {
    if (target === normArInput) return true;
    // Substring match if input is meaningful length (>= 3 chars)
    if (normArInput.length >= 3) {
      if (target.includes(normArInput) || normArInput.includes(target)) {
        return true;
      }
    }
  }

  // 2. Direct exact or substring match in English
  for (const target of targetsEn) {
    if (target === normEnInput) return true;
    if (normEnInput.length >= 3) {
      if (target.includes(normEnInput) || normEnInput.includes(target)) {
        return true;
      }
    }
  }

  // 3. Fuzzy match for minor typos (tolerance: 1 typo for length >= 4, 2 typos for length >= 7)
  for (const target of targetsAr) {
    const dist = levenshteinDistance(normArInput, target);
    if (normArInput.length >= 4 && dist <= 1) return true;
    if (normArInput.length >= 7 && dist <= 2) return true;
  }

  for (const target of targetsEn) {
    const dist = levenshteinDistance(normEnInput, target);
    if (normEnInput.length >= 4 && dist <= 1) return true;
    if (normEnInput.length >= 7 && dist <= 2) return true;
  }

  return false;
}
