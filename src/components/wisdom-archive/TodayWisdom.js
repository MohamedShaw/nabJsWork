/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import Wisdom from "../general/Wisdom";
import AppConstant from "../../constant/Constant";
import WisdomModel from "../../models/Wisdom";




export default class TodayWisdom extends PureComponent {




    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>حكمة اليوم</Text>
                </View>
                <Wisdom wisdom={this.props.wisdom} />
                <View style={styles.itemSeparator} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        marginTop: 3.2 * vh,

    },
    titleView: {
        paddingHorizontal: 2.4 * vh,
    },
    title: {
        fontFamily: AppConstant.Font.SansArabicBold,
        fontSize: 16,
        color: AppConstant.Color.Gray,
        textAlign: 'right',
    },
    itemSeparator: {
        borderWidth: 0.7, borderColor: AppConstant.Color.GrayLight,
        marginTop: 2.6 * vh
    },
});
