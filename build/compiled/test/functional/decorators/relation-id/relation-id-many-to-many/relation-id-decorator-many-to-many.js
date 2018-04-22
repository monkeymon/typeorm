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
var test_utils_1 = require("../../../../utils/test-utils");
var Post_1 = require("./entity/Post");
var Category_1 = require("./entity/Category");
var Image_1 = require("./entity/Image");
describe("decorators > relation-id-decorator > many-to-many", function () {
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
    it("should load ids when RelationId decorator used on owner side", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category1, category2, category3, post, post2, loadedPosts, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category1 = new Category_1.Category();
                    category1.name = "kids";
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 1:
                    _a.sent();
                    category2 = new Category_1.Category();
                    category2.name = "future";
                    return [4 /*yield*/, connection.manager.save(category2)];
                case 2:
                    _a.sent();
                    category3 = new Category_1.Category();
                    category3.name = "cars";
                    return [4 /*yield*/, connection.manager.save(category3)];
                case 3:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about kids";
                    post.categories = [category1, category2];
                    return [4 /*yield*/, connection.manager.save(post)];
                case 4:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.title = "about BMW";
                    post2.categories = [category3];
                    return [4 /*yield*/, connection.manager.save(post2)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .getMany()];
                case 6:
                    loadedPosts = _a.sent();
                    chai_1.expect(loadedPosts[0].categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categoryIds[0]).to.be.equal(1);
                    chai_1.expect(loadedPosts[0].categoryIds[1]).to.be.equal(2);
                    chai_1.expect(loadedPosts[1].categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categoryIds[0]).to.be.equal(3);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .where("post.id = :id", { id: post.id })
                            .getOne()];
                case 7:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPost.categoryIds[0]).to.be.equal(1);
                    chai_1.expect(loadedPost.categoryIds[1]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when RelationId decorator used on owner side with additional condition", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category1, category2, category3, post, post2, loadedPosts, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category1 = new Category_1.Category();
                    category1.name = "kids";
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 1:
                    _a.sent();
                    category2 = new Category_1.Category();
                    category2.name = "future";
                    category2.isRemoved = true;
                    return [4 /*yield*/, connection.manager.save(category2)];
                case 2:
                    _a.sent();
                    category3 = new Category_1.Category();
                    category3.name = "cars";
                    category3.isRemoved = true;
                    return [4 /*yield*/, connection.manager.save(category3)];
                case 3:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about kids";
                    post.categories = [category1, category2];
                    return [4 /*yield*/, connection.manager.save(post)];
                case 4:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.title = "about BMW";
                    post2.categories = [category3];
                    return [4 /*yield*/, connection.manager.save(post2)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .getMany()];
                case 6:
                    loadedPosts = _a.sent();
                    chai_1.expect(loadedPosts[0].removedCategoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].removedCategoryIds.length).to.be.equal(1);
                    chai_1.expect(loadedPosts[0].removedCategoryIds[0]).to.be.equal(2);
                    chai_1.expect(loadedPosts[1].removedCategoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].removedCategoryIds[0]).to.be.equal(3);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .where("post.id = :id", { id: 1 })
                            .getOne()];
                case 7:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.removedCategoryIds).to.not.be.empty;
                    chai_1.expect(loadedPost.removedCategoryIds.length).to.be.equal(1);
                    chai_1.expect(loadedPost.removedCategoryIds[0]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when RelationId decorator used on owner side without inverse side", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category1, category2, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category1 = new Category_1.Category();
                    category1.name = "kids";
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 1:
                    _a.sent();
                    category2 = new Category_1.Category();
                    category2.name = "future";
                    return [4 /*yield*/, connection.manager.save(category2)];
                case 2:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about kids";
                    post.subcategories = [category1, category2];
                    return [4 /*yield*/, connection.manager.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .where("post.id = :id", { id: post.id })
                            .getOne()];
                case 4:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.subcategoryIds).to.not.be.empty;
                    chai_1.expect(loadedPost.subcategoryIds[0]).to.be.equal(1);
                    chai_1.expect(loadedPost.subcategoryIds[1]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when RelationId decorator used on owner side without inverse side and with additional condition", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category1, category2, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category1 = new Category_1.Category();
                    category1.name = "kids";
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 1:
                    _a.sent();
                    category2 = new Category_1.Category();
                    category2.name = "future";
                    category2.isRemoved = true;
                    return [4 /*yield*/, connection.manager.save(category2)];
                case 2:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about kids";
                    post.subcategories = [category1, category2];
                    return [4 /*yield*/, connection.manager.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .where("post.id = :id", { id: post.id })
                            .getOne()];
                case 4:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.removedSubcategoryIds).to.not.be.empty;
                    chai_1.expect(loadedPost.removedSubcategoryIds.length).to.be.equal(1);
                    chai_1.expect(loadedPost.removedSubcategoryIds[0]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when RelationId decorator used on inverse side", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category, post1, post2, loadedCategory;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category = new Category_1.Category();
                    category.name = "cars";
                    return [4 /*yield*/, connection.manager.save(category)];
                case 1:
                    _a.sent();
                    post1 = new Post_1.Post();
                    post1.title = "about BMW";
                    post1.categories = [category];
                    return [4 /*yield*/, connection.manager.save(post1)];
                case 2:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.title = "about Audi";
                    post2.categories = [category];
                    return [4 /*yield*/, connection.manager.save(post2)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Category_1.Category, "category")
                            .where("category.id = :id", { id: category.id })
                            .getOne()];
                case 4:
                    loadedCategory = _a.sent();
                    chai_1.expect(loadedCategory.postIds).to.not.be.empty;
                    chai_1.expect(loadedCategory.postIds[0]).to.be.equal(1);
                    chai_1.expect(loadedCategory.postIds[1]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when RelationId decorator used on inverse side with additional condition", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var category, post1, post2, loadedCategory;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category = new Category_1.Category();
                    category.name = "cars";
                    return [4 /*yield*/, connection.manager.save(category)];
                case 1:
                    _a.sent();
                    post1 = new Post_1.Post();
                    post1.title = "about BMW";
                    post1.categories = [category];
                    return [4 /*yield*/, connection.manager.save(post1)];
                case 2:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.title = "about Audi";
                    post2.isRemoved = true;
                    post2.categories = [category];
                    return [4 /*yield*/, connection.manager.save(post2)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Category_1.Category, "category")
                            .where("category.id = :id", { id: category.id })
                            .getOne()];
                case 4:
                    loadedCategory = _a.sent();
                    chai_1.expect(loadedCategory.removedPostIds).to.not.be.empty;
                    chai_1.expect(loadedCategory.removedPostIds.length).to.be.equal(1);
                    chai_1.expect(loadedCategory.removedPostIds[0]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when RelationId decorator used on nested relation", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var image1, image2, image3, category1, category2, category3, post, post2, loadedPosts, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    image1 = new Image_1.Image();
                    image1.name = "photo1";
                    return [4 /*yield*/, connection.manager.save(image1)];
                case 1:
                    _a.sent();
                    image2 = new Image_1.Image();
                    image2.name = "photo2";
                    return [4 /*yield*/, connection.manager.save(image2)];
                case 2:
                    _a.sent();
                    image3 = new Image_1.Image();
                    image3.name = "photo2";
                    return [4 /*yield*/, connection.manager.save(image3)];
                case 3:
                    _a.sent();
                    category1 = new Category_1.Category();
                    category1.name = "cars";
                    category1.images = [image1, image2];
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 4:
                    _a.sent();
                    category2 = new Category_1.Category();
                    category2.name = "BMW";
                    return [4 /*yield*/, connection.manager.save(category2)];
                case 5:
                    _a.sent();
                    category3 = new Category_1.Category();
                    category3.name = "Audi";
                    category3.images = [image3];
                    return [4 /*yield*/, connection.manager.save(category3)];
                case 6:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about BMW";
                    post.categories = [category1, category2];
                    return [4 /*yield*/, connection.manager.save(post)];
                case 7:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.title = "about Audi";
                    post2.categories = [category3];
                    return [4 /*yield*/, connection.manager.save(post2)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .leftJoinAndSelect("post.categories", "categories")
                            .addOrderBy("post.id, categories.id")
                            .getMany()];
                case 9:
                    loadedPosts = _a.sent();
                    chai_1.expect(loadedPosts[0].categories).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categoryIds.length).to.be.equal(2);
                    chai_1.expect(loadedPosts[0].categoryIds[0]).to.be.equal(1);
                    chai_1.expect(loadedPosts[0].categoryIds[1]).to.be.equal(2);
                    chai_1.expect(loadedPosts[0].categories[0].imageIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categories[0].imageIds.length).to.be.equal(2);
                    chai_1.expect(loadedPosts[0].categories[0].imageIds[0]).to.be.equal(1);
                    chai_1.expect(loadedPosts[0].categories[0].imageIds[1]).to.be.equal(2);
                    chai_1.expect(loadedPosts[1].categories).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categoryIds.length).to.be.equal(1);
                    chai_1.expect(loadedPosts[1].categoryIds[0]).to.be.equal(3);
                    chai_1.expect(loadedPosts[1].categories[0].imageIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categories[0].imageIds.length).to.be.equal(1);
                    chai_1.expect(loadedPosts[1].categories[0].imageIds[0]).to.be.equal(3);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .leftJoinAndSelect("post.categories", "categories")
                            .addOrderBy("post.id, categories.id")
                            .where("post.id = :id", { id: post.id })
                            .getOne()];
                case 10:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.categories).to.not.be.empty;
                    chai_1.expect(loadedPost.categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPost.categoryIds.length).to.be.equal(2);
                    chai_1.expect(loadedPost.categoryIds[0]).to.be.equal(1);
                    chai_1.expect(loadedPost.categoryIds[1]).to.be.equal(2);
                    chai_1.expect(loadedPost.categories[0].imageIds).to.not.be.empty;
                    chai_1.expect(loadedPost.categories[0].imageIds.length).to.be.equal(2);
                    chai_1.expect(loadedPost.categories[0].imageIds[0]).to.be.equal(1);
                    chai_1.expect(loadedPost.categories[0].imageIds[1]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should not load ids of nested relations when RelationId decorator used on inherit relation and parent relation was not found", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var image1, image2, category1, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    image1 = new Image_1.Image();
                    image1.name = "photo1";
                    return [4 /*yield*/, connection.manager.save(image1)];
                case 1:
                    _a.sent();
                    image2 = new Image_1.Image();
                    image2.name = "photo2";
                    return [4 /*yield*/, connection.manager.save(image2)];
                case 2:
                    _a.sent();
                    category1 = new Category_1.Category();
                    category1.name = "cars";
                    category1.images = [image1, image2];
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 3:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about BMW";
                    post.categories = [category1];
                    return [4 /*yield*/, connection.manager.save(post)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .leftJoinAndSelect("post.categories", "categories", "categories.id = :categoryId")
                            .where("post.id = :id", { id: post.id })
                            .setParameter("categoryId", 2)
                            .addOrderBy("post.id, categories.id")
                            .getOne()];
                case 5:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.categories).to.be.empty;
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should load ids when RelationId decorator used on nested relation with additional conditions", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var image1, image2, image3, category1, category2, category3, post, post2, loadedPosts, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    image1 = new Image_1.Image();
                    image1.name = "photo1";
                    return [4 /*yield*/, connection.manager.save(image1)];
                case 1:
                    _a.sent();
                    image2 = new Image_1.Image();
                    image2.name = "photo2";
                    image2.isRemoved = true;
                    return [4 /*yield*/, connection.manager.save(image2)];
                case 2:
                    _a.sent();
                    image3 = new Image_1.Image();
                    image3.name = "photo2";
                    image3.isRemoved = true;
                    return [4 /*yield*/, connection.manager.save(image3)];
                case 3:
                    _a.sent();
                    category1 = new Category_1.Category();
                    category1.name = "cars";
                    category1.images = [image1, image2];
                    return [4 /*yield*/, connection.manager.save(category1)];
                case 4:
                    _a.sent();
                    category2 = new Category_1.Category();
                    category2.name = "BMW";
                    category2.isRemoved = true;
                    return [4 /*yield*/, connection.manager.save(category2)];
                case 5:
                    _a.sent();
                    category3 = new Category_1.Category();
                    category3.name = "BMW";
                    category3.isRemoved = true;
                    category3.images = [image3];
                    return [4 /*yield*/, connection.manager.save(category3)];
                case 6:
                    _a.sent();
                    post = new Post_1.Post();
                    post.title = "about BMW";
                    post.categories = [category1, category2];
                    return [4 /*yield*/, connection.manager.save(post)];
                case 7:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.title = "about BMW";
                    post2.categories = [category3];
                    return [4 /*yield*/, connection.manager.save(post2)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .leftJoinAndSelect("post.categories", "categories")
                            .addOrderBy("post.id, categories.id")
                            .getMany()];
                case 9:
                    loadedPosts = _a.sent();
                    chai_1.expect(loadedPosts[0].categories).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].removedCategoryIds.length).to.be.equal(1);
                    chai_1.expect(loadedPosts[0].removedCategoryIds[0]).to.be.equal(2);
                    chai_1.expect(loadedPosts[0].categories[0].removedImageIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[0].categories[0].removedImageIds.length).to.be.equal(1);
                    chai_1.expect(loadedPosts[0].categories[0].removedImageIds[0]).to.be.equal(2);
                    chai_1.expect(loadedPosts[1].categories).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].removedCategoryIds.length).to.be.equal(1);
                    chai_1.expect(loadedPosts[1].removedCategoryIds[0]).to.be.equal(3);
                    chai_1.expect(loadedPosts[1].categories[0].removedImageIds).to.not.be.empty;
                    chai_1.expect(loadedPosts[1].categories[0].removedImageIds.length).to.be.equal(1);
                    chai_1.expect(loadedPosts[1].categories[0].removedImageIds[0]).to.be.equal(3);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .leftJoinAndSelect("post.categories", "categories")
                            .addOrderBy("post.id, categories.id")
                            .where("post.id = :id", { id: post.id })
                            .getOne()];
                case 10:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.categories).to.not.be.empty;
                    chai_1.expect(loadedPost.categoryIds).to.not.be.empty;
                    chai_1.expect(loadedPost.removedCategoryIds.length).to.be.equal(1);
                    chai_1.expect(loadedPost.removedCategoryIds[0]).to.be.equal(2);
                    chai_1.expect(loadedPost.categories[0].removedImageIds).to.not.be.empty;
                    chai_1.expect(loadedPost.categories[0].removedImageIds.length).to.be.equal(1);
                    chai_1.expect(loadedPost.categories[0].removedImageIds[0]).to.be.equal(2);
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=relation-id-decorator-many-to-many.js.map