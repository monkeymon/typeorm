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
var test_utils_1 = require("../../utils/test-utils");
var User_1 = require("./entity/User");
var chai_1 = require("chai");
var AccessToken_1 = require("./entity/AccessToken");
describe("github issues > #57 cascade insert not working with OneToOne relationship", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        schemaCreate: true,
                        dropSchema: true,
                    })];
                case 1: return [2 /*return*/, connections = _a.sent()];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("should persist successfully from owner side", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var token, user, tokens, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = new AccessToken_1.AccessToken();
                    user = new User_1.User();
                    user.email = "mwelnick@test.com";
                    user.access_token = token; // this is necessary to cascades to work because we are saving user, not token
                    token.user = user; // this is not necessary at all
                    // save
                    return [4 /*yield*/, connection.getRepository(User_1.User).save(user)];
                case 1:
                    // save
                    _a.sent();
                    return [4 /*yield*/, connection.getRepository(AccessToken_1.AccessToken)
                            .createQueryBuilder("token")
                            .innerJoinAndSelect("token.user", "user")
                            .getMany()];
                case 2:
                    tokens = _a.sent();
                    return [4 /*yield*/, connection.getRepository(User_1.User)
                            .createQueryBuilder("user")
                            .innerJoinAndSelect("user.access_token", "token")
                            .getMany()];
                case 3:
                    users = _a.sent();
                    chai_1.expect(users).not.to.be.empty;
                    users.should.be.eql([{
                            primaryKey: 1,
                            email: "mwelnick@test.com",
                            access_token: {
                                primaryKey: 1
                            }
                        }]);
                    chai_1.expect(tokens).not.to.be.empty;
                    tokens.should.be.eql([{
                            primaryKey: 1,
                            user: {
                                primaryKey: 1,
                                email: "mwelnick@test.com",
                            }
                        }]);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should persist successfully from inverse side", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var token, user, tokens, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = new AccessToken_1.AccessToken();
                    user = new User_1.User();
                    user.email = "mwelnick@test.com";
                    user.access_token = token; // this is not necessary at all
                    token.user = user; // this is necessary to cascades to work because we are saving token, not user
                    // save
                    return [4 /*yield*/, connection.getRepository(AccessToken_1.AccessToken).save(token)];
                case 1:
                    // save
                    _a.sent();
                    return [4 /*yield*/, connection.getRepository(AccessToken_1.AccessToken)
                            .createQueryBuilder("token")
                            .innerJoinAndSelect("token.user", "user")
                            .getMany()];
                case 2:
                    tokens = _a.sent();
                    chai_1.expect(tokens).not.to.be.empty;
                    tokens.should.be.eql([{
                            primaryKey: 1,
                            user: {
                                primaryKey: 1,
                                email: "mwelnick@test.com",
                            }
                        }]);
                    return [4 /*yield*/, connection.getRepository(User_1.User)
                            .createQueryBuilder("user")
                            .innerJoinAndSelect("user.access_token", "token")
                            .getMany()];
                case 3:
                    users = _a.sent();
                    chai_1.expect(users).not.to.be.empty;
                    users.should.be.eql([{
                            primaryKey: 1,
                            email: "mwelnick@test.com",
                            access_token: {
                                primaryKey: 1
                            }
                        }]);
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=issue-57.js.map