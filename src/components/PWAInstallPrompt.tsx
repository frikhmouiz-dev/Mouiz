import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Smartphone, X, CheckCircle2, Share2, Info, WifiOff } from 'lucide-react';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWAInstall';

export const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, isAndroid, isIOS, install } = usePWAInstall();
  const [showAndroidModal, setShowAndroidModal] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  // If already running standalone inside Android/iOS installed app, hide prompts
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (!outcome && isAndroid) {
        setShowAndroidModal(true);
      }
    } else {
      setShowAndroidModal(true);
    }
  };

  return (
    <>
      {/* Top/Header Android App Action Button */}
      <div className="flex items-center">
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition-all active:scale-95"
          title="تثبيت التطبيق على جهازك بنظام أندرويد"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-200" />
          <span>تطبيق الأندرويد</span>
          <Download className="w-3 h-3 text-emerald-200 animate-bounce" />
        </button>
      </div>

      {/* Floating Bottom Android Install Banner for mobile users who haven't dismissed it yet */}
      <AnimatePresence>
        {!bannerDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:right-6 sm:w-96 z-50 p-3.5 bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl shadow-2xl shadow-emerald-950/60"
          >
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 p-1 shadow-inner">
                <img src="/pwa-192x192.png" alt="أيقونة التطبيق" className="w-full h-full object-contain rounded-lg" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-white flex items-center gap-1">
                    <span>حمّل تطبيق أندرويد الآن</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded font-bold">APK / PWA</span>
                  </h4>
                  <button
                    onClick={() => setBannerDismissed(true)}
                    className="text-slate-400 hover:text-white p-0.5 rounded-lg"
                    aria-label="إغلاق التنبيه"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                  ثبّت اللعبة مباشرة كـ تطبيق أندرويد سريع وخفيف دون استهلاك مساحة، مع دعم العمل بدون إنترنت!
                </p>

                <div className="mt-2.5 flex items-center gap-2">
                  <button
                    onClick={handleInstallClick}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/30 transition-transform active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>تثبيت الآن</span>
                  </button>
                  <button
                    onClick={() => setShowAndroidModal(true)}
                    className="py-1.5 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    التعليمات
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Android & Mobile Instructions Modal */}
      <AnimatePresence>
        {showAndroidModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md bg-slate-900 border border-emerald-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl text-right overflow-hidden relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">تثبيت التطبيق على أندرويد</h3>
                    <p className="text-xs text-emerald-400">تطبيق ويب تقدمي (PWA) معتمد</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAndroidModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {isInstallable ? (
                <div className="mt-5 space-y-4">
                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <p className="text-xs text-emerald-200 font-medium">
                      متصفحك يدعم التثبيت المباشر بنقرة واحدة! اضغط أدناه لإضافة التطبيق إلى شاشتك الرئيسية فوراً.
                    </p>
                  </div>
                  <button
                    onClick={async () => {
                      await install();
                      setShowAndroidModal(false);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-98 transition-transform"
                  >
                    <Download className="w-4 h-4" />
                    <span>تأكيد تثبيت التطبيق</span>
                  </button>
                </div>
              ) : (
                <div className="mt-4 space-y-4 text-xs text-slate-300">
                  <p className="text-slate-400">
                    يمكنك تشغيل اللعبة كتطبيق مستقل على هاتفك الأندرويد بكل سهولة عبر متصفح Chrome أو أي متصفح آخر:
                  </p>

                  <div className="space-y-2.5">
                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-xs">1</span>
                      <div>
                        <p className="font-bold text-white">اضغط على زر القائمة (⋮) بأعلى المتصفح</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">في متصفح Chrome أو Samsung Internet أو غيرها.</p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-xs">2</span>
                      <div>
                        <p className="font-bold text-white">اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية"</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">ستظهر لك أيقونة اللعبة المخصصة فوراً على شاشة هاتفك.</p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center flex-shrink-0 text-xs">3</span>
                      <div>
                        <p className="font-bold text-white">استمتع بتجربة ملء الشاشة الفورية</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">يعمل التطبيق بدون أشرطة عناوين وبسرعة فائقة حتى دون إنترنت.</p>
                      </div>
                    </div>
                  </div>

                  {isIOS && (
                    <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl text-amber-200">
                      <div className="flex items-center gap-1.5 font-bold mb-1">
                        <Share2 className="w-4 h-4 text-amber-400" />
                        <span>لمستخدمي iPhone / Safari:</span>
                      </div>
                      <p className="text-[11px]">اضغط على زر المشاركة (Share) في أسفل الشاشة، ثم اختر <strong>"إضافة إلى الشاشة الرئيسية" (Add to Home Screen)</strong>.</p>
                    </div>
                  )}

                  <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-400 text-[11px]">
                    <Info className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>تطبيق آمن 100% ولا يحتاج إلى أذونات خاصة، ويتم تحديثه تلقائياً بأحدث اللاعبين.</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowAndroidModal(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
              >
                إغلاق
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-amber-500/95 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-slate-950 shadow-xl border border-amber-300 animate-pulse">
      <WifiOff className="w-3.5 h-3.5 text-slate-950" />
      <span>أنت غير متصل بالإنترنت — وضع عدم الاتصال نشط والبيانات محفوظة محلياً.</span>
    </div>
  );
};
