import React,{useState} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text ,View, StyleSheet , Pressable , ScrollView , Dimensions , TouchableOpacity } from 'react-native';
import colors from '../../assets/colors';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Star from '../../assets/pngImages/star.png';
import LinearGradient from 'react-native-linear-gradient';
import { Pic2 , Pic1 } from '../../assets/Svgs/svg_images';

var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

const Tab = createMaterialTopTabNavigator();

const CusButton = ({ title , selected , onpress }) => {
    return(
        <>
            {selected ? 
                <LinearGradient
                    colors={[colors.gradient1,colors.gradient2]}
                    style={[styles.mainLinea,{width:'50%'}]}
                >
                    <Pressable onPress={()=>onpress()} style={[styles.innerTouc,{flexDirection:'column',width:'98.5%'}]} >
                        {title &&
                            <Text style={[styles.txtStyle,{fontSize:12,color:colors.gradient1,fontWeight:'400'}]} >{title}</Text>
                        }
                    </Pressable>
                </LinearGradient>
            :
                <TouchableOpacity onPress={()=>onpress()} style={styles.buton} >
                    <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400'}]} >{title}</Text>
                </TouchableOpacity>
            }
        </>
    )
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor:colors.gradient1,
        // tabBarInactiveTintColor​:'black',
        // tabBarActiveTintColor : 'red',
        tabBarIndicatorStyle : { width:50 , marginLeft:25 , backgroundColor : colors.gradient1 },
        tabBarLabelStyle: { fontSize: 10 , fontWeight : '400' },
        tabBarStyle: { backgroundColor: '#F5F5F5' , borderBottomWidth:1 , borderBottomColor:colors.blu , height:40 , elevation:0   },
      }}
    >
      <Tab.Screen
        name="Services"
        component={Services}
        options={{ tabBarLabel: 'Services' }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ tabBarLabel: 'About' }}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{ tabBarLabel: 'Reviews' }}
      />
      <Tab.Screen
        name="Photos"
        component={Photos}
        options={{ tabBarLabel: 'Photos' }}
      />
    </Tab.Navigator>
  );
}

    const Services = () => {
        return(
            <View  >
                <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',marginTop:13,color:colors.inpt,marginLeft:20}]} >Eyebrows</Text>
                <View style={[styles.divider,{marginTop:13}]} />
                <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',marginTop:13,color:colors.inpt,marginLeft:20}]} >Upper Lip</Text>
                <View style={[styles.divider,{marginTop:13}]} />
                <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',marginTop:13,color:colors.inpt,marginLeft:20}]} >Lower Lip</Text>
                <View style={[styles.divider,{marginTop:13}]} />
                <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',marginTop:13,color:colors.inpt,marginLeft:20}]} >Chin</Text>
                <View style={[styles.divider,{marginTop:13}]} />
                <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',marginTop:13,color:colors.inpt,marginLeft:20}]} >Neck</Text>
            </View>
        )
    }

    const About = () => {
        return(
            <View style={{padding:20}} >
                <Text style={[styles.txtStyle,{color:colors.text,fontSize:16,fontWeight:'400'}]} >About us</Text>
                <Text style={[styles.txtStyle,{color:colors.inpt,fontSize:12,marginTop:10,lineHeight:18,fontWeight:'400'}]} >
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. It is a long established fact that a reader will 
                    be distracted by the readable content of a page when 
                    looking at its layout. The point of using Lorem Ipsum is that it 
                    has a more-or-less normal distribution
                    {'\n'}
                    {'\n'}
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                </Text>
            </View>
        )
    }

    const Reviews = () => {
        
        const [starCount, setstarCount] = useState(5);

        return(
        <ScrollView keyboardShouldPersistTaps={'always'} >
            {[1].map((item)=>{
                return(
                    <View style={styles.card} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{flex:0.2}} >
                                <View style={styles.dp} />
                            </View>
                            <View style={{flex:0.8,justifyContent:'center'}}  >
                                <Text style={[styles.txtStyle,{color:colors.text,fontSize:14,fontWeight:'400'}]} >Amy Hunter</Text>
                                <View style={{alignItems:'center',marginTop:4,flexDirection:'row'}} >
                                    <View style={{flexDirection:'row',width:'98%'}} >
                                        <Text style={[styles.txtStyle,{fontSize:10,fontWeight:'400',color:colors.gradient1}]} >4.0  </Text>
                                        <Rating
                                            type='custom'
                                            ratingImage={Star}
                                            ratingColor='#F5F5F5'
                                            // ratingBackgroundColor='#fff'
                                            ratingCount={5}
                                            imageSize={12}
                                            onFinishRating={(r)=>setstarCount(r)}
                                            style={{ }}
                                        />
                                    </View>
                                    <View style={{}} >
                                        <Text style={[styles.txtStyle,{fontSize:10,fontWeight:'400',color:colors.inpt}]} >{'  15 days ago'}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:0.2}}  >
                                
                            </View>
                        </View>
                        <Text style={[styles.txtStyle,{color:colors.inpt,fontSize:12,marginTop:10,lineHeight:18,fontWeight:'400'}]} >
                            “ Lorem Ipsum is simply dummy text of the printing and type setting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”
                        </Text>
                    </View>
                )
            })}
        </ScrollView>
        )
    }

    const Photos = () => {

        const [photo, setphoto] = useState(true)
        const [video, setvideo] = useState(false)

        return(
            <View style={{padding:20}} >
                <View style={{width:'98%',alignSelf:'center',height:38,flexDirection:'row'}} >
                    <CusButton
                        title={'PHOTOS'}
                        selected={photo}
                        onpress={()=>{
                            setphoto(true) 
                            setvideo(false)
                        }}
                    />
                    <CusButton
                        title={'VIDEOS'}
                        selected={video}
                        onpress={()=>{
                            setphoto(false) 
                            setvideo(true)
                        }}
                    />
                </View>
                <View style={styles.conta} >
                    <View>
                        <Pic2 />
                    </View>
                    <View  >
                        <Pic1 />
                    </View>
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        conta:{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,alignSelf:'center',width:'100%'},
        card:{padding:10,backgroundColor:colors.white,borderRadius:8,alignSelf:'center',marginTop:8,width:'90%'},
        divider:{borderWidth:0.5,width:'100%',marginTop:30,alignSelf:'center',borderColor:colors.blu},
        txtStyle : {color:colors.gradient2,fontSize:20,fontWeight:'500'},
        dp:{borderWidth:2,borderColor:'#E2E9EE',width:46,height:46,borderRadius:100,backgroundColor:'#F7F8FA',alignItems:'center',justifyContent:'center'},
        buton:{height:'100%',width:'50%',borderWidth:1,borderColor:colors.blu,justifyContent:'center',alignItems:'center',backgroundColor:colors.white},
        mainLinea:{width:windowWidth -40,height:'100%',alignItems:'center',justifyContent:'center'},
        innerTouc:{width:windowWidth -43,height:'92%',backgroundColor:colors.white,alignItems:'center',justifyContent:'center'},
    })