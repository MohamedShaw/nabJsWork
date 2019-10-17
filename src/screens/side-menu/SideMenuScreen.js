/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import ScreenComponent from "../_base/screen-component";
import Content from "../../components/side-menu/Content";
import NewScreen from "../new/NewScreen";
import BookMarkScreen from "../book-mark/BookMarkScreen";
import NewFatwaScreen from "../new-fatwa/NewFatwaScreen";
import QuestionScreen from "../question/QuestionScreen";
import WisdomArchiveScreen from "../wisdom-archive/WisdomArchiveScreen";
import VideoChannelScreen from "../video-channel/VideoChannelScreen";
import SoundChannelScreen from "../sound-channel/SoundChannelScreen";
import ContactUsScreen from "../contact-us/ContactUsScreen";
import Navigation from "../../common/Navigation";


export default class SideMenuScreen extends ScreenComponent {
    static screenID = "SideMenuScreen";
    static screenName = "SideMenuScreen";
    static push = () => Navigation.push({ name: SideMenuScreen.screenID });

    onMainButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        ScreenComponent.resetToRoot()
    };
    onNewButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        NewScreen.push()
    };
    onBookMarkButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        BookMarkScreen.push()
    };
    onQuestionButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        QuestionScreen.push()
    };
    onWisdomButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        WisdomArchiveScreen.push()
    };
    onContactUsButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        ContactUsScreen.push()
    };
    onVideoChannelButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        VideoChannelScreen.push()
    };
    onSoundChannelButtonClicked = () => {
        ScreenComponent.toggleDrawer();
        SoundChannelScreen.push()
    };
    onFaceBookButtonClicked = () => {
        Linking.openURL('https://www.facebook.com/n/?Nabulsiweb.ar');
    };
    onInstagramButtonClicked = () => {
        Linking.openURL('http://instagram.com/_u/nabulsiweb.ar');
    };
    onYouTubeButtonClicked = () => {
        Linking.openURL('https://www.youtube.com/channel/UC7naRnmAOTwDPu738W2SljQ');
    };
    onSoundCloudButtonClicked = () => {
        Linking.openURL('https://soundcloud.com/nabulsi-encyclopedia');
    };
    onTwitterButtonClicked = () => {
        Linking.openURL('https://twitter.com/nabulsi_com');
    };
    onWhatsAppButtonClicked = () => {
        Linking.openURL('https://chat.whatsapp.com/7oeeHT43JXA1K5uVqugLFm');
        // Linking.openURL('whatsapp://app')
    };

    onEmailButtonClicked = () => {
        Linking.openURL('https://us2.list-manage.com/subscribe?u=01b2f798014acd313fbf935c4&id=45501ffb01')
    };
    render() {
        return (
            <View style={styles.container}>
                <Content
                    onNewButtonClicked={this.onNewButtonClicked}
                    onBookMarkButtonClicked={this.onBookMarkButtonClicked}
                    onQuestionButtonClicked={this.onQuestionButtonClicked}
                    onWisdomButtonClicked={this.onWisdomButtonClicked}
                    onMainButtonClicked={this.onMainButtonClicked}
                    onVideoChannelButtonClicked={this.onVideoChannelButtonClicked}
                    onSoundChannelButtonClicked={this.onSoundChannelButtonClicked}
                    onFaceBookButtonClicked={this.onFaceBookButtonClicked}
                    onInstagramButtonClicked={this.onInstagramButtonClicked}
                    onYouTubeButtonClicked={this.onYouTubeButtonClicked}
                    onSoundCloudButtonClicked={this.onSoundCloudButtonClicked}
                    onTwitterButtonClicked={this.onTwitterButtonClicked}
                    onWhatsAppButtonClicked={this.onWhatsAppButtonClicked}
                    onEmailButtonClicked={this.onEmailButtonClicked}
                    onContactUsButtonClicked={this.onContactUsButtonClicked}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
