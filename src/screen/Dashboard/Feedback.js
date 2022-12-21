import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import { AmazedEmoji, AngryEmoji, HappyEmoji, HeartEmoji, LikeEmoji, SadEmoji, } from '../../assets/Svgs/svg_icons';
import { screenHeight, screenWidth } from '../../assets/utils';
import Header from '../../Components/Header/Header'
import { ModalContent } from '../../Components/Modal';
import Rating_stars from '../../Components/Rating_stars';


function Feedback({ navigation }) {

  const [selectedReason, setSelectedReason] = useState(null);
  const commonReasons = [
    { id: 1, name: 'Poor Service' },
    { id: 2, name: "Wrong Route" },
    { id: 3, name: 'Time Issue' },
    { id: 3, name: 'Bad Behaviour' },
  ]
  const submitFeedback = () => {
    navigation.reset('Main')
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header text="Feedback" />
      <View style={{ backgroundColor: '#E2E9EEE5', paddingTop: 40, flexGrow: 1 }}>
        <ModalContent>
          <View style={{ flexDirection: 'row', marginTop: 35 }}>
            <Image source={require('../../assets/pngImages/user.png')} style={{ height: 70, width: 70, resizeMode: 'contain' }} />
            <View style={{ marginLeft: 20, }}>
              <Text style={styles.name}>Beautician name</Text>
              <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                <Text style={{ marginRight: 8, color: colors.gradient1, fontSize: 12, fontFamily: Font_style.Poppins_Medium }}>5.0</Text>
                <Rating_stars />
              </View>
            </View>
          </View>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={5}
            placeholder={'type here....'}
            placeholderTextColor={'#DADADA'}
          />
          <Text style={[styles.name, { marginTop: 20, textAlign: 'center' }]}>Bad Experience</Text>
          <Text style={[styles.details, { marginTop: 2, textAlign: 'center' }]}>What went wrong?</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: screenWidth - 80 }}>
            <TouchableOpacity><LikeEmoji /></TouchableOpacity>
            <TouchableOpacity><HeartEmoji /></TouchableOpacity>
            <TouchableOpacity><HappyEmoji /></TouchableOpacity>
            <TouchableOpacity><AmazedEmoji /></TouchableOpacity>
            <TouchableOpacity style={{ width: 36, height: 36, borderRadius: 100, justifyContent: 'center', alignItems: 'center', borderColor: '#EE9715', borderWidth: 1 }}>
              <View style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: '#EE9715', justifyContent: 'center', alignItems: 'center' }}>
                <SadEmoji />
              </View>
            </TouchableOpacity>
            <TouchableOpacity><AngryEmoji /></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {commonReasons.map((item, i) => (
              <TouchableOpacity key={i} style={[styles.modalButton, { marginRight: i % 2 === 0 ? 10 : 0 }]} onPress={() => { }}>
                <Text style={styles.details}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ModalContent>
        <TouchableOpacity
          style={[styles.confirmButton, { marginTop: 20, width: screenWidth - 40, alignSelf: 'center', backgroundColor: colors.background }]}
          onPress={submitFeedback}
        >
          <Text style={styles.confirmButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Feedback;
const styles = StyleSheet.create({
  name: {
    color: colors.text,
    fontFamily: Font_style.Poppins_Regular,
    fontSize: 16,
  },
  details: {
    color: colors.inpt,
    fontFamily: Font_style.Poppins_Regular,
    fontSize: 12,
  },
  confirmButton: {
    borderWidth: 1,
    borderColor: colors.gradient1,
    paddingVertical: 21,
    marginTop: 20,
    borderRadius: 4,
  },
  modalButton: {
    borderWidth: 1,
    alignItems: 'center',
    width: screenWidth / 2 - 46,
    borderColor: colors.blu,
    paddingVertical: 9,
    marginTop: 10,
    borderRadius: 4,
  },
  confirmButtonText: {
    fontSize: 20,
    fontFamily: Font_style.Poppins_Medium,
    color: colors.gradient1,
    alignSelf: 'center',
  },
  input: {
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 16,
    padding: 10,
    height: screenHeight * 0.17,
    textAlignVertically: 'top',
  },
});
