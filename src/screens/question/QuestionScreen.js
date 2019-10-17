/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, TextStyle, ActivityIndicator } from 'react-native';
import ScreenComponent from "../_base/screen-component";
// import Header from "../../components/general/Header";
// import PatternBackground from "../../components/general/PatternBackground";
// import Instructions from "../../components/question/Instructions";
// import QuestionListView from "../../components/question/QuestionListView";
// import FooterButton from "../../components/question/FooterButton";
// import NewFatwaScreen from "../new-fatwa/NewFatwaScreen";
// import NewStore from "../../strores/NewStore";
import AppConstant from "../../constant/Constant";
import { observer } from "mobx-react";
// import NewListView from "../../components/new/NewListView";
// import QuestionStore from "../../strores/QuestionStore";
// import SubCategory from "../../models/SubCategory";
// import SubCategoryTextScreen from "../sub-category-text/SubCategoryTextScreen";
// import DrawerComponent from "../../components/general/DrawerComponent";
// import SubCategoryListView from "../../components/sub-category/SubCategoryListView";
// import { vw, vh } from "../../constant/UnitDim"
// import CategoryScreen from "../category/CategoryScreen";
// import getCategoryImage from "../../utils/Image";



@observer
export default class QuestionScreen extends ScreenComponent {
    static screenID = "QuestionScreen";
    static screenName = "QuestionScreen";
    static push = () =>  Navigation.push({ name: QuestionScreen.screenID });

    store = new QuestionStore();

    componentDidMount() {
        this.store.firstPageRequest();
    }

    onLoadMoreFired = () => {
        this.store.loadMoreRequest();
    };

    onListPullToRefreshFired = () => {
        this.store.pullToRefreshRequest();
    };

    renderHeaderList = () => {
        return (
            <Instructions />
        )
    };
    renderLoadMoreActivityIndicator = () => {
        if (this.store.getLoadMoreActivityIndicatorStatues) {
            return (<ActivityIndicator style={{ marginBottom: 8 * vh }} size="large" color={AppConstant.Color.Black} />)
        }
        else {
            return <View />
        }
    };
    renderListEmptyComponent = () => {
        if (this.store.getEmptyListComponentStatues) {
            return (<Text style={styles.emptyListTitle }>لا يوجد بيانات لعرضها</Text>)
        }
        else {
            return <View />
        }
    };

    onListViewCellClicked = (object) => {
        SubCategoryTextScreen.push(object, false)
    };
    onPressNewFatwaButtonClicked = () => {
        NewFatwaScreen.push()
    };
    onPressFatwaButtonClicked = () => {
        CategoryScreen.push(1251, 'الفتاوى', getCategoryImage(1251))
    };


    render() {
        return (
            // <DrawerComponent>
                <View style={styles.container}>
                    {/* <PatternBackground />
                    <Header showBackButton={true} title={'الأسئلة و الفتاوى'} />
                    <QuestionListView
                        data={this.store.getQuestion}
                        renderHeaderList={this.renderHeaderList()}
                        onLoadMoreFired={this.onLoadMoreFired}
                        renderFooterComponent={this.renderLoadMoreActivityIndicator()}
                        onListViewCellClicked={this.onListViewCellClicked}
                        onPullToRefreshFired={this.onListPullToRefreshFired}
                        renderEmptyComponent={this.renderListEmptyComponent()}
                        pullToRefreshIndicatorVisible={this.store.getPullToRefreshIndicatorStatues}

                    />
                    <FooterButton onPressFatwaButtonClicked={this.onPressFatwaButtonClicked}
                        onPressNewFatwaButtonClicked={this.onPressNewFatwaButtonClicked} /> */}
                </View>
            // </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppConstant.Color.White,
        flex: 1,
    },
    emptyListTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: AppConstant.Font.SansArabic,
        color: AppConstant.Color.Black,
    },
});
