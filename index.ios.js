/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'red',
    fontSize: 30,
    margin: 64,
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component {
  render() {
    // return React.createElement(React.Text,{style:styles.text}, "Hello World!");
    return <React.Text style = {
      styles.text
    } > Hello World(Again) < /React.Text>;
  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return ( < React.NavigatorIOS style = {
        styles.container
      }
      initialRoute = {
        {
          title: 'Property Finder',
          component: SearchPage,
        }
      } >
      < /React.NavigatorIOS>
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() {
  return PropertyFinderApp
});

/*
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var PropertyFinder = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
*/