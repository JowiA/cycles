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

/*
Wmachine
-------------
Carousel that dismplays multiple Wmachine components in a row
-------------------------

*/

export default class SweetCarousel extends Component {
    state = {
      currentIndex: 0,
    };
   
    render = () => {
      // center items on screen
      const { width } = Dimensions.get('window');
      const contentOffset = (width - 200) / 2;
   
      return (
        <SideSwipe
          index={this.state.currentIndex}
          itemWidth={200}
          style={{ width }}
          data={'1','2','3'}
          contentOffset={contentOffset}
          onIndexChange={index =>
            this.setState(() => ({ currentIndex: index }))
          }
          renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
           <Wmachine
            />
          )}
        />
      );
    };
  }