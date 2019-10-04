import {, GitHubActionTypes, GitHubState} from "./types";
import {UserGitHub} from "../../Model/UserGitHub";
import {SET_USERS} from "./types";
import {SET_REPOSITORIES} from "./types";
import {SET_FOLLOWERS} from "./types";


const initialState:GitHubState = {
    repositories:[],
    users:[],
    followers:[]
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
        default:
            return state;
    }
}
