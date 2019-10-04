import { GET_FOLLOWERS, GET_REPOSITORIES,GET_USERS } from "./types";
import {Repository} from "../../Model/Repository";
import {UserGitHub} from "../../Model/UserGitHub";
import {GitHubServices} from "../../Network/GitHubServices";

export function getRepositories(user:string) {

    return {
        type: GET_REPOSITORIES,
        payload: user
    };
}

export function getUsers(user:string) {


    return {
        type: GET_USERS,
        payload:user
    };
}

export function getFollowers(filter:string) {
    return {
        type: GET_FOLLOWERS,
        payload:filter
    };
}
