"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var test_utils_1 = require("../../utils/test-utils");
var User_1 = require("./entity/User");
var SpecificUser_1 = require("./entity/SpecificUser");
var chai_1 = require("chai");
describe("github issue > #1326 Wrong behavior w/ the same table names in different databases", function () {
    var connections = [];
    before(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        enabledDrivers: ["mysql"]
                    })];
                case 1: return [2 /*return*/, connections = _a.sent()];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("should not confuse equivalent table names in different databases", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var i, user_1, i, user_2, user, specificUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i <= 10)) return [3 /*break*/, 4];
                    user_1 = new User_1.User();
                    user_1.name = "user #" + i;
                    return [4 /*yield*/, connection.manager.save(user_1)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    i = 1;
                    _a.label = 5;
                case 5:
                    if (!(i <= 10)) return [3 /*break*/, 8];
                    user_2 = new SpecificUser_1.SpecificUser();
                    user_2.name = "specific user #" + i;
                    return [4 /*yield*/, connection.manager.save(user_2)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 5];
                case 8: return [4 /*yield*/, connection.manager.findOne(User_1.User, { name: "user #1" })];
                case 9:
                    user = _a.sent();
                    chai_1.expect(user).not.to.be.undefined;
                    user.should.be.eql({
                        id: 1,
                        name: "user #1"
                    });
                    return [4 /*yield*/, connection.manager.findOne(SpecificUser_1.SpecificUser, { name: "specific user #1" })];
                case 10:
                    specificUser = _a.sent();
                    chai_1.expect(specificUser).not.to.be.undefined;
                    specificUser.should.be.eql({
                        id: 1,
                        name: "specific user #1"
                    });
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=issue-1326.js.map