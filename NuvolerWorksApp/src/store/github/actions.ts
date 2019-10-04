import {

    SetFollowersAction,
    SetRepositoriesAction,
    SetUSerAction, SET_FOLLOWERS, SET_REPOSITORIES, SET_USERS
} from "./types";
import {Repository} from "../../Model/Repository";
import {UserGitHub} from "../../Model/UserGitHub";
import {GitHubServices} from "../../Network/GitHubServices";

export function setRepositories(user:Array<Repository>) :SetRepositoriesAction {
    return {
        type: SET_REPOSITORIES,
        payload: user
    };
}

export function setUsers(users:Array<UserGitHub>) :SetUSerAction{
    return {
            type: SET_USERS,
            payload:users
        };

}

export function setFollowers(filter:Array<UserGitHub>) :SetFollowersAction{
    return {
        type: SET_FOLLOWERS,
        payload:filter
    };
}
