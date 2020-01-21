import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Octicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

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
  login = (e) => {
  }
  changeView = () => {this.setState({passwordView: true})}
  render() {
    return (
      <SafeAreaView style={styles.container}>

        {/* Go back button*/}
        <View style={{flexDirection: "row", alignSelf: 'flex-start', marginTop:40 }}>
          <AntDesign name='arrowleft' size={20} style={styles.buttonIcon} color='#05668D' />
          <Text style={{fontSize: 13, color: '#05668D'}} onPress={()=>this.props.navigation.goBack()}>Go back</Text>
        </View>
        <View style={{marginTop: '60%'}}/>  
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
            buttonStyle={{width: 150, backgroundColor: '#00A896'}}
            containerStyle={{margin: 20, justifyContent: 'center'}}
            onPress={() => this.props.navigation.navigate('Home')}
            icon={<AntDesign name='checkcircle' size={20} style={styles.buttonIcon} color='#ffff'/>}
            iconRight
            />

        

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonIcon: {
    marginLeft: 10
  }
});
