import React from 'react';
import ReactNative from 'react-native-macos';

const {
  StyleSheet,
  View,
  TextInput
} = ReactNative;


const MenuBar = React.createClass({
  render() {
    return (
      <View style={styles.menuBar}>
        <View style={styles.notification} />

        <View style={styles.menu}>
          <View style={styles.searchContainer} >
            <TextInput
              style={styles.search} 
              multiline={false}/>
          </View>
        </View>
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

  searchContainer: {
    flex: 0,
    height: 50,
    width: 200,
    justifyContent: 'center'
  },

  search: {
    height: 30,
    width: 180,
    fontSize: 18,
    margin: 10
  },

  menu: {
    flex: 0,
    height: 50,
    backgroundColor: '#efefef',
  }
});

export default MenuBar;