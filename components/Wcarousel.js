import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Dimensions } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import Wmachine from './Wmachine';
import * as Font from 'expo-font'; 

/*
Wmachine
-------------
Carousel that dismplays multiple Wmachine components in a row
-------------------------

*/



export default class Wcarousel extends Component {
    state = {
      currentIndex: 0,
      fontLoaded: 0
    };
    async componentDidMount() {
      await Font.loadAsync({
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'lilyscriptone': require('../assets/fonts/LilyScriptOne-Regular.ttf'),
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });
    }
    render = () => {
      // center items on screen
      const { width } = Dimensions.get('window');
      const contentOffset = (width - 200) / 2;
    
      return (
        <View style={{backgroundColor: '#F8F8FF', padding: 10 }}> 
          {
              this.state.fontLoaded ?
              (
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 13, textAlign: 'left', marginLeft: 10, color: '#565656'}}>
                  Machines
                </Text>
              ):null
            }    
          <SideSwipe
            index={this.state.currentIndex}
            itemWidth={200}
            style={{ width, paddingBottom: 10 }}
            data={this.props.data}
            contentOffset={contentOffset}
            onIndexChange={index =>
              this.setState(() => ({ currentIndex: index }))
            }
            renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
             <Wmachine name={item.name} time={item.time} type={item.type}/>
            )}
          />
        </View>
      );
    };
  }