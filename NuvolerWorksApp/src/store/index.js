"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_devtools_extension_1 = require("redux-devtools-extension");
var reducers_1 = require("./chat/reducers");
var reducers_2 = require("./github/reducers");
var rootReducer = redux_1.combineReducers({
    chat: reducers_1.chatReducer,
    github: reducers_2.gitHubReducer
});
function configureStore() {
    var middlewares = [redux_thunk_1.default];
    var middleWareEnhancer = redux_1.applyMiddleware.apply(void 0, middlewares);
    var store = redux_1.createStore(rootReducer, redux_devtools_extension_1.composeWithDevTools(middleWareEnhancer));
    return store;
}
exports.default = configureStore;
