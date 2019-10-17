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
// import io.invertase.firebase.RNFirebasePackage;
// import io.invertase.firebase.auth.RNFirebaseAuthPackage;
// import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;

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
                new LinearGradientPackage()
                // new RNFirebasePackage(),
                // new RNFirebaseAuthPackage(),
                // new RNFirebaseFirestorePackage()
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
