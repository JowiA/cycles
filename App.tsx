import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SigUpScreen';
import SettingsScreen from './screens/SettingsScreen';



const AppStack = createStackNavigator({ Home: HomeScreen, Settings: SettingsScreen }, { defaultNavigationOptions: { header: null} });

const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen }, { defaultNavigationOptions: { header: null} });

export default AppContainer =
  createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'Auth',
        defaultNavigationOptions: {
            header: null,
        },
      },
    )
);
