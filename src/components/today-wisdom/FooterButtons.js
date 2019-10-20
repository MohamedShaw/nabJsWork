/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TextStyle, TouchableOpacity, Image, ImageStyle } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import Wisdom from "../../models/Wisdom";




export default class FooterButtons extends PureComponent {


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onWisdomShareButtonClicked}>
                        <View style={styles.dataView}>
                            <Image resizeMode={'contain'} style={styles.icon }
                                source={require("../../assets/images/share_ic.png")} />
                        </View>
                        <Text numberOfLines={1} style={styles.title }>مشاركة الحكمة</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={() => this.props.onWisdomLinkButtonClicked(this.props.wisdom)}>
                        <View style={styles.dataView}>
                            <Image resizeMode={'contain'} style={styles.icon }
                                source={require("../../assets/images/link_ic.png")} />
                        </View>
                        <Text numberOfLines={1} style={styles.title }>مصدر الحكمة</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.props.onWisdomSubscribeButtonClicked}>
                        <View style={styles.dataView}>
                            <Image resizeMode={'contain'} style={styles.icon }
                                source={require("../../assets/images/sub_ic.png")} />
                        </View>
                        <Text numberOfLines={1} style={styles.title }>الاشتراك بالحكم</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onWisdomArchiveButtonClicked}>
                        <View style={styles.dataView}>
                            <Image resizeMode={'contain'} style={styles.icon }
                                source={require("../../assets/images/archive_ic.png")} />
                        </View>
                        <Text numberOfLines={1} style={styles.title }>أرشيف الحكم</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8.5 * vw,
        marginTop: 7.6 * vh,
    },
    buttonContainer: {
        backgroundColor: AppConstant.Color.White,
        borderRadius: 23,
        width: 37.6 * vw,
        height: 6.7 * vh,
        marginBottom: 4.1 * vh,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    image: {
        width: 94,
        height: 90,
        marginLeft: 2 * vw,
        marginBottom: 1 * vh
    },
    dataView: {
        width: 8.8 * vw,
        height: 4.9 * vh,
        backgroundColor: AppConstant.Color.Gray,
        position: 'absolute',
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
    },
    dataTitle: {
        color: AppConstant.Color.GreenLight,
        fontSize: 14,
        fontFamily: AppConstant.Font.SansArabic
    },
    title: {
        textAlign: 'center',
        color: AppConstant.Color.GrayMiddleTwo,
        fontFamily: AppConstant.Font.SansArabicBold,
        marginRight: 10 * vw,
        fontSize: 14,
    },
    subTitle: {
        textAlign: 'right',
        color: AppConstant.Color.White,
        fontFamily: AppConstant.Font.SansArabic,
        marginRight: 26.6 * vw,
        fontSize: 12,
    },
    icon: {
        width: 20, height: 20
    }
});
