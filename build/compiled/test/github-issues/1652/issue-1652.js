"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var test_utils_1 = require("../../utils/test-utils");
describe("github issues > #1652 Multiple primary key defined", function () {
    var connections;
    before(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        enabledDrivers: ["mysql"],
                        schemaCreate: true,
                        dropSchema: true,
                    })];
                case 1:
                    connections = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("should correctly create table when multiple primary keys defined and one of them is generated", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var queryRunner, table;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post")];
                case 1:
                    table = _a.sent();
                    table.findColumnByName("id").isPrimary.should.be.true;
                    table.findColumnByName("id").isGenerated.should.be.true;
                    table.findColumnByName("id").generationStrategy.should.be.equal("increment");
                    table.findColumnByName("name").isPrimary.should.be.true;
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=issue-1652.js.map