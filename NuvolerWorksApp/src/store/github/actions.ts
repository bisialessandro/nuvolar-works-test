import {
    GET_FOLLOWERS,
    GET_REPOSITORIES,
    GET_USERS,
    GetFollowersAction,
    GetRepositoriesAction,
    GetUSerAction
} from "./types";
import {Repository} from "../../Model/Repository";
import {UserGitHub} from "../../Model/UserGitHub";
import {GitHubServices} from "../../Network/GitHubServices";

export function fetchRepositories(user:Array<Repository>) :GetRepositoriesAction {


    return {
        type: GET_REPOSITORIES,
        payload: user
    };
}

export function fetchUsers(users:Array<UserGitHub>) :GetUSerAction{



    return {
            type: GET_USERS,
            payload:users
        };



}

export function fetchFollowers(filter:Array<UserGitHub>) :GetFollowersAction{
    return {
        type: GET_FOLLOWERS,
        payload:filter
    };
}
