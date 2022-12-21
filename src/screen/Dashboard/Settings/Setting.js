import React, { useState } from 'react'
import { FlatList, ScrollView, TouchableOpacity, View, TextInput, Text, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native'
import colors from '../../../assets/colors';
import Font_style from '../../../assets/Font_style';
import { Favourites_icon, Help_icon, Legal_icon, Message_icon, Payment_icon, Personal_info_icon, ReferEarn_icon, Setting_icon, Vouchers_icon } from '../../../assets/Svgs/Setting_svgs';
import Header from '../../../Components/Header/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Text_normal from '../../../Components/Text_components/Text_normal';
import Text_sub_heading from '../../../Components/Text_components/Text_sub_heading';
import { RightBlack, RightIcon, Simple_rightArrow } from '../../../assets/Svgs/svg_icons';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height


function Setting({ navigation }) {
  const [phone, set_phone] = useState('');
  const [code, setCode] = useState("");
  const [activeSlide, setactiveSlide] = useState([]);

  const settingArray = [
    {
      id: 1,
      imgPath: <Personal_info_icon />,
      text: 'Personal information',
      subtext: 'Edit your personal details',
      onPress: () => navigation.navigate('Personal_info')
    },
    {
      id: 2,
      imgPath: <Message_icon />,
      text: 'Message',
      subtext: 'Promotions and notifications',
      onPress: () => { }
    },
    {
      id: 3,
      imgPath: <Payment_icon />,
      text: 'Payments Methods',
      subtext: 'Edit your payments methods',
      onPress: () => { }
    },
    {
      id: 4,
      imgPath: <Setting_icon />,
      text: 'Setting',
      subtext: 'Manage language, password, etc',
      onPress: () => { }
    },
    {
      id: 5,
      imgPath: <Favourites_icon />,
      text: "Favorite's Beautician",
      subtext: 'View all your favorites here',
      onPress: () => { }
    },
    {
      id: 6,
      imgPath: <ReferEarn_icon />,
      text: 'Refer & Earn',
      subtext: 'Manage Language, Passwords',
      onPress: () => { }
    },
    {
      id: 7,
      imgPath: <Legal_icon />,
      text: 'Legal',
      subtext: 'Legal issue ',
      onPress: () => { }
    },
    {
      id: 8,
      imgPath: <Help_icon />,
      text: 'Help',
      subtext: 'Legal issue',
      onPress: () => navigation.navigate('Help')
    },
    {
      id: 9,
      imgPath: <Vouchers_icon />,
      text: 'Vouchers',
      subtext: 'Legal issue',
      onPress: () => navigation.navigate('Vouchers')
    },
  ];

  return (
    <SafeAreaView style={styles.cont} >
      <Header />

      <View style={styles.profile}>
        <View style={styles.img}>
        </View>
        <View style={styles.name_view}>
          <Text_normal style={{ fontSize: 16 }} text='Customer Nmae' />
          <Text_sub_heading style={styles.subtxt} text='2541 simple St. Virginia' />
        </View>
      </View>

      <ScrollView style={styles.list}>
        {settingArray.map((item, index) => (
          <TouchableOpacity onPress={item.onPress} key={index} style={styles.single_list}>
            <Text>{item.imgPath}</Text>
            <View style={styles.name_parent}>
              <View style={styles.name_view}>
                <Text_normal style={{ fontSize: 14 }} text={item.text} />
                <Text_sub_heading style={styles.subtxt} text={item.subtext} />
              </View>
              <View style={styles.right_icon}>
                <Simple_rightArrow />
              </View>
            </View>

            {/* <Text style={styles.list_name}>{item.text}</Text> */}
          </TouchableOpacity>
        ))}
      </ScrollView>


    </SafeAreaView>
  )
}
export default Setting

const styles = StyleSheet.create({

  cont: {
    flex: 1,
    //   alignItems:'center',
    backgroundColor: '#FFFFFF'
  },
  profile: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: colors.greytxt
  },
  name_view: {
    marginLeft: 10,
    flex: 1
  },
  subtxt: {
    fontSize: 12,
    color: colors.inpt
  },
  list: {
    flex: 1,
    backgroundColor: colors.grey_list
  },
  single_list: {
    padding: 10,
    // backgroundColor:colors.gradient1,
    flexDirection: 'row',
  },
  list_name: {
    marginLeft: 10,
    fontSize: 12
  },
  right_icon: {
    marginRight: 10
  },
  name_parent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  }

});
