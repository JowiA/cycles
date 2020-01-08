import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import NavBar from '../components/NavBar';
import Wcarousel from '../components/Wcarousel';
/*
HomeScreen
-------------
AppColors
#00A896 Green
#05668D BLue
-------------------------
User signs in with email and veridication code
*/

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
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <NavBar />
          
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Wcarousel />
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
    alignItems: 'flex-start',

  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20

  },
});
