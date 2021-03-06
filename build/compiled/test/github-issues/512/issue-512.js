"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var test_utils_1 = require("../../utils/test-utils");
var Post_1 = require("./entity/Post");
describe("github issues > #512 Table name escaping in UPDATE in QueryBuilder", function () {
    var connections;
    before(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                    })];
                case 1: return [2 /*return*/, connections = _a.sent()];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("should escape table name using driver's escape function in UPDATE", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var driver, queryBuilder, query;
        return tslib_1.__generator(this, function (_a) {
            driver = connection.driver;
            queryBuilder = connection.manager.createQueryBuilder(Post_1.Post, "post");
            query = queryBuilder
                .update({
                title: "Some Title",
            })
                .getSql();
            return [2 /*return*/, query.should.deep.include(driver.escape("Posts"))];
        });
    }); })); });
});
//# sourceMappingURL=issue-512.js.map