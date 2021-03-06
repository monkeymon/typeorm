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
var User_1 = require("./entity/User");
describe("embedded > embedded-many-to-one-case3", function () {
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
    describe("owner side", function () {
        it("should insert, load, update and remove entities with embeddeds when embedded entity having ManyToOne relation with multiple primary keys (one PK in each embed)", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var user1, user2, user3, postRepository, post1, post2, loadedPosts, loadedPost;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user1 = new User_1.User();
                        user1.id = 1;
                        user1.name = "Alice";
                        return [4 /*yield*/, connection.getRepository(User_1.User).save(user1)];
                    case 1:
                        _a.sent();
                        user2 = new User_1.User();
                        user2.id = 2;
                        user2.name = "Bob";
                        return [4 /*yield*/, connection.getRepository(User_1.User).save(user2)];
                    case 2:
                        _a.sent();
                        user3 = new User_1.User();
                        user3.id = 3;
                        user3.name = "Clara";
                        return [4 /*yield*/, connection.getRepository(User_1.User).save(user3)];
                    case 3:
                        _a.sent();
                        postRepository = connection.getRepository(Post_1.Post);
                        post1 = new Post_1.Post();
                        post1.id = 1;
                        post1.title = "About cars";
                        post1.counters = new Counters_1.Counters();
                        post1.counters.code = 1;
                        post1.counters.comments = 1;
                        post1.counters.favorites = 2;
                        post1.counters.likes = 3;
                        post1.counters.likedUser = user1;
                        post1.counters.subcounters = new Subcounters_1.Subcounters();
                        post1.counters.subcounters.version = 1;
                        post1.counters.subcounters.watches = 5;
                        return [4 /*yield*/, postRepository.save(post1)];
                    case 4:
                        _a.sent();
                        post2 = new Post_1.Post();
                        post2.id = 2;
                        post2.title = "About airplanes";
                        post2.counters = new Counters_1.Counters();
                        post2.counters.code = 2;
                        post2.counters.comments = 2;
                        post2.counters.favorites = 3;
                        post2.counters.likes = 4;
                        post2.counters.likedUser = user2;
                        post2.counters.subcounters = new Subcounters_1.Subcounters();
                        post2.counters.subcounters.version = 1;
                        post2.counters.subcounters.watches = 10;
                        return [4 /*yield*/, postRepository.save(post2)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, connection.manager
                                .createQueryBuilder(Post_1.Post, "post")
                                .leftJoinAndSelect("post.counters.likedUser", "likedUser")
                                .orderBy("post.id")
                                .getMany()];
                    case 6:
                        loadedPosts = _a.sent();
                        chai_1.expect(loadedPosts[0].should.be.eql({
                            id: 1,
                            title: "About cars",
                            counters: {
                                code: 1,
                                comments: 1,
                                favorites: 2,
                                likes: 3,
                                likedUser: { id: 1, name: "Alice" },
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
                                likedUser: { id: 2, name: "Bob" },
                                subcounters: {
                                    version: 1,
                                    watches: 10
                                }
                            }
                        }));
                        return [4 /*yield*/, connection.manager
                                .createQueryBuilder(Post_1.Post, "post")
                                .leftJoinAndSelect("post.counters.likedUser", "likedUser")
                                .where("post.id = :id", { id: 1 })
                                .getOne()];
                    case 7:
                        loadedPost = _a.sent();
                        chai_1.expect(loadedPost.should.be.eql({
                            id: 1,
                            title: "About cars",
                            counters: {
                                code: 1,
                                comments: 1,
                                favorites: 2,
                                likes: 3,
                                likedUser: { id: 1, name: "Alice" },
                                subcounters: {
                                    version: 1,
                                    watches: 5
                                }
                            }
                        }));
                        loadedPost.counters.favorites += 1;
                        loadedPost.counters.subcounters.watches += 1;
                        loadedPost.counters.likedUser = user3;
                        return [4 /*yield*/, postRepository.save(loadedPost)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, connection.manager
                                .createQueryBuilder(Post_1.Post, "post")
                                .leftJoinAndSelect("post.counters.likedUser", "likedUser")
                                .where("post.id = :id", { id: 1 })
                                .getOne()];
                    case 9:
                        loadedPost = _a.sent();
                        chai_1.expect(loadedPost.should.be.eql({
                            id: 1,
                            title: "About cars",
                            counters: {
                                code: 1,
                                comments: 1,
                                favorites: 3,
                                likes: 3,
                                likedUser: { id: 3, name: "Clara" },
                                subcounters: {
                                    version: 1,
                                    watches: 6
                                }
                            }
                        }));
                        return [4 /*yield*/, postRepository.remove(loadedPost)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, postRepository.find()];
                    case 11:
                        loadedPosts = (_a.sent());
                        chai_1.expect(loadedPosts.length).to.be.equal(1);
                        chai_1.expect(loadedPosts[0].title).to.be.equal("About airplanes");
                        return [2 /*return*/];
                }
            });
        }); })); });
    });
    describe("inverse side", function () {
        it("should insert, load, update and remove entities with embeddeds when embedded entity having ManyToOne relation with multiple primary keys (one PK in each embed)", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var post1, post2, post3, user1, user2, loadedUsers, loadedUser, loadedPost;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        return [4 /*yield*/, connection.getRepository(Post_1.Post).save(post2)];
                    case 2:
                        _a.sent();
                        post3 = new Post_1.Post();
                        post3.id = 3;
                        post3.title = "About horses";
                        post3.counters = new Counters_1.Counters();
                        post3.counters.code = 3;
                        post3.counters.comments = 5;
                        post3.counters.favorites = 10;
                        post3.counters.likes = 15;
                        post3.counters.subcounters = new Subcounters_1.Subcounters();
                        post3.counters.subcounters.version = 1;
                        post3.counters.subcounters.watches = 30;
                        return [4 /*yield*/, connection.getRepository(Post_1.Post).save(post3)];
                    case 3:
                        _a.sent();
                        user1 = new User_1.User();
                        user1.id = 1;
                        user1.name = "Alice";
                        user1.likedPosts = [post1, post2];
                        return [4 /*yield*/, connection.getRepository(User_1.User).save(user1)];
                    case 4:
                        _a.sent();
                        user2 = new User_1.User();
                        user2.id = 2;
                        user2.name = "Bob";
                        user2.likedPosts = [post3];
                        return [4 /*yield*/, connection.getRepository(User_1.User).save(user2)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, connection.manager
                                .createQueryBuilder(User_1.User, "user")
                                .leftJoinAndSelect("user.likedPosts", "likedPost")
                                .orderBy("user.id, likedPost.id")
                                .getMany()];
                    case 6:
                        loadedUsers = _a.sent();
                        chai_1.expect(loadedUsers[0].should.be.eql({
                            id: 1,
                            name: "Alice",
                            likedPosts: [
                                {
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
                                },
                                {
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
                                }
                            ]
                        }));
                        chai_1.expect(loadedUsers[1].should.be.eql({
                            id: 2,
                            name: "Bob",
                            likedPosts: [
                                {
                                    id: 3,
                                    title: "About horses",
                                    counters: {
                                        code: 3,
                                        comments: 5,
                                        favorites: 10,
                                        likes: 15,
                                        subcounters: {
                                            version: 1,
                                            watches: 30
                                        }
                                    }
                                }
                            ]
                        }));
                        return [4 /*yield*/, connection.manager
                                .createQueryBuilder(User_1.User, "user")
                                .leftJoinAndSelect("user.likedPosts", "likedPost")
                                .orderBy("likedPost.id")
                                .where("user.id = :id", { id: 1 })
                                .getOne()];
                    case 7:
                        loadedUser = _a.sent();
                        chai_1.expect(loadedUser.should.be.eql({
                            id: 1,
                            name: "Alice",
                            likedPosts: [
                                {
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
                                },
                                {
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
                                }
                            ]
                        }));
                        loadedUser.name = "Anna";
                        loadedUser.likedPosts = [post1];
                        return [4 /*yield*/, connection.getRepository(User_1.User).save(loadedUser)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, connection.manager
                                .createQueryBuilder(User_1.User, "user")
                                .leftJoinAndSelect("user.likedPosts", "likedPost")
                                .orderBy("likedPost.id")
                                .where("user.id = :id", { id: 1 })
                                .getOne()];
                    case 9:
                        loadedUser = _a.sent();
                        chai_1.expect(loadedUser.should.be.eql({
                            id: 1,
                            name: "Anna",
                            likedPosts: [
                                {
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
                                }
                            ]
                        }));
                        return [4 /*yield*/, connection.manager
                                .createQueryBuilder(Post_1.Post, "post")
                                .leftJoinAndSelect("post.counters.likedUser", "likedUser")
                                .where("post.id = :id", { id: 2 })
                                .getOne()];
                    case 10:
                        loadedPost = _a.sent();
                        chai_1.expect(loadedPost.counters.likedUser).to.be.null;
                        return [2 /*return*/];
                }
            });
        }); })); });
    });
});
//# sourceMappingURL=embedded-many-to-one-case3.js.map