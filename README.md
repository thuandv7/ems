EMS:

Run Android nếu sảy ra lỗi không tìm thấy file index.android.bundle thì làm như sau:
1. Tạo folder: assets bằng cách gõ lệnh: mkdir android/app/src/main/assets
2. Chạy lệnh: 
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3. react-native run-android