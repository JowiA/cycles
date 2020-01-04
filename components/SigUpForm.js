import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Octicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

/*
  **Prompts user for verification and requests verification code for login
  input: email address, verification code
  output: provide user acces
*/

export default class SignUpForm extends Component {
  state={
    email: '',
    password: '',
    passwordView: false,
    buttonLoader: true
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Email, password, password confirmation Inputs*/}
        <ScrollView>
          <Input
            containerStyle={{width: 300}}
            placeholder='Email'
            leftIcon={<Octicons name='mail' size={30} color='#00A896'/>}
            leftIconContainerStyle={{padding: 5}}
            onChangeText={(email) => this.setState({email})}
            inputContainerStyle={styles.formContent}

            />
          <Input
            containerStyle={{width: 300}}
            placeholder='Password'
            leftIcon={<Octicons name='mail' size={30} color='#00A896'/>}
            leftIconContainerStyle={{padding: 5}}
            onChangeText={(email) => this.setState({email})}
            inputContainerStyle={styles.formContent}
            secureTextEntry={true}
            />
          <Input
            containerStyle={{width: 300}}
            placeholder='Confirm Password'
            leftIcon={<Octicons name='mail' size={30} color='#00A896'/>}
            leftIconContainerStyle={{padding: 5}}
            onChangeText={(email) => this.setState({email})}
            inputContainerStyle={styles.formContent}
            secureTextEntry={true}
            />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    marginLeft: 10
  },
  formContent: {
    margin: 5
  }
});
