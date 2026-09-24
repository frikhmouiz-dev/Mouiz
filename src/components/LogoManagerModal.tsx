import React, { useState } from 'react';
import { getAllClubs, findClubByFilename, registerCustomLogo, resetCustomLogos, getClubLogo } from '../services/clubLogos';
import { Club } from '../types/game';
import { ClubLogo } from './ClubLogo';
import { X, Search, CheckCircle, AlertTriangle, Upload, RefreshCw, Sparkles, Folder, ExternalLink } from 'lucide-react';

interface LogoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoManagerModal: React.FC<LogoManagerModalProps> = ({ isOpen, onClose }) => {
  const [testFilename, setTestFilename] = useState('Real_Madrid.png');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadedNotify, setUploadedNotify] = useState<string | null>(null);

  if (!isOpen) return null;

  const clubs = getAllClubs();
  const testMatch = findClubByFilename(testFilename);

  const filteredClubs = clubs.filter((c) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.nameAr.toLowerCase().includes(q) ||
      c.nameEn.toLowerCase().includes(q) ||
      c.countryAr.toLowerCase().includes(q) ||
      c.aliases.some((a) => a.toLowerCase().includes(q))
    );
  });

  const handleFileUpload = (club: Club, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('png') && !file.type.includes('image')) {
      alert('يرجى اختيار ملف صورة PNG صالح.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      registerCustomLogo(club.id, dataUrl);
      setUploadedNotify(`تم تعيين الشعار المخصص لنادي ${club.nameAr} بنجاح!`);
      setTimeout(() => setUploadedNotify(null), 3500);
    };
    reader.readAsDataURL(file);
  };

  const handleResetLogos = () => {
    if (confirm('هل أنت متأكد من رغبتك في إعادة تعيين الشعارات إلى الافتراضية؟')) {
      resetCustomLogos();
      setUploadedNotify('تمت إعادة تعيين الشعارات.');
      setTimeout(() => setUploadedNotify(null), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Folder className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-lg font-bold text-white">نظام شعارات الأندية الحقيقية</h3>
              <p className="text-xs text-slate-400">
                المطابقة الذكية لأسماء ملفات PNG وربطها التلقائي بمجلد <code className="text-emerald-400">/public/logos/</code>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Notification Alert */}
          {uploadedNotify && (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500 rounded-2xl text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{uploadedNotify}</span>
            </div>
          )}

          {/* Test Filename Matcher Box */}
          <div className="p-5 bg-slate-950/70 border border-slate-800 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                اختبار المطابقة الذكية لاختلاف أسماء الملفات (Real_Madrid.png / real-madrid.png ...)
              </span>
              <span className="text-[11px] text-slate-500">جرب كتابة أي اسم ملف</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={testFilename}
                  onChange={(e) => setTestFilename(e.target.value)}
                  placeholder="مثال: Real_Madrid.png أو Barcelona.png أو al_nassr.png"
                  className="w-full px-4 py-2.5 bg-slate-900 text-white rounded-xl border border-slate-700 text-sm font-mono focus:border-emerald-500 outline-none"
                />
              </div>

              <div className="flex items-center gap-1">
                {['Real_Madrid.png', 'barcelona.png', 'manchester_united.png', 'al-nassr.png'].map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => setTestFilename(sample)}
                    className="hidden sm:inline-block px-2 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-mono"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>

            {/* Test Match Result Box */}
            <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
              {testMatch ? (
                <div className="flex items-center gap-3">
                  <ClubLogo clubIdOrName={testMatch.id} size="sm" />
                  <div>
                    <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>تم التعرف على النادي بنجاح: {testMatch.nameAr} ({testMatch.nameEn})</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">
                      المسار المعياري في الموقع: <span className="text-slate-200">{testMatch.defaultLogo}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>لم يتم التعرف على نادي مطابق لاسم الملف: "{testFilename}"</span>
                </div>
              )}
            </div>
          </div>

          {/* Clubs Directory Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="w-full sm:w-auto relative flex-1 max-w-sm">
              <Search className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث في الأندية المسجلة بالاسم أو الدولة..."
                className="w-full pl-3 pr-9 py-2 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">
                إجمالي الأندية: {clubs.length}
              </span>
              <button
                type="button"
                onClick={handleResetLogos}
                className="px-3 py-1.5 bg-slate-800 hover:bg-rose-950 text-slate-300 hover:text-rose-300 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors"
                title="إعادة تعيين الشعارات إلى الافتراضية"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>إعادة ضبط</span>
              </button>
            </div>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pr-1 pl-1 scrollbar-thin scrollbar-thumb-slate-700">
            {filteredClubs.map((club) => {
              const currentPath = getClubLogo(club.id);
              return (
                <div
                  key={club.id}
                  className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <ClubLogo clubIdOrName={club.id} size="sm" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate" title={club.nameAr}>
                        {club.nameAr}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate font-mono">
                        {club.defaultLogo}
                      </div>
                      <span className="text-[10px] text-slate-500">{club.countryAr}</span>
                    </div>
                  </div>

                  {/* Upload custom PNG button */}
                  <label className="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl cursor-pointer transition-colors flex-shrink-0" title="رفع ملف PNG مخصص لهذا النادي">
                    <Upload className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/png,image/svg+xml,image/*"
                      onChange={(e) => handleFileUpload(club, e)}
                      className="hidden"
                    />
                  </label>
                </div>
              );
            })}
          </div>

          {/* Info note */}
          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl text-xs text-slate-400 space-y-1">
            <div className="font-bold text-slate-300">💡 ملاحظة حول ملفات الشعارات:</div>
            <div>
              • الشعارات الحقيقية متوفرة في المجلد <code className="text-emerald-400 font-mono">/public/logos/</code> كملفات PNG عالية الدقة.
            </div>
            <div>
              • يمكنك إضافة أو استبدال أي ملف PNG مباشرة، وسيتعرف عليه النظام فوراً دون الحاجة لتعديل الكود.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
