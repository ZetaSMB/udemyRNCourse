import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";
const { setDefaultOptions } = require('./src/commons/Options')

const store = configureStore();

// Register Screens
Navigation.registerComponentWithRedux(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  Provider,
  store
);
Navigation.registerComponent(
  "awesome-places.SideDrawer",
  () => SideDrawer
);

Navigation.events().registerAppLaunchedListener(() => {
  setDefaultOptions();
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "awesome-places.AuthScreen",
            title: "Login"            
          }
      }]
      }
    }    
  });
});