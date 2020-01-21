import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';

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
        <KeyboardAvoidingView behavior="padding" style={styles.container}>


          {/* Top Logo View */}
          <View style={{width: '100%'}}>
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
              <LoginForm navigation={this.props.navigation}/>
            </View>
          </View>

          <Text  onPress={() => this.props.navigation.navigate('SignUp')} style={{fontSize: 13, color: '#565656', paddingBottom: 10}}>
              Don't have an account? 
            <Text style={{color: '#05668D'}}>
              {' '}Sign up
            </Text></Text>


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
