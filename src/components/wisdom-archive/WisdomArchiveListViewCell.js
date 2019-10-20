/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import SubCategory from "../../models/SubCategory";
import moment from "moment";
import Wisdom from "../../models/Wisdom";




export default class WisdomArchiveListViewCell extends PureComponent {

    render() {
        return (
            <Animatable.View useNativeDriver={true} animation="fadeInUp" style={styles.container}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}
                    onPress={() => this.props.onWisdomArchiveListViewCellClicked(this.props.object)}>
                 
                    <Text numberOfLines={1} style={styles.title }>
                        حِكْمة اليوم: {this.props.object.desc}
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppConstant.Color.Gray,
        borderRadius: 23,
        marginBottom: 3.7 * vh,
        marginLeft: 4.7 * vw,
        width: 90.6 * vw,
        height: 6.7 * vh,
        shadowColor: "#000",
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    image: {
        width: 94,
        height: 90,
        marginLeft: 2 * vw,
        marginBottom: 1 * vh
    },
    dataView: {
        width: 23.2 * vw,
        height: 6.7 * vh,
        backgroundColor: AppConstant.Color.White,
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
        textAlign: 'right',
        color: AppConstant.Color.White,
        fontFamily: AppConstant.Font.SansArabicBold,
        // marginRight: 26.6 * vw,
        fontSize: 14,
        paddingHorizontal: 5 * vw,
    },
    subTitle: {
        textAlign: 'right',
        color: AppConstant.Color.White,
        fontFamily: AppConstant.Font.SansArabic,
        marginRight: 26.6 * vw,
        paddingLeft: 5 * vw,
        fontSize: 12,
    }
});
