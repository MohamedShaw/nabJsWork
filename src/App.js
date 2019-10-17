import { Navigation } from 'react-native-navigation';
import AppNavigation from "./common/Navigation";
import Theme from './styles/theme'
import AppConstant from './constant/Constant';
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated'];

const defaultNavOptions = {
  navBarHidden: true,
  // navBarBackgroundColor: AppConstant.Color.White,
  statusBar: {
    visible: true,
    // style: Platform.Version < 23 ? "light" : "dark",
    backgroundColor: "white",
  },
  topBar: {
    drawBehind: true,
    visible: false,
    animate: false,
  },
  layout: {
    backgroundColor: 'white',
    orientation: ['portrait'],
  },
  animations: {
    push: {
      waitForRender: false,
    },
    showModal: {
      waitForRender: false,
    },
  },
  bottomTabs: {
    // currentTabIndex: 0,
    visible: false,
    animate: false,
  },
};

export default class App {
  constructor() {
    Navigation.setDefaultOptions(defaultNavOptions);

    Navigation.events().registerAppLaunchedListener(async () => {
    
      AppNavigation.init('MAIN_STACK', {
        name: 'Splash',
      });
    
    });
  }
}


