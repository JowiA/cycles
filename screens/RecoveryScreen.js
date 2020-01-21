import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Octicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

/*
  **Prompts user for verification and requests verification code for login
  input: email address, verification code
  output: provide user acces
*/

export default class RecoveryScreen extends Component {
  state={
    email: ''
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
          {/* Email, password, password confirmation Inputs*/}   
          <Button
              title="Send Recovery Email"
              raised
              buttonStyle={{ backgroundColor: '#00A896' }}
              containerStyle={{ margin: 20, alignSelf: 'center'}}
              onPress={() => this.props.navigate.goBack()}
              icon={<MaterialIcons name='send' size={20} style={styles.buttonIcon} color='#ffff'/>}
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
