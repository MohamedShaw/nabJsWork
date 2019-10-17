/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, WebView } from 'react-native';
import ScreenComponent from "../_base/screen-component";
// import Header from "../../components/general/Header";
// import DrawerComponent from "../../components/general/DrawerComponent";

import Navigation from "../../common/Navigation";



export default class SoundChannelScreen extends ScreenComponent {
    static screenID = "SoundChannelScreen";
    static screenName = "SoundChannelScreen";
    static push = () => ScreenComponent.navigator.push({screen:SoundChannelScreen.screenID });
    onLoadStart = () => { ScreenComponent.showActivityIndicator() };
    onLoadEnd = () => { ScreenComponent.hideActivityIndicator() };

    render() {
        return (
            // <DrawerComponent>
                <View style={styles.container}>
                    {/* <Header showBackButton={true} title={"القناة  الصوتية"} />
                    <WebView
                        source={{ uri: 'https://soundcloud.com/nabulsi-encyclopedia' }}
                        onLoadEnd={this.onLoadEnd}
                        onLoadStart={this.onLoadStart}
                    /> */}
                </View>
            // </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
});
