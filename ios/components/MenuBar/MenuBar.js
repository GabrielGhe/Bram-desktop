import React from 'react';
import ReactNative from 'react-native-desktop';

const {
  StyleSheet,
  View,
} = ReactNative;


const MenuBar = React.createClass({
  render() {
    return (
      <View style={styles.menu}>
      </View>
    )
  }
});


const styles = StyleSheet.create({
  menu: {
    flex: 0,
    height: 50,
    backgroundColor: 'orange'
  }
});

export default MenuBar;