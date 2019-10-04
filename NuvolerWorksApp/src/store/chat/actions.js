"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function sendMessage(newMessage) {
    return {
        type: types_1.SEND_MESSAGE,
        payload: newMessage
    };
}
exports.sendMessage = sendMessage;
function deleteMessage(timestamp) {
    return {
        type: types_1.DELETE_MESSAGE,
        meta: {
            timestamp: timestamp
        }
    };
}
exports.deleteMessage = deleteMessage;
