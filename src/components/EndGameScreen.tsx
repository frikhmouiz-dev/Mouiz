import React, { useEffect } from 'react';
import { Participant, QuestionHistoryItem } from '../types/game';
import { Trophy, Medal, RotateCcw, PlusCircle, CheckCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';
import { motion } from 'motion/react';

interface EndGameScreenProps {
  participants: Participant[];
  history: QuestionHistoryItem[];
  onPlayAgain: () => void;
  onNewGame: () => void;
}

export const EndGameScreen: React.FC<EndGameScreenProps> = ({
  participants,
  history,
  onPlayAgain,
  onNewGame
}) => {
  // Sort participants by score descending
  const ranked = [...participants].sort((a, b) => b.score - a.score || b.correctCount - a.correctCount);
  const winner = ranked[0];

  useEffect(() => {
    soundManager.playWinFanfare();

    // Trigger double confetti blast
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const timeout = setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 120 }}
          className="inline-flex items-center justify-center p-4 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-400 mb-3 shadow-2xl"
        >
          <Trophy className="w-12 h-12 text-amber-400" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black text-white font-['Changa',sans-serif]">
          نهـايـة التـحدي!
        </h2>
        <p className="mt-2 text-slate-300 text-base">
          تتويج بطل مسابقة تخمين انتقالات اللاعبين
        </p>
      </div>

      {/* Podium for Top 3 */}
      <div className="flex items-end justify-center gap-3 md:gap-6 mb-10 max-w-lg mx-auto">
        {/* 2nd Place */}
        {ranked[1] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex flex-col items-center"
          >
            <div className="text-xs font-bold text-slate-300 mb-2 truncate max-w-[100px]">
              {ranked[1].name}
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-300/20 border-2 border-slate-300 flex items-center justify-center text-slate-200 font-bold mb-2 shadow-md">
              🥈
            </div>
            <div className="w-full h-28 bg-slate-800/80 rounded-t-2xl border-t-4 border-slate-300 flex flex-col items-center justify-center p-2 text-center shadow-lg">
              <span className="text-sm font-extrabold text-white">المركز الثاني</span>
              <span className="text-xs font-bold text-slate-300 mt-1">{ranked[1].score} نقطة</span>
            </div>
          </motion.div>
        )}

        {/* 1st Place (Champion) */}
        {winner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex-1 flex flex-col items-center -mt-6"
          >
            <div className="text-xs font-black text-amber-300 mb-2 truncate max-w-[120px]">
              👑 {winner.name}
            </div>
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border-3 border-amber-400 flex items-center justify-center text-amber-300 font-black mb-2 shadow-xl shadow-amber-500/30 scale-110">
              <Trophy className="w-7 h-7 text-amber-400" />
            </div>
            <div className="w-full h-36 bg-gradient-to-b from-amber-600/40 to-slate-800/90 rounded-t-2xl border-t-4 border-amber-400 flex flex-col items-center justify-center p-2 text-center shadow-2xl">
              <span className="text-base font-black text-amber-300">الـبـطـل 🏆</span>
              <span className="text-sm font-extrabold text-white mt-1">{winner.score} نقطة</span>
              <span className="text-[11px] text-amber-200/80 mt-0.5">
                {winner.correctCount} إجابات صحيحة
              </span>
            </div>
          </motion.div>
        )}

        {/* 3rd Place */}
        {ranked[2] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex flex-col items-center"
          >
            <div className="text-xs font-bold text-amber-700/80 mb-2 truncate max-w-[100px]">
              {ranked[2].name}
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-700/20 border-2 border-amber-700 flex items-center justify-center text-amber-600 font-bold mb-2 shadow-md">
              🥉
            </div>
            <div className="w-full h-24 bg-slate-800/80 rounded-t-2xl border-t-4 border-amber-700 flex flex-col items-center justify-center p-2 text-center shadow-lg">
              <span className="text-xs font-extrabold text-white">المركز الثالث</span>
              <span className="text-xs font-bold text-slate-300 mt-1">{ranked[2].score} نقطة</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-800 p-6 shadow-2xl mb-8">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Medal className="w-5 h-5 text-emerald-400" />
          <span>جدول الترتيب النهائي</span>
        </h3>

        <div className="divide-y divide-slate-800">
          {ranked.map((p, idx) => {
            const total = p.correctCount + p.wrongCount;
            const accuracy = total > 0 ? Math.round((p.correctCount / total) * 100) : 0;

            return (
              <div
                key={p.id}
                className="py-3 px-3 flex items-center justify-between hover:bg-slate-800/40 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    #{idx + 1}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{p.name}</span>
                      {idx === 0 && <span className="text-amber-400 text-xs">👑 الأول</span>}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>{p.correctCount} صح</span>
                      <span>·</span>
                      <span>{p.wrongCount} خطأ</span>
                      <span>·</span>
                      <span>دقة {accuracy}%</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-black text-amber-400">
                    {p.score} <span className="text-xs font-normal text-slate-400">نقطة</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Questions History Review */}
      {history.length > 0 && (
        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-800 p-6 shadow-2xl mb-8">
          <h3 className="text-base font-bold text-white mb-4">
            سجل أسئلة الجولة ({history.length} سؤال)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1 pl-1 scrollbar-thin scrollbar-thumb-slate-700">
            {history.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-2.5">
                  {item.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  )}
                  <div>
                    <div className="font-bold text-white">{item.player.nameAr}</div>
                    <div className="text-slate-400 text-[11px]">
                      مشارك: {item.participantName}
                      {!item.isCorrect && item.userAnswer && (
                        <span className="text-rose-400 mr-1.5">
                          (إجابته: {item.userAnswer})
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  {item.timeSpentSeconds} ث
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Play Again & New Game Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={onPlayAgain}
          className="w-full sm:w-auto py-3.5 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 active:scale-95 text-white font-black text-base rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all duration-150"
        >
          <RotateCcw className="w-5 h-5" />
          <span>إعادة اللعبة بنفس المشاركين</span>
        </button>

        <button
          type="button"
          onClick={onNewGame}
          className="w-full sm:w-auto py-3.5 px-8 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white font-bold text-base rounded-2xl border border-slate-700 flex items-center justify-center gap-2 transition-all duration-150"
        >
          <PlusCircle className="w-5 h-5 text-emerald-400" />
          <span>بدء لعبة جديدة</span>
        </button>
      </div>
    </div>
  );
};
