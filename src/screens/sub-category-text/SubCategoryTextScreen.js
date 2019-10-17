/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Linking, ScrollView} from 'react-native';
import ScreenComponent from "../_base/screen-component";
import Navigation from '../../common/Navigation';
// import Header from "../../components/general/Header";
// import Content from "../../components/sub-category-text/Content";
// import SubCategory from "../../models/SubCategory";
// import SubCategorySoundScreen from "../sub-category-sound/SubCategorySoundScreen";
// import SubCategoryVideoScreen from "../sub-category-video/SubCategoryVideoScreen";
// import RNPrint from 'react-native-print';
import AppConstant from "../../constant/Constant";
// import Search from "../../components/general/Search";





export default class SubCategoryTextScreen extends ScreenComponent {
    static screenID = "SubCategoryTextScreen";
    static screenName = "SubCategoryTextScreen";
    static push = (object, isShowImage) => Navigation.push({
        screen: SubCategoryTextScreen.screenID,
        passProps: {object: () => object, isShowImage: isShowImage}
    });

    async printRemotePDF(object) {
        await RNPrint.print({filePath: "http://alhudagroup-tr.com/text/" + object.attach[0].pd})
    }

    onSubCategoryListViewCellClicked = (index, object) => {
        switch (index) {
            case 0: {
                SubCategoryTextScreen.push(object, true);
                break;
            }
            case 1: {
                SubCategorySoundScreen.push(object);
                break;
            }
            case 2: {
                SubCategoryVideoScreen.push(object);
                break;
            }
            case 3: {
                SubCategoryTextScreen.push(object, false);
                break;
            }
            case 4: {
                Linking.openURL("http://alhudagroup-tr.com/text/" + object.attach[0].pd);
                break;
            }
            case 5: {
                this.printRemotePDF(object);
                break;
            }
        }
    };


    render() {
        console.log("data --to show", this.props.object());
        
        return (
            <View style={styles.container}>
                {/* <Header showBackButton={true} isGrayBackground={true} title={this.props.object().category_name}/>
                <View style={{alignItems: 'center'}}>
                    <Search/>
                </View>
                <Content
                    onSubCategoryListViewCellClicked={this.onSubCategoryListViewCellClicked}
                    isShowImage={this.props.isShowImage}
                    object={this.props.object()}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppConstant.Color.White,
    },
});
