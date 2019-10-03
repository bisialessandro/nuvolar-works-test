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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var GitHubServices_1 = require("../Network/GitHubServices");
var react_native_1 = require("react-native");
var CardDetailRow_1 = require("../Components/CardComponents/CardDetailRow");
var Colors_1 = require("../Styles/Colors");
var CardUser_1 = require("../Components/CardComponents/CardUser");
var CardRepository_1 = require("../Components/CardComponents/CardRepository");
var BackgroundApp = require('../Assets/images/BackgroundApp.png');
var ArrowUp = require('../Assets/images/ArrowUp.png');
var ArrowDown = require('../Assets/images/ArrowDown.png');
;
var DetailUserPage = /** @class */ (function (_super) {
    __extends(DetailUserPage, _super);
    function DetailUserPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (value) {
        };
        _this.onPressShowFollowers = function () {
            _this.setState({
                isShowingFollowers: !_this.state.isShowingFollowers
            });
        };
        _this.onPressShowRepositories = function () {
            _this.setState({
                isShowingRepositories: !_this.state.isShowingRepositories
            });
        };
        _this.renderItem = function (item) { return react_1.default.createElement(CardUser_1.CardUser, { user: item, onClick: _this.onClick, showArrow: false }); };
        _this.renderItemRepository = function (item) { return react_1.default.createElement(CardRepository_1.CardRepository, { repository: item }); };
        var userDetails = _this.props.navigation.getParam('user', null);
        if (userDetails == null) {
            console.log("Error", userDetails);
        }
        _this.state = ({
            followers: [],
            repositories: [],
            userGithub: userDetails,
            isShowingFollowers: false,
            isShowingRepositories: false
        });
        return _this;
    }
    DetailUserPage.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, resultRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GitHubServices_1.GitHubServices.prototype.getFollowers("", this.state.userGithub.login)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.setState({
                                followers: result
                            });
                        }
                        return [4 /*yield*/, GitHubServices_1.GitHubServices.prototype.getRepositories("", this.state.userGithub.login)];
                    case 2:
                        resultRepo = _a.sent();
                        if (resultRepo != null) {
                            this.setState({
                                repositories: resultRepo
                            });
                        }
                        console.log("Error", resultRepo);
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailUserPage.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.SafeAreaView, null,
            react_1.default.createElement(react_native_1.ImageBackground, { source: BackgroundApp, style: styles.ImageBackground },
                react_1.default.createElement(react_native_1.ScrollView, null,
                    react_1.default.createElement(react_native_1.View, { style: styles.ViewColumn },
                        react_1.default.createElement(react_native_1.View, { style: styles.ViewImage },
                            react_1.default.createElement(react_native_1.Image, { source: { uri: this.state.userGithub.avatar_url }, style: styles.AvatarStyle })),
                        react_1.default.createElement(CardDetailRow_1.CardDetailRow, { title: "Username: ", value: this.state.userGithub.login }),
                        react_1.default.createElement(CardDetailRow_1.CardDetailRow, { title: "GitUrl:   ", value: this.state.userGithub.gists_url }),
                        react_1.default.createElement(CardDetailRow_1.CardDetailRow, { title: "HtmlUrl:   ", value: this.state.userGithub.html_url }),
                        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.RowTitleFlat, onPress: this.onPressShowFollowers },
                            react_1.default.createElement(react_native_1.Text, { style: styles.TextTitleFlat }, "Followers:"),
                            react_1.default.createElement(react_native_1.View, { style: styles.ViewAlignRight },
                                react_1.default.createElement(react_native_1.Image, { source: this.state.isShowingFollowers ? ArrowDown : ArrowUp, style: styles.HideableImage }))),
                        this.state.isShowingFollowers && react_1.default.createElement(react_native_1.FlatList, { data: this.state.followers, renderItem: function (item) { return _this.renderItem(item.item); } }),
                        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.RowTitleFlat, onPress: this.onPressShowRepositories },
                            react_1.default.createElement(react_native_1.Text, { style: styles.TextTitleFlat }, "Repositories:"),
                            react_1.default.createElement(react_native_1.View, { style: styles.ViewAlignRight },
                                react_1.default.createElement(react_native_1.Image, { source: this.state.isShowingRepositories ? ArrowDown : ArrowUp, style: styles.HideableImage }))),
                        this.state.isShowingRepositories && react_1.default.createElement(react_native_1.FlatList, { data: this.state.repositories, renderItem: function (item) { return _this.renderItemRepository(item.item); } }))))));
    };
    return DetailUserPage;
}(react_1.default.Component));
exports.DetailUserPage = DetailUserPage;
var styles = react_native_1.StyleSheet.create({
    ImageBackground: {
        width: '100%',
        height: '100%'
    },
    SearchBar: {
        margin: '10px'
    },
    ViewColumn: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
    },
    ViewImage: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        margin: 10
    },
    AvatarStyle: {
        width: '30%',
        height: 100
    },
    Img: {
        width: '15%',
        height: '40px'
    },
    RowTitleFlat: {
        flexDirection: 'row',
        marginTop: 30,
        padding: 20,
        flex: 1,
        borderRadius: 10,
        backgroundColor: Colors_1.COLOR_NEGATIVE,
    },
    TextTitleFlat: {
        fontSize: 19,
        color: Colors_1.COLOR_TEXT,
    },
    HideableImage: {
        alignContent: 'center',
    },
    ViewAlignRight: {
        alignContent: 'center',
        flex: 1,
        flexDirection: 'column',
    }
});
exports.default = styles;
