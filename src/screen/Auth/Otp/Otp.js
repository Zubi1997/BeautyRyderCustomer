import React, { useState } from 'react'
import { TouchableOpacity, View, TextInput, Text, StyleSheet, Dimensions, Image } from 'react-native'
import colors from '../../../assets/colors';
import { App_logo } from '../../../assets/Svgs/svg_images';
import BorderBtn from '../../../Components/Buttons/BorderBtn';
import PhoneInput from "react-native-phone-number-input";
import GradientBorder from '../../../Components/Buttons/GradientBorder';
import GradientButton from '../../../Components/Buttons/GradientButton';
import { Google_icon, Facebook_icon, Apple_icon } from '../../../assets/Svgs/svg_icons';
import OTPInputView from "@twotalltotems/react-native-otp-input";


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

const SocialBtn = ({ text, Icon, add }) => {
    return (
        <TouchableOpacity style={add ? add : styles.socCont} >
            <Icon />
            <Text style={styles.socText} >  {text}</Text>
        </TouchableOpacity>
    )
}

function OtpScreen({ navigation }) {
    const [phone, set_phone] = useState('');
    const [code, setCode] = useState("");

    return (
        <View style={styles.cont} >
            <Text style={styles.heading} >Enter the 4-digit code sent {'\n'} to you at</Text>
            <Text style={styles.num} >+92 300 8725885</Text>
            <OTPInputView
                //   keyboardType="email-address"
                autoFocusOnLoad={true}
                pinCount={4}
                style={styles.optStyling}
                codeInputHighlightStyle={{ borderColor: colors.gradient2 }}
                codeInputFieldStyle={styles.optContainerMobile
                }
                onCodeChanged={(value) => setCode(value)}
            />
            <GradientBorder
                text={'I didnt receive a code (0:07)'}
                onpress={() => alert('sdkjflsdjf')}
                txtStyle={styles.txtStyle}
                additional={[styles.mainLinea, { marginTop: 50 }]}
            />

            <TextInput
                placeholder='Login With Password'
                placeholderTextColor={colors.inpt}
                secureTextEntry={true}
                style={styles.inpt}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 100, }} >
                <GradientBorder
                    additional={[styles.mainLinea, { width: '45%' }]}
                    addInner={[styles.innerTouc, { width: '99%', flexDirection: 'row' }]}
                    icon={true}
                    text={' BACK'}
                    txtStyle={{ color: colors.gradient2, fontSize: 20, fontWeight: '500' }}
                    onpress={() => alert('sdsdf')}
                />
                <GradientButton
                    Title1={'NEXT'}
                    style={styles.gB}
                    icon={true}
                    onpress={() => navigation.navigate('Main')}
                />
            </View>

        </View>
    )
}
export default OtpScreen
const styles = StyleSheet.create({

    cont: {
        flex: 10,
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    gradient_view: {
        flex: 1
    },
    image: {
        alignSelf: 'center',
        marginTop: 304
    },
    gB: {
        // marginTop:windowHeight/15,
        marginTop: 30,
        // marginLeft:40,
        width: '45%',
        height: 47,
        alignSelf: 'center'
    },
    mainLinea: { width: windowWidth - 40, height: 50, borderRadius: 4, marginTop: 30, alignItems: 'center', justifyContent: 'center' },
    innerTouc: { width: windowWidth - 43, height: 47, backgroundColor: colors.white, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
    btn: { width: 295, height: 60, borderWidth: 2, borderRadius: 4, borderColor: colors.white },
    phonetxt: {
        // textAlign:  'right' ,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
        // : 'left',
    },
    phoneContainer: {
        height: 60,
        width: windowWidth - 40,
        backgroundColor: '#F7F8FA',
        marginTop: 12
    },
    heading: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.text,
        marginTop: 43,
        textAlign: 'center'
    },
    num: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.gradient2,
        marginTop: 19
    },
    txtStyle: { color: colors.gradient2, fontSize: 20, fontWeight: '500' },
    socCont: { borderWidth: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', borderColor: colors.bordr, width: windowWidth - 40, height: 60, marginTop: 16, borderRadius: 4 },
    socText: { fontSize: 18, fontWeight: '400', color: colors.text },
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
        width: '70%',
        fontSize: 12,
        color: colors.black,
        fontWeight: "600",
    },
    inpt: {
        color: colors.inpt,
        backgroundColor: colors.inptCont,
        fontSize: 16, fontWeight: '400',
        elevation: 1,
        width: windowWidth - 40,
        height: 60,
        borderRadius: 4,
        marginTop: 20, textAlign: 'center'
    }


});
