/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { RNFritzVisionImageStyling } from 'react-native-fritz';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    styledImagePath: ['https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg'],
  };

  componentDidMount() {
    this.style();
  }

  style = async () => {
    const darkKnights = await RNFritzVisionImageStyling({
      name: 'darkKnights',
      modelIdentifier: '55cdc02f89174e1c8458690d5b8621ae',
      customModel: true,
      modelVersion: 1,
    });
    darkKnights.style({
      imagePath: 'https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg',
    }).then((resp) => {
      this.setState((state) => ({
        styledImagePath: state.styledImagePath.concat([resp.imagePath]),
      }));
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {this.state.styledImagePath.map((image) => (<Image source={{uri: image}} style={{width: 300, height: 300}}  />))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
