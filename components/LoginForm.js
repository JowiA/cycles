import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Octicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';


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
      <View style={styles.container}>

        {/* Input--> verify? email input : verification code input*/}
        {
          this.state.passwordView ?
            <Input
              containerStyle={{width: 300}}
              placeholder='Password'
              leftIcon={<SimpleLineIcons name='lock' size={30} color='#00A896'/>}
              leftIconContainerStyle={{padding: 5}}
              onChangeText={(password) => this.setState({password})}
              />
              :
            <Input
              containerStyle={{width: 300}}
              placeholder='Email'
              leftIcon={<Octicons name='mail' size={30} color='#00A896'/>}
              leftIconContainerStyle={{padding: 5}}
              onChangeText={(email) => this.setState({email})}
              />
        }

        {/* Input--> verify? login Button : enter button */}
        {
          this.state.passwordView ?
            <Button
              title="Login"
              raised
              buttonStyle={{width: 150, backgroundColor: '#00A896'}}
              containerStyle={{margin: 20}}
              onPress={() => this.props.navigation.navigate('Home')}
              icon={<SimpleLineIcons name='login' size={20} style={styles.buttonIcon} color='#ffff' loading/>}
              iconRight
              />
              :
            <Button
              title="Next"
              raised
              buttonStyle={{width: 150, backgroundColor: '#00A896'}}
              containerStyle={{margin: 20}}
              onPress={this.changeView}
              icon={<AntDesign name='enter' size={20} style={styles.buttonIcon} color='#ffff' loading={true} />}
              iconRight
              />
        }
        <View style={{paddingBottom: 10}}>
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
