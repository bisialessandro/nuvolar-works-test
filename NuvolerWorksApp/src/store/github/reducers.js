"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var UserGitHub_1 = require("../../Model/UserGitHub");
var initialState = {
    repositories: [],
    users: [],
    followers: []
};
function gitHubReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.GET_USERS:
            return {
                users: UserGitHub_1.UserGitHub.prototype.toUser(action.payload)
            };
        case types_1.GET_REPOSITORIES:
            return {
                repositories: action.payload
            };
        case types_1.GET_FOLLOWERS:
            return {
                followers: action.payload
            };
        default:
            return state;
    }
}
exports.gitHubReducer = gitHubReducer;
