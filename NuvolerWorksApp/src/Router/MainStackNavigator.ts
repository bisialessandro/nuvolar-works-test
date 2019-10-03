import {createStackNavigator} from 'react-navigation-stack';
import {MainScene} from '../Scenes/MainScene';
import {DetailUserPage} from "../Scenes/DetailUserPage";

const MainStackNavigator = createStackNavigator(
    {
        Main:{
            screen: MainScene,

        },
        DetailUser:{
            screen:DetailUserPage
        }
    }
);

export default MainStackNavigator;