import React, {Component} from 'react'
// import RNProgressHUB from 'react-native-progresshub';
// import { RNToasty } from 'react-native-toasty'
import AppConstant from "../../constant/Constant";
import Navigation from "../../common/Navigation";

class ScreenComponent extends Component {

     static navigator;
     static drawer;



   
 
    static navigatorStyle = {
         navBarHidden: true,
         navBarBackgroundColor: AppConstant.Color.White
     };
      static pop = () => {
         ScreenComponent.navigator.pop()
     };
      static dismissModal = () => {
         ScreenComponent.navigator.dismissModal()
     };
 
      static closeDrawer = () => {
         ScreenComponent.navigator.toggleDrawer({
             side: 'right',
             to: 'close'
         });
     };
 
      static toggleDrawer = () => {
         ScreenComponent.navigator.toggleDrawer({
             side: 'right',
             animated: true,
         });
     };
 
      static resetToRoot = () => {
         ScreenComponent.navigator.resetTo({screen: "MainScreen"});
     };
 
 
      static popToRoot = () => {
         ScreenComponent.navigator.popToRoot();
     };


     static showActivityIndicator() {
        // RNProgressHUB.showSpinIndeterminate();
    };

     static hideActivityIndicator() {
        // RNProgressHUB.dismiss();
    };


     static showToast(message) {
        // RNToasty.Normal({title: message});
    };

}

export default ScreenComponent;