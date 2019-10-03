"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
//import {MainScene} from './src/Scenes/MainScene';
//import {SafeAreaView} from "react-native";
var SwitchNavigator_1 = __importDefault(require("./src/Router/SwitchNavigator"));
var react_navigation_1 = require("react-navigation");
var AppNavigator = react_navigation_1.createAppContainer(SwitchNavigator_1.default);
var App = function () {
    return (react_1.default.createElement(AppNavigator, null));
};
exports.default = App;
