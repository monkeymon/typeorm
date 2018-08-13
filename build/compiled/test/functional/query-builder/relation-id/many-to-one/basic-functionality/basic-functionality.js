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
var test_utils_1 = require("../../../../../utils/test-utils");
var Post_1 = require("./entity/Post");
var Category_1 = require("./entity/Category");
var Image_1 = require("./entity/Image");
var PostCategory_1 = require("./entity/PostCategory");
describe("query builder > relation-id > many-to-one > basic-functionality", function () {
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
    it("should load ids when loadRelationIdAndMap used", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category1, category2, categoryByName1, categoryByName2, post1, post2, loadedPosts, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category1 = new Category_1.Category();
                    category1.name = "cars";
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 1:
                    _a.sent();
                    category2 = new Category_1.Category();
                    category2.name = "airplanes";
                    return [4 /*yield*/, connection.manager.save(category2)];
                case 2:
                    _a.sent();
                    categoryByName1 = new Category_1.Category();
                    categoryByName1.name = "BMW";
                    return [4 /*yield*/, connection.manager.save(categoryByName1)];
                case 3:
                    _a.sent();
                    categoryByName2 = new Category_1.Category();
                    categoryByName2.name = "Boeing";
                    return [4 /*yield*/, connection.manager.save(categoryByName2)];
                case 4:
                    _a.sent();
                    post1 = new Post_1.Post();
                    post1.title = "about BWM";
                    post1.category = category1;
                    post1.categoryByName = categoryByName1;
                    return [4 /*yield*/, connection.manager.save(post1)];
                case 5:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.title = "about Boeing";
                    post2.category = category2;
                    post2.categoryByName = categoryByName2;
                    return [4 /*yield*/, connection.manager.save(post2)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .loadRelationIdAndMap("post.categoryId", "post.category")
                            .loadRelationIdAndMap("post.categoryName", "post.categoryByName")
                            .getMany()];
                case 7:
                    loadedPosts = _a.sent();
                    chai_1.expect(loadedPosts[0].categoryId).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categoryId).to.be.equal(1);
                    chai_1.expect(loadedPosts[0].categoryName).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categoryName).to.be.equal("BMW");
                    chai_1.expect(loadedPosts[1].categoryId).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categoryId).to.be.equal(2);
                    chai_1.expect(loadedPosts[1].categoryName).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categoryName).to.be.equal("Boeing");
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .loadRelationIdAndMap("post.categoryId", "post.category")
                            .loadRelationIdAndMap("post.categoryName", "post.categoryByName")
                            .where("post.id = :id", { id: 1 })
                            .getOne()];
                case 8:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.categoryId).to.not.be.empty;
                    chai_1.expect(loadedPost.categoryId).to.be.equal(1);
                    chai_1.expect(loadedPost.categoryName).to.not.be.empty;
                    chai_1.expect(loadedPost.categoryName).to.be.equal("BMW");
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when loadRelationIdAndMap used and target entity has multiple primary keys", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category, post, postCategory, loadedPostCategory;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category = new Category_1.Category();
                    category.name = "cars";
                    return [4 /*yield*/, connection.manager.save(category)];
                case 1:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about cars";
                    return [4 /*yield*/, connection.manager.save(post)];
                case 2:
                    _a.sent();
                    postCategory = new PostCategory_1.PostCategory();
                    postCategory.category = category;
                    postCategory.post = post;
                    return [4 /*yield*/, connection.manager.save(postCategory)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(PostCategory_1.PostCategory, "postCategory")
                            .loadRelationIdAndMap("postCategory.postId", "postCategory.post")
                            .loadRelationIdAndMap("postCategory.categoryId", "postCategory.category")
                            .getOne()];
                case 4:
                    loadedPostCategory = _a.sent();
                    chai_1.expect(loadedPostCategory.categoryId).to.not.be.empty;
                    chai_1.expect(loadedPostCategory.categoryId).to.be.equal(1);
                    chai_1.expect(loadedPostCategory.postId).to.not.be.empty;
                    chai_1.expect(loadedPostCategory.postId).to.be.equal(1);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when loadRelationIdAndMap used on nested relation and target entity has multiple primary keys", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category, post, image, postCategory, loadedPostCategory;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category = new Category_1.Category();
                    category.name = "cars";
                    return [4 /*yield*/, connection.manager.save(category)];
                case 1:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about cars";
                    return [4 /*yield*/, connection.manager.save(post)];
                case 2:
                    _a.sent();
                    image = new Image_1.Image();
                    image.name = "image #1";
                    return [4 /*yield*/, connection.manager.save(image)];
                case 3:
                    _a.sent();
                    postCategory = new PostCategory_1.PostCategory();
                    postCategory.category = category;
                    postCategory.post = post;
                    postCategory.image = image;
                    return [4 /*yield*/, connection.manager.save(postCategory)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(PostCategory_1.PostCategory, "postCategory")
                            .loadRelationIdAndMap("postCategory.imageId", "postCategory.image")
                            .getOne()];
                case 5:
                    loadedPostCategory = _a.sent();
                    chai_1.expect(loadedPostCategory.imageId).to.not.be.empty;
                    chai_1.expect(loadedPostCategory.imageId).to.be.equal(1);
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=basic-functionality.js.map