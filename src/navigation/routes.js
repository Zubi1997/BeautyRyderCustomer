import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/Auth/Splash/Splash';
import MobileNum from '../screen/Auth/MobileNumber/MobileNumber';
import OtpScreen from '../screen/Auth/Otp/Otp';
import Main from '../screen/BottomTab/BottomTab';
import Home from '../screen/Dashboard/Home';
import BusinessList from '../screen/Dashboard/BusinessList';
import Services from '../screen/Dashboard/Services';
import BookingDetails from '../screen/Dashboard/Booking/BookingDetails';
import LocationSearch from '../screen/Dashboard/LocationSearch';
import Payment from '../screen/Dashboard/Payment';



import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
import SavedCards from '../screen/Dashboard/Booking/SavedCards';
import AddCard from '../screen/Dashboard/Booking/AddCard';
import JobHistoryDetails from '../screen/Dashboard/JobHistoryDetails';
import PlaceOrder from '../screen/Dashboard/PlaceOrder';
import Feedback from '../screen/Dashboard/Feedback';


//zubi end
const Stack = createNativeStackNavigator();



function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MobileNum" component={MobileNum} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
        <Stack.Screen name="SavedCards" component={SavedCards} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="JobHistoryDetails" component={JobHistoryDetails} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
        <Stack.Screen name="Feedback" component={Feedback} />
        {/* <Stack.Screen name="BusinessList" component={BusinessList} />
        <Stack.Screen name="Services" component={Services} /> */}
        <Stack.Screen name="LocationSearch" component={LocationSearch} />
        <Stack.Screen name="Payment" component={Payment} />

        {/* dummy */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;