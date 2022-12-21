import React, { useState } from 'react'
import { FlatList, ScrollView, TouchableOpacity, View, TextInput, Text, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../../../Components/Header/Header';
import Text_normal from '../../../Components/Text_components/Text_normal';
import colors from '../../../assets/colors';
import { FAQS_icon, GetHelp_icon, MyAccount_icon, Payment_icon, Security_icon, Support_request_icon } from '../../../assets/Svgs/Help_svgs';
import Text_sub_heading from '../../../Components/Text_components/Text_sub_heading';
import { Simple_rightArrow } from '../../../assets/Svgs/svg_icons';
import Divider from '../../../Components/Divider';

// import Carousel, { Pagination } from 'react-native-snap-carousel';
var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height


function Help({ navigation }) {
    const [name, set_name] = useState('');


    const helpArray = [
        {
            id: 1,
            imgPath: <GetHelp_icon />,
            text: 'Get help with my order',
            subtext: 'Edit your personal details',
            onPress: () => navigation.navigate('Personal_info')
        },
        {
            id: 2,
            imgPath: <Support_request_icon />,
            text: "I'm having trouble placeing on order ",
            subtext: 'Promotions and notifications',
            onPress: () => { }
        },
        {
            id: 3,
            imgPath: <Support_request_icon />,
            text: 'My support request',
            subtext: 'Edit your payments methods',
            onPress: () => { }
        },
        {
            id: 4,
            imgPath: <MyAccount_icon />,
            text: 'My account',
            subtext: 'Manage language, password, etc',
            onPress: () => { }
        },
        {
            id: 5,
            imgPath: <Security_icon />,
            text: "Safety Concerns",
            subtext: 'View all your favorites here',
            onPress: () => { }
        },
        {
            id: 6,
            imgPath: <Payment_icon />,
            text: 'Payment and refunds',
            subtext: 'Manage Language, Passwords',
            onPress: () => { }
        },
        {
            id: 7,
            imgPath: <FAQS_icon />,
            text: "FAQ's",
            subtext: 'Legal issue ',
            onPress: () => { }
        },
        {
            id: 8,
            imgPath: <Support_request_icon />,
            text: 'Beauty Ryder for business',
            subtext: 'Legal issue',
            onPress: () => navigation.navigate('Help')
        },

    ];


    return (
        <View style={styles.cont} >
            <Header onpress={() => navigation.goBack()} />

            <ScrollView style={styles.list}>
                <View style={styles.profile}>
                    <Text_normal style={{ fontSize: 16 }} text='Help' />
                </View>
                <Divider height={1} width={'100%'} />

                {helpArray.map((item, index) => (
                    <>
                        <TouchableOpacity onPress={item.onPress} key={index} style={styles.single_list}>
                            <View style={{ width: 30, alignItems: 'center' }}>
                                <Text>{item.imgPath}</Text>
                            </View>
                            <View style={styles.name_parent}>
                                <View style={styles.name_view}>
                                    <Text_normal style={{ fontSize: 16, color: colors.text }} text={item.text} />
                                </View>
                                <View style={styles.right_icon}>
                                    <Simple_rightArrow />
                                </View>
                            </View>


                            {/* <Text style={styles.list_name}>{item.text}</Text> */}
                        </TouchableOpacity>
                        <View style={{ marginVertical: 5 }}>
                            <Divider height={1} width={'100%'} />
                        </View>
                    </>
                ))}
            </ScrollView>


        </View>
    )
}
export default Help

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        //   alignItems:'center',
        backgroundColor: '#FFFFFF'
    },
    profile: {
        paddingBottom: 10,
        paddingTop: 20,
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
        alignItems: 'center'
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




