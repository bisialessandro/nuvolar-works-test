"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Colors_1 = require("../Styles/Colors");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.filterResultsCallback = function (text) {
            _this.props.callback(text);
        };
        return _this;
    }
    SearchBar.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, { style: styles.root },
            react_1.default.createElement(react_native_1.TextInput, { style: styles.TextInput, onChangeText: function (text) { return _this.filterResultsCallback(text); } })));
    };
    return SearchBar;
}(react_1.default.Component));
exports.SearchBar = SearchBar;
// styles
var styles = react_native_1.StyleSheet.create({
    root: {
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
    TextInput: {
        marginTop: 0,
        width: '80%',
        borderBottomWidth: 2,
        borderBottomColor: Colors_1.COLOR_HIGHLIGHT,
        backgroundColor: Colors_1.COLOR_NEGATIVE,
        padding: 10
    }
});
