# Meditation App

## Overview

This is a React Native meditation app built using Expo, designed to help users practice mindfulness and meditation. The app leverages modern React Native technologies and provides a smooth, intuitive user experience.

## Prerequisites

- Node.js (v18 or later)
- npm or Yarn
- Expo CLI
- Android Studio or Xcode (for mobile development)

## Tech Stack

- React Native
- Expo
- NativeWind (Tailwind CSS for React Native)
- React Navigation
- Expo Router
- TypeScript

## Features

- Meditation sessions
- Guided meditations
- Timer functionality
- Soothing audio and visual experiences

## Getting Started

### 1. Clone the Repository

```bash
git clone https://your-repo-url.git
cd react-native-app-2
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the App
#### For iOS
```bash
npm run ios
# or
yarn ios
```

#### For Android
```bash
npm run android
# or
yarn android
```

## Development Scripts

- `npm start` or `yarn start`: Start the Expo development server
- `npm run android` or `yarn android`: Run on Android simulator
- `npm run ios` or `yarn ios`: Run on iOS simulator

## Project Structure

```
react-native-app
├── .expo
├── .idea
├── app
│   ├── (modal)
│   ├── (tabs)
│   └── meditate
├── assets
│   ├── affirmation-images
│   ├── audio
│   ├── fonts
│   ├── images
│   └── meditation-images
├── components
└── constants
```

## Styling

The project uses NativeWind for styling, which allows the use of Tailwind CSS classes in React Native.

## Linting

ESLint is set up with Prettier for code consistency. Run linting with:

```bash
npm run lint
# or
yarn lint
```

## Configuration

- Babel configuration for module resolution
- TypeScript configuration for type checking
- Tailwind CSS configuration for styling
