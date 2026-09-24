import React from 'react';
import { Volume2, VolumeX, FolderCog, Trophy, RotateCcw } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { PWAInstallPrompt } from './PWAInstallPrompt';

interface HeaderProps {
  onOpenLogoManager: () => void;
  onResetGame?: () => void;
  isGameActive: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLogoManager,
  onResetGame,
  isGameActive,
  isMuted,
  onToggleMute
}) => {
  return (
    <header className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 px-4 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Title and Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Trophy className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-black tracking-tight text-white flex items-center gap-2">
              <span>خمّن انتقالات اللاعبين</span>
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">
              تحدي معرفة نجوم كرة القدم من مسيرة انتقالاتهم بين الأندية
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Android PWA Install button & modal prompt */}
          <PWAInstallPrompt />

          {/* Logo System Manager Modal Button */}
          <button
            type="button"
            onClick={onOpenLogoManager}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 text-xs font-semibold transition-all duration-150"
            title="فحص وإدارة شعارات الأندية"
          >
            <FolderCog className="w-4 h-4 text-emerald-400" />
            <span className="hidden md:inline">نظام الشعارات</span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            type="button"
            onClick={onToggleMute}
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 transition-all duration-150"
            title={isMuted ? 'تشغيل المؤثرات الصوتية' : 'كتم الصوت'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-rose-400" />
            ) : (
              <Volume2 className="w-5 h-5 text-emerald-400" />
            )}
          </button>

          {/* Reset / Quit Game if active */}
          {isGameActive && onResetGame && (
            <button
              type="button"
              onClick={onResetGame}
              className="p-2 bg-slate-900 hover:bg-rose-950/40 text-slate-300 hover:text-rose-400 rounded-xl border border-slate-700/80 transition-all duration-150"
              title="العودة لشاشة البداية"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
