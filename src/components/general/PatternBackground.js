/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"




export default class PatternBackground extends PureComponent {


    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require("../../assets/images/pattern_bg.png")}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        width: "100%",
        height: 45.9 * vh,
        top: 3.5 * vh,
        zIndex: -1,
    },
});
