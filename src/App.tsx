import { useState, useMemo } from 'react';
import { Participant, GameSettings, Player, QuestionHistoryItem, GamePhase } from './types/game';
import { PLAYERS_DATA } from './data/playersData';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { GameRound } from './components/GameRound';
import { EndGameScreen } from './components/EndGameScreen';
import { LogoManagerModal } from './components/LogoManagerModal';
import { OfflineIndicator } from './components/PWAInstallPrompt';
import { soundManager } from './utils/audio';

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('setup');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [settings, setSettings] = useState<GameSettings>({
    questionsPerParticipant: 5,
    timerSeconds: 30,
    era: 'all',
    difficulty: 'all'
  });

  // Turn management: total questions in game = participants.length * questionsPerParticipant
  // Players alternate turns round-robin: Round 1 (P1, P2...), Round 2 (P1, P2...)
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [assignedPlayers, setAssignedPlayers] = useState<Player[]>([]);
  const [history, setHistory] = useState<QuestionHistoryItem[]>([]);
  const [isLogoManagerOpen, setIsLogoManagerOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.isMuted());

  // Handle sound mute toggle
  const handleToggleMute = () => {
    const nextState = soundManager.toggleMute();
    setIsMuted(nextState);
  };

  // Start a new game session
  const handleStartGame = (newParticipants: Participant[], newSettings: GameSettings) => {
    setParticipants(newParticipants);
    setSettings(newSettings);

    // Filter available players by era
    let available = [...PLAYERS_DATA];
    if (newSettings.era !== 'all') {
      available = available.filter((p) => p.era === newSettings.era);
    }
    if (available.length === 0) {
      available = [...PLAYERS_DATA];
    }

    // Separate into priority current stars (40%) and general pool (60%)
    let priorityPool = available.filter((p) => p.isPriorityStar);
    let regularPool = available.filter((p) => !p.isPriorityStar);

    if (priorityPool.length === 0) priorityPool = [...available];
    if (regularPool.length === 0) regularPool = [...available];

    // Shuffle both pools
    const shuffledPriority = [...priorityPool].sort(() => 0.5 - Math.random());
    const shuffledRegular = [...regularPool].sort(() => 0.5 - Math.random());

    const totalQuestionsNeeded = newParticipants.length * newSettings.questionsPerParticipant;
    const selected: Player[] = [];
    const usedIds = new Set<string>();

    for (let i = 0; i < totalQuestionsNeeded; i++) {
      // 40% chance priority star, 60% chance regular pool
      const pickPriority = Math.random() < 0.4;
      let chosen: Player | null = null;

      if (pickPriority) {
        chosen = shuffledPriority.find((p) => !usedIds.has(p.id)) || null;
        if (!chosen) {
          chosen = shuffledRegular.find((p) => !usedIds.has(p.id)) || null;
        }
      } else {
        chosen = shuffledRegular.find((p) => !usedIds.has(p.id)) || null;
        if (!chosen) {
          chosen = shuffledPriority.find((p) => !usedIds.has(p.id)) || null;
        }
      }

      // If all unique players were used, pick from cycled available
      if (!chosen) {
        chosen = available[i % available.length];
      }

      selected.push(chosen);
      usedIds.add(chosen.id);

      if (usedIds.size >= available.length) {
        usedIds.clear();
      }
    }

    setAssignedPlayers(selected);
    setCurrentTurnIndex(0);
    setHistory([]);
    setPhase('playing');
  };

  // Calculate current turn details
  const totalTurns = participants.length * settings.questionsPerParticipant;
  const currentParticipantIndex = participants.length > 0 ? currentTurnIndex % participants.length : 0;
  const currentParticipant = participants[currentParticipantIndex];
  const currentRoundNumber = participants.length > 0 ? Math.floor(currentTurnIndex / participants.length) + 1 : 1;
  const currentPlayer = assignedPlayers[currentTurnIndex];

  // Build the current participant's question history for the vertical progress bar
  const participantHistory = useMemo(() => {
    if (!currentParticipant) return [];
    const list: Array<{ isCorrect: boolean } | null> = [];

    for (let r = 0; r < settings.questionsPerParticipant; r++) {
      const turnNum = r * participants.length + currentParticipantIndex;
      const record = history.find((h) => h.questionNumber === turnNum + 1);
      if (record) {
        list.push({ isCorrect: record.isCorrect });
      } else {
        list.push(null);
      }
    }

    return list;
  }, [currentParticipant, currentParticipantIndex, settings.questionsPerParticipant, participants.length, history]);

  // Handle answer submission
  const handleAnswerSubmitted = (isCorrect: boolean, answerGiven: string, timeSpent: number) => {
    if (!currentParticipant || !currentPlayer) return;

    // Update history
    const historyItem: QuestionHistoryItem = {
      questionNumber: currentTurnIndex + 1,
      participantId: currentParticipant.id,
      participantName: currentParticipant.name,
      player: currentPlayer,
      userAnswer: answerGiven,
      isCorrect,
      timeSpentSeconds: timeSpent
    };

    setHistory((prev) => [...prev, historyItem]);

    // Update participant score
    setParticipants((prev) =>
      prev.map((p, idx) => {
        if (idx === currentParticipantIndex) {
          return {
            ...p,
            score: isCorrect ? p.score + 100 : p.score,
            correctCount: isCorrect ? p.correctCount + 1 : p.correctCount,
            wrongCount: isCorrect ? p.wrongCount : p.wrongCount + 1
          };
        }
        return p;
      })
    );
  };

  // Next question/turn handler
  const handleNextQuestion = () => {
    const nextTurn = currentTurnIndex + 1;
    if (nextTurn >= totalTurns) {
      setPhase('gameover');
    } else {
      setCurrentTurnIndex(nextTurn);
    }
  };

  // Rematch with same players
  const handlePlayAgain = () => {
    const resetParticipants: Participant[] = participants.map((p) => ({
      ...p,
      score: 0,
      correctCount: 0,
      wrongCount: 0
    }));

    handleStartGame(resetParticipants, settings);
  };

  // Reset to initial setup
  const handleNewGame = () => {
    setPhase('setup');
    setCurrentTurnIndex(0);
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Cairo',sans-serif] selection:bg-emerald-500 selection:text-white" dir="rtl">
      {/* Offline Status Toast */}
      <OfflineIndicator />

      {/* Header */}
      <Header
        onOpenLogoManager={() => setIsLogoManagerOpen(true)}
        onResetGame={phase !== 'setup' ? handleNewGame : undefined}
        isGameActive={phase === 'playing'}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-3 md:p-6">
        {phase === 'setup' && (
          <StartScreen onStartGame={handleStartGame} />
        )}

        {phase === 'playing' && currentParticipant && currentPlayer && (
          <GameRound
            currentParticipant={currentParticipant}
            currentPlayer={currentPlayer}
            questionNumber={currentRoundNumber}
            totalQuestionsForParticipant={settings.questionsPerParticipant}
            participantHistory={participantHistory}
            settings={settings}
            onAnswerSubmitted={handleAnswerSubmitted}
            onNextQuestion={handleNextQuestion}
          />
        )}

        {phase === 'gameover' && (
          <EndGameScreen
            participants={participants}
            history={history}
            onPlayAgain={handlePlayAgain}
            onNewGame={handleNewGame}
          />
        )}
      </main>

      {/* Club Logos Inspector / Manager Modal */}
      <LogoManagerModal
        isOpen={isLogoManagerOpen}
        onClose={() => setIsLogoManagerOpen(false)}
      />
    </div>
  );
}
