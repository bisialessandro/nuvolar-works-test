"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function setRepositories(user) {
    return {
        type: types_1.SET_REPOSITORIES,
        payload: user
    };
}
exports.setRepositories = setRepositories;
function setUsers(users) {
    return {
        type: types_1.SET_USERS,
        payload: users
    };
}
exports.setUsers = setUsers;
function setFollowers(filter) {
    return {
        type: types_1.SET_FOLLOWERS,
        payload: filter
    };
}
exports.setFollowers = setFollowers;
function setUserDetails(userDetails) {
    return {
        type: types_1.SET_USERDETAILS,
        payload: userDetails
    };
}
exports.setUserDetails = setUserDetails;
function setIsFetchingUser(value) {
    return {
        type: types_1.SET_ISFETCHING_USER,
        payload: value
    };
}
exports.setIsFetchingUser = setIsFetchingUser;
