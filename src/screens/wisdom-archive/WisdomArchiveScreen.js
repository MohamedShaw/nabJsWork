/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, TextStyle, ActivityIndicator, Linking } from 'react-native';
import ScreenComponent from "../_base/screen-component";
// import Header from "../../components/general/Header";
// import PatternBackground from "../../components/general/PatternBackground";
// import TodayWisdom from "../../components/wisdom-archive/TodayWisdom";
// import WisdomArchiveListView from "../../components/wisdom-archive/WisdomArchiveListView";
// import FooterButton from "../../components/wisdom-archive/FooterButton";
// import TodayWisdomScreen from "../today-wisdom/TodayWisdomScreen";
// import SubCategoryScreen from "../sub-category/SubCategoryScreen";
import AppConstant from "../../constant/Constant";
// import WisdomStore from "../../strores/WisdomStore";
import { observer } from "mobx-react";
// import MainStore from "../../strores/MainStore";
import { vw, vh } from "../../constant/UnitDim";
// import SubCategory from "../../models/SubCategory";
// import Wisdom from "../../models/Wisdom";
// import Search from "../../components/general/Search";
// import DrawerComponent from "../../components/general/DrawerComponent";
import Navigation from "../../common/Navigation";




@observer
export default class WisdomArchiveScreen extends ScreenComponent {

    static screenID = "WisdomArchiveScreen";
    static screenName = "WisdomArchiveScreen";
    static push = () => ScreenComponent.navigator.push({screen: WisdomArchiveScreen.screenID });

    store = new WisdomStore();

    componentDidMount() {
        this.store.firstPageRequest();
    }

    onLoadMoreFired = () => {
        this.store.loadMoreRequest();
    };

    onListPullToRefreshFired = () => {
        this.store.pullToRefreshRequest();
    };

    renderListHeaderComponent = () => {
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Search />
                </View>
                <TodayWisdom wisdom={MainStore.share.getWisdom} />
                <Text style={styles.title}>أرشيف حكم موسوعة النابلسي</Text>
            </View>
        )
    };

    renderListEmptyComponent = () => {
        if (this.store.getEmptyListComponentStatues) {
            return (<Text style={styles.emptyListTitle }>لا يوجد بيانات لعرضها</Text>)
        }
        else {
            return <View />
        }
    };
    renderLoadMoreActivityIndicator = () => {
        if (this.store.getLoadMoreActivityIndicatorStatues) {
            return (<ActivityIndicator style={{ paddingBottom: 6.5 * vh }} size="large" color={AppConstant.Color.Black} />)
        }
        else {
            return <View />
        }
    };
    onWisdomSubscribeButtonClicked = () => {
        Linking.openURL('https://nabulsi.us2.list-manage.com/subscribe?u=01b2f798014acd313fbf935c4&id=c4e54bf8a3')
    };

    onWisdomArchiveListViewCellClicked = (object) => {
        TodayWisdomScreen.push(object);
    };

    render() {
        return (
            // <DrawerComponent>
                <View style={styles.container}>
                    {/* <PatternBackground />
                    <Header showBackButton={true} title={'موسوعة النابلسي للعلوم الإسلامية'} />
                    <WisdomArchiveListView
                        data={this.store.getWisdom}
                        onPullToRefreshFired={this.onListPullToRefreshFired}
                        loadMoreFired={this.onLoadMoreFired}
                        renderListHeaderComponent={this.renderListHeaderComponent()}
                        renderFooterComponent={this.renderLoadMoreActivityIndicator()}
                        renderEmptyComponent={this.renderListEmptyComponent()}
                        pullToRefreshIndicatorVisible={this.store.getPullToRefreshIndicatorStatues}
                        onWisdomArchiveListViewCellClicked={this.onWisdomArchiveListViewCellClicked}
                    />
                    <FooterButton onWisdomSubscribeButtonClicked={this.onWisdomSubscribeButtonClicked} /> */}
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
    title: {
        fontFamily: AppConstant.Font.SansArabicBold,
        fontSize: 16,
        color: AppConstant.Color.Gray,
        textAlign: 'right',
        margin: 3 * vh
    },
});
