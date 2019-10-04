"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function fetchRepositories(user) {
    return {
        type: types_1.GET_REPOSITORIES,
        payload: user
    };
}
exports.fetchRepositories = fetchRepositories;
function fetchUsers(users) {
    return {
        type: types_1.GET_USERS,
        payload: users
    };
}
exports.fetchUsers = fetchUsers;
function fetchFollowers(filter) {
    return {
        type: types_1.GET_FOLLOWERS,
        payload: filter
    };
}
exports.fetchFollowers = fetchFollowers;
