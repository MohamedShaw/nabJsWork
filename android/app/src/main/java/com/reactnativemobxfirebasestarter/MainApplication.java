package com.reactnativemobxfirebasestarter;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.ReactGateway;
import com.airbnb.android.react.lottie.LottiePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.airship.customwebview.CustomWebViewPackage;
import com.christopherdro.RNPrint.RNPrintPackage;
// import com.rumax.reactnative.pdfviewer.PDFViewPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import ui.toasty.RNToastyPackage;
import com.github.yamill.orientation.OrientationPackage;
// import com.brentvatne.react.ReactVideoPackage;
import cl.json.RNSharePackage;
import com.amsoft.RNProgressHUB.RNProgressHUBPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

   @Override
     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }

  

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new LottiePackage(),
                new LinearGradientPackage(),
                new CustomWebViewPackage(),
                new RNPrintPackage(),
                // new PDFViewPackage(),
                new FastImageViewPackage(),
                new RNToastyPackage(),
                new OrientationPackage(),
                new RNSharePackage(),
                new RNProgressHUBPackage(),
                new BlurViewPackage(),
                new VectorIconsPackage()
        );
    }

    @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }

     @Override
     public String getJSMainModuleName() {
         return "index";
     }
}
