import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as Font from 'expo-font';
import {Header} from 'react-native-elements';
import { Octicons, SimpleLineIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';


/*
Navigation Bar with Logo In Middle and setting button
-------------
AppColors
#00A896 Green
#05668D BLue
-------------------------
User signs in with email and veridication code
*/


export default class NavBar extends Component {
  state={
    fontLoaded: null
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'lilyscriptone': require('../assets/fonts/LilyScriptOne-Regular.ttf'),
      'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Header
        centerComponent={
          //logo Text
          this.state.fontLoaded ?
          (
            <Text style={{ fontFamily: 'lilyscriptone', fontSize: 35, color: '#fff', textAlign: 'center'}}>
              Cycles
            </Text>
          ):null
        }
        backgroundColor='#00A896'
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
