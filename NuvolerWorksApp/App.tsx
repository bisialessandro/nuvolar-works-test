/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
//import {MainScene} from './src/Scenes/MainScene';
//import {SafeAreaView} from "react-native";
import SwitchNavigator from './src/Router/SwitchNavigator';
import {createAppContainer} from "react-navigation";

const AppNavigator = createAppContainer(SwitchNavigator );

const App: () => React$Node = () => {
  return (
    <AppNavigator/>
  );
};


export default App;
