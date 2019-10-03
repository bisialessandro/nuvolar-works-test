"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repository = /** @class */ (function () {
    function Repository(name, description, language, defaultBranch) {
        this.name = name;
        this.description = description;
        this.language = language;
        this.defaultBranch = defaultBranch;
    }
    Repository.prototype.toRepository = function (data) {
        var user = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var d = data_1[_i];
            user.push(this.createRepository(d));
        }
        return user;
    };
    Repository.prototype.createRepository = function (repository) {
        return new Repository(repository.name, repository.description, repository.language, repository.defaultBranch);
    };
    return Repository;
}());
exports.Repository = Repository;
