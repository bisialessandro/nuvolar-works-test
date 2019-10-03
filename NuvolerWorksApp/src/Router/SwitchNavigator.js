"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var MainStackNavigator_1 = __importDefault(require("./MainStackNavigator"));
var SwitchNavigator = react_navigation_1.createSwitchNavigator({
    Home: MainStackNavigator_1.default
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerMode: 'none',
    }
});
exports.default = MainStackNavigator_1.default;
