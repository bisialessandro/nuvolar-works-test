import {UserGitHub} from "../../Model/UserGitHub";
import {Repository} from "../../Model/Repository";


export interface GitHubState{
    repositories:Array<Repository>,
    users:Array<UserGitHub>,
    followers:Array<UserGitHub>,
    userDetails:UserGitHub,
    isFetchingUser:false
}
// Describing the different ACTION NAMES available
export const SET_USERS = "SET_USERS";
export const SET_FOLLOWERS = "SET_FOLLOWERS";
export const SET_REPOSITORIES = "SET_REPOSITORIES";
export const SET_USERDETAILS = "SET_USERDETAILS";
export const SET_ISFETCHING_USER = " SET_ISFETCHING_USER";

export interface SetUSerDetailsAction {
    type: typeof SET_USERDETAILS;
    payload: UserGitHub;
}

export interface SetUSerAction {
    type: typeof SET_USERS;
    payload: Array<UserGitHub>;
}

export interface SetRepositoriesAction {
    type: typeof SET_REPOSITORIES;
    payload:Array<Repository>

}

export interface SetFollowersAction {
    type: typeof SET_FOLLOWERS;
    payload: Array<UserGitHub>;
}

export type GitHubActionTypes = SetUSerAction | SetRepositoriesAction |SetFollowersAction|SetUSerDetailsAction ;
