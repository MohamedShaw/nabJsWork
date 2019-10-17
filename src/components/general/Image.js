import React, {PureComponent} from "react";
import {
    ActivityIndicator,
    ImageBackground,
    StyleSheet,
} from "react-native";
import FastImage, {FastImageProperties} from 'react-native-fast-image';
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import AppConstant from "../../constant/Constant";




@observer
class Image extends PureComponent {

    imageStore = new ImageStore();


    renderActivityIndicator = () => {
        if (this.imageStore.activityIndicatorVisible) {
            return (
                <ActivityIndicator
                    color={"#000"}
                    size={this.props.activityIndicatorSize}
                />
            )
        }
    };
    renderPlaceholderImage = (activityIndicator) => {
        if (this.imageStore.placeholderVisible) {
            return (
                <ImageBackground
                    source={AppConstant.Placeholder.source}
                    style={[styles.activityIndicatorView]}
                >
                    {activityIndicator()}
                </ImageBackground>
            )
        }
    };
    onLoadImageStart = () => {
        this.imageStore.showPlaceholder();
        this.imageStore.showActivityIndicator()
    };
    onLoadImageFails = () => {
        this.imageStore.hideActivityIndicator()

    };
    onLoadImageSucceeds = () => {
        this.imageStore.hidePlaceholder();
        this.imageStore.hideActivityIndicator();
    };

    render() {
        return (
            <FastImage
                onError={this.onLoadImageFails}
                onLoadStart={this.onLoadImageStart}
                onLoad={this.onLoadImageSucceeds}
                {...this.props}
            >
                {this.renderPlaceholderImage(this.renderActivityIndicator)}
            </FastImage>
        )
    }
}

const styles = StyleSheet.create({
    activityIndicatorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Image


class ImageStore {

    @observable activityIndicatorVisible;
    @observable placeholderVisible;


    @action showActivityIndicator = () => {
        this.activityIndicatorVisible = true
    };

    @action hideActivityIndicator = () => {
        this.activityIndicatorVisible = false
    };

    @action showPlaceholder = () => {
        this.placeholderVisible = true
    };

    @action hidePlaceholder = () => {
        this.placeholderVisible = false
    }

}

export default new ImageStore()