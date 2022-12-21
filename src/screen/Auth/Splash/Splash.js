import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../assets/colors';
import { App_logo } from '../../../assets/Svgs/svg_images';
import BorderBtn from '../../../Components/Buttons/BorderBtn';


function Splash(props) {

    return (
        <View style={styles.cont} >
            <LinearGradient
                colors={[colors.gradient1, colors.gradient2]}
                style={styles.gradient_view}
            >
                <View style={styles.image} >
                    <App_logo />
                </View>
                <BorderBtn
                    text={'GET STARTED'}
                    onpress={() => props.navigation.navigate('MobileNum')}
                    additional={{ alignSelf: 'center', marginTop: 80, alignItems: 'center', justifyContent: 'center' }}
                />
            </LinearGradient>
        </View>
    )
}
export default Splash
const styles = StyleSheet.create({

    cont: {
        flex: 1
    },
    gradient_view: {
        flex: 1
    },
    image: {
        alignSelf: 'center',
        marginTop: 304
    },
    btn: { width: 295, height: 60, borderWidth: 2, borderRadius: 4, borderColor: colors.white }

});



// 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