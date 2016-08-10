import React from 'react';
import ReactNative from 'react-native-macos';

const {
  StyleSheet,
  View,
} = ReactNative;


const Overlay = React.createClass({
  render() {
    return (
      <View style={styles.overlay} />
    )
  }
});


const styles = StyleSheet.create({  
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    backgroundColor: 'grey'
  }
});

export default Overlay;