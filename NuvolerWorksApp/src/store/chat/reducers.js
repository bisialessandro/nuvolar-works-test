"use strict";
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
                messages: state.messages.concat([action.payload])
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
