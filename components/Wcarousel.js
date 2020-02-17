import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Dimensions } from 'react-native';
import { Badge } from 'react-native-elements';
import SideSwipe from 'react-native-sideswipe';
import Wmachine from './Wmachine';
import * as Font from 'expo-font'; 
import firebase from 'firebase';
/*
Wmachine
-------------
Carousel that dismplays multiple Wmachine components in a row
-------------------------

*/



export default class Wcarousel extends Component {
    state = {
      currentIndex: 0,
      fontLoaded: 0,
      machines: [],
      washersBusy: 0,
      dryersBusy: 0
    };
    async componentDidMount() {
      await Font.loadAsync({
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'lilyscriptone': require('../assets/fonts/LilyScriptOne-Regular.ttf'),
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });

      //get all machines from db
      const machineRef = firebase.database().ref('cycles');
      machineRef.on('value', (snapshot) => {
        let machines = snapshot.val();
        let newState = [];
        for (let machine in machines) {
          machines[machine].machine.includes('Washer') ? 
            this.setState({washersBusy: this.state.washersBusy + 1}) 
            : 
            this.setState({dryersBusy: this.state.dryersBusy + 1}) 
          newState.push({
            machine: machines[machine].machine, 
            user: machines[machine].user,
            time: machines[machine].time
          })
        }
        this.setState({
          machines: newState
        });
      })
    }
    componentWillUnmount() {
      this.setState({machines: []})
    }

    

    render = () => {
      // center items on screen
      const { width } = Dimensions.get('window');
      const contentOffset = (width - 200) / 2;

      let machines = this.state.machines;
      return (
        <View style={{backgroundColor: '#F8F8FF', padding: 10 }}> 

                <Text style={{ fontSize: 13, textAlign: 'left', marginLeft: 10, color: '#565656'}}>
                  Machines
                </Text>
                <View style={{ fontSize: 10, textAlign: 'left', marginLeft: 10, color: '#565656', marginTop: 10, flexDirection: 'row' }}>
                  <View style={{flexDirection: 'row'}}>
                    <Badge value={this.state.washersBusy + '/5'} status="success" />
                    <Text style={{color: '#565656', marginLeft: 10}}>Washers Free</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <Badge  value={this.state.dryersBusy + '/5'} status="error" />
                    <Text style={{color: '#565656', marginLeft: 10}}>Dryers Free</Text>
                  </View>
                  
                </View>
          <SideSwipe
            index={this.state.currentIndex}
            itemWidth={200}
            style={{ width, paddingBottom: 10 }}
            data={machines}
            contentOffset={contentOffset}
            onIndexChange={index =>
              this.setState(() => ({ currentIndex: index }))
            }
            renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
             <Wmachine name={item.machine} time={item.time} />
            )}
          />
        </View>
      );
    };
  }