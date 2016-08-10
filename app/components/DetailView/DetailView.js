import React from 'react';
import ReactNative from 'react-native-macos';

import Overlay from '../Overlay';

const {
  StyleSheet,
  View,
} = ReactNative;


const DetailView = React.createClass({
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.right} />
        <Overlay />
      </View>
    )
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  right: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default DetailView;