import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import { Apple_icon, Calendar, CardIcon, GooglePayIcon, Info, Location, Watch } from '../../assets/Svgs/svg_icons';
import { screenHeight, screenWidth } from '../../assets/utils';
import Header from '../../Components/Header/Header'
import { Modal } from '../../Components/Modal';


function JobHistoryDetails({ navigation }) {

  const [showAdditionalChargesModal, setShowAdditionalChargesModal] = useState(false);

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

  const onPressContinue = () => {
    navigation.navigate('SavedCards')
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
        text="Job History Details"
      />
      <AdditionalChargesModal />
      <ScrollView style={{ paddingHorizontal: 20, backgroundColor: colors.grey }} >
        <Text style={{ marginTop: 10, ...styles.name }}>
          Beautician name
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
          <Text style={styles.details}>
            <Location />
            2541 simple St. Virginia
          </Text>
          <Text style={styles.details}>
            |   3.4 mi
          </Text>
        </View>
        <View style={styles.dateTimeView}>
          <View style={styles.dateTimeView1}>
            <Calendar />
            <Text style={styles.dateTime}>
              Sat, Nov 12, 2022
            </Text>
          </View>
          <View style={[styles.dateTimeView1, styles.dateTimeView2]}>
            <Watch />
            <Text style={styles.dateTime}>
              7:39 AM
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
        <TouchableOpacity onPress={() => navigation.navigate('Feedback')} style={styles.voucherCodeView}>
          <Text style={[styles.name, { fontSize: 14, color: colors.gradient2 }]}>Voucher Code #HKG852 applied</Text>
        </TouchableOpacity>
        <View style={[styles.genderView, styles.rowBetween, { borderTopColor: colors.blu, borderTopWidth: 1, borderBottomWidth: 0, marginTop: 20 }]}>
          <Text style={[styles.name, { fontFamily: Font_style.Poppins_SemiBold }]}>
            Voucher Discount
          </Text>
          <Text style={[styles.name, { fontSize: 14, fontFamily: Font_style.Poppins_SemiBold }]}>
            $2.07
          </Text>
        </View>
        <View style={[styles.genderView, styles.rowBetween, { borderTopColor: colors.blu, borderTopWidth: 1, borderBottomWidth: 0, marginBottom: screenHeight * 0.05 }]}>
          <Text style={[styles.name, { fontFamily: Font_style.Poppins_SemiBold }]}>
            Grand Total
          </Text>
          <Text style={[styles.name, { fontSize: 14, fontFamily: Font_style.Poppins_SemiBold }]}>
            $87.07
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
export default JobHistoryDetails;
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
    flexDirection: 'row',
    flex: 1 / 2,
    justifyContent: 'center',
    paddingVertical: 15,
  },
  dateTimeView2: {
    borderLeftWidth: 1,
    borderLeftColor: colors.blu,
  },
  dateTime: {
    marginLeft: 10,
    fontSize: 10,
    fontFamily: Font_style.Poppins_Regular,
    color: colors.gradient1
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
  note: {
    fontSize: 10,
    textAlign: 'justify',
  }
});
