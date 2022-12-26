import React,{useState} from 'react'
import { FlatList, ScrollView , Modal , Image, TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Pressable, Switch } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import LinearGradient from 'react-native-linear-gradient';
import { Wallet,GradientPlus } from '../../assets/Svgs/svg_icons';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import CheckBox from '@react-native-community/checkbox';

export default function Payment(props) {

  const [isEnabled, setIsEnabled] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View  >
        <Header
            onpress={()=>props.navigation.goBack()}
        />
        <Text style={[styles.textstyle,{alignSelf:'center',marginTop:20,fontSize:16,fontFamily:Font_style.Poppins_SemiBold}]} >Payments Methods</Text>
        <View style={{width:'90%',alignSelf:'center'}} >
          <View style={styles.wlt} >
            <View style={{flex:0.8,flexDirection:'row',alignItems:'center'}} >
                <Wallet/>
                <View style={{marginLeft:10}} >
                  <Text style={[styles.textstyle,{fontSize:12,fontFamily:Font_style.Poppins_Regular}]} >Wallet</Text>
                  <Text style={[styles.textstyle,{fontSize:12,fontFamily:Font_style.Poppins_Regular,color:colors.inpt,marginTop:0}]} >$ 0.00</Text>
                </View>
            </View>
            <View style={{flex:0.2}} >
                <Switch
                    trackColor={{ false: "#767577", true: colors.blu }}
                    thumbColor={isEnabled ? colors.gradient1 : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
          </View>
          <Text style={[styles.textstyle,{marginTop:10,fontSize:12,color:colors.inpt,fontFamily:Font_style.Poppins_Regular}]} >Payment Method</Text>
          <View style={styles.wlt} >
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}} >
                <View style={{marginLeft:40}} >
                  <Text style={[styles.textstyle,{fontSize:12,fontFamily:Font_style.Poppins_Regular}]} >Cash</Text>
                  <Text style={[styles.textstyle,{fontSize:12,fontFamily:Font_style.Poppins_Regular,color:colors.inpt,marginTop:0}]} >$:02.24 minim</Text>
                </View>
            </View>
            <View style={{flex:0.1}} >
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onCheckColor={colors.gradient1}
                tintColors={{true: colors.gradient1 , false : colors.blu}}
                // tintColors={'#9E663C'}
                onFillColor={'#4DABEC'}
                onTintColor={'#F4DCF8'}
                animationDuration={0.5}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
            </View>
          </View>
          <Text style={[styles.textstyle,{marginTop:15,fontSize:12,color:colors.gradient1,fontFamily:Font_style.Poppins_Regular}]} >Add Payment Method</Text>
          <View style={styles.separator} />
          <Text style={[styles.textstyle,{marginTop:15,fontSize:12,fontFamily:Font_style.Poppins_Bold,fontSize:16}]} >Vouchers</Text>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:5}} >
              <GradientPlus/>
              <Text  style={[styles.textstyle,{fontSize:12,fontFamily:Font_style.Poppins_Regular,color:colors.inpt,marginTop:2}]} >  Add voucher code</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  separator:{borderWidth:1,width:'100%',borderColor:colors.blu,marginTop:50},
  centeredView:{
      backgroundColor:'white',
      height:'100%',
      marginTop:80
  },
  wlt:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:22,
    paddingBottom:12,
    // width:'90%',alignSelf:'center',
    borderBottomWidth:1,borderBottomColor:colors.blu
},
  input:{borderWidth:1,flexDirection:'row',justifyContent:'center',alignItems:'center',borderColor:colors.blu,width:'85%',paddingLeft:20,color:colors.text,alignSelf:'center',borderRadius:100},
  inputCont:{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',height:83,backgroundColor:colors.white,borderTopWidth:1,borderTopColor:colors.blu},
  txtStyle:{color:colors.gradient2,fontSize:20,fontWeight:'500'},
  textstyle:{fontSize:14,fontFamily:Font_style.Poppins_Regular,marginTop:5,color:colors.black},
  headr:{alignItems:'center',justifyContent:'center',width:'100%',height:100,backgroundColor:colors.white,borderBottomWidth:1,borderBottomColor:colors.blu},
  btnstyle:{width:105,height:105,borderRadius:10,borderWidth:1,borderColor:colors.blu,backgroundColor:colors.white,alignItems:'center',justifyContent:'center'},
  cont : {
      // flex: 10  ,
      backgroundColor : '#fff',
      },  
  innerCont : {flex:1,width:'88%',alignSelf:'center',paddingTop:15},

})