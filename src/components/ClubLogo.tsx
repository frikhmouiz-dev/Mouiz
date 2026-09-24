import React, { useState } from 'react';
import { findClub, getClubLogo } from '../services/clubLogos';
import { Shield } from 'lucide-react';

interface ClubLogoProps {
  clubIdOrName: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
}

export const ClubLogo: React.FC<ClubLogoProps> = ({
  clubIdOrName,
  className = '',
  size = 'lg',
  showLabel = false
}) => {
  const club = findClub(clubIdOrName);
  const [loadError, setLoadError] = useState(false);
  const [fallbackExtAttempted, setFallbackExtAttempted] = useState(false);

  const initialUrl = getClubLogo(clubIdOrName);
  const [currentUrl, setCurrentUrl] = useState(initialUrl);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20 md:w-24 md:h-24',
    xl: 'w-28 h-28 md:w-32 md:h-32'
  }[size];

  const handleImageError = () => {
    // If .png failed, try .svg
    if (!fallbackExtAttempted && currentUrl.endsWith('.png')) {
      setFallbackExtAttempted(true);
      setCurrentUrl(currentUrl.replace('.png', '.svg'));
      return;
    }
    // If .svg failed, try .png
    if (!fallbackExtAttempted && currentUrl.endsWith('.svg')) {
      setFallbackExtAttempted(true);
      setCurrentUrl(currentUrl.replace('.svg', '.png'));
      return;
    }
    setLoadError(true);
  };

  const clubNameAr = club?.nameAr || clubIdOrName;
  const clubNameEn = club?.nameEn || clubIdOrName;
  const primaryColor = club?.primaryColor || '#1e293b';
  const secondaryColor = club?.secondaryColor || '#38bdf8';

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div
        className={`${sizeClasses} relative p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex items-center justify-center transition-all hover:scale-105 duration-200 group overflow-hidden`}
        style={{
          boxShadow: `0 8px 24px -6px ${primaryColor}25`
        }}
      >
        {/* Subtle background glow from club primary color */}
        <div
          className="absolute inset-0 opacity-15 blur-md pointer-events-none"
          style={{ backgroundColor: primaryColor }}
        />

        {!loadError ? (
          <img
            src={currentUrl}
            alt={clubNameAr}
            onError={handleImageError}
            className="w-full h-full object-contain filter drop-shadow-md z-10 select-none"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full rounded-xl flex flex-col items-center justify-center text-white p-1 z-10"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
            }}
          >
            <Shield className="w-6 h-6 mb-1 opacity-90 drop-shadow" />
            <span className="text-[11px] font-bold leading-tight line-clamp-1 drop-shadow-sm px-1">
              {clubNameAr.slice(0, 10)}
            </span>
          </div>
        )}
      </div>

      {showLabel && (
        <span className="mt-2 text-xs font-semibold text-slate-300 max-w-[100px] truncate" title={clubNameAr}>
          {clubNameAr}
        </span>
      )}
    </div>
  );
};
