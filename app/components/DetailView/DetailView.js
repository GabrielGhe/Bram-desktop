import React from 'react';
import ReactNative from 'react-native-macos';

const {
  StyleSheet,
  View,
} = ReactNative;


const DetailView = React.createClass({
  render() {
    return (
      <View style={styles.right}>
      </View>
    )
  }
});


const styles = StyleSheet.create({  
  right: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default DetailView;