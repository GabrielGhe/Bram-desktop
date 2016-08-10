import React from 'react';
import ReactNative from 'react-native-macos';

const {
  StyleSheet,
  View,
  Button
} = ReactNative;


const DeckList = React.createClass({
  render() {
    return (
      <View style={styles.left}>
        <Button bezelStyle='thickerSquare' style={styles.add} title='+' />
      </View>
    )
  }
});


const styles = StyleSheet.create({
  left: {
    flex: 0,
    width: 200,
    flexDirection: 'column',
    backgroundColor: '#efefef'
  },

  add: {
    position: 'absolute',
    left: 0,
    height: 30,
    width: 200,
    bottom: 0
  }
});

export default DeckList;