import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Card } from 'react-native-elements'
import * as Font from 'expo-font';
/*
Wmachine
-------------
Component to show machine name time remaining and corresponding cycle progress
-------------------------
*/

export default class Wmachine extends Component {
  state={
    fontLoaded: null
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
  render() {
    return (
      <Card containerStyle={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 15}}>
            <AnimatedCircularProgress
             size={50}
             width={5}
             fill={70}
             tintColor={this.props.type == 'W' ? "#1CA3EC" : "#E95364"}
             onAnimationComplete={() => console.log('onAnimationComplete')}
             backgroundColor="#3d5875" 
            />
          </View>
            {
              this.state.fontLoaded ?
              (
                <View style={{marginLeft: 10, marginTop: 13}}>
                  <Text>ID: {this.props.name}</Text>
                  <Text>Time: {this.props.time} minutes</Text>
                  {/* Machine type */}
                  <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 12, color: '#565656'}}>
                    {this.props.type == 'W' ? "Washer" : "Dryer"}
                  </Text>
                </View>  
              ):null
            }
      </View>                  
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: 200,
      alignSelf: 'center'
  }
});
