import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { gitHubReducer } from "./github/reducers";
import { persistCombineReducers } from 'redux-persist'
import {CONFIG_REDUX_PERSIST} from '../Config/config.redux.persist';

const persistConfig = {
    key: CONFIG_REDUX_PERSIST.REDUX_CACHE_KEY,
    //blacklist: CONFIG_REDUX_PERSIST.BLACKLIST,
    whitelist: CONFIG_REDUX_PERSIST.WHITELIST,
};

//const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

const rootReducer = combineReducers({

    github: gitHubReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

return store;
}
