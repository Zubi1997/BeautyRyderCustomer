import React,{useState} from 'react'
import { TouchableOpacity, View , Text , StyleSheet ,Dimensions, Image } from 'react-native'
import colors from '../../../assets/colors';
import { App_logo } from '../../../assets/Svgs/svg_images';
import BorderBtn from '../../../Components/Buttons/BorderBtn';
import PhoneInput from "react-native-phone-number-input";
import GradientBorder from '../../../Components/Buttons/GradientBorder';
import { Google_icon , Facebook_icon , Apple_icon } from '../../../assets/Svgs/svg_icons';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

const SocialBtn = ({text , Icon , add}) => {
    return(
        <TouchableOpacity style={ add ? add : styles.socCont} >
            <Icon/>
            <Text style={styles.socText} >  {text}</Text>
        </TouchableOpacity>
    )
}

function MobileNum({navigation}) {
    const [phone, set_phone] = useState('');
 
    return (
        <View style={styles.cont} > 
            <Text style={styles.heading} >Enter your mobile number</Text>
           <PhoneInput
                placeholder={'2064512559'}
                // flagButtonStyle={{alignSelf:'flex-end'}}
                // ref={phoneInput}
                defaultCode="US"
                autoFocus={true}
                layout="first"
                textInputStyle={styles.phonetxt}
                containerStyle={styles.phoneContainer}
                textInputProps={{
                maxLength: 10,
                returnKeyType:'done',
                }}
                codeTextStyle={{color:colors.greytxt}}
                onChangeFormattedText={(value) => set_phone(value)}
                value={phone}
            />
            <GradientBorder
                text={'CONTINUE'}
                onpress={()=>navigation.navigate('OtpScreen')}
            />
            <Text style={[styles.heading,{fontWeight:'600',marginTop:72}]} >Log in with another way</Text>
            <SocialBtn
                text={'Continue With Google'}
                Icon={()=><Google_icon/>}
            />
            <SocialBtn
                text={'Continue with Facebook'}
                Icon={()=><Facebook_icon/>}
                add={[styles.socCont,{marginTop:10}]}
            />
            <SocialBtn
                text={'Continue with apple'}
                Icon={()=><Apple_icon/>}
                add={[styles.socCont,{marginTop:10}]}
            />
            <Text style={[styles.heading,{fontWeight:'400',fontSize:15,width:windowWidth-40,color:colors.greytxt,marginTop:37}]} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumstandard dummy text ever.</Text>
            <Text style={[styles.heading,{fontWeight:'400',fontSize:15,width:windowWidth-40,color:colors.greytxt,marginTop:20}]} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
    )
}
export default MobileNum
const styles = StyleSheet.create({

    cont: {
      flex:10,
      alignItems:'center',
      backgroundColor:'#F5F5F5'
    },
    gradient_view:{
        flex:1
    },
    image:{
        alignSelf:'center',
        marginTop:304
    },
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
        marginTop:43
    },
    socCont:{borderWidth:1,alignItems:'center',flexDirection:'row',justifyContent:'center',borderColor:colors.bordr,width: windowWidth -40,height:60, marginTop:16,borderRadius:4},
    socText:{fontSize:18,fontWeight:'400',color:colors.text}
  
});
  