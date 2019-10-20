/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Text, Image } from 'react-native';
import ScreenComponent from "../_base/screen-component";

import MainScreen from "./MainScreen";

import { observer } from "mobx-react";
import SideMenuScreen from "../../../src/screens/side-menu/SideMenuScreen";
import AppConstant from "../../constant/Constant";
import { Navigation } from 'react-native-navigation';


@observer
export default class Splash extends ScreenComponent {
    static screenID = "Splash";
    static push = () => ScreenComponent.navigator.push({ screen: Splash.screenID });

    _drawer;



    componentDidMount() {
        console.log("*****************");

        setTimeout(() => {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: MainScreen.screenID,
                    navigatorStyle: {
                        navBarHidden: true,
                    }
                },
                drawer: {
                    right: {
                        screen: SideMenuScreen.screenID,
                    },


                },
                appStyle: {
                    orientation: 'portrait'
                },
            });
        }, 200);
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/bg.png')} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/images/logo.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: AppConstant.Font.SansArabic, fontSize: 28, color: '#FFFFFF', textAlign: 'center' }}>تقدمة فاعل خير</Text>
                            <Text style={{ fontFamily: AppConstant.Font.SansArabic, fontSize: 28, color: '#FFFFFF', textAlign: 'center' }}>صدقة جارية عن روح والديه</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
