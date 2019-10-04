/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import configureStore from "./src/store";
import { Provider} from 'react-redux';
import SwitchNavigator from './src/Router/SwitchNavigator';
import {createAppContainer} from "react-navigation";
const store = configureStore();

const AppNavigator = createAppContainer(SwitchNavigator );

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
          <AppNavigator/>
      </Provider>
  );
};


export default App;
