import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';


export default class LoadingScreen extends React.Component {
    componentDidMount() {
        this.checkifLoggedIn();
    }

    checkifLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            (user) ? 
            this.props.navigation.navigate('Home')
            :
            this.props.navigation.navigate('SignIn')
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={200} color="#00A896"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
