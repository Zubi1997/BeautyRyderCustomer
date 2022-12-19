
import React,{useState} from 'react'
import { FlatList, ScrollView , TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Image } from 'react-native'
import colors from '../../assets/colors';
import { HeartIcon , RoboIcon, Option ,LeftBlack } from '../../assets/Svgs/svg_icons';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

const Header = ({text , Icon , add , onpress , option , title}) => {
    return(
        <View
            style={styles.header}
        >
            <View style={{flex:0.4,flexDirection:'row',alignItems:'center'}} >
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>onpress()} >
                    <LeftBlack/>
                </TouchableOpacity>
                <Text style={styles.name} >  Back</Text>
            </View>
            <View style={{flex:0.7,alignItems:'center'}} >
                <Text style={styles.name} >{title}</Text>
            </View>
                <View style={{flex:0.4 , flexDirection:'row' , justifyContent:'flex-end'}} >
                {option && 
                    <Option/>
                }
                </View>
        </View>
    )
}

export default Header
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
        height:104,
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