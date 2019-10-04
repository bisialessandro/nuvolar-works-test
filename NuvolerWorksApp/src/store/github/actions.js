"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function getRepositories(user) {
    return {
        type: types_1.GET_REPOSITORIES,
        payload: user
    };
}
exports.getRepositories = getRepositories;
function getUsers(user) {
    return {
        type: types_1.GET_USERS,
        payload: user
    };
}
exports.getUsers = getUsers;
function getFollowers(filter) {
    return {
        type: types_1.GET_FOLLOWERS,
        payload: filter
    };
}
exports.getFollowers = getFollowers;
