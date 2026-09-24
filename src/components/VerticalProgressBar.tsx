import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

interface VerticalProgressBarProps {
  totalQuestions: number;
  currentQuestionIndex: number; // 0-based
  history: Array<{ isCorrect: boolean } | null>;
}

export const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({
  totalQuestions,
  currentQuestionIndex,
  history
}) => {
  return (
    <div className="flex flex-col items-center py-4 px-2.5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl w-14 md:w-16 flex-shrink-0">
      <span className="text-[11px] font-bold text-slate-400 mb-3 tracking-wider uppercase">
        المسار
      </span>

      {/* Vertical ladder */}
      <div className="relative flex flex-col items-center gap-3.5 w-full">
        {/* Connecting background vertical line */}
        <div className="absolute top-3 bottom-3 w-1 bg-slate-800 rounded-full z-0" />

        {/* Dynamic completed line highlight */}
        <div
          className="absolute top-3 w-1 bg-emerald-500 rounded-full z-0 transition-all duration-300"
          style={{
            height: `${Math.min(100, (currentQuestionIndex / Math.max(1, totalQuestions - 1)) * 100)}%`
          }}
        />

        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const isCurrent = idx === currentQuestionIndex;
          const isPast = idx < currentQuestionIndex;
          const pastRecord = history[idx];

          let nodeStyle = 'bg-slate-900 border-slate-700 text-slate-400';
          let icon = <span className="text-xs font-bold">{idx + 1}</span>;

          if (isCurrent) {
            nodeStyle = 'bg-red-600 border-red-400 text-white shadow-lg shadow-red-500/50 scale-110 ring-4 ring-red-500/20';
          } else if (isPast) {
            if (pastRecord?.isCorrect) {
              nodeStyle = 'bg-emerald-600 border-emerald-400 text-white';
              icon = <Check className="w-3.5 h-3.5 stroke-[3]" />;
            } else {
              nodeStyle = 'bg-rose-900/80 border-rose-600 text-rose-200';
              icon = <X className="w-3.5 h-3.5 stroke-[3]" />;
            }
          }

          return (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <motion.div
                initial={false}
                animate={{
                  scale: isCurrent ? 1.15 : 1
                }}
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${nodeStyle}`}
              >
                {icon}
              </motion.div>

              {/* Tooltip on hover */}
              <div className="absolute right-full mr-2 hidden group-hover:flex items-center px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-200 whitespace-nowrap shadow-md pointer-events-none z-20">
                السؤال {idx + 1} {isCurrent ? '(الحالي)' : isPast ? (pastRecord?.isCorrect ? '✓ صحيح' : '✗ خاطئ') : ''}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
        <span className="text-[10px] text-slate-400 block font-medium">
          {currentQuestionIndex + 1}/{totalQuestions}
        </span>
      </div>
    </div>
  );
};
