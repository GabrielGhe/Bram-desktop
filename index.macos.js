
import React from 'react';
import ReactNative from 'react-native-macos';

import MenuBar from './app/components/MenuBar';
import ContentView from './app/components/ContentView';

const {
  AppRegistry,
  StyleSheet,
  View,
} = ReactNative;

const Bram = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <MenuBar />
        <ContentView />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  }
});

AppRegistry.registerComponent('Bram', () => Bram);
