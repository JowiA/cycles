import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Card } from 'react-native-elements'

/*
Wmachine
-------------
Component to show machine name time remaining and corresponding cycle progress
-------------------------
*/

export default class Wmachine extends Component {
  render() {
    return (
      <Card containerStyle={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <AnimatedCircularProgress
             size={50}
             width={5}
             fill={70}
             tintColor="#00A896"
             onAnimationComplete={() => console.log('onAnimationComplete')}
             backgroundColor="#3d5875" 
            />
            <View style={{marginLeft: 10, marginTop: 10}}>
                <Text>{this.props.name}</Text>
                <Text>40 minutes</Text>
            </View>            
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
