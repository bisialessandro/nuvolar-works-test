"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var initialState = {
    messages: []
};
function chatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.SEND_MESSAGE:
            return {
                messages: __spreadArrays(state.messages, [action.payload])
            };
        case types_1.DELETE_MESSAGE:
            return {
                messages: state.messages.filter(function (message) { return message.timestamp !== action.meta.timestamp; })
            };
        default:
            return state;
    }
}
exports.chatReducer = chatReducer;
