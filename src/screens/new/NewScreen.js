/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Text, TextStyle} from 'react-native';
import ScreenComponent from "../_base/screen-component";
// import Header from "../../components/general/Header";
// import PatternBackground from "../../components/general/PatternBackground";
// import NewListView from "../../components/new/NewListView";
// import CategoryStore from "../../strores/CategoryStore";
// import SubCategoryScreen from "../sub-category/SubCategoryScreen";
// import NewStore from "../../strores/NewStore";
import AppConstant from "../../constant/Constant";
// import CategoryListView from "../../components/category/CategoryListView";
import {observer} from "mobx-react";
// import Search from "../../components/general/Search";
import SubCategoryTextScreen from "../sub-category-text/SubCategoryTextScreen";
// import SubCategory from "../../models/SubCategory";
// import DrawerComponent from "../../components/general/DrawerComponent";

import Navigation from "../../common/Navigation";



@observer
export default class NewScreen extends ScreenComponent {
    static screenID = "NewScreen";
    static screenName = "NewScreen";
    static push = () => Navigation.push({name: NewScreen.screenID});

    // store = new NewStore();

    // componentDidMount() {

    //     this.store.firstPageRequest();
    // }

    onListPullToRefreshFired = () => {
        this.store.pullToRefreshRequest();
    };

    renderListEmptyComponent = () => {
        if (this.store.getEmptyListComponentStatues) {
            return (<Text style={styles.emptyListTitle }>لا يوجد بيانات لعرضها</Text>)
        }
        else {
            return <View/>
        }
    };

    onListViewCellClicked = (object) => {
        SubCategoryTextScreen.push(object, false)
    };

   
    render() {
        return (
            <View style={styles.container}>
            {/* <PatternBackground/>
            <Header showBackButton={true} title={'جديدنا'}/>
            <View style={{alignItems: 'center'}}>
                <Search/>
            </View>
            <NewListView
                data={this.store.getNew}
                store={this.store}
                onListViewCellClicked={this.onListViewCellClicked}
                onPullToRefreshFired={this.onListPullToRefreshFired}
                renderEmptyComponent={this.renderListEmptyComponent()}
                pullToRefreshIndicatorVisible={this.store.getPullToRefreshIndicatorStatues}
            /> */}
        </View>
            // <DrawerComponent>
            //     <View style={styles.container}>
            //         {/* <PatternBackground/>
            //         <Header showBackButton={true} title={'جديدنا'}/>
            //         <View style={{alignItems: 'center'}}>
            //             <Search/>
            //         </View>
            //         <NewListView
            //             data={this.store.getNew}
            //             store={this.store}
            //             onListViewCellClicked={this.onListViewCellClicked}
            //             onPullToRefreshFired={this.onListPullToRefreshFired}
            //             renderEmptyComponent={this.renderListEmptyComponent()}
            //             pullToRefreshIndicatorVisible={this.store.getPullToRefreshIndicatorStatues}
            //         /> */}
            //     </View>
            // </DrawerComponent>
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
