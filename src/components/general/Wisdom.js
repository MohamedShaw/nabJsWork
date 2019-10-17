/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import WisdomModel from "../../models/Wisdom";
// import TodayWisdomScreen from "../../screens/today-wisdom/TodayWisdomScreen";




export default class Wisdom extends PureComponent {
  
    onWisdomClicked = () => {
        // this.props.wisdom && TodayWisdomScreen.push(this.props.wisdom)
    };

    render() {
        return (
            <TouchableOpacity style={styles.wisdomContent} onPress={this.onWisdomClicked}>
                <View style={styles.wisdomView}>
                    <Text style={styles.wisdomTitle}>
                        {this.props.wisdom && this.props.wisdom.name}
                    </Text>
                    <Text style={styles.wisdomDescription}>
                        {this.props.wisdom && this.props.wisdom.desc}
                    </Text>
                </View>
            </TouchableOpacity>
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
        marginTop: 2 * vh,
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
