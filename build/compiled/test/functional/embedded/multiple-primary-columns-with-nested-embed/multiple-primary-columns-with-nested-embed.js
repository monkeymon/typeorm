"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var Post_1 = require("./entity/Post");
var Counters_1 = require("./entity/Counters");
var chai_1 = require("chai");
var test_utils_1 = require("../../../utils/test-utils");
var Subcounters_1 = require("./entity/Subcounters");
describe("embedded > multiple-primary-columns-with-nested-embed", function () {
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
    it("should insert, load, update and remove entities with embeddeds when primary column defined in main and in embedded entities", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var postRepository, post1, post2, loadedPosts, loadedPost, loadedPost2, loadedPosts2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(Post_1.Post);
                    post1 = new Post_1.Post();
                    post1.id = 1;
                    post1.title = "About cars";
                    post1.counters = new Counters_1.Counters();
                    post1.counters.code = 1;
                    post1.counters.comments = 1;
                    post1.counters.favorites = 2;
                    post1.counters.likes = 3;
                    post1.counters.subcounters = new Subcounters_1.Subcounters();
                    post1.counters.subcounters.version = 1;
                    post1.counters.subcounters.watches = 5;
                    return [4 /*yield*/, connection.getRepository(Post_1.Post).save(post1)];
                case 1:
                    _a.sent();
                    post2 = new Post_1.Post();
                    post2.id = 2;
                    post2.title = "About airplanes";
                    post2.counters = new Counters_1.Counters();
                    post2.counters.code = 2;
                    post2.counters.comments = 2;
                    post2.counters.favorites = 3;
                    post2.counters.likes = 4;
                    post2.counters.subcounters = new Subcounters_1.Subcounters();
                    post2.counters.subcounters.version = 1;
                    post2.counters.subcounters.watches = 10;
                    return [4 /*yield*/, postRepository.save(post2)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Post_1.Post, "post")
                            .orderBy("post.id")
                            .getMany()];
                case 3:
                    loadedPosts = _a.sent();
                    chai_1.expect(loadedPosts[0].should.be.eql({
                        id: 1,
                        title: "About cars",
                        counters: {
                            code: 1,
                            comments: 1,
                            favorites: 2,
                            likes: 3,
                            subcounters: {
                                version: 1,
                                watches: 5
                            }
                        }
                    }));
                    chai_1.expect(loadedPosts[1].should.be.eql({
                        id: 2,
                        title: "About airplanes",
                        counters: {
                            code: 2,
                            comments: 2,
                            favorites: 3,
                            likes: 4,
                            subcounters: {
                                version: 1,
                                watches: 10
                            }
                        }
                    }));
                    return [4 /*yield*/, postRepository.findOne({ id: 1, counters: { code: 1, subcounters: { version: 1 } } })];
                case 4:
                    loadedPost = (_a.sent());
                    chai_1.expect(loadedPost.should.be.eql({
                        id: 1,
                        title: "About cars",
                        counters: {
                            code: 1,
                            comments: 1,
                            favorites: 2,
                            likes: 3,
                            subcounters: {
                                version: 1,
                                watches: 5
                            }
                        }
                    }));
                    loadedPost.counters.favorites += 1;
                    loadedPost.counters.subcounters.watches += 1;
                    return [4 /*yield*/, postRepository.save(loadedPost)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOne({ id: 1, counters: { code: 1, subcounters: { version: 1 } } })];
                case 6:
                    loadedPost2 = (_a.sent());
                    chai_1.expect(loadedPost2.should.be.eql({
                        id: 1,
                        title: "About cars",
                        counters: {
                            code: 1,
                            comments: 1,
                            favorites: 3,
                            likes: 3,
                            subcounters: {
                                version: 1,
                                watches: 6
                            }
                        }
                    }));
                    return [4 /*yield*/, postRepository.remove(loadedPost2)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, postRepository.find()];
                case 8:
                    loadedPosts2 = (_a.sent());
                    chai_1.expect(loadedPosts2.length).to.be.equal(1);
                    chai_1.expect(loadedPosts2[0].title).to.be.equal("About airplanes");
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=multiple-primary-columns-with-nested-embed.js.map