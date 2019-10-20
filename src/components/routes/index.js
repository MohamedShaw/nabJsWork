import React from 'react';
import { Navigation } from 'react-native-navigation';
import { observer } from 'mobx-react'
import Provider from '../../utils/Provider'
import stores from '../../stores';

//Route Imports
import HomeView from './HomeView';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import MainScreen from "../../screens/main/MainScreen";
import Splash from "../../screens/main/Splash";
import SideMenuScreen from "../../screens/side-menu/SideMenuScreen";
import TodayWisdomScreen from "../../screens/today-wisdom/TodayWisdomScreen";
import WisdomArchiveScreen from "../../screens/wisdom-archive/WisdomArchiveScreen";
import CategoryScreen from "../../screens/category/CategoryScreen";
import SubCategoryScreen from "../../screens/sub-category/SubCategoryScreen";
import ContactUsScreen from "../../screens/contact-us/ContactUsScreen";
import NewScreen from '../../screens/new/NewScreen';
import NewFatwaScreen from '../../screens/new-fatwa/NewFatwaScreen';
import QuestionScreen from '../../screens/question/QuestionScreen';
import SearchScreen from '../../screens/search/SearchScreen';
import SoundChannelScreen from '../../screens/sound-channel/SoundChannelScreen';
import SubCategoryTextScreen from '../../screens/sub-category-text/SubCategoryTextScreen';
import SubCategoryVideoScreen from '../../screens/sub-category-video/SubCategoryVideoScreen';
import VideoChannelScreen from '../../screens/video-channel/VideoChannelScreen';
import BookMarkScreen from '../../screens/book-mark/BookMarkScreen';

export default routes = {
  'App.Home': HomeView,
  'App.Login': LoginView,
  'App.Register': RegisterView,
  'MainScreen':MainScreen,
  'Splash':Splash,
  "SideMenuScreen":SideMenuScreen,
  "TodayWisdomScreen":TodayWisdomScreen,
  "WisdomArchiveScreen":WisdomArchiveScreen,
  "CategoryScreen":CategoryScreen,
  "SubCategoryScreen":SubCategoryScreen,
  "ContactUsScreen":ContactUsScreen,
  "NewScreen":NewScreen,
  "NewFatwaScreen":NewFatwaScreen,
  "QuestionScreen":QuestionScreen,
  "SearchScreen":SearchScreen,
  "SoundChannelScreen":SoundChannelScreen,
  "SubCategoryTextScreen":SubCategoryTextScreen,
  "SubCategoryVideoScreen":SubCategoryVideoScreen,
  "VideoChannelScreen":VideoChannelScreen,
  "BookMarkScreen":BookMarkScreen


}

// Register all screens of the app (including internal ones)
export function registerScreens() {
  for (let r in routes) {
    Navigation.registerComponent(r, () => sceneCreator(routes[r], stores))
  }
}
  

function sceneCreator(sceneComp, store) {
  @observer class SceneWrapper extends React.Component {
    static options(passProps) {
      return sceneComp.options ? sceneComp.options(passProps) : {}
    }

    render() {
      return (
        <Provider store={store}>
          {React.createElement(sceneComp, this.props)}
        </Provider>
      )
    }
  }
  return SceneWrapper
}
