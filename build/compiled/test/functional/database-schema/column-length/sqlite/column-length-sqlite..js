"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var chai_1 = require("chai");
var Post_1 = require("./entity/Post");
var test_utils_1 = require("../../../../utils/test-utils");
describe("database schema > column length > sqlite", function () {
    var connections;
    before(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [Post_1.Post],
                        enabledDrivers: ["sqlite"],
                    })];
                case 1:
                    connections = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("all types should create with correct size", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var queryRunner, table;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post")];
                case 1:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    chai_1.expect(table.findColumnByName("character").length).to.be.equal("50");
                    chai_1.expect(table.findColumnByName("varchar").length).to.be.equal("50");
                    chai_1.expect(table.findColumnByName("nchar").length).to.be.equal("50");
                    chai_1.expect(table.findColumnByName("nvarchar").length).to.be.equal("50");
                    chai_1.expect(table.findColumnByName("varying_character").length).to.be.equal("50");
                    chai_1.expect(table.findColumnByName("native_character").length).to.be.equal("50");
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("all types should update their size", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var metadata, queryRunner, table;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    metadata = connection.getMetadata(Post_1.Post);
                    metadata.findColumnWithPropertyName("character").length = "100";
                    metadata.findColumnWithPropertyName("varchar").length = "100";
                    metadata.findColumnWithPropertyName("nchar").length = "100";
                    metadata.findColumnWithPropertyName("nvarchar").length = "100";
                    metadata.findColumnWithPropertyName("varying_character").length = "100";
                    metadata.findColumnWithPropertyName("native_character").length = "100";
                    return [4 /*yield*/, connection.synchronize(false)];
                case 1:
                    _a.sent();
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post")];
                case 2:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 3:
                    _a.sent();
                    chai_1.expect(table.findColumnByName("character").length).to.be.equal("100");
                    chai_1.expect(table.findColumnByName("varchar").length).to.be.equal("100");
                    chai_1.expect(table.findColumnByName("nchar").length).to.be.equal("100");
                    chai_1.expect(table.findColumnByName("nvarchar").length).to.be.equal("100");
                    chai_1.expect(table.findColumnByName("varying_character").length).to.be.equal("100");
                    chai_1.expect(table.findColumnByName("native_character").length).to.be.equal("100");
                    return [4 /*yield*/, connection.synchronize(false)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=column-length-sqlite..js.map