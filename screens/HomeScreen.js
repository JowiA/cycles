import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import NavBar from '../components/NavBar';
import Wcarousel from '../components/Wcarousel';
import MyCycles from '../components/MyCycles';
import { ScrollView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';


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
    fontLoaded: null
  }
  async componentDidMount() {
    try{
      await Font.loadAsync({
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'lilyscriptone': require('../assets/fonts/LilyScriptOne-Regular.ttf'),
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });
      }
    catch(err){
      console.log(err);
    }
  }
  render() {
    return (
      <View style={styles.background}>
        <NavBar />
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <ScrollView>
            <MyCycles />
          </ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Wcarousel data={data}/>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#00A896',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginBottom: 20,
    justifyContent: 'center'


  },
});
