"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_stack_1 = require("react-navigation-stack");
var MainScene_1 = __importDefault(require("../Scenes/MainScene"));
var DetailUserPage_1 = __importDefault(require("../Scenes/DetailUserPage"));
var MainStackNavigator = react_navigation_stack_1.createStackNavigator({
    Main: {
        screen: MainScene_1.default,
    },
    DetailUser: {
        screen: DetailUserPage_1.default
    }
});
exports.default = MainStackNavigator;
