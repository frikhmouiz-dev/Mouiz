import React, { useState, useEffect } from 'react';
import { Participant, Player, GameSettings } from '../types/game';
import { TransferChain } from './TransferChain';
import { VerticalProgressBar } from './VerticalProgressBar';
import { SmartPlayerInput } from './SmartPlayerInput';
import { isPlayerMatch } from '../utils/textNormalize';
import { soundManager } from '../utils/audio';
import { CheckCircle2, XCircle, ArrowLeft, Clock, Award, User, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GameRoundProps {
  currentParticipant: Participant;
  currentPlayer: Player;
  questionNumber: number; // overall or for participant
  totalQuestionsForParticipant: number;
  participantHistory: Array<{ isCorrect: boolean } | null>;
  settings: GameSettings;
  onAnswerSubmitted: (isCorrect: boolean, answerGiven: string, timeSpent: number) => void;
  onNextQuestion: () => void;
}

export const GameRound: React.FC<GameRoundProps> = ({
  currentParticipant,
  currentPlayer,
  questionNumber,
  totalQuestionsForParticipant,
  participantHistory,
  settings,
  onAnswerSubmitted,
  onNextQuestion
}) => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState<number>(settings.timerSeconds);
  const [startTime, setStartTime] = useState<number>(Date.now());

  // Reset local state when player/question changes
  useEffect(() => {
    setHasAnswered(false);
    setIsCorrect(false);
    setSubmittedAnswer('');
    setTimeLeft(settings.timerSeconds);
    setStartTime(Date.now());
  }, [currentPlayer, questionNumber, settings.timerSeconds]);

  // Countdown timer logic
  useEffect(() => {
    if (hasAnswered || settings.timerSeconds === 0) return;

    if (timeLeft <= 0) {
      // Time is up!
      handleTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        if (prev <= 6) {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, hasAnswered, settings.timerSeconds]);

  const handleTimeUp = () => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setIsCorrect(false);
    setSubmittedAnswer('(انتهى الوقت)');
    soundManager.playWrong();
    onAnswerSubmitted(false, '(انتهى الوقت)', settings.timerSeconds);
  };

  const handleAnswer = (answer: string) => {
    if (hasAnswered) return;

    const correct = isPlayerMatch(answer, currentPlayer);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    setHasAnswered(true);
    setIsCorrect(correct);
    setSubmittedAnswer(answer);

    if (correct) {
      soundManager.playCorrect();
    } else {
      soundManager.playWrong();
    }

    onAnswerSubmitted(correct, answer, timeSpent);
  };

  const handleGiveUp = () => {
    if (hasAnswered) return;
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    setHasAnswered(true);
    setIsCorrect(false);
    setSubmittedAnswer('(تخطي / استسلام)');
    soundManager.playWrong();
    onAnswerSubmitted(false, '(تخطي)', timeSpent);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-3 py-6">
      {/* Top Bar: Participant Indicator & Red Question Badge */}
      <div className="relative flex items-center justify-between gap-4 mb-6">
        {/* Current Turn Highlighted Header: "دور: أحمد" */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-3 py-2 px-4 rounded-2xl bg-slate-900/90 border-2 shadow-lg backdrop-blur-md"
          style={{
            borderColor: currentParticipant.color,
            boxShadow: `0 0 20px -3px ${currentParticipant.color}35`
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black shadow-md text-base"
            style={{ backgroundColor: currentParticipant.color }}
          >
            <User className="w-5 h-5" />
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400">
              الدور الحالي
            </div>
            <div className="text-lg md:text-2xl font-black text-white flex items-center gap-2">
              <span>دور:</span>
              <span style={{ color: currentParticipant.color }}>{currentParticipant.name}</span>
            </div>
          </div>

          {/* Current Participant Score Badge */}
          <div className="mr-3 pl-2 pr-3 py-1 bg-slate-800/80 rounded-xl border border-slate-700 text-xs font-bold text-amber-300 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{currentParticipant.score} نقطة</span>
          </div>
        </motion.div>

        {/* Center / Timer if active */}
        {settings.timerSeconds > 0 && !hasAnswered && (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md">
            <Clock className={`w-4 h-4 ${timeLeft <= 5 ? 'text-rose-500 animate-bounce' : 'text-amber-400'}`} />
            <span className={`font-mono text-base font-black ${timeLeft <= 5 ? 'text-rose-400 animate-pulse' : 'text-slate-200'}`}>
              {timeLeft} ث
            </span>
          </div>
        )}

        {/* Question Counter & Circular Red Badge as requested */}
        <div className="flex items-center gap-3">
          <div className="text-left hidden sm:block">
            <div className="text-xs text-slate-400 font-semibold">
              السؤال {questionNumber} من {totalQuestionsForParticipant}
            </div>
            <div className="text-[11px] text-slate-500">
              متبقي {Math.max(0, totalQuestionsForParticipant - questionNumber)} أسئلة
            </div>
          </div>

          {/* Question number badge: "رقم السؤال يظهر في شارة أعلى الزاوية على شكل دائرة حمراء" */}
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-600 border-3 border-red-300 text-white font-black text-xl md:text-2xl flex items-center justify-center shadow-xl shadow-red-600/40 select-none animate-in zoom-in-50 duration-200"
            title={`السؤال رقم ${questionNumber}`}
          >
            {questionNumber}
          </div>
        </div>
      </div>

      {/* Main Arena: Vertical Progress Ladder + Transfer Chain & Inputs */}
      <div className="flex items-start gap-4 md:gap-6">
        {/* Vertical side progress ladder */}
        <div className="hidden sm:block">
          <VerticalProgressBar
            totalQuestions={totalQuestionsForParticipant}
            currentQuestionIndex={questionNumber - 1}
            history={participantHistory}
          />
        </div>

        {/* Central Game Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Transfer Logos Sequence */}
          <div>
            <div className="flex items-center justify-between mb-2 px-2 text-xs font-bold text-slate-400">
              <span>مسيرة انتقالات اللاعب (من اليمين إلى اليسار):</span>
              <span className="text-emerald-400">{currentPlayer.transfers.length} محطات كروية</span>
            </div>

            <TransferChain
              transfers={currentPlayer.transfers}
              revealNames={hasAnswered}
            />
          </div>

          {/* Answering Controls OR Result Card */}
          <AnimatePresence mode="wait">
            {!hasAnswered ? (
              <motion.div
                key="input-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="mt-2"
              >
                <SmartPlayerInput
                  onSubmit={handleAnswer}
                  onGiveUp={handleGiveUp}
                  disabled={hasAnswered}
                />
              </motion.div>
            ) : (
              <motion.div
                key="result-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-3xl border-2 shadow-2xl backdrop-blur-xl ${
                  isCorrect
                    ? 'bg-emerald-950/40 border-emerald-500 shadow-emerald-500/20'
                    : 'bg-rose-950/40 border-rose-600 shadow-rose-600/20'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Status & Player Info */}
                  <div className="flex items-center gap-4 text-right">
                    <div className="flex-shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="w-14 h-14 text-emerald-400 stroke-[2.5] drop-shadow-md" />
                      ) : (
                        <XCircle className="w-14 h-14 text-rose-500 stroke-[2.5] drop-shadow-md" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-base md:text-lg font-black ${
                            isCorrect ? 'text-emerald-300' : 'text-rose-400'
                          }`}
                        >
                          {isCorrect ? '✅ إجابة صحيحة وممتازة!' : '❌ إجابة خاطئة!'}
                        </span>
                        {isCorrect && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/30">
                            +1 نقطة
                          </span>
                        )}
                      </div>

                      <div className="mt-1">
                        <div className="text-2xl md:text-3xl font-black text-white font-['Changa',sans-serif]">
                          {currentPlayer.nameAr}
                        </div>
                        <div className="text-sm font-semibold text-slate-300">
                          {currentPlayer.nameEn} · {currentPlayer.nationalityAr} · {currentPlayer.positionAr}
                        </div>
                      </div>

                      {!isCorrect && (
                        <div className="mt-2 text-xs text-rose-300">
                          إجابتك: <span className="font-bold underline">{submittedAnswer}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Next Question Button */}
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <button
                      type="button"
                      onClick={onNextQuestion}
                      autoFocus
                      className="w-full md:w-auto py-3.5 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 active:scale-95 text-white font-black text-base md:text-lg rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 transition-all duration-150"
                    >
                      <span>السؤال التالي</span>
                      <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
