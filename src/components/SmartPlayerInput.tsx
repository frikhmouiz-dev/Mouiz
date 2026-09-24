import React, { useState, useRef, useEffect } from 'react';
import { PLAYERS_DATA } from '../data/playersData';
import { Player } from '../types/game';
import { normalizeArabic, normalizeEnglish } from '../utils/textNormalize';
import { Search, Send, Flag, Sparkles } from 'lucide-react';

interface SmartPlayerInputProps {
  onSubmit: (answer: string) => void;
  onGiveUp: () => void;
  disabled?: boolean;
}

export const SmartPlayerInput: React.FC<SmartPlayerInputProps> = ({
  onSubmit,
  onGiveUp,
  disabled = false
}) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<Player[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter suggestions as user types
  useEffect(() => {
    if (!value || value.trim().length < 1) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const queryAr = normalizeArabic(value);
    const queryEn = normalizeEnglish(value);

    const matches = PLAYERS_DATA.filter((player) => {
      // Check Arabic name
      if (normalizeArabic(player.nameAr).includes(queryAr)) return true;
      // Check English name
      if (normalizeEnglish(player.nameEn).includes(queryEn)) return true;
      // Check aliases
      return player.aliases.some((alias) => {
        return normalizeArabic(alias).includes(queryAr) || normalizeEnglish(alias).includes(queryEn);
      });
    }).slice(0, 6);

    setSuggestions(matches);
    setIsOpen(matches.length > 0);
    setSelectedIndex(-1);
  }, [value]);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
        setIsOpen(true);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
        setIsOpen(true);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (isOpen && selectedIndex >= 0 && suggestions[selectedIndex]) {
        selectPlayer(suggestions[selectedIndex]);
      } else {
        submitAnswer();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const selectPlayer = (player: Player) => {
    setValue(player.nameAr);
    setIsOpen(false);
    // Optional instant submit on selecting suggestion or populate input
    onSubmit(player.nameAr);
  };

  const submitAnswer = () => {
    if (!value.trim() || disabled) return;
    setIsOpen(false);
    onSubmit(value.trim());
  };

  return (
    <div ref={containerRef} className="w-full max-w-xl mx-auto relative flex flex-col gap-3">
      <div className="relative flex items-center">
        {/* Input Icon */}
        <div className="absolute right-4 text-slate-400 pointer-events-none">
          <Search className="w-5 h-5" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="اكتب اسم اللاعب هنا... (مثال: كريستيانو رونالدو، ميسي)"
          className="w-full pl-12 pr-12 py-3.5 bg-slate-900/90 text-white placeholder-slate-400 text-base md:text-lg font-medium rounded-2xl border-2 border-slate-700/80 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 shadow-xl outline-none transition-all duration-200 disabled:opacity-50"
          autoComplete="off"
          autoFocus
        />

        {/* Clear / submit helper icon inside input on left */}
        {value && !disabled && (
          <button
            type="button"
            onClick={() => {
              setValue('');
              setSuggestions([]);
              inputRef.current?.focus();
            }}
            className="absolute left-4 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800 transition-colors"
          >
            مسح
          </button>
        )}
      </div>

      {/* Smart Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && !disabled && (
        <div className="absolute top-[58px] inset-x-0 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 bg-slate-950/60 border-b border-slate-800 text-[11px] font-bold text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              اقتراحات مطابقة من قاعدة البيانات
            </span>
            <span>{suggestions.length} لاعبين</span>
          </div>

          <ul className="max-h-60 overflow-y-auto divide-y divide-slate-800/60">
            {suggestions.map((player, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <li
                  key={player.id}
                  onClick={() => selectPlayer(player)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors duration-150 ${
                    isSelected ? 'bg-emerald-600/20 text-emerald-300' : 'hover:bg-slate-800/60 text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-slate-200 shadow-sm">
                      {player.nameAr.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        <span>{player.nameAr}</span>
                        <span className="text-xs text-slate-400 font-normal">({player.nameEn})</span>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <span>{player.positionAr}</span>
                        <span>·</span>
                        <span>{player.nationalityAr}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-emerald-400 font-semibold opacity-0 group-hover:opacity-100">
                    اختيار
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Action Buttons: Confirm & Skip */}
      <div className="flex items-center justify-between gap-3 mt-1">
        <button
          type="button"
          onClick={submitAnswer}
          disabled={!value.trim() || disabled}
          className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-[0.98] text-white font-extrabold text-base md:text-lg rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Send className="w-5 h-5 rtl:rotate-180" />
          <span>تأكيد الإجابة</span>
        </button>

        <button
          type="button"
          onClick={onGiveUp}
          disabled={disabled}
          className="py-3 px-4 bg-slate-800/90 hover:bg-slate-700 hover:text-amber-300 active:scale-[0.98] text-slate-300 font-bold text-sm md:text-base rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition-all duration-200 disabled:opacity-40"
          title="كشف اسم اللاعب والانتقال"
        >
          <Flag className="w-4 h-4 text-amber-400" />
          <span>تخطي السؤال</span>
        </button>
      </div>
    </div>
  );
};
