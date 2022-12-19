import React,{useState,useEffect} from 'react'
import { View , Text , StyleSheet , Dimensions ,ScrollView , TouchableOpacity} from 'react-native'
import colors from '../../assets/colors'
import { Info , Up , Down , RadioActive , RadioInactive } from '../../assets/Svgs/svg_icons'
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

const s = [
  {
    name : 'Eyebrows',
    showDetail : true,
    detail : [
      {
        name : 'Short',
        time : '20 min',
        price : '$30',
        selected : true
      },
      {
        name : 'Medium',
        time : '15 min',
        price : '$25',
        selected : false
      },
      {
        name : 'Tuner',
        time : '35 min',
        price : '$35',
        selected : false
      },
      {
        name : 'Special',
        time : '40 min',
        price : '$40',
        selected : false
      },
    ]
  },
  {
    name : 'Cheeks',
    showDetail : false,
    detail : []
  },
  {
    name : 'Mens Cheeks',
    showDetail : false,
    detail : []
  },
  {
    name : 'Sideburns',
    showDetail : false,
    detail : []
  },
  {
    name : 'Jaw Line',
    showDetail : false,
    detail : []
  },
  {
    name : 'Forehead',
    showDetail : false,
    detail : []
  },
  
]

const Servic = ({title , detail , mainOption , subOption , updateArr , i , navigation }) => {

  useEffect(() => {
    
  
  }, [mainOption])
  

  const toggleServ = (i,selected) => {
    if(selected){
      const newSer = mainOption.map((item,index)=>{
        if(i == index){
          return {
            ...item,showDetail:false
          }
        }else{
          return {
            ...item
          }
        }
      })
      updateArr(newSer)      
    }else{
      const newSer = mainOption.map((item,index)=>{
        if(i == index){
          return {
            ...item,showDetail:true
          }
        }else{
          return {
            ...item,showDetail:false
          }
        }
      })
      updateArr(newSer)
    }
  } 

  return(   
      <View style={{
        width:'100%',
        marginTop:10,
        backgroundColor:colors.white,
        borderRadius:10,
        borderWidth:1,
        borderColor:detail ? colors.gradient1 :colors.blu,
        marginBottom : mainOption.length - 1 === i ? 200 : 0
      }} >
        <View style={{padding:20,flexDirection:'row',alignItems:'center'}} >
          <View  style={{flex:2.2}}  >
            <TouchableOpacity onPress={()=>{navigation.navigate('')}} >
              <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'500',color: detail ? colors.gradient1 : colors.text}]} >{title} <Info/> </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>toggleServ(i,detail)} style={{flex:0.1,justifyContent:'center',height:30,width:30}} >
            {detail?
              <Up/>
            :
              <Down/>
            }
          </TouchableOpacity>
          
        </View>
        {detail?
            <>
            {subOption.length ?
              <View style={{width:'100%',alignSelf:'flex-start',borderBottomWidth:1,borderBottomColor:colors.gradient1}} />
            :null}
            {subOption.map((item,index)=>{
                return(
                  <>
                    <View style={{flexDirection:'row',alignItems:'center',paddingTop:10,paddingLeft:20,paddingRight:20}} >
                        <View style={{flex:1.2}} >
                            <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400',color:colors.text}]} >{item.name}</Text>
                            <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400',color:colors.inpt}]} >{item.time}</Text>
                        </View>
                        <View style={{flex:0.2, flexDirection:'row'}} >
                          <Text style={[styles.txtStyle,{fontSize:12,fontWeight:'400',color:colors.text,marginRight:10}]} >{item.price}</Text>
                          <TouchableOpacity>
                            {item.selected?
                                <RadioActive/>
                                :
                                <RadioInactive/>
                            }
                          </TouchableOpacity>
                        </View>
                    </View>
                  <View style={{width:'90%',alignSelf:'center',borderBottomWidth:1,borderBottomColor:colors.blu,marginTop:10}} />
                    
                  </>
                )
              })}
            </>
          :null
          }
      </View>
  )
}

export default function SerScreen({props}) {

  const [arr, setarr] = useState(s)

  return (
    <View>
      <View style={styles.headr} >
          <Text style={[styles.txtStyle,{color:colors.text,fontSize:16,fontWeight:'400',marginTop:20}]} >Services</Text>
      </View>
      <ScrollView style={{}} >
        <View style={{width:'90%',marginTop:10,alignSelf:'center'}} >
            {arr.map((item , index)=>{
              return(
                <Servic
                  i = {index}
                  title = {item.name}
                  detail = {item.showDetail}
                  subOption = {item.detail}
                  mainOption = {arr}
                  updateArr = {(val)=> setarr(val) }
                  navigation = {props.navigation}
                />
              )
            })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView:{
      backgroundColor:'white',
      height:'100%',
      marginTop:80
  },
  headr:{alignItems:'center',justifyContent:'center',width:'100%',height:100,backgroundColor:colors.white,borderBottomWidth:1,borderBottomColor:colors.blu},
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