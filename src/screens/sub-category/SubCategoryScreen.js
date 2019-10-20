/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Text, TextStyle, ActivityIndicator, Linking} from 'react-native';
import ScreenComponent from "../_base/screen-component";
import Header from "../../components/general/Header";
import PatternBackground from "../../components/general/PatternBackground";
import SubCategoryListView from "../../components/sub-category/SubCategoryListView";
// import SubCategoryTextScreen from "../sub-category-text/SubCategoryTextScreen";
// import SubCategorySoundScreen from "../sub-category-sound/SubCategorySoundScreen";
// import SubCategoryVideoScreen from "../sub-category-video/SubCategoryVideoScreen";
import AppConstant from "../../constant/Constant";
import {observer, inject} from "mobx-react";
// import SubCategoryPDFScreen from "../sub-category-pdf/SubCategoryPDFScreen";
// import RNPrint from 'react-native-print';
import Search from "../../components/general/Search";
import DrawerComponent from "../../components/general/DrawerComponent";


@inject('SubCategoryStore')
@observer
export default class SubCategoryScreen extends ScreenComponent {
    static screenID = "SubCategoryScreen";
    static screenName = "SubCategoryScreen";
    static push = (id, parentID, screenTitle) => ScreenComponent.navigator.push({
        screen: SubCategoryScreen.screenID,
        
        navigatorStyle: {
            navBarHidden: true,
        },
        passProps: {id: id, parentID: parentID, screenTitle: screenTitle}
    });

    store = this.props.SubCategoryStore;

    componentDidMount() {
        console.log("sub category");
        
        const res = this.props.SubCategoryStore.fetch(this.props.id,this.props.parentID);
        
        // this.props.SubCategoryStore.firstPageRequest();
    }

    onLoadMoreFired = () => {
        this.props.SubCategoryStore.loadMoreRequest();
    };

    onListPullToRefreshFired = () => {
        this.props.SubCategoryStore.pullToRefreshRequest();
    };

    renderListEmptyComponent = () => {
        if (this.props.SubCategoryStore.getEmptyListComponentStatues) {
            return (<Text style={styles.emptyListTitle }>لا يوجد بيانات لعرضها</Text>)
        }
        else {
            return <View/>
        }
    };
    renderLoadMoreActivityIndicator = () => {
        if (this.props.SubCategoryStore.getLoadMoreActivityIndicatorStatues) {
            return (<ActivityIndicator size="large" color={AppConstant.Color.Black}/>)
        }
        else {
            return <View/>
        }
    };

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
        return (
            <View style={styles.container}>
                <PatternBackground/>
                <Header isGrayBackground={true} showBackButton={true} title={this.props.screenTitle}/>
                <View style={{alignItems: 'center'}}>
                    <Search/>
                </View>
                <SubCategoryListView
                    data={this.props.SubCategoryStore.getSubCategory}
                    onPullToRefreshFired={this.onListPullToRefreshFired}
                    // loadMoreFired={this.onLoadMoreFired}
                    renderFooterComponent={this.renderLoadMoreActivityIndicator()}
                    renderEmptyComponent={this.renderListEmptyComponent()}
                    pullToRefreshIndicatorVisible={this.props.SubCategoryStore.getPullToRefreshIndicatorStatues}
                    onSubCategoryListViewCellClicked={this.onSubCategoryListViewCellClicked}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppConstant.Color.White
    },
    emptyListTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: AppConstant.Font.SansArabic,
        color: AppConstant.Color.Black,
    },
});
