import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SigUpScreen';
import SettingsScreen from './screens/SettingsScreen';
import RecoveryScreen from './screens/RecoveryScreen';
import ScannerScreen from './screens/ScannerScreen';
import * as firebase from 'firebase';

const AppStack = createStackNavigator({ Home: HomeScreen, Settings: SettingsScreen, Scanner: ScannerScreen }, { defaultNavigationOptions: { header: null} });

const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen, Recovery: RecoveryScreen }, { defaultNavigationOptions: { header: null} });




// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAwLG8-R6YLEJX8S9BB8QZeXNRt3BUJhm0",
    authDomain: "cycles-v1.firebaseapp.com",
    databaseURL: "https://cycles-v1.firebaseio.com",
    projectId: "cycles-v1",
    storageBucket: "cycles-v1.appspot.com",
    messagingSenderId: "474036242885",
    appId: "1:474036242885:web:a52682db647d86c0e0e3ac",
    measurementId: "G-N3J3S0JGEN"
};


firebase.initializeApp(firebaseConfig);

export default AppContainer =
  createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: LoadingScreen,
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
        defaultNavigationOptions: {
            header: null,
        },
      },
    )
);
