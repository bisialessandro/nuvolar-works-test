/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {MainScene} from './src/Scenes/MainScene';
import {SafeAreaView} from "react-native";


const App: () => React$Node = () => {
  return (
    <>
    <SafeAreaView>
      <MainScene />
    </SafeAreaView>
    </>
  );
};


export default App;
