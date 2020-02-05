import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import * as Font from 'expo-font';
import { Overlay, ListItem, Avatar, Divider } from 'react-native-elements';
import firebase from 'firebase';

export default class UserDisplay extends Component {
  state = {
    overlay: false
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
  handleSignout = ()=> {
    firebase.auth().signOut();
    this.props.navigation.navigate('SignIn')
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Avatar & email */}
        <Avatar size="small" 
          rounded title={this.props.name.toUpperCase().charAt(0)} 
          containerStyle={{marginTop: 10}} 
          overlayContainerStyle={{backgroundColor: '#00A896'}}  
          onPress={()=>this.setState({overlay: true})}
        />
        <Text style={{textAlign: 'center', paddingTop: 15, marginLeft: 10}}>
            {this.props.name}
        </Text>

        {/* Logout Dialog */}
        {
          this.state.overlay ?
          <Overlay isVisible={this.state.overlay} onBackdropPress={()=>this.setState({overlay: false})} borderRadius={10}>
            <View style={{justifyContent: 'center'}}>
              {/* Avatar & email */}
              <Avatar size="small" 
                rounded title={this.props.name.toUpperCase().charAt(0)} 
                containerStyle={{marginTop: 10, alignSelf: 'center'}} 
                overlayContainerStyle={{backgroundColor: '#00A896'}}  
                onPress={()=>this.setState({overlay: true})}
              />
              <Text style={{textAlign: 'center', paddingTop: 15, marginLeft: 10}}>
                {this.props.name}
              </Text>

              {/* options */}
              <View style={{marginTop: 50}}>
                <Button title="Logout" onPress={this.handleSignout} type='clear' buttonStyle={{backgroundColor: 'black'}}/>
              </View> 
            </View>
          </Overlay>
          :
          null
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
