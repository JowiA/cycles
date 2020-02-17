import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Vibration } from 'react-native';
import { BarCodeScanner, Ac } from 'expo-barcode-scanner';
import { Button, Icon, Overlay, PricingCard  } from 'react-native-elements';
import { Octicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

const machines = [
    'Gran Washer 1', 'Gran Washer 2', 'Gran Washer 3', 'Gran Washer 4', 'Gran Washer 5',
    'Gran Dryer 1', 'Gran Dryer 2', 'Gran Dryer 3', 'Gran Dryer 4', 'Gran Dryer 5'
  ];

export default function ScannerScreen({ navigation: {goBack} }) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [ data, setData ] = useState('');
  const [ email, setEmail ] = useState(null);
  const [busyMachines, setBusyMachines ] = useState([]);

  const overlayOff = () => setOverlay(false);

  const overlayOn = () => setOverlay(true);

  {/*Requesting permission*/}
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      const { user } = firebase.auth().currentUser;
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setEmail(user.email);
        } else {
          console.log('error')
        }
      });
      //get all machines from db
      const machineRef = firebase.database().ref('cycles');
      machineRef.on('value', (snapshot) => {
        let machines = snapshot.val();
        let newState = [];
        for (let machine in machines) {
          newState.push({
            machine: machines[machine].machine, 
            user: machines[machine].user
          })
        }
        setBusyMachines([newState]);
      })
    })();
    return function cleanup() {
      setBusyMachines([])
      setScanned(false)
    }
  }
  , []);

  {/*Start machine*/}
  const start = () => {
    var cyclesRef = firebase.database().ref('cycles');
    cyclesRef.child(data).set({machine: data, user: email, time: data.includes('Washer') ? 30 : 60 })
    goBack();  
  }

  {/*On Scan barcode*/}
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data)
    {/*Checks if machine is in stock list*/}
    if( machines.indexOf(data) > -1 ) {
      Vibration.vibrate(1000);
      {/*Checks if machine is in busyMachine list---- if yes = overlay on, if no = alert(busy)*/}
      var cyclesRef = firebase.database().ref('cycles');
      cyclesRef.child(data).on('value',function(snapshot){
        var machine = snapshot.val();
        if (machine !== null) {
          Vibration.vibrate(3000);
          goBack()
        } 
        else {
          overlayOn()
        }
      });  
    }
    else {
      {/*Machine is not recognised*/}
      Vibration.vibrate(1000);
      alert('Machine not recognised human!')
    }
  };


  if (hasPermission === null) {
    return <View style={styles.container}><ActivityIndicator size={200} color="#00A896" /></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/*Close Scanner Button => Returns user to home screen*/}
      <View style={styles.tabBarInfoContainer}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Button
                  title="Cancel"
                  raised
                  buttonStyle={{width: 150, backgroundColor: '#00A896'}}
                  containerStyle={{margin: 20}}
                  onPress={() => goBack()}
                  buttonStyle={{width: 200, backgroundColor: '#00A896'}}
                  iconRight
                  icon={<AntDesign name='closecircleo' size={20} style={styles.buttonIcon} color='#ffff' />}
                  />
            </View>
        </View>


        {/*Start Overlay Pop Up*/}
        <Overlay
          isVisible={overlay}
          windowBackgroundColor="rgba(255, 255, 255, .6)"
          width="auto"
          height="auto"
          onBackdropPress={overlayOff}
          >
          <PricingCard
            color="#79BA9C"
            title={data ? data : null}
            info={['Is this your machine?']}
            price={data.includes('Washer') ? '30 minutes' : '60 minutes'}
            button={{ title: 'Start', icon: 'play-circle-outline' }}
            pricingStyle={{color: 'grey'}}
            onButtonPress={start}
            />
        </Overlay>

        {scanned && <Button title={'Tap to Scan Again'} buttonStyle={{backgroundColor: '#00A896'}} onPress={() => setScanned(false)} />}

    </View>
  );
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginLeft: 10
  },
});