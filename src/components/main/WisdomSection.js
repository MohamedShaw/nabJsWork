/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TextStyle } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import WisdomModel from "../../models/Wisdom";
import Wisdom from "../general/Wisdom";



export default class WisdomSection extends PureComponent {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemSeparator} />
                <Text style={styles.title }>حكمة اليوم</Text>
                <Wisdom wisdom={this.props.wisdom} />
                <View style={styles.itemSeparator} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    backgroundImage: {
        width: "100%",
        // height: 45.9 * vh,
        // position: 'absolute',
        // top: -3.7 * vh,
        // zIndex: -1,
    },
    itemSeparator: {
        borderWidth: 0.7, borderColor: AppConstant.Color.GrayLight,
        marginTop: 1 * vh
    },
    title: {
        textAlign: 'right',
        fontFamily: AppConstant.Font.SansArabicBold,
        fontSize: 18,
        marginTop: 1 * vh,
        paddingHorizontal: 2.4 * vh,
        color: AppConstant.Color.Black
    },
});
