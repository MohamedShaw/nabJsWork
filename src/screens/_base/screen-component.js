import React, {Component} from 'react'
// import RNProgressHUB from 'react-native-progresshub';
// import { RNToasty } from 'react-native-toasty'
import AppConstant from "../../constant/Constant";
import Navigation from "../../common/Navigation";

class ScreenComponent extends Component {

     static navigato;
     static drawer;



     static toggleDrawer = () => {
      
        Navigation.openMenu()
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