import {GET_FOLLOWERS, GET_REPOSITORIES, GET_USERS, GitHubActionTypes, GitHubState} from "./types";
import {UserGitHub} from "../../Model/UserGitHub";


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
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case GET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload
            };
        case GET_FOLLOWERS:
            return {
                ...state,
                followers: action.payload
            };
        default:
            return state;
    }
}
