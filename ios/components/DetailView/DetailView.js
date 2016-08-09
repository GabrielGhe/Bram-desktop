import React from 'react';
import ReactNative from 'react-native-desktop';

const {
  StyleSheet,
  View,
} = ReactNative;


const DetailView = React.createClass({
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
    )
  }
});


const styles = StyleSheet.create({
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

export default DetailView;