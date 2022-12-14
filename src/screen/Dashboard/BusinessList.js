import React,{useState} from 'react'
import { FlatList, ScrollView , Modal , Image, TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Pressable } from 'react-native'
import colors from '../../assets/colors';
import { Location , HeartColor, Upload ,RightBlack , Stripe , LinearCross ,RadioInactive , RadioActive } from '../../assets/Svgs/svg_icons';
import GradientButton from '../../Components/Buttons/GradientButton';
import GradientBorder from '../../Components/Buttons/GradientBorder';
import LinearGradient from 'react-native-linear-gradient';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import MapView from "react-native-maps";
import  Header  from '../../Components/Header/Header'
import { Img } from '../../assets/Svgs/svg_images';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Star from '../../assets/pngImages/star.png'
import GreyStar from '../../assets/pngImages/greyStar.png'
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const arr = [
    'Eyebrows','Upper Lip','Lower Lip','Chin','Neck','Neck','Mens Cheeks','Sideburns','Jaw Line','Forehead','Uni-brow','Full Face'
]

    const RadioBtn = ({text , toggle , onpress}) => {
        return(
            <View style={{flexDirection:'row',marginTop:15,alignItems:'center'}} >
                <Text style={[styles.title,{width:'95%',fontSize:14,fontWeight:'400',color:colors.inpt}]} >{text}</Text>
                <TouchableOpacity onPress={()=>onpress()} >
                    {toggle?
                        <RadioActive/>
                        :
                        <RadioInactive/>
                    }
                </TouchableOpacity>
            </View>
        )
    }

    const Ratin = ({text , count , selec , togg }) => {

        const [starCount, setstarCount] = useState(5);

        return(
            <TouchableOpacity onPress={()=>{selec()}} style={styles.ratingCard} >
                <Text style={[styles.title,{fontSize:14,fontWeight:'400',color:colors.inpt}]}  >{text}</Text>
                <Rating
                    type='custom'
                    ratingImage={togg ? Star : GreyStar}
                    ratingColor='#fff'
                    // ratingBackgroundColor='#fff'
                    ratingCount={count}
                    imageSize={11}
                    onFinishRating={(r)=>setstarCount(r)}
                    style={{marginTop:4 }}
                />
            </TouchableOpacity>
        )
    }

    const Distance = ({text , count , selec , togg }) => {

    
        return(
            <TouchableOpacity onPress={()=>{selec()}} style={[styles.ratingCard,{borderColor:togg ? colors.gradient1 : colors.blu}]} >
                <Text style={[styles.title,{fontSize:14,fontWeight:'400',color:togg ? colors.gradient1 : colors.inpt }]}  >{text}</Text>
            </TouchableOpacity>
        )
    }

function BusinessList({navigation}) {
    const [phone, set_phone] = useState('');
    const [code, setCode] = useState("");
    const [activeSlide, setactiveSlide] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [uni, setUni] = useState(true);
    const [men, setMen] = useState(false);
    const [women, setWomen] = useState(false);
    const [two, settwo] = useState(false);
    const [three, setthree] = useState(false);
    const [four, setfour] = useState(true);
    const [five, setfive] = useState(false);
    const [omil, setomil] = useState(false);
    const [tmil, settmil] = useState(true);
    const [thmil, setthmil] = useState(false);
    const [fmil, setfmil] = useState(false);

   
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
 
    return (
        <ScrollView style={styles.cont} > 

            <Header
                onpress={()=>navigation.goBack()}
                option={true}
            />
            <View style={{width:'90%',marginTop:23,alignSelf:'center'}} >
                {[1,2,3,4,5,6,7,8,1].map((item,index)=>{
                    return(
                        <View key={index} style={styles.card} >
                            <View style={{flex:0.26}} >
                                <Img/>
                            </View>
                            <View style={{flex:0.7}} >
                                <Text style={[styles.txtStyle,{fontSize:16,fontWeight:'400',color:colors.text}]} >Beautician name</Text>
                                <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',color:colors.inpt}]} ><Location/> 2541 simple St. Virginia</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}} >
                                    <Text style={[styles.txtStyle,{fontSize:10,fontWeight:'400'}]} >4.8  </Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={Star}
                                        ratingColor='#fff'
                                        // ratingBackgroundColor='#fff'
                                        ratingCount={5}
                                        imageSize={12}
                                        onFinishRating={(r)=>setstarCount(r)}
                                        style={{ }}
                                    />
                                    <Text style={[styles.txtStyle,{fontSize:10,fontWeight:'400',color:colors.inpt}]} >  |   3.4 mi</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}} >
                                    <GradientButton
                                        Title1={'BOOK NOW'}
                                        style={styles.gB}
                                        // icon={true}
                                        gStyle={{borderRadius:100}}
                                        txtstyle={[styles.txtStyle,{color:colors.white,fontSize:10,fontWeight:'400'}]}
                                        onpress={()=>setModalVisible(!isModalVisible)}
                                    />
                                    <LinearGradient
                                        colors={[colors.gradient1,colors.gradient2]}
                                        style={[styles.mainLinea,{width:24,height:24,borderRadius:100,marginTop:8,marginLeft:10}]}
                                    >
                                        <Pressable onPress={()=>setModalVisible(!isModalVisible)} style={[styles.innerTouc,{width:22,height:22,borderRadius:100}]} >
                                            <HeartColor/>
                                        </Pressable>
                                    </LinearGradient>
                                    <LinearGradient
                                        colors={[colors.gradient1,colors.gradient2]}
                                        style={[styles.mainLinea,{width:24,height:24,borderRadius:100,marginTop:8,marginLeft:10}]}
                                    >
                                        <Pressable onPress={()=>alert('dfgfdg')} style={[styles.innerTouc,{width:22,height:22,borderRadius:100}]} >
                                            <Upload/>
                                        </Pressable>
                                    </LinearGradient>
                                </View>

                            </View>
                        </View>
                    )
                })}
                <View style={{flexDirection:'row',alignItems:'center',marginTop:56}} >
                    <View style={{flex:0.3}} >
                        <View style={styles.dp}  >
                            <Stripe/>
                        </View>
                    </View>
                    <View style={{flex:1}} >
                        <Text style={styles.name} >Payment</Text>
                        <Text style={[styles.name,{fontSize:12,color:colors.inpt,marginTop:6}]} >Cash</Text>
                    </View>
                    <View style={{flex:0.1}} >
                        <TouchableOpacity onPress={()=>navigation.navigate('BusinessList')} >
                            <RightBlack/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style={{height:100}} />
            <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                setModalVisible(!isModalVisible);
            }}
        >
            <View  style={styles.centeredView}>
                <TouchableOpacity 
                    onPress={()=>setModalVisible(!isModalVisible)}
                    style={{position:'absolute',top:-20,alignSelf:'center'}}
                >
                    <LinearCross/>
                </TouchableOpacity>
                <Text style={[styles.title,{marginTop:50,alignSelf:'center',fontSize:16,fontWeight:'400',color:colors.text}]} >Filters</Text>
                <View style={{width:'95%',alignSelf:'center',marginTop:30}} >
                    <Text style={[styles.title,{fontSize:16,fontWeight:'400',color:colors.text}]} >Gender Type</Text>
                    <RadioBtn
                        text={'Unisex'}
                        toggle={uni}
                        onpress={()=>{
                            setUni(true)
                            setMen(false)
                            setWomen(false)
                        }}
                    />
                    <RadioBtn
                        text={'Men'}
                        toggle={men}
                        onpress={()=>{
                            setUni(false)
                            setMen(true)
                            setWomen(false)
                        }}
                    />
                    <RadioBtn
                        text={'Women'}
                        toggle={women}
                        onpress={()=>{
                            setUni(false)
                            setMen(false)
                            setWomen(true)
                        }}
                    />
                    <View style={styles.divider} />
                    <Text style={[styles.title,{fontSize:16,fontWeight:'400',color:colors.text,marginTop:20}]} >Rating</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}} >
                        <Ratin
                            text={'2'}
                            count={2}
                            selec={()=>{
                                settwo(true)
                                setthree(false)
                                setfour(false)
                                setfive(false)
                            }}
                            togg={two}
                        />
                        <Ratin
                            text={'3'}
                            count={3}
                            selec={()=>{
                                settwo(false)
                                setthree(true)
                                setfour(false)
                                setfive(false)
                            }}
                            togg={three}
                        />
                        <Ratin
                            text={'4'}
                            count={4}
                            selec={()=>{
                                settwo(false)
                                setthree(false)
                                setfour(true)
                                setfive(false)
                            }}
                            togg={four}
                        />
                        <Ratin
                            text={'5'}
                            count={5}
                            selec={()=>{
                                settwo(false)
                                setthree(false)
                                setfour(false)
                                setfive(true)
                            }}
                            togg={five}
                        />

                    </View>
                    <View style={styles.divider} />

                    <Text style={[styles.title,{fontSize:16,fontWeight:'400',color:colors.text,marginTop:20}]} >Distance</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}} >
                        <Distance
                            text={'0.1 mi'}
                            count={2}
                            selec={()=>{
                                setomil(true)
                                settmil(false)
                                setthmil(false)
                                setfmil(false)
                            }}
                            togg={omil}
                        />
                        <Distance
                            text={'0.2 mi'}
                            count={3}
                            selec={()=>{
                                setomil(false)
                                settmil(true)
                                setthmil(false)
                                setfmil(false)
                            }}
                            togg={tmil}
                        />
                        <Distance
                            text={'0.3 mi'}
                            count={4}
                            selec={()=>{
                                setomil(false)
                                settmil(false)
                                setthmil(true)
                                setfmil(false)
                            }}
                            togg={thmil}
                        />
                        <Distance
                            text={'0.4 mi'}
                            count={5}
                            selec={()=>{
                                setomil(false)
                                settmil(false)
                                setthmil(false)
                                setfmil(true)
                            }}
                            togg={fmil}
                        />

                    </View>
                    <View style={styles.divider} />
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}} >
                        <TouchableOpacity onPress={()=>{alert('asdsa')}} style={[styles.ratingCard,{width:160,height:60,borderRadius:4}]} >
                            <Text style={[styles.title,{fontSize:14,fontWeight:'400',color: colors.inpt }]}  >CLEAR ALL</Text>
                        </TouchableOpacity>
                        <GradientBorder
                            additional={[styles.mainLinea,{width:windowWidth - 250,marginTop:0}]}
                            addInner={[styles.innerTouc,{width:windowWidth - 253,flexDirection:'row'}]}
                            // icon={true}
                            text={' APPLY'}
                            txtStyle={{color:colors.gradient1,fontSize:20,fontWeight:'500'}}
                            onpress={()=>{
                                setModalVisible(!isModalVisible)
                                navigation.navigate('Services')
                            }}
                        />
                    </View>
                </View>
              
            </View>
            </Modal>

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
  