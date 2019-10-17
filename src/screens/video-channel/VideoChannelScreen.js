/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenComponent from "../_base/screen-component";
// import Header from "../../components/general/Header";
// import DrawerComponent from "../../components/general/DrawerComponent";
// import WebView from 'react-native-android-fullscreen-webview-video';


import Navigation from '../../common/Navigation';


export default class VideoChannelScreen extends ScreenComponent {
    static screenID = "VideoChannelScreen";
    static screenName = "VideoChannelScreen";
    static push = () => Navigation.push({name: VideoChannelScreen.screenID});


    onLoadStart = () => {ScreenComponent.showActivityIndicator()};
    onLoadEnd = () => {ScreenComponent.hideActivityIndicator()};

    render() {
        return (
            // <DrawerComponent>
            <View style={styles.container}>
                {/* <Header showBackButton={true} title={"القناة المرئية"}/>
                <WebView
                    source={{uri: 'https://www.youtube.com/channel/UC7naRnmAOTwDPu738W2SljQ'}}
                    onLoadEnd={this.onLoadEnd}
                    onLoadStart={this.onLoadStart}
                /> */}
            </View>
            // {/* </DrawerComponent> */}
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
});
