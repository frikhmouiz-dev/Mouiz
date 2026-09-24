import React from 'react';
import { TransferStep } from '../types/game';
import { ClubLogo } from './ClubLogo';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { findClub } from '../services/clubLogos';

interface TransferChainProps {
  transfers: TransferStep[];
  revealNames?: boolean;
}

export const TransferChain: React.FC<TransferChainProps> = ({
  transfers,
  revealNames = false
}) => {
  return (
    <div className="w-full py-4 md:py-6 px-2 md:px-4 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl overflow-x-auto scroll-smooth">
      <div className="min-w-max flex items-center justify-start md:justify-center gap-2 sm:gap-3 md:gap-5 mx-auto px-2 py-2">
        {transfers.map((step, idx) => {
          const isLast = idx === transfers.length - 1;
          const club = findClub(step.clubId);
          const clubName = club?.nameAr || step.clubId;

          return (
            <React.Fragment key={`${step.clubId}-${step.year}-${idx}`}>
              {/* Club Item */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col items-center flex-shrink-0"
              >
                {/* Club Logo with subtle glow for the current club */}
                <div className={`relative group p-1 rounded-2xl transition-all ${isLast ? 'ring-2 ring-emerald-500/50 bg-emerald-950/20' : ''}`}>
                  <ClubLogo
                    clubIdOrName={step.clubId}
                    size="lg"
                    showLabel={false}
                  />

                  {revealNames && (
                    <div className="mt-1 text-[11px] font-bold text-slate-300 text-center max-w-[95px] truncate">
                      {clubName}
                    </div>
                  )}

                  {isLast && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-emerald-500 text-[10px] font-black text-slate-950 rounded shadow whitespace-nowrap">
                      الحالي
                    </div>
                  )}
                </div>

                {/* Transfer Year Badge Under Logo */}
                <div className="mt-2.5 px-2.5 py-0.5 md:py-1 bg-slate-800/90 text-amber-300 text-xs md:text-sm font-extrabold tracking-wide rounded-lg border border-amber-500/30 shadow-inner flex items-center justify-center">
                  <span>{step.year}</span>
                </div>

                {step.type === 'loan' && (
                  <span className="text-[10px] font-medium text-amber-400/80 mt-0.5">
                    إعارة
                  </span>
                )}
              </motion.div>

              {/* Circular black arrow containing a white arrow between every two logos */}
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 + 0.04 }}
                  className="flex flex-col items-center justify-center pb-6 md:pb-8 flex-shrink-0"
                  aria-label="سهم الانتقال"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-black border-2 border-slate-700 flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    {/* In RTL (Right-to-Left), flow advances right-to-left, so arrow points LEFT (ArrowLeft) */}
                    <ArrowLeft className="w-3.5 h-3.5 md:w-5 md:h-5 text-white stroke-[2.5]" />
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
