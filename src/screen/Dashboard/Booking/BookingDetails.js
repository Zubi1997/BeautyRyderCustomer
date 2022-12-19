import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, TouchableHighlight, KeyboardAvoidingView, Platform } from 'react-native'
import colors from '../../../assets/colors';
import Font_style from '../../../assets/Font_style';
import { Calendar, Location, Watch } from '../../../assets/Svgs/svg_icons';
import Header from '../../../Components/Header/Header'


function BokingDetails({ navigation }) {

  const services = [
    { name: 'Cheeks', duration: '20 Min', price: '$20.00' },
    { name: "Men's Cheeks", duration: '20 Min', price: '$35.00' },
    { name: 'Sideburns', duration: '20 Min', price: '$15.00' },
    { name: 'Jaw Line', duration: '20 Min', price: '$10.00' },
  ]

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
        text="Booking Details"
      />
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height': 'padding'}>
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
              <Text style={styles.name}>
                Additional Charges
              </Text>
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
          <Text style={[styles.details, { fontSize: 14, marginTop: 20 }]}>
            Voucher Code
          </Text>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 15, }}>
            <TextInput
              style={styles.input}
              placeholder='Enter Code'
              placeholderTextColor={colors.purple_text}
            />
            <TouchableOpacity style={styles.checkButton}>
              <Text style={[styles.name, { color: colors.white }]}>Checks</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>CONFIRM</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
export default BokingDetails;
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
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 2 / 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: colors.purple_text,
    fontFamily: Font_style.Poppins_Regular,
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: colors.purple_text,
    borderStyle: 'dashed',
  },
  checkButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 / 3,
    backgroundColor: colors.purple_text,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: -2,
    height: 45
  },
  confirmButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gradient2,
    paddingVertical: 21,
    marginTop: 20,
    borderRadius: 4,
    marginBottom: 100,
  },
  confirmButtonText: {
    fontSize: 20,
    fontFamily: Font_style.Poppins_Medium,
    color: colors.gradient1,
    alignSelf: 'center',
  }
});
