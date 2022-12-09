import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Auth/Splash/Splash';
import MobileNum from '../screen/Auth/MobileNumber/MobileNumber';
import OtpScreen from '../screen/Auth/Otp/Otp';



import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';


//zubi end
const Stack = createNativeStackNavigator();



 function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MobileNum" component={MobileNum} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        {/* dummy */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  AppNavigator;