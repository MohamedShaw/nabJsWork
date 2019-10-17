import  {Navigation}  from 'react-native-navigation';
import Theme from './styles/theme'
import AppConstant from './constant/Constant';
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated'];


export default class App {
  constructor() {
   
    Navigation.startSingleScreenApp({
      screen: {
        screen: "Splash",
        navigationBarStyle : {navBarHidden: true },

      },
    
    });
  }
}


