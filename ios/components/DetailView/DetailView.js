import React from 'react';
import ReactNative from 'react-native-desktop';

import DeckList from '../DeckList';

const {
  StyleSheet,
  View,
} = ReactNative;


const DetailView = React.createClass({
  render() {
    return (
      <View style={styles.content}>
        <DeckList />
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
  
  right: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default DetailView;