import React from 'react';
import ReactNative from 'react-native-desktop';

const {
  StyleSheet,
  View,
} = ReactNative;


const DeckList = React.createClass({
  render() {
    return (
      <View style={styles.left}>
        <View style={styles.search} />
        <View style={styles.add} />
      </View>
    )
  }
});


const styles = StyleSheet.create({
  left: {
    flex: 0,
    width: 250,
    flexDirection: 'column',
    backgroundColor: 'blue'
  },

  search: {
    flex: 0,
    height: 50,
    backgroundColor: 'green'
  },

  add: {
    position: 'absolute',
    height: 50,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'purple'
  }
});

export default DeckList;