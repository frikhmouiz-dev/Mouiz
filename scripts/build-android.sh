#!/bin/bash
set -e

echo "=== 1. بناء واجهة الويب والأصول المحلية ==="
npm run build

echo "=== 2. مزامنة الملفات مع مجلد تطبيق Android ==="
npx cap sync android

echo "=== 3. فحص صلاحيات Gradlew ==="
chmod +x android/gradlew

echo "=== 4. بناء نسخة Release APK ==="
cd android
./gradlew assembleRelease

echo "=== اكتمل البناء بنجاح! مسار ملف الـ APK: ==="
ls -lh app/build/outputs/apk/release/*.apk
