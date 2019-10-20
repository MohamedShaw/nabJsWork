/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import ScreenComponent from "../_base/screen-component";
import PatternBackground from "../../components/general/PatternBackground";
import Header from "../../components/general/Header";
import WisdomImage from "../../components/today-wisdom/WisdomImage";
import FooterButtons from "../../components/today-wisdom/FooterButtons";
import AppConstant from "../../constant/Constant";
import SubCategory from "../../models/SubCategory";
import Wisdom from "../../components/wisdom-archive/Wisdom";
import Share from 'react-native-share';
import WisdomModel from "../../models/Wisdom";
import Search from "../../components/general/Search";
import DrawerComponent from "../../components/general/DrawerComponent";
import WisdomArchiveScreen from "../wisdom-archive/WisdomArchiveScreen";




export default class TodayWisdomScreen extends ScreenComponent {
    static screenID = "TodayWisdomScreen";
    static screenName = "TodayWisdomScreen";
    static push = (object) => ScreenComponent.navigator.push({
        screen: TodayWisdomScreen.screenID,
        navigatorStyle: {
            navBarHidden: true,
        },

        passProps: {
            object: () => object
        }
    });
    onWisdomShareButtonClicked = () => {
        let shareOptions = {
            url: this.props.object().desc,
            title: "موسوعة النابلسي",
            message: this.props.object().desc,
            subject: "موسوعة النابلسي"
        };
        Share.open(shareOptions)
    };
    onWisdomLinkButtonClicked = (object) => {
        Linking.openURL("http://alhudagroup-tr.com/web/article/" + object.sources)

    };
    onWisdomSubscribeButtonClicked = () => {
        Linking.openURL('https://nabulsi.us2.list-manage.com/subscribe?u=01b2f798014acd313fbf935c4&id=c4e54bf8a3')
    };
    onWisdomArchiveButtonClicked = () => {
        WisdomArchiveScreen.push();
    };


    render() {
        return (
            <DrawerComponent>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <PatternBackground />
                    <Header showBackButton={true} title={'موسوعة النابلسي للعلوم الإسلامية'} />
                    <View style={{ alignItems: 'center' }}>
                        <Search />
                    </View>
                    <WisdomImage wisdom={this.props.object()} />
                    <Wisdom wisdom={this.props.object()} />
                    <FooterButtons
                        wisdom={this.props.object()}
                        onWisdomShareButtonClicked={this.onWisdomShareButtonClicked}
                        onWisdomLinkButtonClicked={this.onWisdomLinkButtonClicked}
                        onWisdomSubscribeButtonClicked={this.onWisdomSubscribeButtonClicked}
                        onWisdomArchiveButtonClicked={this.onWisdomArchiveButtonClicked}
                    />
                </ScrollView>
            </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppConstant.Color.White,
        flex: 1,
    },
});
