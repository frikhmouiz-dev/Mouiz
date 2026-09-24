export type Difficulty = 'all' | 'easy' | 'medium' | 'hard';
export type Era = 'all' | 'modern' | 'legend' | 'arab';

export interface Club {
  id: string;
  nameEn: string;
  nameAr: string;
  countryAr: string;
  defaultLogo: string;
  aliases: string[];
  primaryColor: string;
  secondaryColor: string;
}

export interface TransferStep {
  clubId: string;
  year: string;
  fromClub?: string;
  toClub?: string;
  type?: 'permanent' | 'loan' | 'free_transfer';
  note?: string;
}

export interface Player {
  id: string;
  playerId?: string; // alias for id
  nameAr: string;
  nameEn: string;
  aliases: string[];
  nationalityAr: string;
  positionAr: string;
  avatarUrl?: string;
  currentClub?: string;
  currentClubId?: string;
  currentLogo?: string;
  era: 'modern' | 'legend' | 'arab';
  difficulty: 'easy' | 'medium' | 'hard';
  isPriorityStar?: boolean;
  transfers: TransferStep[];
}

export interface Participant {
  id: string;
  name: string;
  color: string;
  score: number;
  correctCount: number;
  wrongCount: number;
}

export interface QuestionHistoryItem {
  questionNumber: number;
  participantId: string;
  participantName: string;
  player: Player;
  userAnswer: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface GameSettings {
  questionsPerParticipant: number;
  timerSeconds: number; // 0 for unlimited
  era: Era;
  difficulty: Difficulty;
}

export type GamePhase = 'setup' | 'playing' | 'revealed' | 'gameover';
