import React from 'react'
import { FlatList, ScrollView , Modal , Image, TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Pressable } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import LinearGradient from 'react-native-linear-gradient';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const a = [
    {
        name : 'Sophia Smith',
        msg : 'Nice Double Room with Own Bathroom',
        time : '6:53 PM - 25, Oct 2022',
        sender: true
    },
    {
        name : 'Keshav Maharaj',
        msg : 'It is a long established fact that a reader ',
        time : '6:53 PM - 25, Oct 2022',
        sender: false
    },
    {
        name : 'Sophia Smith',
        msg : 'Nice Double Room with Own Bathroom',
        time : '6:53 PM - 25, Oct 2022',
        sender: true
    },
    {
        name : 'Keshav Maharaj',
        msg : 'It is a long established fact that a reader ',
        time : '6:53 PM - 25, Oct 2022',
        sender: false
    },
    {
        name : 'Sophia Smith',
        msg : 'Nice Double Room with Own Bathroom',
        time : '6:53 PM - 25, Oct 2022',
        sender: true
    },
    {
        name : 'Keshav Maharaj',
        msg : 'It is a long established fact that a reader ',
        time : '6:53 PM - 25, Oct 2022',
        sender: false
    },
]

const notification = [
    {
      text : 'New',
      count : 2  
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },
    {
        text : 'Earlier',
        count : 2  
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },
    {
        promo : '50% OFF',
        text : ' in Ultraboost All terrain lpsum containing Lorem Ipsum passages',
        time : '9:35 AM' 
    },


  
]

const notificationDetail = [
    {
        time : 'Sun, 20 Nov, 6:48 AM',
        text1 : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        text2 : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        time : 'Sun, 20 Nov, 6:48 AM',
        text1 : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        text2 : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
  
]

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Messag = () => {
    return(
        <View style={{height:'63%'}} >
            <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={{paddingBottom:100}} style={styles.cont} >
                <View style={{height:100,flexDirection:'row',width:'100%',justifyContent:'center',padding:20}} >
                    <View style={{flex:0.2,justifyContent:'center'}} >
                        <View style={styles.dp} >

                        </View>
                    </View>
                    <View style={{flex:1.8,alignItems:'center'}} >
                        <Text style={[styles.textstyle,{fontSize:12}]} >Customer Support</Text>
                        <Text style={[styles.textstyle,{color:colors.gradient1,marginTop:0,fontSize:12}]} >Online</Text>
                        <Text style={[styles.textstyle,{color:colors.lightgrey4,marginTop:0,fontSize:10}]} >Sun, 20 Nov, 6:48 AM</Text>
                    </View>
                </View>
                <View style={styles.innerCont} >
                    {a.map((item,index)=>{
                        return(
                            <>
                            {item.sender ?
                                <View  style={{flexDirection : 'row',marginTop:10}} >
                                    {/* <Image
                                        source = {Dp}
                                        style= { styles.cardPro }
                                    /> */}
                                    <View style={{width:'75%'}} >
                                        <View style={[styles.card,{marginBottom : a.length - 1 === index ? 10 : 0  }]} >
                                            <View style={{}} >
                                                {/* <Text
                                                    style={styles.head}
                                                >{item.name}</Text> */}
                                                <Text
                                                    style={[styles.pra,{fontSize:10}]}
                                                >{item.msg}</Text>
                                            </View>
                                        </View>
                                        <Text style={[styles.pra,{fontSize:8,marginLeft:20,marginTop:5,color:'#9D9B9B'}]} >{item.time}</Text>
                                    </View>
                                </View>
                            :
                            <View  style={{flexDirection : 'row',marginTop:10,justifyContent:'flex-end'}} >
                            
                                <View style={{width:'75%'}} >
                                    <View style={[styles.borCard,{marginBottom : a.length - 1 === index ? 10 : 0  }]} >
                                        <View style={{}} >
                                            {/* <Text
                                                style={[styles.head,{color:'#E33895'}]}
                                            >{item.name}</Text> */}
                                            <Text
                                                style={[styles.pra,{fontSize:10,color:colors.white}]}
                                            >{item.msg}</Text>
                                        </View>
                                    </View>
                                    <Text style={[styles.pra,{fontSize:8,marginLeft:40,marginTop:5,color:'#9D9B9B'}]} >{item.time}</Text>
                                </View>
                            
                            </View>
                        }
                        </>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={styles.inputCont} >
                <View style={styles.input} >
                    <TextInput
                        style={{fontSize:10,color:colors.text,width:'85%'}}
                    />
                    <TouchableOpacity>
                        <Image
                            style={{width:12,height:12}}
                            source={require('../../assets/pngImages/attach.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const NotifDetail = () => {
    return(
        <View style={{width:'100%',height:'100%'}} >
             <View style={{width:'90%',height:'60%',alignSelf:'center'}} >
            <ScrollView contentContainerStyle={{paddingBottom:30}} >
                {notificationDetail.map((item)=>{
                    return(
                        <>
                            <Text style={[styles.textstyle,{color:colors.text,fontFamily:Font_style.Poppins_Regular,fontSize:12,alignSelf:'center',marginTop:25}]} >{item.time}</Text>
                            <View style={{width:'90%',alignSelf:'center',borderRadius:20,backgroundColor:colors.white,padding:20,marginTop:4}} >
                                <Text style={[styles.textstyle,{fontSize:10,fontFamily:Font_style.Poppins_Regular}]} >{item.text1}</Text>
                                <Text style={[styles.textstyle,{fontSize:10,fontFamily:Font_style.Poppins_Regular}]} >{item.text2}</Text>
                            </View>
                        </>
                    )
                })}
            </ScrollView>
           </View>
        </View>
    )
}

const Notifications = (props) => {
    return(
        <View style={{width:'100%',height:'100%'}} >
           <View style={{width:'90%',height:'60%',paddingTop:20,alignSelf:'center'}} >
            <ScrollView contentContainerStyle={{paddingBottom:30}} >
                {notification.map((item)=>{
                    return(
                        <>
                            {item.text === 'New' || item.text === 'Earlier'?
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:20}} >
                                    <Text style={[styles.textstyle,{fontSize:12}]} >{item.text}  </Text>
                                    <View style={styles.countCont} >
                                        <Text style={[styles.textstyle,{fontSize:10,color:colors.white,marginTop:2}]}  >{item.count}</Text>
                                    </View>
                                </View>
                            :
                                <TouchableOpacity onPress={()=>props.navigation.navigate('NotifDetail')} style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}} >
                                    <View style={styles.dp} />
                                    <View style={{marginLeft:8,marginRight:8,width:'70%'}} >
                                        <Text style={[styles.textstyle,{fontSize:12}]} >
                                            <Text style={[styles.textstyle,{fontSize:12,color:colors.gradient1}]} >{item.promo}</Text>
                                            {item.text}
                                        </Text>
                                    </View>
                                    <Text style={[styles.textstyle,{fontSize:12,color:colors.lightgrey4}]} >{item.time}</Text>
                                </TouchableOpacity>
                            }
                        </>
                    )
                })}
            </ScrollView>
           </View>
        </View>
    )
}

const NotifStack = () =>{
    return(
      <Stack.Navigator
        initialRouteName="Notifications"
      >
        <Stack.Screen  name="Notifications" component={Notifications}  
          options={{
            headerShown : false
          }}
        />
        <Stack.Screen  name="NotifDetail" component={NotifDetail}
          options={{
            headerShown : false
          }}
        />
      </Stack.Navigator>
    )
  }

export default function Message(props) {
  return (
    <View>
        <Header
            onpress={()=>alert('sfdf')}
        />
        <Text style={[styles.textstyle,{alignSelf:'center',marginTop:20,fontSize:16,fontFamily:Font_style.Poppins_SemiBold}]} >Message</Text>
        <View style={{width:'100%',height:'100%'}} >
            <Tab.Navigator
                    initialRouteName="Messag"
                    screenOptions={{
                        // tabBarIndicatorContainerStyle : {width:100 , alignItems:'center'} ,
                        tabBarActiveTintColor:colors.gradient1,
                        tabBarIndicatorStyle : {  backgroundColor : 'transparent'  },
                        tabBarLabelStyle: { fontSize: 10 , fontWeight : '400' ,  },
                        tabBarStyle: { backgroundColor: '#F5F5F5' ,marginTop:10, borderBottomWidth:1 , borderTopWidth : 1 , borderTopColor : colors.blu , borderBottomColor:colors.blu , height:40 , elevation:0   },
                    }}
                    >
                    <Tab.Screen
                        name="Messag"
                        component={Messag}
                        options={{
                            headerShown : false,
                            tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10 , fontFamily : Font_style.Poppins_Medium ,borderBottomWidth:2 , borderBottomColor : focused ? colors.gradient1 : 'transparent' , padding:7, color:focused ? colors.gradient1 : colors.text, fontWeight: '400',top:-5 }}> Message </Text> ) ,
                        }}
                    />
                    <Tab.Screen
                        name="Notifications"
                        component={NotifStack}
                        // component={props => <PriceDura {...props} />}
                        options={{
                            // tabBarStyle:{borderLeftWidth:1},
                            // tabBarContentContainerStyle : {borderLeftWidth:1},
                            headerShown : false,
                            tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10 , fontFamily : Font_style.Poppins_Medium ,borderBottomWidth:2 , borderBottomColor : focused ? colors.gradient1 : 'transparent' , padding:7, color:focused ? colors.gradient1 : colors.text, fontWeight: '400',top:-5 }}> {"Notifications"} </Text> ) ,
                        }}
                    >
                        {/* {props => <PriceDura {...props}  />} */}
                    </Tab.Screen>
                
                    
            </Tab.Navigator>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView:{
        backgroundColor:'white',
        height:'100%',
        marginTop:80
    },
    countCont:{width:18,height:18,backgroundColor:colors.gradient1,alignItems:'center',justifyContent:'center',borderRadius:40},
    dp:{width:40,height:40,borderRadius:100,backgroundColor:colors.blu},
    input:{borderWidth:1,flexDirection:'row',justifyContent:'center',alignItems:'center',borderColor:colors.blu,width:'85%',paddingLeft:20,color:colors.text,alignSelf:'center',borderRadius:100},
    inputCont:{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',height:83,backgroundColor:colors.white,borderTopWidth:1,borderTopColor:colors.blu},
    txtStyle:{color:colors.gradient2,fontSize:20,fontWeight:'500'},
    textstyle:{fontSize:14,fontFamily:Font_style.Poppins_Regular,marginTop:5,color:colors.black},
    headr:{alignItems:'center',justifyContent:'center',width:'100%',height:100,backgroundColor:colors.white,borderBottomWidth:1,borderBottomColor:colors.blu},
    btnstyle:{width:105,height:105,borderRadius:10,borderWidth:1,borderColor:colors.blu,backgroundColor:colors.white,alignItems:'center',justifyContent:'center'},
    mainLinea:{width:windowWidth -40,height:'100%',alignItems:'center',justifyContent:'center'},
    innerTouc:{width:windowWidth -43,height:'92%',backgroundColor:colors.white,alignItems:'center',justifyContent:'center'},
    buton:{height:'100%',width:'50%',borderWidth:1,borderColor:colors.blu,justifyContent:'center',alignItems:'center',backgroundColor:colors.white},
    botomCont:{height:53,width:'91%',backgroundColor:colors.gradient2,position:'absolute',bottom:0},
    cont : {
        // flex: 10  ,
        backgroundColor : '#fff',
        },  
    innerCont : {flex:1,width:'88%',alignSelf:'center',paddingTop:15},
    card : {
        maxWidth:'85%',
        padding:12,
        // borderBottomWidth:0.8,
        // borderBottomColor:'#D8D7D7',
        // marginTop:10,
        marginLeft:8,
        backgroundColor:colors.blu,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    borCard : {
        maxWidth:'85%',
        padding:12,
        // borderWidth:1,
        // borderBottomColor:'#D8D7D7',
        // marginTop:10,
        // borderColor:'#E33895',
        marginRight:8,
        alignSelf:'flex-end',
        backgroundColor:colors.gradient2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10
    },
    text:{
        fontSize:24,
        fontFamily:Font_style.Poppins_Bold,
        color:colors.black,
        textAlign:'center'
    },
    cardPro : {width:38,height:38,borderRadius:50},
    pra:{
        // marginTop:10,
        // width:'95%',
        color:'#777777',
        fontWeight:'400',
        fontFamily:Font_style.Poppins_Regular
    },
    head:{
        fontSize:12,
        fontFamily:Font_style.Poppins_Medium,
        fontWeight:'500',
        color:'#79489D',
        width:'75%'
    },
    date:{
        fontSize:10,
        fontFamily:Font_style.Poppins_Regular,
        fontWeight:'400',
        color:'#E33895'
    }

})  