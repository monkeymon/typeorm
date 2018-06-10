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
var chai_1 = require("chai");
var index_1 = require("../../../src/index");
var Post_1 = require("./entity/Post");
describe("sqljs driver > autosave", function () {
    it("should call autoSaveCallback on insert, update and delete", function () { return __awaiter(_this, void 0, void 0, function () {
        var saves, callback, connection, posts, repository, post, savedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    saves = 0;
                    callback = function (database) {
                        saves++;
                    };
                    return [4 /*yield*/, index_1.createConnection({
                            type: "sqljs",
                            entities: [Post_1.Post],
                            synchronize: true,
                            autoSaveCallback: callback,
                            autoSave: true
                        })];
                case 1:
                    connection = _a.sent();
                    posts = [
                        {
                            title: "second post"
                        },
                        {
                            title: "third post"
                        }
                    ];
                    return [4 /*yield*/, connection.createQueryBuilder().insert().into(Post_1.Post).values(posts).execute()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.createQueryBuilder().update(Post_1.Post).set({ title: "Many posts" }).execute()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.createQueryBuilder().delete().from(Post_1.Post).where("title = ?", { title: "third post" }).execute()];
                case 4:
                    _a.sent();
                    repository = connection.getRepository(Post_1.Post);
                    post = new Post_1.Post();
                    post.title = "A post";
                    return [4 /*yield*/, repository.save(post)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, repository.findOne({ title: "A post" })];
                case 6:
                    savedPost = _a.sent();
                    chai_1.expect(savedPost).not.to.be.undefined;
                    if (!savedPost) return [3 /*break*/, 9];
                    savedPost.title = "A updated post";
                    return [4 /*yield*/, repository.save(savedPost)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, repository.remove(savedPost)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [4 /*yield*/, connection.close()];
                case 10:
                    _a.sent();
                    chai_1.expect(saves).to.be.equal(7);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should not call autoSaveCallback when autoSave is disabled", function () { return __awaiter(_this, void 0, void 0, function () {
        var saves, callback, connection, repository, post, savedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    saves = 0;
                    callback = function (database) {
                        saves++;
                    };
                    return [4 /*yield*/, index_1.createConnection({
                            type: "sqljs",
                            entities: [Post_1.Post],
                            synchronize: true,
                            autoSaveCallback: callback,
                            autoSave: false
                        })];
                case 1:
                    connection = _a.sent();
                    repository = connection.getRepository(Post_1.Post);
                    post = new Post_1.Post();
                    post.title = "A post";
                    return [4 /*yield*/, repository.save(post)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, repository.findOne({ title: "A post" })];
                case 3:
                    savedPost = _a.sent();
                    chai_1.expect(savedPost).not.to.be.undefined;
                    if (!savedPost) return [3 /*break*/, 6];
                    savedPost.title = "A updated post";
                    return [4 /*yield*/, repository.save(savedPost)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, repository.remove(savedPost)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, connection.close()];
                case 7:
                    _a.sent();
                    chai_1.expect(saves).to.be.equal(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=auto-save.js.map