import React, { useState } from 'react'
import { FlatList, Pressable, TouchableOpacity, View, Modal, Text, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native'
import colors from '../../assets/colors';
import { HeartIcon, ViewList, Location, HeartColor, Upload, RightBlack, Stripe, LinearCross, RadioInactive, RadioActive } from '../../assets/Svgs/svg_icons';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Img } from '../../assets/Svgs/svg_images';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Star from '../../assets/pngImages/star.png'
import GreyStar from '../../assets/pngImages/greyStar.png'
var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
import MapView from "react-native-maps";
import Header from '../../Components/Header/Header'
import GradientButton from '../../Components/Buttons/GradientButton';
import GradientBorder from '../../Components/Buttons/GradientBorder';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


export default function Activity(props) {

    const [isModalVisible, setModalVisible] = useState(true);
    const [starCount, setstarCount] = useState(5);


    return (
        <View>
            <Header
                onpress={() => props.navigation.goBack()}
                option={true}
            />

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                {/* <SafeAreaView> */}
                <View style={{
                    height: 180,
                    width: '100%',
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    bottom: 100,
                    backgroundColor: 'transparent',
                    // justifyContent: 'space-between',
                    // flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#DCDCDC'
                }} >
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }} >
                        <ViewList />
                    </TouchableOpacity>
                    <View>
                        <ScrollView contentContainerStyle={{ paddingRight: 20 }} horizontal >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 1].map((item, index) => {
                                return (
                                    <View key={index} style={styles.card} >
                                        <View style={{ flex: 0.26 }} >
                                            <Img />
                                        </View>
                                        <View style={{ flex: 0.7 }} >
                                            <Text style={[styles.txtStyle, { fontSize: 16, fontWeight: '400', color: colors.text }]} >Beautician name</Text>
                                            <Text style={[styles.txtStyle, { fontSize: 14, fontWeight: '400', color: colors.inpt }]} ><Location /> 2541 simple St. Virginia</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                                <Text style={[styles.txtStyle, { fontSize: 10, fontWeight: '400' }]} >4.8  </Text>
                                                <Rating
                                                    type='custom'
                                                    ratingImage={Star}
                                                    ratingColor='#fff'
                                                    // ratingBackgroundColor='#fff'
                                                    ratingCount={5}
                                                    imageSize={12}
                                                    onFinishRating={(r) => setstarCount(r)}
                                                    style={{}}
                                                />
                                                <Text style={[styles.txtStyle, { fontSize: 10, fontWeight: '400', color: colors.inpt }]} >  |   3.4 mi</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                                <GradientButton
                                                    Title1={'BOOK NOW'}
                                                    style={styles.gB}
                                                    // icon={true}
                                                    gStyle={{ borderRadius: 100 }}
                                                    txtstyle={[styles.txtStyle, { color: colors.white, fontSize: 10, fontWeight: '400' }]}
                                                    onpress={() => { }}
                                                />
                                                <LinearGradient
                                                    colors={[colors.gradient1, colors.gradient2]}
                                                    style={[styles.mainLinea, { width: 24, height: 24, borderRadius: 100, marginTop: 8, marginLeft: 10 }]}
                                                >
                                                    <Pressable onPress={() => setModalVisible(!isModalVisible)} style={[styles.innerTouc, { width: 22, height: 22, borderRadius: 100 }]} >
                                                        <HeartColor />
                                                    </Pressable>
                                                </LinearGradient>
                                                <LinearGradient
                                                    colors={[colors.gradient1, colors.gradient2]}
                                                    style={[styles.mainLinea, { width: 24, height: 24, borderRadius: 100, marginTop: 8, marginLeft: 10 }]}
                                                >
                                                    <Pressable onPress={() => alert('dfgfdg')} style={[styles.innerTouc, { width: 22, height: 22, borderRadius: 100 }]} >
                                                        <Upload />
                                                    </Pressable>
                                                </LinearGradient>
                                            </View>

                                        </View>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                {/* </SafeAreaView> */}
            </View>
            {/* <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                setModalVisible(!isModalVisible);
            }}
        >
            <View  style={styles.centeredView}>
                
            </View>
            </Modal> */}
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: 'red',
        height: '30%',
        marginTop: '110%'
        // bottom:100
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        // justifyContent:'center'
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: Dimensions.get('screen').height - 100,
        marginTop: 100,
        // borderRadius:8,
        flex: 1, //the container will fill the whole screen.
        justifyContent: 'space-between',
        alignItems: "center",
    },
    txtStyle: { color: colors.gradient2, fontSize: 20, fontWeight: '500' },
    cont: {
        flex: 10,
        //   alignItems:'center',
        backgroundColor: '#F5F5F5'
    },
    see: {
        width: '100%',
        height: 40,
        borderRadius: 2,
        borderColor: '#E2E9EE',
        backgroundColor: '#F7F8FA',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 6
    },
    gradient_view: {
        flex: 1
    },
    image: {
        alignSelf: 'center',
        marginTop: 304
    },
    dp: { borderWidth: 2, borderColor: '#E2E9EE', width: 60, height: 60, borderRadius: 100, backgroundColor: '#F7F8FA', alignItems: 'center', justifyContent: 'center' },
    gB: {
        marginTop: 8,
        // marginLeft:40,
        borderRadius: 100,
        width: 84,
        height: 24,
        alignSelf: 'center'
    },
    mainLinea: { width: windowWidth - 40, height: 60, borderRadius: 4, marginTop: 30, alignItems: 'center', justifyContent: 'center' },
    innerTouc: { width: windowWidth - 43, height: 57, backgroundColor: colors.white, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
    btn: { width: 295, height: 60, borderWidth: 2, borderRadius: 4, borderColor: colors.white },
    card: { width: windowWidth - 100, marginLeft: 20, flexDirection: 'row', height: 110, padding: 10, backgroundColor: colors.white, borderRadius: 8, marginTop: 10, elevation: 2 },

});