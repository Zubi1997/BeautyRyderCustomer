import React,{useState} from 'react'
import { FlatList, ScrollView , TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Image, SafeAreaView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active_voucher from './Active_voucher';
import Radeem_voucher from './Radeem_voucher';
import colors from '../../../../assets/colors';
import Header from '../../../../Components/Header/Header';
import Text_normal from '../../../../Components/Text_components/Text_normal';

// import Carousel, { Pagination } from 'react-native-snap-carousel';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height


function Vouchers({navigation}) {
    const [name, set_name] = useState('');

    const Tab = createMaterialTopTabNavigator();

    
   
 const voucherTab=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Active_voucher"
      // screenOptions={{
      //   tabBarLabelStyle: { fontSize: 12 },
      //   tabBarItemStyle: { width: 100 },
      //   tabBarStyle: { backgroundColor: 'powderblue' },
      // }}
      screenOptions={{
        tabBarActiveTintColor:colors.gradient1,
        tabBarInactiveTintColor:colors.black,
        // tabBarActiveTintColor : 'red',
        tabBarContentContainerStyle:{},
        tabBarIndicatorStyle : { width:'50%' , backgroundColor : colors.gradient1 },
        tabBarLabelStyle: { fontSize: 12 , fontWeight : '400' },
        tabBarStyle: { backgroundColor: '#F5F5F5' , borderWidth:0.3 , borderColor:colors.greytxt , height:45 , elevation:0   },
      }}
    >
      <Tab.Screen
        name="Active_voucher"
        component={Active_voucher}
        options={{ tabBarLabel: 'Active' }}
      />
      <Tab.Screen
        name="Radeem_voucher"
        component={Radeem_voucher}
        options={{ tabBarLabel: 'Radeem' }}
      />
    </Tab.Navigator>
  );
}


 
    return (
        <View style={styles.cont} > 
            <Header onpress={()=>navigation.goBack()}/>

                <View style={styles.profile}>
                    <Text_normal style={{fontSize:16}} text='Vouchers' />
                </View>
                <View style={{flex:1,backgroundColor:'red'}}>

                {voucherTab()}
                </View>
                {/* <View style={styles.topbar}>
                    <View style={styles.active}>
                        <Text_normal style={{fontSize:10,color:colors.primary}} text='Active' />
                    </View>
                    <View style={styles.radeem}>
                        <Text_normal style={{fontSize:10,color:colors.primary}} text='Active' />
                    </View>
                </View> */}
           

        </View>
    )
}
export default Vouchers

const styles = StyleSheet.create({
  
    cont: {
      flex:1,
    //   alignItems:'center',
        backgroundColor:colors.background
    },
    profile:{
      paddingBottom:10,
      paddingTop:20,
      alignItems:'center',
    },
    list:{
        flex:1,
        backgroundColor:colors.grey_list,
        paddingBottom:10
      },
    topbar:{
        flexDirection:'row',
        backgroundColor:'grey',
        height:40
    },
    active:{
        // backgroundColor:'green',
        borderWidth:1,
        // borderRightWidth:1,
        borderBottomColor:colors.primary,
        width:'50%',
        alignItems:'center',
        justifyContent:'center'

    },
    radeem:{
        // backgroundColor:'orange',
        borderWidth:1,
        borderBottomColor:colors.primary,
        width:'50%'
    }
  
});
  



