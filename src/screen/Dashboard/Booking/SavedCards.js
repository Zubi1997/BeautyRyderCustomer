import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import colors from '../../../assets/colors';
import Font_style from '../../../assets/Font_style';
import { AmericanXpressCard, MasterCard, RadioActive, RadioInactive, VisaCard, } from '../../../assets/Svgs/svg_icons';
import { screenWidth } from '../../../assets/utils';
import Header from '../../../Components/Header/Header'
import { Modal } from '../../../Components/Modal';


function SavedCards({ navigation }) {

  const [show, setShow] = useState(true);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const paymentOptions = [
    { id: 1, name: 'AMEX', icon: <AmericanXpressCard />, last4: 1157 },
    { id: 2, name: "MasterCard", icon: <MasterCard />, last4: 8199 },
    { id: 3, name: 'VISA', icon: <VisaCard />, last4: 8985 },
  ]
  const addNewCard = () => {
    setShow(false);
    navigation.navigate('AddCard')
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        onpress={() => navigation.goBack()}
        text="Saved Card"
      />
      <ScrollView style={{ paddingHorizontal: 20, backgroundColor: colors.grey }} contentContainerStyle={{ flexGrow: 1 }}>
        <Modal visible={show} hasModalOverlay={false}>
          {paymentOptions.map((item, i) => (
            <TouchableOpacity key={i} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, }} onPress={() => setSelectedPaymentOption(item.id)}>
              {selectedPaymentOption === item.id ? <RadioActive /> : <RadioInactive />}
              <View style={[styles.payment, { borderColor: selectedPaymentOption === item.id ? colors.gradient1 : colors.blu }]}>
                <View style={styles.paymentRow}>
                  {item.icon}
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={[styles.details, { color: colors.text, marginLeft: 12 }]}>
                      **** **** **** {item.last4}
                    </Text>
                    <Text style={[styles.details, { color: colors.text, marginLeft: 12 }]}>
                      {item.name}
                    </Text>
                  </View>
                </View>
                {selectedPaymentOption === item.id &&
                  <TextInput
                    style={styles.input}
                    placeholder='Security Code*'
                    placeholderTextColor={colors.inpt}
                  />}
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.modalButton} onPress={addNewCard}>
            <Text style={styles.modalButtonText}>ADD NEW CARD</Text>
          </TouchableOpacity>
        </Modal>
        <TouchableOpacity style={[styles.confirmButton, { position: 'absolute', bottom: 40, width: screenWidth - 40 }]} onPress={() => { }}>
          <Text style={styles.confirmButtonText}>CONFIRM</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default SavedCards;
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
    borderColor: colors.gradient2,
    paddingVertical: 21,
    marginTop: 20,
    borderRadius: 4,
  },
  modalButton: {
    borderWidth: 1,
    borderColor: colors.gradient2,
    paddingVertical: 9,
    marginTop: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontFamily: Font_style.Poppins_Regular,
    color: colors.text,
    alignSelf: 'center',
  },
  confirmButtonText: {
    fontSize: 20,
    fontFamily: Font_style.Poppins_Medium,
    color: colors.gradient1,
    alignSelf: 'center',
  },
  note: {
    fontSize: 10,
    textAlign: 'justify',
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  input: {
    alignItems: 'center',
    backgroundColor: '#E2E9EE33',
    padding: 10,
    fontFamily: Font_style.Poppins_Regular,
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: colors.inpt,
    borderStyle: 'dashed',
    marginTop: 10
  },
});
