/**
* Sample React Native Desktop App
* https://github.com/ptmt/react-native-desktop
*/
import React from 'react';
import ReactNative from 'react-native-desktop';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = ReactNative;

const Bram = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
        </View>

        <View style={styles.content}>
          <View style={styles.left} />
          <View style={styles.right} />
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },

  menu: {
    flex: 0,
    height: 50,
    backgroundColor: 'orange'
  },

  content: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row'
  },
  
  left: {
    flex: 0,
    width: 200,
    backgroundColor: 'blue'
  },

  right: {
    flex: 1,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('Bram', () => Bram);