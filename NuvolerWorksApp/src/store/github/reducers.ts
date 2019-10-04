import {, GitHubActionTypes, GitHubState} from "./types";
import {UserGitHub} from "../../Model/UserGitHub";
import {SET_FOLLOWERS, SET_REPOSITORIES, SET_USERDETAILS, SET_USERS,SET_ISFETCHING_USER} from "./types";

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
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
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

        default:
            return state;
    }
}
