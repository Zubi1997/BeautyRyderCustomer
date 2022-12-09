import React from 'react'
import { Text , TouchableOpacity  ,StyleSheet ,Dimensions, Pressable} from 'react-native'
import colors from '../../assets/colors';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
import LinearGradient from 'react-native-linear-gradient';

export default function GradientBorder({additional , addInner , onpress , text , txtStyle}) {
  return (
    <LinearGradient
        colors={[colors.gradient1,colors.gradient2]}
        style={additional ? additional : styles.mainLinea}
    >
        <Pressable onPress={onpress} style={addInner ? addInner : styles.innerTouc} >
            <Text style={txtStyle ? txtStyle : styles.txt} >{text}</Text>
        </Pressable>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    mainLinea:{width:windowWidth -40,height:60,borderRadius:4,marginTop:30,alignItems:'center',justifyContent:'center'},
    innerTouc:{width:windowWidth -43,height:57,backgroundColor:colors.white,borderRadius:4,alignItems:'center',justifyContent:'center'},
    txt:{color:colors.gradient1,fontSize:20,fontWeight:'500'}
});