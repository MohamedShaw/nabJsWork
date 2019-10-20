/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList, Text, RefreshControl } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import WisdomArchiveListViewCell from "./WisdomArchiveListViewCell";
import AppConstant from "../../constant/Constant";
import Category from "../../models/Category";
import SubCategory from "../../models/SubCategory";
import Wisdom from "../../models/Wisdom";




export default class WisdomArchiveListView extends PureComponent {


    _keyExtractor = (item, index) => index.toString();
    renderRefreshControl = () => (
        <RefreshControl
            refreshing={this.props.pullToRefreshIndicatorVisible}
            tintColor={AppConstant.Color.Black}
            onRefresh={this.props.onPullToRefreshFired}
        />
    );
    _renderItem = ({ item }) => (
        <WisdomArchiveListViewCell
            object={item}
            onWisdomArchiveListViewCellClicked={this.props.onWisdomArchiveListViewCellClicked}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    onEndReachedThreshold={0.01}
                    onEndReached={this.props.loadMoreFired}
                    initialNumToRender={30}
                    renderItem={this._renderItem}
                    // ListHeaderComponent={this.props.renderListHeaderComponent}
                    keyExtractor={this._keyExtractor}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    // contentContainerStyle={styles.contentContainerStyle}
                    refreshControl={this.renderRefreshControl()}
                    // ListEmptyComponent={this.props.renderEmptyComponent}
                />
                {this.props.renderFooterComponent}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 3 * vh,
        // paddingHorizontal: 2.4 * vh,
    },
    list: {
        flex: 1,
    },
    contentContainerStyle: {
        // paddingBottom: 10 * vh,
        // alignItems: 'center'
    },
});
