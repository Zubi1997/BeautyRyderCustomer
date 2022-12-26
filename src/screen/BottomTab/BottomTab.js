import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Dashboard/Home';
import BusinessList from '../Dashboard/BusinessList';
import Services from '../Dashboard/Services';
import SerScreen from '../Dashboard/SerScreen';
import ScreenDetail from '../Dashboard/ServiceDetail';
import Map from '../Dashboard/Payment';
import Activity from '../Dashboard/Activity';
import Settings from '../Dashboard/Settings/Setting';
import BookingActivity from '../Dashboard/BookingActivity';
import Message from '../Dashboard/Message';
import { Image, Text } from 'react-native';
import colors from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personal_info from '../Dashboard/Settings/Personal_info';
import Vouchers from '../Dashboard/Settings/Vouchers/Vouchers';
import Help from '../Dashboard/Settings/Help';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="BusinessList" component={BusinessList}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
    >
      <Stack.Screen name="Setting" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="Personal_info" component={Personal_info} options={{ headerShown: false }} />
      <Stack.Screen name="Vouchers" component={Vouchers} options={{ headerShown: false }} />
      <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const ServiceStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Services"
    >
      <Stack.Screen name="Services" component={SerScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="ScreenDetail" component={ScreenDetail}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Map" component={Map}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const ActivityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Activity"
    >
      <Stack.Screen name="Activity" component={Activity}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="BookingActivity" component={BookingActivity}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Message" component={Message}
        options={{
          headerShown: false
        }}
      />


    </Stack.Navigator>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // tabBarOptions={{ showLabel: false }}
      barStyle={{ height: 80, backgroundColor: "#E5E5E5" }}
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (<Text style={{ fontSize: 10, color: focused ? colors.gradient1 : colors.inpt, fontWeight: '400', top: -20 }}> Home </Text>),
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{ width: 28, height: 28, tintColor: focused ? colors.gradient1 : colors.inpt }}
              source={require("../../assets/pngImages/home.png")}
            />
          ),
        }}
      />

      <Tab.Screen name="Services" component={ServiceStack}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (<Text style={{ fontSize: 10, color: focused ? colors.gradient1 : colors.inpt, fontWeight: '400', top: -20 }}> Services </Text>),
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{ width: 28, height: 28, tintColor: focused ? colors.gradient1 : colors.inpt }}
              source={require("../../assets/pngImages/services.png")}
            />
          ),
        }}
      />

      <Tab.Screen name="Plus" component={Services}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (<Text style={{ fontSize: 10, color: focused ? colors.gradient1 : colors.inpt, fontWeight: '400', top: -20 }}> </Text>),
          tabBarIcon: ({ color, focused }) => (
            <LinearGradient
              colors={[colors.gradient1, colors.gradient2]}
              style={{ width: 55, height: 55, borderRadius: 100, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}
            >
              <Image
                style={{ width: 28, height: 28 }}
                source={require("../../assets/pngImages/plus.png")}
              />
            </LinearGradient>
          ),
        }}
      />

      <Tab.Screen name="Activity" component={ActivityStack}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (<Text style={{ fontSize: 10, color: focused ? colors.gradient1 : colors.inpt, fontWeight: '400', top: -20 }}> Activity </Text>),
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{ width: 28, height: 28, tintColor: focused ? colors.gradient1 : colors.inpt }}
              source={require("../../assets/pngImages/activity.png")}
            />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingStack}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (<Text style={{ fontSize: 10, color: focused ? colors.gradient1 : colors.inpt, fontWeight: '400', top: -20 }}> Settings </Text>),
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{ width: 28, height: 30, tintColor: focused ? colors.gradient1 : colors.inpt }}
              source={require("../../assets/pngImages/setting.png")}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default MyTabs