import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { gitHubReducer } from "./github/reducers";
import {CONFIG_REDUX_PERSIST} from '../Config/config.redux.persist';
import AsyncStorage from '@react-native-community/async-storage';
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";



const rootReducer = combineReducers({

    github: gitHubReducer
});

const  persistedReducer = persistReducer({
    key: CONFIG_REDUX_PERSIST.REDUX_CACHE_KEY,
    //blacklist: CONFIG_REDUX_PERSIST.BLACKLIST,
    whitelist: CONFIG_REDUX_PERSIST.WHITELIST,
    storage:AsyncStorage,
    stateReconciler: autoMergeLevel1 ,

},rootReducer);


//const persistedReducer = persistReducers(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        persistedReducer,
        composeWithDevTools(middleWareEnhancer)
    );


return store;
}

export const store = configureStore();

export const persistor =  persistStore(store);

