import React,{useState, useEffect} from 'react'
import { FlatList, Pressable , TouchableOpacity, View ,Modal, Text , StyleSheet ,Dimensions, Image, SafeAreaView } from 'react-native'
import colors from '../../assets/colors';
import { HeartIcon , ViewList , Location , HeartColor, Upload ,RightBlack , Stripe , LinearCross ,RadioInactive , RadioActive } from '../../assets/Svgs/svg_icons';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import MapView from "react-native-maps";



export default function LocationSearch(props) {

  const [loadin, setloadin] = useState(true);
  const [starCount, setstarCount] = useState(5);

  useEffect(() => {
    setInterval(() => {
        setloadin(!loadin)
    }, 800);
  }, [])
  

  return (
    <View>
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
                    <View style={{
                        height:320,
                        width:'100%',
                        alignSelf:'flex-end',
                        // alignItems:'center',
                        position:'absolute',bottom:0,
                        backgroundColor:colors.white,
                        borderBottomWidth:1,
                        borderBottomColor:'#DCDCDC'
                    }} >
                        <View style={styles.view} />
                        <Text style={[styles.txtStyle,{color:colors.text,alignSelf:'center',marginTop:15}]} >Customer requested, locating your beautician</Text>
                        <View style={[styles.view,{width:'100%'}]} />
                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}} >
                            {loadin &&
                                <View style={[styles.view,{height:3,width:63}]} />
                            }
                            {!loadin &&
                                <View style={[styles.view,{height:3,width:63}]} />
                            }
                            {loadin &&
                                <View style={[styles.view,{height:3,width:63}]} />
                            }
                            {!loadin &&
                                <View style={[styles.view,{height:3,width:63}]} />
                            }
                            {loadin &&
                                <View style={[styles.view,{height:3,width:63}]} />
                            }
                           
                           
                        </View>
                            <Image
                                source={require('../../assets/pngImages/searchLoc.png')}
                                style={styles.img}
                            />
                            <Text style={[styles.txtStyle,{color:colors.text,fontSize:14,alignSelf:'center',marginTop:6}]} >Dropoff by 11:45 PM</Text>
                    <View>
                  </View>
                </View>
        </View>
        
    </View>
  )
}


const styles = StyleSheet.create({
    centeredView:{
      backgroundColor:'red',
      height:'30%',
    //   marginTop:'110%'
      // bottom:100
  },
  img:{width:120,height:120,marginTop:15,alignSelf:'center'},
  view:{width:80,height:2,backgroundColor:colors.blu,marginTop:15,alignSelf:'center',borderRadius:10},
  map: {
      ...StyleSheet.absoluteFillObject,
      alignItems:'center',
      // justifyContent:'center'
  },
  container: {
      ...StyleSheet.absoluteFillObject,
      height:Dimensions.get('screen').height,
    //   marginTop:'24%',
      // borderRadius:8,
      flex: 1, //the container will fill the whole screen.
      justifyContent:'space-between',
      alignItems: "center",
    },
    txtStyle : {color:colors.gradient2,fontSize:14,fontWeight:'500'},
  
});