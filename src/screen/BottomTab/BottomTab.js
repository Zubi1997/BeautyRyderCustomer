import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Dashboard/Home';
import BusinessList from '../Dashboard/BusinessList';
import Services from '../Dashboard/Services';
import SerScreen from '../Dashboard/SerScreen';
import ScreenDetail from '../Dashboard/ServiceDetail';
import Activity from '../Dashboard/Activity';
import Settings from '../Dashboard/Setting';
import { Image,Text } from 'react-native';
import colors from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () =>{
  return(
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen  name="Home" component={Home}  
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen  name="BusinessList" component={BusinessList}
        options={{
          headerShown : false
        }}
      />
    </Stack.Navigator>
  )
}

const ServiceStack = () =>{
  return(
    <Stack.Navigator
      initialRouteName="Services"
    >
      <Stack.Screen  name="Services" component={SerScreen}  
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen  name="ScreenDetail" component={ScreenDetail}
        options={{
          headerShown : false
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
        barStyle={{ height : 90 ,backgroundColor: "#E5E5E5" }}
        screenOptions={{
            tabBarStyle: { height: 90 },
            tabBarActiveTintColor: 'green',
        }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeStack}
        options={{
            headerShown : false,
            tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10, color:focused ? colors.gradient1 : colors.inpt, fontWeight: '400',top:-20 }}> Home </Text> ) ,
            tabBarIcon: ({ color , focused  }) => (
              <Image
                style={{ width: 28, height: 28 ,tintColor: focused ? colors.gradient1 : colors.inpt  }}
                source={require("../../assets/pngImages/home.png")}
              />
            ),
          }}
      />
      <Tab.Screen name="Services" component={ServiceStack}
        options={{
            headerShown : false,
            tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10, color:focused ? colors.gradient1 : colors.inpt, fontWeight: '400',top:-20 }}> Services </Text> ) ,
            tabBarIcon: ({ color , focused  }) => (
              <Image
                style={{ width: 28, height: 28 ,tintColor: focused ? colors.gradient1 : colors.inpt  }}
                source={require("../../assets/pngImages/services.png")}
              />
            ),
          }}
      />
      <Tab.Screen name="Plus" component={Services}
          options={{
            headerShown : false,
            tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10, color:focused ? colors.gradient1 : colors.inpt, fontWeight: '400',top:-20 }}> </Text> ) ,
            tabBarIcon: ({ color , focused  }) => (
              <LinearGradient
              colors={[colors.gradient1,colors.gradient2]}
              style={{width:55,height:55,borderRadius:100,marginTop:10,alignItems:'center',justifyContent:'center'}}
              >
                    <Image
                        style={{ width: 28, height: 28   }}
                        source={require("../../assets/pngImages/plus.png")}
                    />
              </LinearGradient>
            ),
          }}
      />
      <Tab.Screen name="Activity" component={Activity}
        options={{
            headerShown : false,
            tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10, color:focused ? colors.gradient1 : colors.inpt, fontWeight: '400',top:-20 }}> Activity </Text> ) ,
            tabBarIcon: ({ color , focused  }) => (
              <Image
                style={{ width: 28, height: 28 ,tintColor: focused ? colors.gradient1 : colors.inpt  }}
                source={require("../../assets/pngImages/activity.png")}
              />
            ),
          }}
      />
      <Tab.Screen name="Settings" component={Settings}
        options={{
            headerShown : false,
            tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10, color:focused ? colors.gradient1 : colors.inpt, fontWeight: '400',top:-20 }}> Settings </Text> ) ,
            tabBarIcon: ({ color , focused  }) => (
              <Image
                style={{ width: 28, height: 30 ,tintColor: focused ? colors.gradient1 : colors.inpt  }}
                source={require("../../assets/pngImages/setting.png")}
              />
            ),
          }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs