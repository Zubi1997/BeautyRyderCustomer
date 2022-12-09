import React from 'react'
import { Text , TouchableOpacity  ,StyleSheet } from 'react-native'
import colors from '../../assets/colors';

export default function BorderBtn({additional , onpress , text}) {
  return (
    <TouchableOpacity onPress={onpress} style={[styles.btn,additional]} >
        <Text style={styles.txt} >{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

    txt : {fontSize:20,fontWeight:'500',color:colors.white},
    btn:{width:295,height:60,borderWidth:2,borderRadius:4,borderColor:colors.white}
  
});