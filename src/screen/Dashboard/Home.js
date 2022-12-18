import React,{useState} from 'react'
import { FlatList, ScrollView , TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Image } from 'react-native'
import colors from '../../assets/colors';
import { HeartIcon , RoboIcon, Stripe ,RightBlack } from '../../assets/Svgs/svg_icons';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import MapView from "react-native-maps";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const arr = [
    'Eyebrows','Upper Lip','Lower Lip','Chin','Neck','Neck','Mens Cheeks','Sideburns','Jaw Line','Forehead','Uni-brow','Full Face'
]

const Header = ({text , Icon , add}) => {
    return(
        <View
            style={styles.header}
        >
            <View style={{flex:0.2}} >
                <View style={styles.dp} >

                </View>
            </View>
            <View style={{flex:0.6}} >
                <Text style={styles.name} >Customer name</Text>
                <Text style={[styles.name,{fontSize:12,color:colors.inpt}]} >2541 simple St. Virginia</Text>
            </View>
            <View style={{flex:0.2 , flexDirection:'row' , justifyContent:'flex-end'}} >
                <TouchableOpacity style={[styles.dp,{width:30,height:30,borderWidth:1}]} >
                    <HeartIcon/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:10}} >
                    <RoboIcon/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Home({navigation}) {
    const [phone, set_phone] = useState('');
    const [code, setCode] = useState("");
    const [activeSlide, setactiveSlide] = useState([]);
    const [Images, setImages] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JrXknbpo-blp6vo9JUsn6ldKQlbfE9vmQg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWj-FdYWgNWsrSpltWTZ_LDisosieMiNT7Scxx69YcAkYnt4F-0t12sAYDI1W8OB0bhkQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlggChppLeJfjTZsYi6ognx1iSpu2fFYrymQ&usqp=CAU'
    ]);
 
    function pagination() {
        // console.log("inside pagination");
        // const { post, activeSlide } ;
        // console.log(Images.length);
        // console.log(activeSlide);
        return (
          <Pagination
            dotsLength={Images.length}
            activeDotIndex={activeSlide}
            // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              // marginHorizontal: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.92)'
            }}
            inactiveDotStyle={{
              // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        );
      }

      function _renderItem({ item }) {
        return (
          <View style={styles.itemContainer}>
            {/* <Text style={styles.itemLabel}>{`Item ${item.length}`}</Text> */}
            <Image key={index} source={{ uri: item }} resizeMethod={'auto'} style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, borderRadius: 20, marginRight: 5 }} />
    
          </View>
        );
    
      }
      
    return (
        <ScrollView style={styles.cont} > 
            <Header/>
            {/* <View style={{}}>
                      <Carousel
                        // layout={"default"}
                        dotsLength={Images.length}
                        layout={'stack'}
                        layoutCardOffset={`18`}
                        ref={(c) => carousel = c}
                        data={Images}
                        renderItem={_renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        // containerCustomStyle={styles.carouselContainer}
                        inactiveSlideShift={0}
                        onSnapToItem={(index) => setactiveSlide(index)}
                        scrollInterpolator={scrollInterpolator}
                        slideInterpolatedStyle={animatedStyles}
                        useScrollView={true}
                      />
                      <View style={{ marginTop: -20, marginBottom: -35 }}>
                        {pagination()}
                      </View>
            </View> */}

            <View style={{width:'90%',marginTop:23,alignSelf:'center'}} >
                <Text style={styles.heading} >Explore by Service</Text>
                <FlatList
                    data={arr}
                    contentContainerStyle={{marginTop:4}}
                    // horizontal
                    numColumns={4}
                    renderItem={({item})=>
                        <View style={{alignItems:'center',marginHorizontal:8,marginTop:15}} >
                            <View style={{width:76,height:76,borderRadius:100,backgroundColor:colors.blu}} />
                            <Text style={{color:colors.text,marginTop:5,textAlign:'center'}} >{item}</Text>
                        </View>
                    }
                />
                <TouchableOpacity style={styles.see} >
                    <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',alignSelf:'center',color:colors.inpt}]} >SEE MORE</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:22 , alignItems:'center'}} >
                    <Text style={[styles.txtStyle,{fontWeight:'500',color:colors.text,width:'88%'}]} >Around You</Text>
                    <TouchableOpacity>
                        <Text style={[styles.txtStyle,{fontSize:14,fontWeight:'400',alignSelf:'center',color:colors.inpt}]} >View All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:235}} >
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
                        <TouchableOpacity onPress={()=>navigation.navigate( 'BusinessList')} >
                            <RightBlack/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{height:200}} />


        </ScrollView>
    )
}
export default Home
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        // alignItems:'center',
        // justifyContent:'center'
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height:180,
        marginTop:'140%',
        borderRadius:8,
        // flex: 1, //the container will fill the whole screen.
        justifyContent:'space-between',
        alignItems: "center",
      },
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
        marginTop:32,
        marginLeft:40,
        width:windowWidth - 250,
        height:60,
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
  