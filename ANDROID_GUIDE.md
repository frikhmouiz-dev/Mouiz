# دليل بناء وتثبيت تطبيق الأندرويد: «خمّن انتقالات اللاعبين» 📱⚽

تم تحويل وتجهيز المشروع بالكامل كمشروع **Android أصلي (Native Android Project مع Gradle وCapacitor Bridge)**، مع تضمين كافة الشعارات المحلية (40+ شعار نادي بصيغة SVG/PNG)، قاعدة بيانات 60 لاعباً، المؤثرات الصوتية، ودعم كامل للغة العربية واتجاه RTL.

---

## 📁 هيكلية مشروع الأندرويد المُنشأ

```text
/android/
├── app/
│   ├── build.gradle                   # إعدادات البناء وتوقيع Release APK
│   ├── src/main/
│   │   ├── AndroidManifest.xml        # إعدادات التطبيق ودعم RTL والاسم والشاشة
│   │   ├── java/com/transfersgame/football/MainActivity.java
│   │   ├── res/
│   │   │   ├── values/strings.xml     # اسم التطبيق: «خمّن انتقالات اللاعبين»
│   │   │   ├── mipmap-*/              # أيقونات التطبيق الرسمية لكافة دقات الشاشة
│   │   │   └── ...
│   │   └── assets/public/             # ملفات اللعبة والشعارات والأصوات المضمنة بالكامل محلياً (Offline)
├── build.gradle                       # إعدادات Gradle الرئيسية
├── settings.gradle
├── variables.gradle                   # إصدارات SDK والمكتبات
├── gradlew & gradlew.bat              # أداة البناء Gradle Wrapper
└── capacitor.settings.gradle
```

---

## 🛠️ خيارات بناء ملف الـ APK

### الخيار 1: البناء التلقائي الفوري عبر GitHub Actions (الأسهل والأسرع) 🚀

تم إنشاء ملف Workflow جاهز في المشروع داخل:
`.github/workflows/build-apk.yml`

1. ارفع المشروع إلى حسابك على **GitHub**.
2. توجّه إلى تبويب **Actions** في مستودع GitHub.
3. اختر **Build Android Release APK** واضغط على **Run workflow**.
4. خلال دقيقتين ستكتمل عملية البناء وستجد ملف الـ **Release APK** جاهزاً للتنزيل مباشرة من قسم **Artifacts**!

---

### الخيار 2: البناء عبر سطر الأوامر (Terminal / Bash)

إذا كان لديك بيئة Java 17 و Android SDK مثبتة على جهازك:

```bash
# 1. تثبيت الحزم وبناء ملفات الواجهة
npm install
npm run build

# 2. مزامنة الملفات مع مجلد الأندرويد
npx cap sync android

# 3. بناء نسخة Release APK موقّعة وجاهزة للتثبيت
cd android
./gradlew assembleRelease
```

ستجد ملف الـ APK النهائي الناتج في المسار التالي:
`android/app/build/outputs/apk/release/app-release.apk`

---

### الخيار 3: الفتح والبناء عبر Android Studio 💻

1. افتح برنامج **Android Studio**.
2. اختر **Open** وحدد مجلد `android` الموجود داخل هذا المشروع.
3. انتظر ثوانٍ حتى يُنهي Android Studio مزامنة Gradle (`Gradle Sync`).
4. لتشغيل اللعبة مباشرة على محاكي أو هاتفك الموصول عبر USB:
   - اضغط على زر **Run** (الأخضر ▶️).
5. لتصدير ملف APK:
   - من القائمة العلوية: **Build** ➔ **Build Bundle(s) / APK(s)** ➔ **Build APK(s)**.
   - سيظهر إشعار يحتوي على زر `locate` ينقلك مباشرة للملف.

---

## 📲 خطوات تثبيت ملف الـ APK على هاتف أندرويد

1. أرسل ملف `app-release.apk` إلى هاتفك (عبر WhatsApp، Telegram، Google Drive، أو كابل USB).
2. افتح الملف على الهاتف واضغط **تثبيت (Install)**.
3. إذا ظهر تنبيه "تثبيت تطبيقات من مصادر غير معروفة" (Unknown Sources):
   - اضغط على **الإعدادات (Settings)**.
   - فعّل خيار **السماح من هذا المصدر (Allow from this source)**.
4. اضغط على **تثبيت (Install)** مرة أخرى، وستظهر أيقونة لعبة «خمّن انتقالات اللاعبين» على شاشة هاتفك الرئيسية.
5. استمتع باللعب بكامل الميزات وبدون الحاجة لإنترنت!
