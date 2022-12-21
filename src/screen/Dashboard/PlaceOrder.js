import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import { Apple_icon, Calendar, CardIcon, GooglePayIcon, Info, LeftBlack, Location, LocationBlack, Share, SuccessIcon, Watch } from '../../assets/Svgs/svg_icons';
import { screenHeight, screenWidth } from '../../assets/utils';
import Header from '../../Components/Header/Header'
import { Modal } from '../../Components/Modal';


function PlaceOrder({ navigation }) {

  const [showAdditionalChargesModal, setShowAdditionalChargesModal] = useState(false);
  const [showPaymentOptionsModal, setShowPaymentOptionsModal] = useState(false);

  const services = [
    { name: 'Cheeks', duration: '20 Min', price: '$20.00' },
    { name: "Men's Cheeks", duration: '20 Min', price: '$35.00' },
    { name: 'Sideburns', duration: '20 Min', price: '$15.00' },
    { name: 'Jaw Line', duration: '20 Min', price: '$10.00' },
  ]

  const AdditionalChargesModal = () => (
    <Modal visible={showAdditionalChargesModal} onRequestClose={() => setShowAdditionalChargesModal(false)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.name}>
          Additional Charges
        </Text>
        <View style={{ paddingLeft: 10 }}>
          <Info />
        </View>
      </View>
      <Text style={[styles.details, styles.note, { marginTop: 5 }]}>
        NOTE: Additional wait time may apply to your booking if the beautician
        waited 5 minutes: $1 per minute
      </Text>
      <Text style={[styles.details, styles.note, { marginTop: 3 }]}>
        NOTE: Additional mileage charges may apply if beautician distance more
        than 2 mileage: $2 per mileage
      </Text>
    </Modal>
  )

  const viewDetails = () => {
    navigation.navigate('JobHistoryDetails')
  }

  const renderServiceItem = ({ item, i }) => (
    <View style={styles.serviceItem} key={i}>
      <View>
        <Text style={[styles.details, { color: colors.text }]}>{item.name}</Text>
        <Text style={styles.details}>{item.duration}</Text>
      </View>
      <Text style={[styles.details, { color: colors.text }]}>{item.price}</Text>
    </View>
  )

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        onpress={() => navigation.goBack()}
        text="Place Order"
      />
      <AdditionalChargesModal />
      <ScrollView style={{ paddingHorizontal: 20, backgroundColor: colors.grey }} >
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
          <SuccessIcon />
          <Text
            style={{ fontSize: 20, fontFamily: Font_style.Poppins_Bold, color: colors.gradient1, width: screenWidth * 0.5, textAlign: 'center', marginTop: 30 }}
          >
            Yay! Order Successfully Placed
          </Text>
          <Text
            style={{ fontSize: 10, fontFamily: Font_style.Poppins_Regular, color: '#9D9B9B', width: screenWidth * 0.65, textAlign: 'center', marginTop: 10 }}
          >
            Pease check your inbox and click in the recevie link to reset a password
          </Text>
        </View>
        <View style={styles.dateTimeView}>
          <View style={styles.dateTimeView1}>
            <Share />
            <Text style={styles.dateTime}>
              Share
            </Text>
          </View>
          <View style={[styles.dateTimeView1, styles.dateTimeView2]}>
            <LocationBlack />
            <Text style={styles.dateTime}>
              Location
            </Text>
          </View>
        </View>
        <View style={[styles.genderView, styles.rowBetween]}>
          <Text style={styles.name}>
            Gender Type
          </Text>
          <Text style={[styles.name, { fontSize: 14 }]}>
            Men
          </Text>
        </View>
        <View style={styles.genderView}>
          <View style={styles.service}>
            <Text style={styles.name}>
              Service List
            </Text>
            <Text style={[styles.name, { fontSize: 14, color: colors.gradient1 }]}>
              04
            </Text>
          </View>
          <FlatList
            data={services}
            renderItem={renderServiceItem}
          />
          <View style={[styles.service, { marginTop: 15, marginBottom: 0 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.name}>
                Additional Charges
              </Text>
              <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => setShowAdditionalChargesModal(true)}>
                <Info />
              </TouchableOpacity>
            </View>
            <Text style={[styles.name, { fontSize: 14 }]}>
              $6.40
            </Text>
          </View>
        </View>
        <View style={[styles.genderView, styles.rowBetween]}>
          <Text style={styles.name}>
            VAT
          </Text>
          <Text style={[styles.name, { fontSize: 14 }]}>
            $2.67
          </Text>
        </View>
        <View style={[styles.genderView, styles.rowBetween]}>
          <Text style={[styles.name, { fontFamily: Font_style.Poppins_SemiBold }]}>
            Total Price
          </Text>
          <Text style={[styles.name, { fontSize: 14, fontFamily: Font_style.Poppins_SemiBold }]}>
            $89.07
          </Text>
        </View>
        <View style={styles.voucherCodeView}>
          <Text style={[styles.name, { fontSize: 14, }]}>Voucher Code <Text style={{ color: colors.gradient1 }}>#HKG852</Text> applied</Text>
        </View>
        <TouchableOpacity style={[styles.confirmButton]} onPress={viewDetails}>
          <Text style={styles.confirmButtonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: screenHeight * 0.05, alignSelf: 'center', marginTop: 25 }}
          onPress={() => navigation.reset('Main')}
        >
          <LeftBlack />
          <Text style={[styles.name, { paddingLeft: 10, }]}>Back To Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default PlaceOrder;
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
  dateTimeView: {
    borderColor: colors.blu,
    borderWidth: 1,
    marginHorizontal: -20,
    marginTop: 10,
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateTimeView1: {
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  dateTimeView2: {
    borderLeftWidth: 1,
    borderLeftColor: colors.blu,
  },
  dateTime: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: Font_style.Poppins_Regular,
    color: colors.text
  },
  genderView: {
    borderBottomColor: colors.blu,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: -20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },
  serviceItem: {
    borderColor: colors.blu,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4
  },
  voucherCodeView: {
    borderColor: colors.gradient2,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    width: screenWidth - 40,
    backgroundColor: '#79489D1A',
    marginTop: 20,
  },
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
  note: {
    fontSize: 10,
    textAlign: 'justify',
  },
});
