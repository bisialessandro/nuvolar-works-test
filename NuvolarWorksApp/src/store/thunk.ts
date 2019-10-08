import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { sendMessage } from "./chat/actions";
import { AppState } from "./index";
import {GitHubServices} from "../Network/GitHubServices";
import {setFollowers, setIsFetchingUser, setRepositories, setUsers} from "./github/actions";

export const thunkFetchUsers = (
    param: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(setIsFetchingUser(true));
    const asyncResp = await GitHubServices.prototype.getUsers(param);
    console.log("asyncRespo",asyncResp);
    if(asyncResp!=null){
        dispatch(
            setUsers( asyncResp)
        );

        dispatch(setIsFetchingUser(false));
    }
};

export const thunkFetchRepositories = (
    userName: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const asyncResp = await  GitHubServices.prototype.getRepositories("",userName);
    console.log("asyncRespo",asyncResp);
    if(asyncResp!=null){
        dispatch(
            setRepositories( asyncResp)
        );
    }
};


export const thunkFetchFollowers = (
    userName: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const asyncResp = await  GitHubServices.prototype.getFollowers("",userName);
    console.log("asyncRespo",asyncResp);
    if(asyncResp!=null){
        dispatch(
            setFollowers( asyncResp)
        );
    }
};




