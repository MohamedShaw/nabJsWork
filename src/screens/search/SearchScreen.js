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
import AppConstant from "../../constant/Constant";
// import PatternBackground from "../../components/general/PatternBackground";
// import Header from "../../components/general/Header";
// import Form from "../../components/advanced-search/Form";
// import SearchResultScreen from "../search-result/SearchResultScreen";
// import DrawerComponent from "../../components/general/DrawerComponent";




export default class SearchScreen extends ScreenComponent {
    static screenID = "SearchScreen";
    static screenName = "SearchScreen";
    static push = (keyword) =>  Navigation.push({
        name: SearchScreen.screenID,
        passProps: {
            keyword: keyword
        }
    });
    onSendButtonClciked = (data) => {
        SearchResultScreen.push(data)
    };

    render() {
        return (
            // <DrawerComponent>
                <View style={styles.container}>
                    {/* <PatternBackground/>
                    <Header showBackButton={true} title={"البحث"}/>
                    <Form keyword={this.props.keyword} onSendButtonClciked={this.onSendButtonClciked}/> */}
                </View>
            // </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppConstant.Color.White
    },
});
