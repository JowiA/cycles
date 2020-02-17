import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Font from 'expo-font';
import { Overlay, ListItem, Avatar, Divider, Button } from 'react-native-elements';
import firebase from 'firebase';
import { Octicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

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
          rounded title={this.props.email.toUpperCase().charAt(0)} 
          containerStyle={{marginTop: 10}} 
          overlayContainerStyle={{backgroundColor: '#00A896'}}  
          onPress={()=>this.setState({overlay: true})}
        />
        <Text style={{textAlign: 'center', paddingTop: 15, marginLeft: 10}}>
            {this.props.email}
        </Text>

        {/* Logout Dialog */}
        {
          this.state.overlay ?
          <Overlay height={300} containerStyle={styles.overlay} isVisible={this.state.overlay} onBackdropPress={()=>this.setState({overlay: false})} borderRadius={10}>
            <View style={{justifyContent: 'center'}}>
              {/* Avatar & email */}
              <Avatar size="small" 
                rounded title={this.props.email.toUpperCase().charAt(0)} 
                containerStyle={{marginTop: 10, alignSelf: 'center'}} 
                overlayContainerStyle={{backgroundColor: '#00A896'}}  
                onPress={()=>this.setState({overlay: true})}
              />
              <Text style={{textAlign: 'center', paddingTop: 15, marginLeft: 10}}>
                {this.props.email}
              </Text>

              {/* options */}
              <View style={{marginTop: 50}}>
                <Button
                  title="Logout"
                  raised
                  buttonStyle={{ backgroundColor: '#00A896'}}
                  onPress={this.handleSignout}
                  icon={<AntDesign name='logout' size={20} style={styles.buttonIcon} color='#ffff' loading={true} />}
                  iconRight
                />
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
  },
  buttonIcon: {
    marginLeft: 10
  },
  overlay: {
    backgroundColor: 'black',
    opacity: 0.7
  }
});
