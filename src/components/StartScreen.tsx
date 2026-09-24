import React, { useState } from 'react';
import { GameSettings, Participant } from '../types/game';
import { Users, UserPlus, Trash2, Play, Sparkles, Clock, HelpCircle, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

const PRESET_COLORS = [
  '#10B981', // Emerald
  '#3B82F6', // Blue
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#8B5CF6', // Purple
  '#EF4444', // Red
  '#06B6D4', // Cyan
  '#F97316'  // Orange
];

const FUN_NICKNAMES = [
  'أحمد (المدريدي)', 'عمر (الكتلوني)', 'ساري (صاحب التكتيك)', 'كابتن ماجد',
  'أبو تريكة', 'صقر الملاعب', 'الدون الصغير', 'مهندس الوسط', 'صياد الأهداف',
  'المعلق الرياضي', 'الفيلسوف بيب', 'الهداف التاريخي'
];

interface StartScreenProps {
  onStartGame: (participants: Participant[], settings: GameSettings) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  const [playerNames, setPlayerNames] = useState<string[]>(['المشارك الأول', 'المشارك الثاني']);
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState<number>(5);
  const [timerSeconds, setTimerSeconds] = useState<number>(30);
  const [era, setEra] = useState<GameSettings['era']>('all');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const addPlayer = () => {
    if (playerNames.length >= 8) return;
    setPlayerNames([...playerNames, `المشارك ${playerNames.length + 1}`]);
    setErrorMsg('');
  };

  const removePlayer = (index: number) => {
    if (playerNames.length <= 2) {
      setErrorMsg('يجب أن تحتوي اللعبة على مشاركَيْن (2) على الأقل.');
      return;
    }
    const updated = playerNames.filter((_, i) => i !== index);
    setPlayerNames(updated);
    setErrorMsg('');
  };

  const updateName = (index: number, val: string) => {
    const updated = [...playerNames];
    updated[index] = val;
    setPlayerNames(updated);
    setErrorMsg('');
  };

  const setExactCount = (count: number) => {
    if (count < 2 || count > 8) return;
    const current = [...playerNames];
    if (count > current.length) {
      while (current.length < count) {
        current.push(`المشارك ${current.length + 1}`);
      }
    } else {
      current.length = count;
    }
    setPlayerNames(current);
    setErrorMsg('');
  };

  const randomizeNames = () => {
    const shuffled = [...FUN_NICKNAMES].sort(() => 0.5 - Math.random());
    const newNames = playerNames.map((_, idx) => shuffled[idx % shuffled.length]);
    setPlayerNames(newNames);
  };

  const handleStart = () => {
    const trimmed = playerNames.map((n) => n.trim());
    if (trimmed.some((n) => !n)) {
      setErrorMsg('يرجى ملء جميع أسماء المشاركين للمتابعة.');
      return;
    }

    const participants: Participant[] = trimmed.map((name, idx) => ({
      id: `p-${idx + 1}-${Date.now()}`,
      name,
      color: PRESET_COLORS[idx % PRESET_COLORS.length],
      score: 0,
      correctCount: 0,
      wrongCount: 0
    }));

    const settings: GameSettings = {
      questionsPerParticipant: questionsPerPlayer,
      timerSeconds,
      era,
      difficulty: 'all'
    };

    onStartGame(participants, settings);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Hero Presentation */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center justify-center p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4 shadow-inner"
        >
          <Trophy className="w-8 h-8 text-amber-400" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-['Changa',sans-serif]">
          خمّن انتقالات اللاعبين
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          تحدَّ أصدقاءك في لعبة جماعية لمعرفة لاعبي كرة القدم من خلال تسلسل شعارات الأندية وسنوات الانتقال!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Participants Setup (2 to 8 players) */}
        <div className="lg:col-span-2 bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-800 p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">المشاركون في اللعبة</h3>
              <span className="text-xs text-slate-400">({playerNames.length} من 8)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={randomizeNames}
                className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
                title="تعبئة بأسماء كروية طريفة"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>اقتراح أسماء</span>
              </button>
            </div>
          </div>

          {/* Quick Participant Count Selector */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-slate-400 font-medium">عدد اللاعبين:</span>
            {[2, 3, 4, 5, 6, 8].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setExactCount(count)}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  playerNames.length === count
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {count}
              </button>
            ))}
          </div>

          {/* Participant Inputs List */}
          <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1 pl-1 scrollbar-thin scrollbar-thumb-slate-700">
            {playerNames.map((name, index) => {
              const color = PRESET_COLORS[index % PRESET_COLORS.length];
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2.5 bg-slate-950/60 rounded-2xl border border-slate-800 focus-within:border-emerald-500 transition-colors"
                >
                  {/* Colored Avatar Indicator */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-md flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {index + 1}
                  </div>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => updateName(index, e.target.value)}
                    placeholder={`اسم المشارك ${index + 1}`}
                    maxLength={25}
                    className="flex-1 bg-transparent text-white placeholder-slate-500 font-semibold text-sm outline-none px-2"
                  />

                  {playerNames.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removePlayer(index)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors rounded-lg hover:bg-slate-800/80"
                      title="حذف هذا المشارك"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {playerNames.length < 8 && (
            <button
              type="button"
              onClick={addPlayer}
              className="mt-4 w-full py-2.5 bg-slate-800/60 hover:bg-slate-800 text-emerald-400 font-bold text-sm rounded-xl border border-dashed border-emerald-500/40 flex items-center justify-center gap-2 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>إضافة مشارك إضافي ({playerNames.length + 1})</span>
            </button>
          )}

          {errorMsg && (
            <div className="mt-4 p-3 bg-rose-950/50 border border-rose-800/80 rounded-xl text-rose-300 text-xs font-semibold">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Right Column: Game Settings */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-800 p-6 shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>إعدادات الجولة</span>
            </h3>

            {/* Questions per participant */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                عدد الأسئلة لكل مشارك
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 7, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuestionsPerPlayer(num)}
                    className={`py-2 text-xs font-black rounded-xl border transition-all ${
                      questionsPerPlayer === num
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/30'
                        : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-500 mt-1.5 block">
                مجموع أسئلة اللعبة: {questionsPerPlayer * playerNames.length} سؤال
              </span>
            </div>

            {/* Question timer */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                مؤقت الإجابة لكل سؤال
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { sec: 0, label: 'بدون' },
                  { sec: 20, label: '20 ث' },
                  { sec: 30, label: '30 ث' },
                  { sec: 45, label: '45 ث' }
                ].map((item) => (
                  <button
                    key={item.sec}
                    type="button"
                    onClick={() => setTimerSeconds(item.sec)}
                    className={`py-2 text-xs font-black rounded-xl border transition-all ${
                      timerSeconds === item.sec
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                        : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Era / Category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                فئة اللاعبين
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'all', label: 'جميع اللاعبين' },
                  { id: 'modern', label: 'نجوم الحاضر' },
                  { id: 'legend', label: 'أساطير كلاسيكية' },
                  { id: 'arab', label: 'نجوم العرب' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setEra(cat.id as GameSettings['era'])}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition-all ${
                      era === cat.id
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                        : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Start Game Button */}
          <button
            type="button"
            onClick={handleStart}
            className="mt-8 w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 active:scale-[0.98] text-white font-black text-lg md:text-xl rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all duration-200"
          >
            <Play className="w-6 h-6 fill-current rtl:rotate-180" />
            <span>بدء اللعبة</span>
          </button>
        </div>
      </div>
    </div>
  );
};
