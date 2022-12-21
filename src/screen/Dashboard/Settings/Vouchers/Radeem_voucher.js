
import React, { useState } from 'react'
import { FlatList, ScrollView, TouchableOpacity, View, TextInput, Text, StyleSheet, Dimensions, Image, SafeAreaView, Modal } from 'react-native'
import colors from '../../../../assets/colors';
import Font_style from '../../../../assets/Font_style';
import { LinearCross, Voucher_icon } from '../../../../assets/Svgs/svg_icons';
import Divider from '../../../../Components/Divider';
import Text_normal from '../../../../Components/Text_components/Text_normal';
import Text_sub_heading from '../../../../Components/Text_components/Text_sub_heading';

// import Carousel, { Pagination } from 'react-native-snap-carousel';
var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height


function Radeem_voucher({ navigation }) {
    const [phone, set_phone] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);


    const radeemArray = [
        {
            id: 1,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 2,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 3,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 4,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 5,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 6,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 7,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 8,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
        {
            id: 9,
            text1: '50% OFF Your First Shop Order!',
            text2: 'v4weq9e',
            text3: 'Help',
            text4: 'Help',
            subtext: 'Legal issue',
            onPress: () => { }
        },
    ];

    return (
        <SafeAreaView style={styles.cont} >

            <ScrollView style={styles.list}>
                {radeemArray.map((item, index) => (
                    <TouchableOpacity onPress={() => setModalVisible(true)} key={index} style={styles.single_list}>
                        <View style={{ padding: 10 }}>
                            <View style={styles.view1}>
                                <Text_sub_heading style={styles.subtxt_black} text={item.text1} />
                                <Text_sub_heading style={styles.subtxt} text={'50%'} />
                            </View>
                            <View style={styles.view1}>
                                <Text style={[styles.subtxt, { fontFamily: Font_style.Poppins_Medium, textDecorationLine: 'line-through' }]} >v4weq9e</Text>
                                <View style={{ padding: 3, paddingHorizontal: 5, borderRadius: 20, borderWidth: 1, borderColor: colors.inpt }}>
                                    <Text_sub_heading style={[styles.subtxt, { fontSize: 10 }]} text={'Expired'} />
                                </View>
                            </View>
                            <View style={styles.view1}>
                                <Text_sub_heading style={styles.subtxt} text={'$:02.24 minim'} />
                                <Text_sub_heading style={styles.subtxt} text={'Expired on 15 Nov 2022'} />
                            </View>
                        </View>
                        <Divider height={1} width={'100%'} />
                        <View style={{ marginVertical: 5, paddingHorizontal: 10 }}>
                            <View style={styles.view1}>
                                <Text_sub_heading style={styles.subtxt} text={'Order Number: 25487'} />
                                <Text_sub_heading style={styles.subtxt_primary} text={'T&C'} />
                            </View>
                        </View>
                        {/* <Text style={styles.list_name}>{item.text}</Text> */}
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView} >
                        <ScrollView>
                            <View style={styles.modalHead}>
                                <Text_normal style={styles.modal_headtxt} text={'Voucher Details'} />
                            </View>
                            <Divider height={1} width={'100%'} />
                            <View style={styles.modal_txtView}>
                                <Voucher_icon />
                                <View style={{ marginLeft: 10 }}>
                                    <Text_sub_heading style={styles.subtxt_black} text={'Just for you !'} />
                                    <Text_sub_heading style={styles.modal_headtxt2} text={'New and existing customers'} />
                                    <Text_sub_heading style={[styles.modal_headtxt2, { fontSize: 10 }]} text={'Vaild from 25 nov 2022- 10 Oct 2022'} />
                                </View>
                            </View>
                            <Divider height={1} width={'100%'} />
                            <View style={styles.termsView}>
                                <View style={{ marginLeft: 10 }}>
                                    <Text_sub_heading style={styles.subtxt_black} text={'Terms and Conditions'} />
                                </View>
                                {
                                    [{}, {}, {}, {}, {}, {}].map((item, index) => (
                                        <View style={styles.singleTerm}>
                                            <Text style={styles.modal_headtxt2}>{'\u2B22'}</Text>
                                            <Text_sub_heading style={[styles.modal_headtxt2, { marginLeft: 10 }]} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />

                                        </View>
                                    )

                                    )
                                }
                            </View>

                        </ScrollView>

                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}
export default Radeem_voucher

const styles = StyleSheet.create({

    cont: {
        flex: 1,
        //   alignItems:'center',
        backgroundColor: '#FFFFFF',
        marginTop: 10
    },
    subtxt: {
        fontSize: 12,
        color: colors.subtxt,
    },
    subtxt_black: {
        fontSize: 12,
        color: colors.black
    },
    subtxt_primary: {
        fontSize: 12,
        color: colors.primary
    },
    list: {
        flex: 1,
        backgroundColor: colors.grey_list
    },
    single_list: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 3,
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        backgroundColor: '#000000D9',
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    modalView: {
        backgroundColor: "#fff",
        maxHeight: windowHeight / 1.2,

    },
    modal_headtxt: {
        fontSize: 16,
        color: colors.black,
        textAlign: 'center'
    },
    modal_headtxt2: {
        fontSize: 12,
        color: colors.inpt,
    },
    modalHead: {
        margin: 10
    },
    modal_txtView: {
        flexDirection: 'row',
        padding: 20,
    },
    termsView: {
        padding: 20
    },
    singleTerm: {
        flexDirection: 'row',
        marginTop: 10
    }
});

