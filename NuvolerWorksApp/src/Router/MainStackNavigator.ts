import {createStackNavigator} from 'react-navigation-stack';
import {MainScene} from '../Scenes/MainScene';

const MainStackNavigator = createStackNavigator(
    {
        Main:{
            screen: MainScene,

        }
    }
);

export default MainStackNavigator;