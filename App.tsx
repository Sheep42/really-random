import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';

const stackNavigator = createStackNavigator({
  Main: MainScreen,
},
{ headerMode: "none" }
);

const App = createAppContainer( stackNavigator );

export default () => {
  return (
    <App />
  );
}

const styles = StyleSheet.create({

});
