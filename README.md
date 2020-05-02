# Equine-Register

Owner Address Lookup App

## Getting Started

1. Clone this repo by running following command in terminal `git clone https://github.com/Thanhal-P-A/Equine-Register.git`
2. Run `cd Equine-Register` to go to project's root directory
3. Run `npm install` to install dependencies
4. After installing dependencies run `npx react-native start` to start the packager
5. Connect a mobile device to your development machine or open an emulator
6. Run the test application :
  * On Android:
    * Open another terminal and run `npx react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
7. If build failed in android :
    * Open `android/app` in android studio and wait for indexing and synching the project. Then run `npx react-native run-android` or hit `Run` button after selecting device or emulator from android studio
    * If connection error occur, try running command `adb reverse tcp:8081 tcp:8081` to reverse proxy then retry.
8. There You Go !!!!