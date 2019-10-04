import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { sendMessage } from "./chat/actions";
import { AppState } from "./index";
import {GitHubServices} from "../Network/GitHubServices";
import {fetchFollowers, fetchRepositories, fetchUsers} from "./github/actions";

export const thunkFetchUsers = (
    param: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const asyncResp = await GitHubServices.prototype.getUsers("q=language:typeScript");
    console.log("asyncRespo",asyncResp);
    if(asyncResp!=null){
        dispatch(
            fetchUsers( asyncResp)
        );
    }
};

export const thunkFetchRepositories = (
    userName: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const asyncResp = await  GitHubServices.prototype.getFollowers("",userName);
    console.log("asyncRespo",asyncResp);
    if(asyncResp!=null){
        dispatch(
            fetchFollowers( asyncResp)
        );
    }
};



