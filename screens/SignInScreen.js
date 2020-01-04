import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

//Component Import
import  LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SigUpForm';



/*
USer Login Screen
-------------
AppColors
#00A896 Green
#05668D BLue
-------------------------
User signs in with email and veridication code
*/

export default class SignInScreen extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'lilyscriptone': require('../assets/fonts/LilyScriptOne-Regular.ttf'),
      'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render(){
    return (
      <View style={styles.background}>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>


          {/* Top Logo View */}
          <ScrollView style={{width: '100%', paddingTop: 100}}>
            {
              this.state.fontLoaded ?
              (
                <Text style={{ fontFamily: 'lilyscriptone', fontSize: 56, color: '#05668D', textAlign: 'center'}}>
                  Cycles
                </Text>
              ):null
            }

            {/* Tagline */}
            {
              this.state.fontLoaded ?
              (
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 13.5, textAlign: 'center', margin: 20, color: '#565656'}}>
                  Convenience for everyone
                </Text>
              ):null
            }

            {/* Login Form  */}
            <View style={{marginTop: 120}}>
              <SignUpForm />
            </View>
          </ScrollView>

          <View style={{paddingBottom: 10}}>
            <Text style={{fontSize: 13, color: '#565656'}}>Don't have an account? <Text style={{color: '#05668D'}}> Sign up</Text></Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20

  },
});
