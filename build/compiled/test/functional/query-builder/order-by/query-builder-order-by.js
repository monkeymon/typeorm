"use strict";
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var test_utils_1 = require("../../../utils/test-utils");
var chai_1 = require("chai");
var Post_1 = require("./entity/Post");
var PostgresDriver_1 = require("../../../../src/driver/postgres/PostgresDriver");
var MysqlDriver_1 = require("../../../../src/driver/mysql/MysqlDriver");
describe("query builder > order-by", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
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
    it("should be always in right order(default order)", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var post1, post2, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    post1 = new Post_1.Post();
                    post1.myOrder = 1;
                    post2 = new Post_1.Post();
                    post2.myOrder = 2;
                    return [4 /*yield*/, connection.manager.save([post1, post2])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .getOne()];
                case 2:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.myOrder).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should be always in right order(custom order)", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var post1, post2, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    post1 = new Post_1.Post();
                    post1.myOrder = 1;
                    post2 = new Post_1.Post();
                    post2.myOrder = 2;
                    return [4 /*yield*/, connection.manager.save([post1, post2])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .addOrderBy("post.myOrder", "ASC")
                            .getOne()];
                case 2:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.myOrder).to.be.equal(1);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should be always in right order(custom order)", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var post1, post2, loadedPost1, loadedPost2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(connection.driver instanceof PostgresDriver_1.PostgresDriver)) // NULLS FIRST / LAST only supported by postgres
                        return [2 /*return*/];
                    post1 = new Post_1.Post();
                    post1.myOrder = 1;
                    post2 = new Post_1.Post();
                    post2.myOrder = 2;
                    return [4 /*yield*/, connection.manager.save([post1, post2])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .addOrderBy("post.myOrder", "ASC", "NULLS FIRST")
                            .getOne()];
                case 2:
                    loadedPost1 = _a.sent();
                    chai_1.expect(loadedPost1.myOrder).to.be.equal(1);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .addOrderBy("post.myOrder", "ASC", "NULLS LAST")
                            .getOne()];
                case 3:
                    loadedPost2 = _a.sent();
                    chai_1.expect(loadedPost2.myOrder).to.be.equal(1);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should be always in right order(custom order)", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var post1, post2, loadedPost1, loadedPost2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(connection.driver instanceof MysqlDriver_1.MysqlDriver)) // IS NULL / IS NOT NULL only supported by mysql
                        return [2 /*return*/];
                    post1 = new Post_1.Post();
                    post1.myOrder = 1;
                    post2 = new Post_1.Post();
                    post2.myOrder = 2;
                    return [4 /*yield*/, connection.manager.save([post1, post2])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .addOrderBy("post.myOrder IS NULL", "ASC")
                            .getOne()];
                case 2:
                    loadedPost1 = _a.sent();
                    chai_1.expect(loadedPost1.myOrder).to.be.equal(1);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .addOrderBy("post.myOrder IS NOT NULL", "ASC")
                            .getOne()];
                case 3:
                    loadedPost2 = _a.sent();
                    chai_1.expect(loadedPost2.myOrder).to.be.equal(1);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should be able to order by sql statement", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var post1, post2, loadedPost1, loadedPost2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(connection.driver instanceof MysqlDriver_1.MysqlDriver))
                        return [2 /*return*/]; // DIV statement does not supported by all drivers
                    post1 = new Post_1.Post();
                    post1.myOrder = 1;
                    post1.num1 = 10;
                    post1.num2 = 5;
                    post2 = new Post_1.Post();
                    post2.myOrder = 2;
                    post2.num1 = 10;
                    post2.num2 = 2;
                    return [4 /*yield*/, connection.manager.save([post1, post2])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .orderBy("post.num1 DIV post.num2")
                            .getOne()];
                case 2:
                    loadedPost1 = _a.sent();
                    chai_1.expect(loadedPost1.num1).to.be.equal(10);
                    chai_1.expect(loadedPost1.num2).to.be.equal(5);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .orderBy("post.num1 DIV post.num2", "DESC")
                            .getOne()];
                case 3:
                    loadedPost2 = _a.sent();
                    chai_1.expect(loadedPost2.num1).to.be.equal(10);
                    chai_1.expect(loadedPost2.num2).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=query-builder-order-by.js.map