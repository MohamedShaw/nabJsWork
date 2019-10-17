/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, FlatList, Text, TextStyle} from 'react-native';
import ScreenComponent from "../_base/screen-component";
import Navigation from '../../common/Navigation';
// import PatternBackground from "../../components/general/PatternBackground";
// import Header from "../../components/general/Header";
// import BookMarkListView from "../../components/book-mark/BookMarkListView";
import {observer} from "mobx-react";
// import BookMarkStore from "../../strores/BookMarkStore";
import AppConstant from "../../constant/Constant";
// import SubCategory from "../../models/SubCategory";
// import SubCategoryTextScreen from "../sub-category-text/SubCategoryTextScreen";
// import Search from "../../components/general/Search";
// import DrawerComponent from "../../components/general/DrawerComponent";




@observer
export default class BookMarkScreen extends ScreenComponent {
    static screenID = "BookMarkScreen";
    static screenName = "BookMarkScreen";
    static push = () =>  Navigation.push({screen: BookMarkScreen.screenID});
    renderListEmptyComponent = () => {
        return (<Text style={styles.emptyListTitle }>لا يوجد بيانات لعرضها</Text>)
    };
    onListPullToRefreshFired = () => {
        BookMarkStore.shared.setBookMark(BookMarkStore.shared.bookmark.data)
    };

    onBookMarkListViewCellClicked = (object) => {
        SubCategoryTextScreen.push(object, false)
    };

    render() {
        return(
        // <DrawerComponent>
            <View style={styles.container}>
                {/* <PatternBackground/>
                <Header showBackButton={true} title={'الإشارات المرجعية'}/>
                <View style={{alignItems: 'center'}}>
                    <Search/>
                </View>
                <BookMarkListView
                    data={BookMarkStore.shared.bookmark.data}
                    onBookMarkListViewCellClicked={this.onBookMarkListViewCellClicked}
                    renderListEmptyComponent={this.renderListEmptyComponent()}
                    onListPullToRefreshFired={this.onListPullToRefreshFired}
                /> */}
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
    emptyListTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: AppConstant.Font.SansArabic,
        color: AppConstant.Color.Black,
    },
});
