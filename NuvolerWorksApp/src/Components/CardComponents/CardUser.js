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
var Colors_1 = require("../../Styles/Colors");
var emptyAvatar = require('../../Assets/images/EmptyAvatar.jpeg');
var RightArrow = require('../../Assets/images/RightArrow.png');
var Font_js_1 = require("../../Styles/Font.js");
var CardUser = /** @class */ (function (_super) {
    __extends(CardUser, _super);
    function CardUser(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            avatar: emptyAvatar,
        };
        return _this;
    }
    CardUser.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, { style: styles.CardContainer },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: (function () { return _this.props.onClick(_this.props.user); }) },
                react_1.default.createElement(react_native_1.View, { style: styles.MainRow },
                    react_1.default.createElement(react_native_1.View, { style: styles.leftSizeView },
                        react_1.default.createElement(react_native_1.Image, { source: { uri: this.props.user.avatar_url }, style: styles.ImgStyle }),
                        react_1.default.createElement(react_native_1.View, { style: styles.leftSizeView },
                            react_1.default.createElement(react_native_1.Text, { style: styles.textTitleDescription }, "Username: "),
                            react_1.default.createElement(react_native_1.Text, { style: styles.textTitleDescription }, this.props.user.login))),
                    this.props.showArrow && react_1.default.createElement(react_native_1.Image, { source: RightArrow, style: styles.ImgStyle })))));
    };
    return CardUser;
}(react_1.default.Component));
exports.CardUser = CardUser;
var styles = react_native_1.StyleSheet.create({
    CardContainer: {
        margin: 5,
        flex: 1,
        height: '15%',
        backgroundColor: Colors_1.COLOR_HIGHLIGHT,
        flexDirection: 'column',
        borderRadius: 10,
    },
    CardContainerSelcted: {
        margin: 5,
        flex: 1,
        flexDirection: 'column',
    },
    Img: {
        width: '5%',
        height: '10px'
    },
    Row: {
        margin: 20,
        flexDirection: 'row'
    },
    MainRow: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftSizeView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    rightSizeView: {
        justifyContent: 'flex-end'
    },
    spaceBetween: {},
    ImgStyle: {
        width: 40,
        height: 40
    },
    ImgStyleArrow: {
        height: 40,
        width: 40,
    },
    textTitleDescription: {
        fontWeight: Font_js_1.FONT_TITLE_WEIGHT,
        paddingLeft: 10
    },
});
exports.default = styles;
