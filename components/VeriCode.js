import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Octicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';


/*
  **Prompts user for verification and requests verification code for login
  input: email address, verification code
  output: provide user acces
*/

export default class VeriCode extends Component {
  state={
    email: '',
    verificationCode: '',
    verify: false,
    buttonLoader: false
  }
  emailSubmit = (e) => {
    this.setState({verify: true})
  }
  render() {
    return (
      <View style={styles.container}>

        {/* Input--> verify? email input : verification code input*/}
        {
          this.state.verify ?
            <Input
              containerStyle={{width: 300}}
              placeholder='Verification Code'
              leftIcon={<SimpleLineIcons name='lock' size={30} color='#00A896'/>}
              leftIconContainerStyle={{padding: 5}}
              onChangeText={(verificationCode) => this.setState({verificationCode})}
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
          this.state.verify ?
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
              title="Enter"
              raised
              buttonStyle={{width: 150, backgroundColor: '#00A896'}}
              containerStyle={{margin: 20}}
              onPress={this.emailSubmit}
              icon={<AntDesign name='enter' size={20} style={styles.buttonIcon} color='#ffff' loading={true} />}
              iconRight
              />
        }



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
