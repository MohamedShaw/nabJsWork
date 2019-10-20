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
import AppConstant from "../../constant/Constant";
import WisdomModel from "../../models/Wisdom";



export default class Wisdom extends PureComponent {


    render() {
        return (
            <View style={styles.wisdomContent}>
                <View style={styles.wisdomView}>
                    <Text style={styles.wisdomTitle}>
                        {this.props.wisdom.name}
                    </Text>
                    <Text style={styles.wisdomDescription}>
                        {this.props.wisdom.desc}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wisdomContent: {
        paddingHorizontal: 2.4 * vh,
    },
    wisdomView: {
        paddingHorizontal: 2.4 * vh,
        width: '100%',
        minHeight: 13.2 * vh,
        marginTop: 4.1 * vh,
        backgroundColor: AppConstant.Color.GrayMiddle,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 3.2 * vh / 2
    },
    wisdomTitle: {
        fontSize: 18,
        fontFamily: AppConstant.Font.SansArabic,
        color: AppConstant.Color.White
    },
    wisdomDescription: {
        fontSize: 18,
        fontFamily: AppConstant.Font.SansArabic,
        color: AppConstant.Color.White
    }
});
