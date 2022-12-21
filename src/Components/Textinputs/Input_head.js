import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,ActivityIndicator} from 'react-native';
import colors from '../../assets/colors';
import Text_normal from '../Text_components/Text_normal';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Input_head({
    input_value,
    set_input,
    hight,
    inputStyle,
    placeholder,
    headtxt
}) {

    const [manual_time, set_manual_time] = useState('');
    const [focus, set_focus] = useState(false);

    useEffect(()=>{
        // alert(upper_margin)
    },[])


  return (
       
        <View style={{marginTop:10}}>
            <Text_normal style={{fontSize:12}} text={headtxt}/>
            <TextInput
                placeholder={placeholder}
                style={[{
                    height:40,
                    width:'100%',
                    fontSize:12,
                    // lineHeight:26,
                    // width:windowWidth-40,
                    paddingHorizontal: 10,
                    padding:0,
                    // color: '#000',
                    borderWidth:1,
                    borderColor:focus?colors.primary:colors.divider,
                    borderRadius:4,
                    marginTop:3,
                    backgroundColor:colors.background
                },inputStyle]}
                onFocus={()=>set_focus(true)}
                onBlur={()=>set_focus(false)}
                value={input_value}
                onChangeText={(val)=>set_input(val)}
                />
        </View>
      );
}
const styles = StyleSheet.create({

  line: {
    backgroundColor:colors.divider,
  },
  

});
