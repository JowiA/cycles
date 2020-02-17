import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { Card, ListItem, Button, Divider } from 'react-native-elements';
import * as Font from 'expo-font';
import { Octicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

const stock = [
    {
      ID: '1',
      time: '20',
      type: 'washer'
    },
    {
        ID: '3',
        time: '40',
        type: 'washer'
    }
  ]

export default class MyCyles extends Component {
    state = {
        fontLoaded: false,
        userMachines: []
      };
    async componentDidMount() {
      await Font.loadAsync({
        'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'lilyscriptone': require('../assets/fonts/LilyScriptOne-Regular.ttf'),
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });

      const machineRef = firebase.database().ref('cycles');
      machineRef.on('value', (snapshot) => {
        let machines = snapshot.val();
        let newState = [];
        for (let machine in machines) {
          machines[machine].user == this.props.email ?
          newState.push({
            machine: machines[machine].machine, 
            user: machines[machine].user,
            time: machines[machine].time
          })
          :
          null
        }
        this.setState({
          userMachines: newState
        });
      })
    }
    componentWillUnmount() {
      userMachines: []
    }

    render() {
    return (
        <Card title=
            { this.state.fontLoaded ?
                (
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, textAlign: 'center', margin: 5, color: '#555555'}}>
                        My Cycles
                    </Text>
                ):null
            }>
            <Divider />
            <View>
                {   
                    this.state.fontLoaded ?
                        this.state.userMachines.map((machine, i) => (
                          <ListItem
                            key={i}
                            subtitle={machine.time.toString() + ' minutes'}
                            title={machine.machine}
                            leftIcon={<ActivityIndicator color="#05668D" />}
                            titleStyle={{fontFamily: 'OpenSans-Regular', color: "#555555", fontSize: 15}}
                            subtitleStyle={{fontFamily: 'OpenSans-Regular', color: "#05668D"}}
                            bottomDivider
                          />
                        ))
                    :
                    null
                }
            </View>
            <Button
              title="Scan QR"
              raised
              buttonStyle={{backgroundColor: '#00A896'}}
              onPress={() => this.props.navigation.navigate('Scanner', {email: this.props.email})}
              icon={<AntDesign name='qrcode' size={20} style={styles.buttonIcon} color='#ffff'  />}
              iconRight
              />
            
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  buttonIcon: {
    marginLeft: 10
  }
});
