import React,{ useEffect , useState } from 'react'
import { View , Text , StyleSheet , Dimensions , Image  ,Pressable } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../../assets/colors'
import  Header  from '../../Components/Header/Header'
import  Font_style  from '../../assets/Font_style'
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import { Pic2 , Pic1 } from '../../assets/Svgs/svg_images';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Tab = createMaterialTopTabNavigator();


export default function ServiceDetail(props) {

    const [item, setItem] = useState('')

    useEffect(() => {
      const item = props?.route?.params?.item
    //   console.log(item);
      setItem(item)
    }, [])
    

  return (
    <View>
        <Header
            onpress={()=>props.navigation.goBack()}
            option={false}
            text={'Service Detail'}
        />
        <Text style={[styles.txtStyle,{padding:20,fontSize:12,color:colors.text,fontFamily:Font_style.Poppins_Regular}]} >Eyebrows</Text>
        <View style={{width:'100%',height:'100%'}} >
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    // tabBarIndicatorContainerStyle : {width:100 , alignItems:'center'} ,
                    tabBarActiveTintColor:colors.gradient1,
                    tabBarIndicatorStyle : {  backgroundColor : 'transparent'  },
                    tabBarLabelStyle: { fontSize: 10 , fontWeight : '400' ,  },
                    tabBarStyle: { backgroundColor: '#F5F5F5' , borderBottomWidth:1 , borderTopWidth : 1 , borderTopColor : colors.blu , borderBottomColor:colors.blu , height:40 , elevation:0   },
                }}
                >
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        headerShown : false,
                        tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10 , fontFamily : Font_style.Poppins_Medium ,borderBottomWidth:2 , borderBottomColor : focused ? colors.gradient1 : 'transparent' , padding:7, color:focused ? colors.gradient1 : colors.text, fontWeight: '400',top:-5 }}> About </Text> ) ,
                    }}
                />
                <Tab.Screen
                    name="Price & Duration"
                    component={()=><PriceDura {...props}/>}
                    // component={props => <PriceDura {...props} />}
                    options={{
                        headerShown : false,
                        tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10 , fontFamily : Font_style.Poppins_Medium ,borderBottomWidth:2 , borderBottomColor : focused ? colors.gradient1 : 'transparent' , padding:7, color:focused ? colors.gradient1 : colors.text, fontWeight: '400',top:-5 }}> {"Price & Duration"} </Text> ) ,
                    }}
                >
                     {/* {props => <PriceDura {...props}  />} */}
                </Tab.Screen>
                <Tab.Screen
                    name="Photos"
                    component={Photos}
                    options={{
                        headerShown : false,
                        tabBarLabel: ({focused}) => (<Text style={{ fontSize: 10 , fontFamily : Font_style.Poppins_Medium ,borderBottomWidth:2 , borderBottomColor : focused ? colors.gradient1 : 'transparent' , padding:7, color:focused ? colors.gradient1 : colors.text, fontWeight: '400',top:-5 }}> {'Photos'} </Text> ) ,
                    }}
                />
                
            </Tab.Navigator>
        </View>
    </View>
  )
}

const About = () => {

    const TextPara = ({heading ,text}) => {
        return(
            <>
                <Text style={styles.heading} >{heading}</Text>
                <Text style={styles.paragraph} >
                    {text}
                </Text>
            </>
        )
    }

    return(
        <View style={{padding:20}} >
            <TextPara
                heading = {'About Eyebrows'}
                text = {"Lorem Ipsum is simply dummy text of the printing and type setting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point distribution"}
            />
            <View style={{marginTop:10}} >
                <TextPara
                    heading = {'Description of Short'}
                    text = {"content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution "}
                />
            </View>
            <View style={{marginTop:10}} >
                <TextPara
                    heading = {'Description of Tuner'}
                    text = {"content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution "}
                />
            </View>
            <View style={{marginTop:10}} >
                <TextPara
                    heading = {'Description of Special'}
                    text = {"content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution "}
                />
            </View>
            
        </View>
    )
} 

const PriceDura = (props) => {
    
    const [dat, setItem] = useState('')

    useEffect(() => {
      const item = props?.route?.params?.item
    //   console.log(item);
      setItem(item)
    }, [])

    return(
        <View>
            {dat &&
                <>
                    {dat.detail.map((item,index)=>{
                        return(
                            <>
                                <TouchableOpacity 
                                    onPress={()=>props.navigation.navigate('Map')}
                                style={{flexDirection:'row',alignItems:'center',paddingTop:20,paddingLeft:20,paddingRight:20}} >
                                    <View style={{flex:1.8}} >
                                        <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400',color:colors.text}]} >{item.name}</Text>
                                        <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400',color:colors.inpt}]} >{item.time}</Text>
                                    </View>
                                    <View style={{flex:0.15, flexDirection:'row'}} >
                                        <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400',color:colors.text}]} >{item.price}</Text>
                                        
                                    </View>
                                </TouchableOpacity>
                                <View style={{width:'100%',alignSelf:'center',borderBottomWidth:1,borderBottomColor:colors.blu,marginTop:10}} />
                            </>
                        )
                    })}
                </>
            }
        </View>
    )
} 

const Photos = (props) => {
    return(
        <View style={{alignItems:'center',marginTop:20}} >
            {/* <TouchableOpacity 
                // onPress={()=>props.navigation.navigate('')}
            > */}
                <Image
                    style={{width:'90%',height:200}}
                    source={require('../../assets/pngImages/img1.png')}
                />
            {/* </TouchableOpacity> */}
            {/* <TouchableOpacity> */}
                <Image
                    style={{width:'90%',height:200,marginTop:10}}
                    source={require('../../assets/pngImages/img2.png')}
                />
            {/* </TouchableOpacity> */}
        </View>
    )
} 

const styles = StyleSheet.create({
    heading : {
        fontFamily:Font_style.Poppins_Regular,
        color:colors.text
    },
    paragraph:{
        fontFamily:Font_style.Poppins_Regular,
        color:colors.inpt
    }
  
});
