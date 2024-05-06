import React from "react";
import { View, Text } from "react-native";
import Contacts from "./TH_2/screens/Contacts";
import Profile from "./TH_2/screens/Profile";
import DrawerNavigator from "./TH_2/routes";
import Favorites from "./TH_2/screens/Favorites";
import User from "./TH_2/screens/User";
import Options from "./TH_2/screens/Options";
import Store from "./TH_2/store";
import { Provider } from "react-redux";

const App=()=>
{
  return(
    <Provider store={Store}>
    <DrawerNavigator/>
    </Provider>
    );
}
export default App;