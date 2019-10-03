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
var ArrowUp = require('../Assets/images/ArrowUp.png');
var ArrowDown = require('../Assets/images/ArrowDown.png');
var ShowHiddenComponent = /** @class */ (function (_super) {
    __extends(ShowHiddenComponent, _super);
    function ShowHiddenComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.click = function () {
            _this.setState({ isClicked: !_this.state.isClicked });
        };
        _this.state = {
            isClicked: false
        };
        return _this;
    }
    ShowHiddenComponent.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.RowTitleFlat, onPress: function () { return _this.click(); } },
                react_1.default.createElement(react_native_1.View, { style: styles.ViewColumnCenter },
                    react_1.default.createElement(react_native_1.Text, { style: styles.TextTitleFlat }, this.props.title)),
                react_1.default.createElement(react_native_1.View, { style: styles.ViewColumnCenter },
                    react_1.default.createElement(react_native_1.View, { style: styles.ViewAlignRight },
                        react_1.default.createElement(react_native_1.Image, { source: this.state.isClicked ? ArrowDown : ArrowUp, style: styles.HideableImage })))),
            this.state.isClicked && this.props.renderItem()));
    };
    return ShowHiddenComponent;
}(react_1.default.Component));
exports.ShowHiddenComponent = ShowHiddenComponent;
// styles
var styles = react_native_1.StyleSheet.create({
    RowTitleFlat: {
        flexDirection: 'row',
        marginTop: 30,
        padding: 20,
        flex: 1,
        alignContent: 'center',
        borderRadius: 10,
        backgroundColor: Colors_1.COLOR_NEGATIVE,
    },
    ViewColumnCenter: {
        flexDirection: 'column',
        alignContent: 'flex-end',
        flex: 1
    },
    HideableImage: {
        alignContent: 'flex-end',
    },
    ViewAlignRight: {
        flexDirection: 'row-reverse',
    },
    TextTitleFlat: {
        fontSize: 19,
        color: Colors_1.COLOR_TEXT,
    },
});
