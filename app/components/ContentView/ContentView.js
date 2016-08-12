import React from 'react';
import ReactNative from 'react-native-macos';

import LeftPanel from '../LeftPanel';
import DetailView from '../DetailView';

const {
  StyleSheet,
  View,
} = ReactNative;


const ContentView = React.createClass({
  render() {
    return (
      <View style={styles.content}>
        <LeftPanel />
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