"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var types_2 = require("./types");
var types_3 = require("./types");
var initialState = {
    repositories: [],
    users: [],
    followers: []
};
function gitHubReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.SET_USERS:
            return __assign(__assign({}, state), { users: action.payload });
        case types_2.SET_REPOSITORIES:
            return __assign(__assign({}, state), { repositories: action.payload });
        case types_3.SET_FOLLOWERS:
            return __assign(__assign({}, state), { followers: action.payload });
        default:
            return state;
    }
}
exports.gitHubReducer = gitHubReducer;
