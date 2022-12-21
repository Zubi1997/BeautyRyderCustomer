import React,{useState} from 'react'
import { FlatList, ScrollView , TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Image, SafeAreaView } from 'react-native'
import colors from '../../../assets/colors';
import Font_style from '../../../assets/Font_style';
import { Favourites_icon, Help_icon, Legal_icon, Message_icon, Payment_icon, Personal_info_icon, ReferEarn_icon, Setting_icon, Vouchers_icon } from '../../../assets/Svgs/Setting_svgs';
import Header from '../../../Components/Header/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Text_normal from '../../../Components/Text_components/Text_normal';
import Text_sub_heading from '../../../Components/Text_components/Text_sub_heading';
import { Camera_icon, RadioActive, RadioInactive, RightBlack, RightIcon, Simple_rightArrow } from '../../../assets/Svgs/svg_icons';
import Input_head from '../../../Components/Textinputs/Input_head';
import GradientBorder from '../../../Components/Buttons/GradientBorder';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

function Personal_info({navigation}) {
    const [name, set_name] = useState('');
    const [phone, set_phone] = useState('');
    const [email, set_email] = useState('');
    const [password, set_password] = useState('');
    const [conform_pass, set_conform_pass] = useState('');
    const [gender, set_gender] = useState('');
    
    const Gender=({title})=>{
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text_sub_heading style={{fontSize:14,color:gender==title?colors.primary:colors.inpt}} text={title} />
                <TouchableOpacity onPress={()=>set_gender(title)} style={{padding:5}}>
                    {gender==title?
                    <RadioActive />
                    :
                    <RadioInactive />
                    }
                </TouchableOpacity>
            </View>
        )
    }

 
    return (
        <SafeAreaView style={styles.cont} > 
            <Header onpress={()=>navigation.goBack()}/>

            <ScrollView style={styles.list} contentContainerStyle={{paddingBottom:20}}>
                <View style={styles.profile}>
                    <View style={styles.img}>
                    </View>
                    <TouchableOpacity style={styles.upload_iconView}>
                        <Camera_icon />
                    </TouchableOpacity>
                    <Text_normal style={{fontSize:16,marginTop:10}} text='Personal information' />
                </View>

                {/* <View style={{marginHorizontal:10}}>
                    <Text_normal style={{fontSize:12}} text='Full Name'/>
                    <TextInput
                        placeholder={'smith'}
                        style={[{
                            height:50,
                            width:'100%',
                            fontSize:12,
                            // lineHeight:26,
                            // width:windowWidth-40,
                            paddingHorizontal: 10,
                            padding:0,
                            // color: '#000',
                            borderWidth:2,
                            borderColor:colors.divider,
                            borderRadius:4
                        },{}]}
                        onFocus={()=>set_focus(true)}
                        value={name}
                        onChangeText={(val)=>set_name(val)}
                    />
                </View> */}
                <View style={{marginHorizontal:20}}>
                    <Input_head  placeholder='Smith' headtxt='Full Name' input_value={name}  set_input={(val)=>set_name(val)} />
                    <Input_head  placeholder='+92 000 0000000' headtxt='Phone Number' input_value={phone} set_input={(val)=>set_phone(val)} />
                    <Input_head  placeholder='sample@gmial.com' headtxt='Email Address' input_value={email} set_input={(val)=>set_email(val)} />
                    <Input_head  placeholder='**********' headtxt='Change Password' input_value={password} set_input={(val)=>set_password(val)} />
                    <Input_head  placeholder='**********' headtxt='confirm password' input_value={conform_pass} set_input={(val)=>set_conform_pass(val)} />
                    <View style={{marginTop:10}}>
                        <Text_normal style={{fontSize:12}} text={'Your Gender'}/>
                        <Gender selected_gender={gender} title='Male'/>
                        <Gender selected_gender={gender} title='Female'/>
                        <Gender selected_gender={gender} title='Other'/>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <GradientBorder 
                            additional={[styles.mainLinea,{width:windowWidth - 50,alignSelf:'center'}]}
                            addInner={[styles.innerTouc,{width:windowWidth - 53,flexDirection:'row'}]}
                            // icon={true}
                            text={'Save changes'}
                            txtStyle={{color:colors.gradient1,fontSize:20,fontWeight:'500'}}
                            onpress={()=>alert('sdsdf')}
                        />
                        <Text_sub_heading style={{fontSize:16,marginTop:20}} text='Cancel'/>
                    </View>

                </View>
            </ScrollView>
           

        </SafeAreaView>
    )
}
export default Personal_info

const styles = StyleSheet.create({
  
    cont: {
      flex:1,
    //   alignItems:'center',
        backgroundColor:colors.background
    },
    profile:{
      padding:20,
      alignItems:'center',
    },
    img:{
      height:100,
      width:100,
      borderRadius:50,
      backgroundColor:colors.blu
    },
    list:{
        flex:1,
        backgroundColor:colors.grey_list,
        paddingBottom:10
      },
    name_parent:{
      flexDirection:'row',
      flex:1,
      alignItems:'center'
    },
    upload_iconView:{
        padding:7,
        borderRadius:50,
        backgroundColor:colors.primary,
        marginTop:-30,
        marginLeft:60
    },
    mainLinea:{
        width:windowWidth -40,
        height:50,
        borderRadius:4,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
    },
    innerTouc:{
        width:windowWidth -43,
        height:47,
        backgroundColor:colors.white,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center'
    },
    
  
});
  