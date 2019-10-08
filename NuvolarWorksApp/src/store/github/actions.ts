import {
    SET_FOLLOWERS,
    SET_ISFETCHING_USER,
    SET_REPOSITORIES,
    SET_USERDETAILS,
    SET_USERS,
    SetFollowersAction,
    SetIsFetchingUser,
    SetRepositoriesAction,
    SetUSerAction,
    SetUSerDetailsAction
} from "./types";
import {Repository} from "../../Model/Repository";
import {UserGitHub} from "../../Model/UserGitHub";

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

export function setUserDetails(userDetails:UserGitHub) :SetUSerDetailsAction{
    return {
        type: SET_USERDETAILS,
        payload:userDetails
    };
}

export function setIsFetchingUser(value:boolean): SetIsFetchingUser {
    return {
        type: SET_ISFETCHING_USER,
        payload:value
    };
}


