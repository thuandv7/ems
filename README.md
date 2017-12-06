##EMS:

*Unable to load script from assets `index.android.bundle`:*
1. Create `assets` folder: 
~~~
mkdir android/app/src/main/assets
~~~
2. create `index.android.bundle` file: 
~~~
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
~~~
3. `react-native run-android`
