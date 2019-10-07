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
var store_1 = __importDefault(require("./src/store"));
var react_redux_1 = require("react-redux");
var SwitchNavigator_1 = __importDefault(require("./src/Router/SwitchNavigator"));
var react_navigation_1 = require("react-navigation");
var store = store_1.default();
var AppNavigator = react_navigation_1.createAppContainer(SwitchNavigator_1.default);
var App = function () {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(AppNavigator, null)));
};
exports.default = App;
