"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_devtools_extension_1 = require("redux-devtools-extension");
var reducers_1 = require("./github/reducers");
var config_redux_persist_1 = require("../Config/config.redux.persist");
var async_storage_1 = __importDefault(require("@react-native-community/async-storage"));
var persistStore_1 = __importDefault(require("redux-persist/es/persistStore"));
var persistReducer_1 = __importDefault(require("redux-persist/es/persistReducer"));
var autoMergeLevel1_1 = __importDefault(require("redux-persist/es/stateReconciler/autoMergeLevel1"));
var rootReducer = redux_1.combineReducers({
    github: reducers_1.gitHubReducer
});
var persistedReducer = persistReducer_1.default({
    key: config_redux_persist_1.CONFIG_REDUX_PERSIST.REDUX_CACHE_KEY,
    //blacklist: CONFIG_REDUX_PERSIST.BLACKLIST,
    whitelist: config_redux_persist_1.CONFIG_REDUX_PERSIST.WHITELIST,
    storage: async_storage_1.default,
    stateReconciler: autoMergeLevel1_1.default,
}, rootReducer);
function configureStore() {
    var middlewares = [redux_thunk_1.default];
    var middleWareEnhancer = redux_1.applyMiddleware.apply(void 0, middlewares);
    var store = redux_1.createStore(persistedReducer, redux_devtools_extension_1.composeWithDevTools(middleWareEnhancer));
    return store;
}
exports.default = configureStore;
exports.store = configureStore();
exports.persistor = persistStore_1.default(exports.store);
