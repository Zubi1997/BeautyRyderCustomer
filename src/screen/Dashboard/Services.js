import React,{useState} from 'react'
import { FlatList, ScrollView , Modal , Image, TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Pressable } from 'react-native'
import colors from '../../assets/colors';
import { Another } from '../../assets/Svgs/svg_images';
import GradientButton from '../../Components/Buttons/GradientButton';
import GradientBorder from '../../Components/Buttons/GradientBorder';
import LinearGradient from 'react-native-linear-gradient';
import TopTab from '../../Components/TopTab/TopTab';
// import { SliderBox } from "react-native-image-slider-box";
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import MapView from "react-native-maps";
import  Header  from '../../Components/Header/Header'
import { Img } from '../../assets/Svgs/svg_images';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Star from '../../assets/pngImages/star.png'
import GreyStar from '../../assets/pngImages/greyStar.png'
import { Location ,  Call,
    Fav,
    UploadBlack,
    LocationBlack } from '../../assets/Svgs/svg_icons';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);



function BusinessList({navigation}) {
    const [phone, set_phone] = useState('');
    const [code, setCode] = useState("");
    const [activeSlide, setactiveSlide] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [images, setimages] = useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
       
      ]);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
 
    return (
        <ScrollView style={styles.cont} > 
        
            <Header
                onpress={()=>navigation.goBack()}
                // option={true}
            />
            
            <View style={{width:'90%',alignSelf:'center',marginTop:20}} >
                <View style={{alignSelf:'center'}} >
                    <Another/>
                </View>
                <Text style={[styles.heading,{fontSize:16,fontWeight:'400',color:colors.text,marginTop:20}]} >Beautician Name</Text>
                <View style={{flexDirection:'row',marginTop:4}} >
                    <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',color:colors.inpt,width:'85%'}]} ><Location/> 2541 simple St. Virginia</Text>
                    <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',color:colors.inpt}]} >|   3.4 mi</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:4}} >
                    <Text style={[styles.txtStyle,{fontSize:10,fontWeight:'400'}]} >4.8  </Text>
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
                    <Text style={[styles.txtStyle,{fontSize:10,fontWeight:'400',color:colors.inpt}]} >{'  (47)'}</Text>
                </View>
            </View>
            <View style={styles.BtnContMain} >
                <TouchableOpacity style={styles.btnCont} >
                    <Call />
                    <Text style={styles.btnText} >Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCont} >
                    <Fav />
                    <Text style={styles.btnText} >Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCont} >
                    <UploadBlack />
                    <Text style={styles.btnText} >Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCont} >
                    <LocationBlack />
                    <Text style={styles.btnText} >Direction</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:280,width:'100%'}} >
                <TopTab/>
            </View>
            <GradientBorder
                additional={[styles.mainLinea,{width:windowWidth - 50,alignSelf:'center'}]}
                addInner={[styles.innerTouc,{width:windowWidth - 53,flexDirection:'row'}]}
                // icon={true}
                text={'BOOK NOW'}
                txtStyle={{color:colors.gradient1,fontSize:20,fontWeight:'500'}}
                onpress={()=>alert('sdsdf')}
            />
            <View style={{height:20}} />
          

        </ScrollView>
    )
}
export default BusinessList
const styles = StyleSheet.create({
    centeredView:{
        backgroundColor:'white',
        height:'100%',
        marginTop:80
    },
    BtnContMain:{width:'100%',height:60,flexDirection:'row',backgroundColor:'#FFFFFF',marginTop:25,borderColor:colors.blu,borderWidth:1},
    btnCont:{borderLeftWidth:0.5,alignItems:'center',justifyContent:'center',borderColor:colors.blu,width:'25%',height:60},
    btnText:{fontWeight:'400',color:colors.black,marginTop:4},
    ratingCard:{width:76,height:47,borderRadius:10,borderWidth:1,borderColor:colors.blu,alignItems:'center',justifyContent:'center'},
    divider:{borderWidth:0.5,width:'100%',marginTop:30,alignSelf:'center',borderColor:colors.blu},
    card : {width:'100%',flexDirection:'row',height:110,padding:10,backgroundColor:colors.white,borderRadius:8, marginTop:10 , elevation:2  },
    cont: {
      flex:10,
    //   alignItems:'center',
      backgroundColor:'#F5F5F5'
    },  
    see:{
        width:'100%',
        height:40,
        borderRadius:2,
        borderColor:'#E2E9EE',
        backgroundColor:'#F7F8FA',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:6
    },
    gradient_view:{
        flex:1
    },
    image:{
        alignSelf:'center',
        marginTop:304
    },
    dp:{borderWidth:2,borderColor:'#E2E9EE',width:60,height:60,borderRadius:100,backgroundColor:'#F7F8FA',alignItems:'center',justifyContent:'center'},
    gB:{
        // marginTop:windowHeight/15,
        marginTop:8,
        // marginLeft:40,
        borderRadius:100,
        width:84,
        height:24,
        alignSelf:'center'
      },
    mainLinea:{width:windowWidth -40,height:60,borderRadius:4,marginTop:30,alignItems:'center',justifyContent:'center'},
    innerTouc:{width:windowWidth -43,height:57,backgroundColor:colors.white,borderRadius:4,alignItems:'center',justifyContent:'center'},
    btn:{width:295,height:60,borderWidth:2,borderRadius:4,borderColor:colors.white},
    phonetxt: {
        // textAlign:  'right' ,
        height:60,
        justifyContent:'center',
        alignItems:'center'
        // : 'left',
    },
    phoneContainer: {
        height: 60,
        width: windowWidth -40,
        backgroundColor: '#F7F8FA',
        marginTop:12
    },
    heading:{
        fontSize:20,
        fontWeight:'500',
        color:colors.text,
        // marginTop:43,
        textAlign:'left'
    },
    num:{
        fontSize:20,
        fontWeight:'400',
        color:colors.gradient2,
        marginTop:19
    },  
    txtStyle : {color:colors.gradient2,fontSize:20,fontWeight:'500'},
    socCont:{borderWidth:1,alignItems:'center',flexDirection:'row',justifyContent:'center',borderColor:colors.bordr,width: windowWidth -40,height:60, marginTop:16,borderRadius:4},
    socText:{fontSize:18,fontWeight:'400',color:colors.text},
    optContainerMobile: {
        borderWidth: 1,
        borderColor: colors.blu,
        backgroundColor: colors.white,
        borderRadius: 5,
        height: 60,
        width: 60,
        fontSize: 12,
        color: colors.black,
        textAlign: "center",
      },
      optStyling: {
        marginVertical: 13,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width:'70%',
        fontSize: 12,
        color: colors.black,
        fontWeight: "600",
      },
      inpt:{
        color:colors.inpt,
        backgroundColor:colors.inptCont,
        fontSize:16,fontWeight:'400',
        elevation:1,
        width:windowWidth - 40,
        height : 60 ,
        borderRadius:4 ,
        marginTop:20,textAlign:'center'},
    header:{
        flexDirection:'row',
        width:'100%',
        // backgroundColor:'red',
        paddingTop:20,
        height:132,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:colors.blu
    },
    name:{
        fontWeight:'400',
        fontSize:16,
        color:colors.text
    }

  
});
  