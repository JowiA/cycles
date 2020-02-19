import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
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
    errorMessage: null
  }

  handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {this.props.navigation.navigate(Home, {email: user.email})})
      .catch(error => 
        this.setState({ errorMessage: error.message }), 
        setTimeout(() => this.setState({ errorMessage: null }), 3000)
      )
  }

  changeView = () => {this.setState({passwordView: true})}

  render() {
    return (
      <View style={styles.container}>

        {/* Error */}
        {this.state.errorMessage ? <Text style={{marginBottom: 10, color: 'red'}}>{this.state.errorMessage}</Text> : null }
        {/* Input--> verify? email input : verification code input*/}
        <Input
          containerStyle={{width: 300}}
          placeholder='Email'
          leftIcon={<Octicons name='mail' size={30} color='#00A896'/>}
          leftIconContainerStyle={{padding: 5}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          />
        <Input
          containerStyle={{width: 300}}
          placeholder='Password'
          leftIcon={<SimpleLineIcons name='lock' size={30} color='#00A896'/>}
          leftIconContainerStyle={{padding: 5}}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
        />

        {/* Input--> verify? login Button : enter button */}
        
        <Button
          title="Login"
          raised
          buttonStyle={{width: 150, backgroundColor: '#00A896'}}
          containerStyle={{margin: 20}}
          onPress={this.handleLogin}
          icon={<SimpleLineIcons name='login' size={20} style={styles.buttonIcon} color='#ffff' loading/>}
          iconRight
          disabled={(this.state.email && this.state.password) == ''  ? true : false}
          />
        
        {/* Forgot Password Recovery */}
        <View style={{paddingBottom: 10, paddingTop: 10}}>
            <Text style={{fontSize: 13, color: '#05668D'}} onPress={() => this.props.navigation.navigate('Recovery')}>Forgot your password?</Text>
          </View>

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
  }
});
