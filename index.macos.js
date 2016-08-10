
import React from 'react';
import ReactNative from 'react-native-macos';

import MenuBar from './app/components/MenuBar';
import DetailView from './app/components/DetailView';

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
        <DetailView />
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
