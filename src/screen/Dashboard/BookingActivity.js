import React,{useState} from 'react'
import { FlatList, ImageBackground , Modal , Image, TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Pressable } from 'react-native'
import colors from '../../assets/colors';
import { Calendar } from '../../assets/Svgs/svg_icons';
import GradientButton from '../../Components/Buttons/GradientButton';
import GradientBorder from '../../Components/Buttons/GradientBorder';
import LinearGradient from 'react-native-linear-gradient';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import MapView from "react-native-maps";
import  Header  from '../../Components/Header/Header'
import { Img, Pic3 } from '../../assets/Svgs/svg_images';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Star from '../../assets/pngImages/star.png'
import GreyStar from '../../assets/pngImages/greyStar.png'
import Font_style from '../../assets/Font_style';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const Active = require('../../assets/pngImages/act.png')
const History = require('../../assets/pngImages/history.png')
const Cancel = require('../../assets/pngImages/cancel.png')

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
                    <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400',color:colors.inpt}]} >{title}</Text>
                </TouchableOpacity>
            }
        </>
    )
}

const Button = (props) => {
    const {selected , text , img , imgStyle , onpress } = props;
    return(
        <>
        {selected?
            <LinearGradient
                style={[styles.btnstyle,{borderWidth:0}]}
                colors={[colors.gradient1,colors.gradient2]}
            >
                <Pressable style={[styles.btnstyle,{width:104,height:104}]} >
                    <Image
                        style={[imgStyle,{tintColor:colors.gradient1}]}
                        source={img}
                    />
                    <Text style={[styles.textstyle,{color:colors.gradient1}]} >{text}</Text>
                </Pressable>
            </LinearGradient>
        :
            <TouchableOpacity onPress={onpress} style={styles.btnstyle} >
                <Image
                    style={imgStyle}
                    source={img}
                />
                <Text style={styles.textstyle} >{text}</Text>
            </TouchableOpacity>
        }
        </>
    )
}

export default function BookingActivity(props) {

    const [act, setact] = useState(false)
    const [his, sethis] = useState(true)
    const [canc, setcanc] = useState(false)

    const [photo, setphoto] = useState(true)
    const [video, setvideo] = useState(false)


  return (
    <View>
        <View style={styles.headr} >
          <Text style={[styles.txtStyle,{color:colors.text,fontSize:16,fontFamily:Font_style.Poppins_Regular,marginTop:20}]} >Booking Activity</Text>
      </View>
      <View style={{width:'90%',alignSelf:'center',marginTop:20}} >
        <View style={{justifyContent:'space-evenly',flexDirection:'row'}} >
                <Button
                    selected={act}
                    text={'Active Jobs'}
                    img = {Active}
                    imgStyle={{width:42,height:40}}
                    onpress={()=> {
                        setact(true)
                        sethis(false)
                        setcanc(false)
                        props.navigation.navigate('LocationSearch')
                    }}
                />
                <Button
                    selected={his}
                    text={'History'}
                    img = {History}
                    imgStyle={{width:45,height:40}}
                    onpress={()=> {
                        setact(false)
                        sethis(true)
                        setcanc(false)
                        props.navigation.navigate('Message')
                    }}
                />
                <Button
                    selected={canc}
                    text={'Cancelled'}
                    img = {Cancel}
                    imgStyle={{width:46,height:40,tintColor:'#000'}}
                    onpress={()=> {
                        setact(false)
                        sethis(false)
                        setcanc(true)
                    }}
                />
        </View> 
        <View style={{marginTop:20,width:'100%',alignSelf:'center',height:38,flexDirection:'row'}} >
            <CusButton
                title={'COMPLETED'}
                selected={photo}
                onpress={()=>{
                    setphoto(true) 
                    setvideo(false)
                }}
            />
            <CusButton
                title={'IN DISPUTE'}
                selected={video}
                onpress={()=>{
                    setphoto(false) 
                    setvideo(true)
                }}
            />
        </View>
        <View style={{width:'100%',marginTop:20,alignItems:'center'}} >
           <View>
                <Pic3/>
                <View style={styles.botomCont} >
                    <View style={{flexDirection:'row',width:'90%',marginTop:4,alignSelf:'center',justifyContent:'center'}} >
                        <Text style={[styles.textstyle,{color:colors.white,width:'70%'}]} >Eyebrows</Text>
                        <View style={{marginTop:5}} >
                            <Calendar />
                        </View>
                        <Text style={[styles.textstyle,{color:colors.white,fontSize:10,fontWeight:'100',fontFamily:Font_style.Poppins_Regular}]}>  Sat, Nov 12, 2022</Text>
                    </View>
                    <Text style={[styles.textstyle,{color:colors.white,fontSize:12,marginTop:-5,marginLeft:6}]} >  2541 simple St. Virginia</Text>
                </View>
           </View>
           <View style={{marginTop:20}} >
                <Pic3/>
                <View style={styles.botomCont} >
                    <View style={{flexDirection:'row',width:'90%',marginTop:4,alignSelf:'center',justifyContent:'center'}} >
                        <Text style={[styles.textstyle,{color:colors.white,width:'70%'}]} >Eyebrows</Text>
                        <View style={{marginTop:5}} >
                            <Calendar />
                        </View>
                        <Text style={[styles.textstyle,{color:colors.white,fontSize:10,fontWeight:'100',fontFamily:Font_style.Poppins_Regular}]}>  Sat, Nov 12, 2022</Text>
                    </View>
                    <Text style={[styles.textstyle,{color:colors.white,fontSize:12,marginTop:-5,marginLeft:6}]} >  2541 simple St. Virginia</Text>
                </View>
           </View>
        </View>
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
    txtStyle:{color:colors.gradient2,fontSize:20,fontWeight:'500'},
    textstyle:{fontSize:14,fontFamily:Font_style.Poppins_Regular,marginTop:5,color:colors.black},
    headr:{alignItems:'center',justifyContent:'center',width:'100%',height:100,backgroundColor:colors.white,borderBottomWidth:1,borderBottomColor:colors.blu},
    btnstyle:{width:105,height:105,borderRadius:10,borderWidth:1,borderColor:colors.blu,backgroundColor:colors.white,alignItems:'center',justifyContent:'center'},
    mainLinea:{width:windowWidth -40,height:'100%',alignItems:'center',justifyContent:'center'},
    innerTouc:{width:windowWidth -43,height:'92%',backgroundColor:colors.white,alignItems:'center',justifyContent:'center'},
    buton:{height:'100%',width:'50%',borderWidth:1,borderColor:colors.blu,justifyContent:'center',alignItems:'center',backgroundColor:colors.white},
    botomCont:{height:53,width:'91%',backgroundColor:colors.gradient2,position:'absolute',bottom:0},

})  