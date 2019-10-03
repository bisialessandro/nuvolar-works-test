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
var Font_1 = require("../../Styles/Font");
var CardDetailRow = /** @class */ (function (_super) {
    __extends(CardDetailRow, _super);
    function CardDetailRow(props) {
        return _super.call(this, props) || this;
    }
    CardDetailRow.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.CardContainer },
            react_1.default.createElement(react_native_1.View, { style: styles.leftSizeView },
                react_1.default.createElement(react_native_1.Text, { style: styles.textTitle }, this.props.title),
                react_1.default.createElement(react_native_1.Text, { style: styles.textDescription }, this.props.value))));
    };
    return CardDetailRow;
}(react_1.default.Component));
exports.CardDetailRow = CardDetailRow;
var styles = react_native_1.StyleSheet.create({
    CardContainer: {
        borderWidth: 0.5,
        flex: 1,
        height: '15%',
        backgroundColor: Colors_1.COLOR_NEGATIVE,
        flexDirection: 'column',
    },
    leftSizeView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    textTitle: {
        fontWeight: Font_1.FONT_TITLE_WEIGHT,
        paddingLeft: 10
    },
    textDescription: {
        fontWeight: Font_1.FONT_TITLE_WEIGHT,
        paddingLeft: 10
    },
});
exports.default = styles;
