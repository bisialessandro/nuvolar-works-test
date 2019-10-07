import {createSwitchNavigator} from "react-navigation";
import MainStackNavigator from "./MainStackNavigator";

 const SwitchNavigator = createSwitchNavigator(
    {
                Home:MainStackNavigator
    },
     {
         initialRouteName: 'Home',
         navigationOptions: {
             headerMode: 'none',
         }
     }
);

 export default MainStackNavigator;