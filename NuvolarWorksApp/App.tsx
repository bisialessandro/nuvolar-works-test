/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider} from 'react-redux';
import SwitchNavigator from './src/Router/SwitchNavigator';
import {createAppContainer} from "react-navigation";
import {PersistGate} from "redux-persist/integration/react";
import {store,persistor} from "./src/store";



const AppNavigator = createAppContainer(SwitchNavigator );

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
             <AppNavigator/>
          </PersistGate>
      </Provider>
  );
};


export default App;
