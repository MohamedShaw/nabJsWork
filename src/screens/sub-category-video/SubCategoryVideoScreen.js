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
// import Header from "../../components/general/Header";
// import Content from "../../components/sub-category-video/Content";
// import SubCategory from "../../models/SubCategory";
// import SubCategorySoundScreen from "../sub-category-sound/SubCategorySoundScreen";
// import SubCategoryPDFScreen from "../sub-category-pdf/SubCategoryPDFScreen";
// import RNPrint from 'react-native-print';
// import SubCategoryTextScreen from "../sub-category-text/SubCategoryTextScreen";
// import Search from "../../components/general/Search";

// import Video, {ScrollView, Container} from 'react-native-af-video-player'
// import SubCategoryListViewCell from "../../components/sub-category/SubCategoryListViewCell";
import Navigation from "../../common/Navigation";


// 
export default class SubCategoryVideoScreen extends ScreenComponent {
    static screenID = "SubCategoryVideoScreen";
    static screenName = "SubCategoryVideoScreen";
    static push = (object) => Navigation.push({
        name: SubCategoryVideoScreen.screenID,
        passProps: { object: () => object }
    });

    state = {
        isFullScreen: false
    };

    async printRemotePDF(object) {
        await RNPrint.print({ filePath: "http://alhudagroup-tr.com/text/" + object.attach[0].pd })
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
    fullScreen = () => {
        setTimeout(() => {
            this.setState({ isFullScreen: true })
        }, 1000)
    };
    exitFullScreen = () => {
        setTimeout(() => {
            this.setState({ isFullScreen: false })
        }, 1000
        )
    };

    render() {
        return (
            <View style={styles.container}>
                {/* <Header showBackButton={true} isGrayBackground={true} title={this.props.object().category_name} /> */}
                <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
                    {/* <Search />
                    <View style={styles.emptySpaceView} />
                    <SubCategoryListViewCell isShortTitle={true} object={this.props.object()}
                        onSubCategoryListViewCellClicked={this.onSubCategoryListViewCellClicked} />
                    <Content
                        fullScreen={this.fullScreen}
                        exitFullScreen={this.exitFullScreen}
                        onSubCategoryListViewCellClicked={this.onSubCategoryListViewCellClicked}
                        object={this.props.object()}
                    /> */}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptySpaceView: {
        marginTop: 16
    },
    contentContainerStyle: {
        alignItems: 'center',
    }
});
