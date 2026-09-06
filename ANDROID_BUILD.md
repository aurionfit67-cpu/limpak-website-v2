# Android APK Build Instructions for LIMEPAK

This guide provides step-by-step instructions for building the LIMEPAK Android APK using Capacitor.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18 or higher
- **npm** 9 or higher (or yarn)
- **Java JDK** 17 or higher
- **Android Studio** (latest stable version)
- **Android SDK** with the following components:
  - Android SDK Platform
  - Android SDK Build-Tools
  - Android SDK Command-line Tools
  - Android Emulator
  - Android SDK Platform-Tools
  - Android SDK Tools

## Installation

### 1. Clone the Repository

```bash
cd /path/to/your/projects
git clone <repository-url>
cd limepak
```

### 2. Install Dependencies

```bash
npm install
```

This will install all Node.js dependencies including Capacitor.

### 3. Build the Next.js Application

```bash
npm run build
```

This creates a production build of the Next.js application in the `.next` directory.

## Capacitor Setup

### 4. Initialize Capacitor (if not already done)

```bash
npx cap init
```

Follow the prompts:
- **App name:** LIMEPAK
- **App ID:** com.limepak.app (or your preferred package name)
- **Web directory:** out (or your Next.js output directory)

### 5. Add Android Platform

```bash
npm run android:init
```

Or manually:

```bash
npx cap add android
```

This creates the Android project in the `android` directory.

### 6. Configure Capacitor

Edit `capacitor.config.ts` to ensure it points to the correct web directory:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.limepak.app',
  appName: 'LIMEPAK',
  webDir: 'out', // Next.js output directory
  server: {
    androidScheme: 'https',
  },
};

export default config;
```

## Building the APK

### 7. Sync and Copy Web Assets

```bash
npm run android:sync
```

Or manually:

```bash
npx cap sync
npx cap copy
```

This copies the built web assets to the Android project.

### 8. Open in Android Studio

```bash
npm run android:open
```

Or manually:

```bash
npx cap open android
```

This opens the Android project in Android Studio.

### 9. Build and Run in Android Studio

1. **Wait for Gradle sync** - Android Studio will automatically sync the Gradle files. This may take a few minutes.

2. **Select your target device:**
   - Connect a physical Android device via USB (ensure USB debugging is enabled)
   - Or create and start an Android Virtual Device (AVD) emulator

3. **Click the Run button** (green triangle) or press `Shift + F10`

4. **Select the target device** from the popup

5. **Wait for the build to complete** - Android Studio will compile the app and install it on your device

### 10. Generate APK File

To generate a release APK:

1. In Android Studio, go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**

2. Wait for the build to complete

3. Android Studio will show a notification with a link to the APK file

4. Click the link or navigate to:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

For a release build:
   ```
   android/app/build/outputs/apk/release/app-release.apk
   ```

## Command Line Build

You can also build the APK from the command line:

### Debug Build

```bash
cd android
./gradlew assembleDebug
```

The APK will be at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Release Build

First, create a signing configuration. Create a file `android/app/keystore.properties`:

```properties
storePassword=your_store_password
keyPassword=your_key_password
keyAlias=your_key_alias
storeFile=your_keystore_file.jks
```

Then build:

```bash
cd android
./gradlew bundleRelease
```

The release APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

## Configuration Files

### capacitor.config.ts

The main Capacitor configuration file. Customize this to match your app requirements.

### android/app/src/main/AndroidManifest.xml

Configure app permissions, activities, and other Android-specific settings.

### android/app/build.gradle

Configure build settings, dependencies, and signing configurations.

## Troubleshooting

### Common Issues

#### 1. Gradle Sync Fails

- Ensure Java JDK 17+ is installed
- Check that ANDROID_HOME environment variable is set
- Run `sdkmanager --list` to verify Android SDK is installed

#### 2. Web Assets Not Updated

Run:
```bash
npx cap copy
npx cap sync
```

#### 3. White Screen on App Launch

- Ensure the web build is complete: `npm run build`
- Check that the webDir in capacitor.config.ts points to the correct directory
- Verify that the Android project has the latest web assets

#### 4. Network Security Configuration

For Android 9+ (API 28+), you need to configure network security. Create `android/app/src/main/res/xml/network_security_config.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">localhost</domain>
        <domain includeSubdomains="true">10.0.2.2</domain>
        <domain includeSubdomains="true">127.0.0.1</domain>
    </domain-config>
</network-security-config>
```

And add to `AndroidManifest.xml`:

```xml
<application
    ...
    android:networkSecurityConfig="@xml/network_security_config"
    ...
>
```

## Deployment

### Install APK on Device

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Upload to Google Play Store

1. Generate a signed release APK or App Bundle
2. Create a developer account on Google Play Console
3. Create a new application
4. Upload the APK or App Bundle
5. Fill in the required information (store listing, graphics, etc.)
6. Submit for review

## Updates

When you update your Next.js application:

1. Run `npm run build`
2. Run `npx cap sync`
3. Open in Android Studio and rebuild

## Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Android Developer Documentation](https://developer.android.com/docs)

## Support

If you encounter any issues with the Android build, please check:

1. All prerequisites are installed
2. Environment variables are set correctly
3. The Next.js build completes successfully
4. Capacitor is properly configured

For LIMEPAK-specific questions, please refer to the main documentation or contact support.

---

**Last Updated:** September 2026
**Version:** 1.0.0
