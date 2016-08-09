import React from 'react';
import ReactNative from 'react-native-desktop';

const {
  StyleSheet,
  View,
} = ReactNative;


const MenuBar = React.createClass({
  render() {
    return (
      <View style={styles.menuBar}>
        <View style={styles.notification} />
        <View style={styles.menu} />
      </View>
    )
  }
});


const styles = StyleSheet.create({
  menuBar: {
    flexDirection: 'column'
  },

  notification: {
    flex: 0,
    height: 20,
  },

  menu: {
    flex: 0,
    height: 50,
    backgroundColor: 'orange'
  }
});

export default MenuBar;