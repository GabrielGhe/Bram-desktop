import React from 'react';
import ReactNative from 'react-native-macos';

import DeckList from '../DeckList';
import DetailView from '../DetailView';

const {
  StyleSheet,
  View,
} = ReactNative;


const ContentView = React.createClass({
  render() {
    return (
      <View style={styles.content}>
        <DeckList />
        <DetailView />
      </View>
    )
  }
});


const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default ContentView;