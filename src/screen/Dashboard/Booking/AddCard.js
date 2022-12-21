import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import colors from '../../../assets/colors';
import Font_style from '../../../assets/Font_style';
import { SuccessIcon } from '../../../assets/Svgs/svg_icons';
import { screenWidth } from '../../../assets/utils';
import Header from '../../../Components/Header/Header'
import { ModalContent } from '../../../Components/Modal';
import Textinput from '../../../Components/Textinputs/Textinput';



function AddCard({ navigation }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const saveCard = () => {
    setShowSuccessModal(!showSuccessModal);
  }

  const SuccessModal = () => (
    <ModalContent hasCloseIcon={false}>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
        <SuccessIcon />
        <Text style={{ fontSize: 20, fontFamily: Font_style.Poppins_Bold, color: colors.gradient1, width: screenWidth * 0.5, textAlign: 'center', marginTop: 30 }}>Your Card Saved Successfully</Text>
        <Text style={{ fontSize: 10, fontFamily: Font_style.Poppins_Regular, color: '#9D9B9B', width: screenWidth * 0.65, textAlign: 'center', marginTop: 10 }}>Please check your inbox and click in the receive link to rest a password</Text>
      </View>
    </ModalContent>
  )

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header text="Add New Card" />
      <View style={{ backgroundColor: colors.grey, marginTop: 40 }}>
        {showSuccessModal
          ? <SuccessModal />
          : (
            <ModalContent>
              <Textinput label='Card Number' placeholder='0000 0000 0000 0000' />
              <View style={{ flexDirection: 'row' }}>
                <Textinput label='Expiry Date' placeholder='MM/YY' containerStyle={{ width: screenWidth * 0.39 }} />
                <Textinput label='CVV' placeholder='000' containerStyle={{ marginLeft: 10, width: screenWidth * 0.39 }} />
              </View>
              <Textinput label='Country' placeholder='USA' />
              <Textinput label='Bank Name' placeholder='Name on Card' />
            </ModalContent>
          )}
      </View>
      <TouchableOpacity style={[styles.confirmButton, { position: 'absolute', bottom: 40, alignSelf: 'center', width: screenWidth - 40 }]} onPress={saveCard}>
        <Text style={styles.confirmButtonText}>{!showSuccessModal ? 'SAVE CARD' : 'ADD MORE CARDS'}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default AddCard;
const styles = StyleSheet.create({
  confirmButton: {
    borderWidth: 1,
    borderColor: colors.gradient2,
    paddingVertical: 21,
    marginTop: 20,
    borderRadius: 4,
  },
  confirmButtonText: {
    fontSize: 20,
    fontFamily: Font_style.Poppins_Medium,
    color: colors.gradient1,
    alignSelf: 'center',
  },
  payment: {
    minHeight: 70,
    width: screenWidth - 106,
    borderRadius: 10,
    borderColor: colors.blu,
    borderWidth: 1,
    marginLeft: 10,
    padding: 10,
  },
});
