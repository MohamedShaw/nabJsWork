/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";




export default class FooterButton extends PureComponent {


    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onWisdomSubscribeButtonClicked}>
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                />
                <Text style={styles.title}>
                    الاشتراك في الحكمة
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 6.2 * vh,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: AppConstant.Font.SansArabicBold,
        fontSize: 14,
        color: AppConstant.Color.Gray,
    },
    absolute: {
        backgroundColor: AppConstant.Color.White,
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
});
