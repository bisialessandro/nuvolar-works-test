import { GitHubActionTypes, GitHubState} from "./types";
import {UserGitHub} from "../../Model/UserGitHub";
import {SET_FOLLOWERS, SET_REPOSITORIES, SET_USERDETAILS, SET_USERS,SET_ISFETCHING_USER} from "./types";
import {REHYDRATE} from "redux-persist";

const initialState:GitHubState = {
    repositories:[],
    users:[],
    followers:[],
    userDetails:UserGitHub.prototype,
    isFetchingUser:false
};

export function gitHubReducer(
    state = initialState,
    action: GitHubActionTypes
): GitHubState  {
    console.log(action.type,"action type",action.payload);
    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload
            };
        case SET_FOLLOWERS:
            return {
                ...state,
                followers: action.payload
            };
        case SET_USERDETAILS:
            return {
                ...state,
                userDetails: action.payload
            };
        case SET_ISFETCHING_USER:
            return {
                ...state,
                isFetchingUser:action.payload
            };

        default:
            return state;
    }
}
