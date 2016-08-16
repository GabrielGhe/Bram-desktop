import React from 'react';
import ReactNative from 'react-native-macos';

const {
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  Text,
  ListView
} = ReactNative;

const DeckList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
      />
    )
  },

  _renderRow: function(deck, sectionID, rowID, highlightRow) {
    return (
      <View style={styles.row}>
        <Text>{deck.text}</Text>
      </View>
    );
  },

  _renderSeparator: function(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View style={styles.separator} />
    );
  },

  _genRows: function(pressData) {
    var dataBlob = [{text: 'one'}, {text: 'two'}];
    return dataBlob;
  },
});


const styles = StyleSheet.create({
  row: {
    flex: 1,
    height: 50,
    backgroundColor: 'blue'
  },

  separator: {
    flex: 1,
    height: 10
  }
});

export default DeckList;