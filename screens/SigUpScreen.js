import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Octicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

/*
  **Prompts user for verification and requests verification code for login
  input: email address, verification code
  output: provide user acces
*/

export default class LoginForm extends Component {
  state={
    email: '',
    password: '',
    passwordView: false,
    buttonLoader: true
  }
  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      this.props.navigation.navigate('SignIn');
    } catch (error) {
      console.log(error.toString(error));
    }
  }
  changeView = () => {this.setState({passwordView: true})}
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>

        {/* Go back button*/}
        <View style={{flexDirection: "row", alignSelf: 'flex-start', justifyContent: 'flex-start', position: 'absolute', top: 30 }}>
          <AntDesign name='arrowleft' size={20} style={styles.buttonIcon} color='#05668D' />
          <Text style={{fontSize: 15, color: '#05668D'}} onPress={()=>this.props.navigation.goBack()}>Go back</Text>
        </View>

        <KeyboardAvoidingView style={{flextDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>  
          {/* Email, password, password confirmation Inputs*/}
          <Input
              containerStyle={{width: 300}}
              placeholder='Email'
              leftIcon={<Octicons name='mail' size={30} color='#00A896'/>}
              leftIconContainerStyle={{padding: 5}}
              onChangeText={(email) => this.setState({email})}
              />
          <Input
              containerStyle={{width: 300}}
              placeholder='Password'
              leftIcon={<SimpleLineIcons name='lock' size={30} color='#00A896'/>}
              leftIconContainerStyle={{padding: 5}}
              onChangeText={(password) => this.setState({password})}
              />
          <Input
              containerStyle={{width: 300}}
              placeholder='Confirm Password'
              leftIcon={<SimpleLineIcons name='lock' size={30} color='#00A896'/>}
              leftIconContainerStyle={{padding: 5}}
              onChangeText={(password) => this.setState({password})}
              />

          {/* Email, password, password confirmation Inputs*/}   
          <Button
              title="Sign Up"
              raised
              buttonStyle={{ backgroundColor: '#00A896' }}
              containerStyle={{ width: 150, margin: 20, alignSelf: 'center'}}
              onPress={this.SignUp}
              icon={<SimpleLineIcons name='check' size={20} style={styles.buttonIcon} color='#ffff'/>}
              iconRight
              />

        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonIcon: {
    marginLeft: 10
  }
});
