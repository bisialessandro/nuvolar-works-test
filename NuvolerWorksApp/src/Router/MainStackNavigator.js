"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_stack_1 = require("react-navigation-stack");
var MainScene_1 = require("../Scenes/MainScene");
var MainStackNavigator = react_navigation_stack_1.createStackNavigator({
    Main: {
        screen: MainScene_1.MainScene,
    }
});
exports.default = MainStackNavigator;
