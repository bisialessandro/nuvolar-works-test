"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserGitHub = /** @class */ (function () {
    function UserGitHub(login, id, node_id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, site_admin, score) {
        this._login = login;
        this._id = id;
        this._node_id = node_id;
        this._avatar_url = avatar_url;
        this._gravatar_id = gravatar_id;
        this._url = url;
        this._html_url = html_url;
        this._followers_url = followers_url;
        this._following_url = following_url;
        this._gists_url = gists_url;
        this._starred_url = starred_url;
        this._subscriptions_url = subscriptions_url;
        this._organizations_url = organizations_url;
        this._repos_url = repos_url;
        this._events_url = events_url;
        this._received_events_url = received_events_url;
        this._type = type;
        this._site_admin = site_admin;
        this._score = score;
    }
    Object.defineProperty(UserGitHub.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (value) {
            this._login = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setLogin = function (value) {
        this._login = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setId = function (value) {
        this._id = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "node_id", {
        get: function () {
            return this._node_id;
        },
        set: function (value) {
            this._node_id = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setNode_id = function (value) {
        this._node_id = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "avatar_url", {
        get: function () {
            return this._avatar_url;
        },
        set: function (value) {
            this._avatar_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setAvatar_url = function (value) {
        this._avatar_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "gravatar_id", {
        get: function () {
            return this._gravatar_id;
        },
        set: function (value) {
            this._gravatar_id = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setGravatar_id = function (value) {
        this._gravatar_id = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setUrl = function (value) {
        this._url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "html_url", {
        get: function () {
            return this._html_url;
        },
        set: function (value) {
            this._html_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setHtml_url = function (value) {
        this._html_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "followers_url", {
        get: function () {
            return this._followers_url;
        },
        set: function (value) {
            this._followers_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setFollowers_url = function (value) {
        this._followers_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "following_url", {
        get: function () {
            return this._following_url;
        },
        set: function (value) {
            this._following_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setFollowing_url = function (value) {
        this._following_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "gists_url", {
        get: function () {
            return this._gists_url;
        },
        set: function (value) {
            this._gists_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setGists_url = function (value) {
        this._gists_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "starred_url", {
        get: function () {
            return this._starred_url;
        },
        set: function (value) {
            this._starred_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setStarred_url = function (value) {
        this._starred_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "subscriptions_url", {
        get: function () {
            return this._subscriptions_url;
        },
        set: function (value) {
            this._subscriptions_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setSubscriptions_url = function (value) {
        this._subscriptions_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "organizations_url", {
        get: function () {
            return this._organizations_url;
        },
        set: function (value) {
            this._organizations_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setOrganizations_url = function (value) {
        this._organizations_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "repos_url", {
        get: function () {
            return this._repos_url;
        },
        set: function (value) {
            this._repos_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setRepos_url = function (value) {
        this._repos_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "events_url", {
        get: function () {
            return this._events_url;
        },
        set: function (value) {
            this._events_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setEvents_url = function (value) {
        this._events_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "received_events_url", {
        get: function () {
            return this._received_events_url;
        },
        set: function (value) {
            this._received_events_url = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setReceived_events_url = function (value) {
        this._received_events_url = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setType = function (value) {
        this._type = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "site_admin", {
        get: function () {
            return this._site_admin;
        },
        set: function (value) {
            this._site_admin = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setSite_admin = function (value) {
        this._site_admin = value;
        return this;
    };
    Object.defineProperty(UserGitHub.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: true,
        configurable: true
    });
    UserGitHub.prototype.setScore = function (value) {
        this._score = value;
        return this;
    };
    UserGitHub.prototype.toUser = function (data) {
        var user = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var d = data_1[_i];
            user.push(this.createUser(d));
        }
        return user;
    };
    // tslint:disable-next-line
    UserGitHub.prototype.createUser = function (user) {
        return new UserGitHub(user.login, user.id, user.node_id, user.avatar_url, user.gravatar_id, user.url, user.html_url, user.followers_url, user.following_url, user.gists_url, user.starred_url, user.subscriptions_url, user.organizations_url, user.repos_url, user.events_url, user.received_events_url, user.type, user.site_admin, user.score);
    };
    return UserGitHub;
}());
exports.UserGitHub = UserGitHub;
