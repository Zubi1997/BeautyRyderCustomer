
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native'
import colors from '../../assets/colors';
import Font_style from '../../assets/Font_style';
import { Option, LeftBlack } from '../../assets/Svgs/svg_icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Header = ({ text, Icon, add, onpress, option }) => {
    return (
        <View style={{ ...styles.header, paddingTop: getStatusBarHeight() + 25 }} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => onpress()} >
                    <LeftBlack />
                </TouchableOpacity>
                <Text style={styles.name} >Back</Text>
            </View>
            <Text style={styles.name}>{text}</Text>
            <View style={styles.option} >
                {option &&
                    <Option />
                }
            </View>
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.blu
    },
    name: {
        color: colors.text,
        fontFamily: Font_style.Poppins_Regular,
        fontSize: 16,
    },
    option: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});