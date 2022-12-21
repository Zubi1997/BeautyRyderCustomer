import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';

export default function Textinput({ label, value, style={}, containerStyle={}, placeholder, onChangeText=()=>{} }) {

  return (
    <View style={{marginTop: 10, ...containerStyle}}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.blu}
        style={[styles.inputStyle, style]}
        value={value}
        onChangeText={(val) => onChangeText(val)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
inputStyle: {
  height: 40,
  fontSize: 12,
  marginTop: 5,
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderWidth: 1,
  borderColor: colors.blu,
  borderRadius: 4
},
labelText: {
  fontFamily: Font_style.Poppins_Regular, 
  fontSize: 12, 
  color: colors.text,
}
});
