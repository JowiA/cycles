import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import * as Font from 'expo-font';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../components/NavBar';
import Wcarousel from '../components/Wcarousel';
import MyCycles from '../components/MyCycles';
import UserDisplay from '../components/UserDisplay';




/*
HomeScreen
-------------
AppColors
#00A896 Green
#05668D BLue
-------------------------
User signs in with email and veridication code
*/


let data = [
  {
    name: '#1',
    time: '25',
    type: 'W'
  },
  {
    name: '#2',
    time: '40',
    type: 'W'
  },
  {
    name: '#3',
    time: '30',
    type: 'D'
  },
];

export default class HomeScreen extends Component {
  state={
    fontLoaded: null,
    machines: []
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
    const { navigation } = this.props;
    const email = navigation.getParam('email');
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <NavBar />
        <UserDisplay email={email} navigation={this.props.navigation} />
          <ScrollView >
            <MyCycles navigation={this.props.navigation} email={email}/>
          </ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Wcarousel />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});
