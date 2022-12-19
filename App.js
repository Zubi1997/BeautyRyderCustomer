import React, { useEffect, useState } from 'react';

import { AppRegistry, StatusBar, LogBox , View , Text } from 'react-native';
import  AppNavigator  from './src/navigation/routes'
import Menu, {
  MenuProvider,
  
} from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import reduxStore from './src/redux/store';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from "react-native-safe-area-context";
LogBox.ignoreAllLogs();

const App = props => {

  useEffect(() => {
    SplashScreen.hide();
  
  }, []);



  return (
    <Provider store={reduxStore}>
      {/* <SafeAreaProvider> */}
        {/* <StatusBar /> */}
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
      {/* </SafeAreaProvider> */}
    </Provider>
  );
};

App.propTypes = {};

App.defaultProps = {};

AppRegistry.registerComponent('App', () => App);

export default App;