/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import WisdomModel from "../../models/Wisdom";


export default class WisdomImage extends PureComponent {

    componentDidMount() {
        console.log("wisdom data ==>>", this.props.wisdom.image_url);

    }

    render() {
        const image = this.props.wisdom.image_url

        return (
            <View style={styles.container}>
                <Image style={{ width: 300, height: 161.5 }} source={{ uri: `https://www.alhudagroup-tr.com/web/uploads/wisdom_images/${image}` }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 3.2 * vh,
    }
});
