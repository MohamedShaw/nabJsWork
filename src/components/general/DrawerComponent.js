/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import SideMenuScreen from "../../screens/side-menu/SideMenuScreen";
import Drawer from 'react-native-drawer'
import ScreenComponent from "../../screens/_base/screen-component";




export default class DrawerComponent extends PureComponent {

    render() {
        return (
            <Drawer
                ref={(ref) => ScreenComponent.drawer = ref}
                content={<SideMenuScreen />}
                type="overlay"
                tapToClose={true}
                side={'right'}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
            >
                {this.props.children}
            </Drawer>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
