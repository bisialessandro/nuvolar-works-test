import {UserGitHub} from "../../Model/UserGitHub";
import {Repository} from "../../Model/Repository";


export interface GitHubState{
    repositories:Array<Repository>,
    users:Array<UserGitHub>,
    followers:Array<UserGitHub>
}
// Describing the different ACTION NAMES available
export const GET_USERS = "GET_USERS";
export const GET_FOLLOWERS = "GET_FOLLOWERS";
export const GET_REPOSITORIES = "GET_REPOSITORIES";

interface GetUSerAction {
    type: typeof GET_USERS;
    payload: Array<UserGitHub>;
}

interface GetRepositoriesAction {
    type: typeof GET_REPOSITORIES;
    payload:Array<Repository>

}

interface GetFollowersAction {
    type: typeof GET_FOLLOWERS;
    payload: Array<UserGitHub>;
}

export type GitHubActionTypes = GetUSerAction | GetRepositoriesAction |GetFollowersAction;
