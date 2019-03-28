"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var chai_1 = require("chai");
var test_utils_1 = require("../../utils/test-utils");
var CategoryWithVeryLongName_1 = require("./entity/CategoryWithVeryLongName");
var PostAuthorWithVeryLongName_1 = require("./entity/PostAuthorWithVeryLongName");
var PostWithVeryLongName_1 = require("./entity/PostWithVeryLongName");
/**
 * @see https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS
 * "The system uses no more than NAMEDATALEN-1 bytes of an identifier; longer names can be
 * written in commands, but they will be truncated. By default, NAMEDATALEN is 64 so the
 * maximum identifier length is 63 bytes. If this limit is problematic, it can be raised
 * by changing the NAMEDATALEN constant in src/include/pg_config_manual.h."
 */
describe("other issues > shorten alias names (for RDBMS with a limit) when they are longer than 63 characters", function () {
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
    it("should be able to load deeply nested entity, even with long aliases", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var author, post, category, loadedCategory;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    author = new PostAuthorWithVeryLongName_1.AuthorWithVeryLongName();
                    author.firstName = "Jean";
                    post = new PostWithVeryLongName_1.PostWithVeryLongName();
                    post.authorWithVeryLongName = author;
                    category = new CategoryWithVeryLongName_1.CategoryWithVeryLongName();
                    category.postsWithVeryLongName = category.postsWithVeryLongName || [];
                    category.postsWithVeryLongName.push(post);
                    return [4 /*yield*/, connection.getRepository(PostAuthorWithVeryLongName_1.AuthorWithVeryLongName).save(author)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.getRepository(PostWithVeryLongName_1.PostWithVeryLongName).save(post)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.getRepository(CategoryWithVeryLongName_1.CategoryWithVeryLongName).save(category)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.findOne(CategoryWithVeryLongName_1.CategoryWithVeryLongName, { relations: [
                                "postsWithVeryLongName",
                                // before: used to generate an "AS" alias like `CategoryWithVeryLongName__postsWithVeryLongName__authorWithVeryLongName_firstName`
                                // now: "CaWiVeLoNa__poWiVeLoNa__auWiVeLoNa_firstName", which is acceptable by Postgres (limit to 63 characters)
                                "postsWithVeryLongName.authorWithVeryLongName"
                            ] })];
                case 4:
                    loadedCategory = _a.sent();
                    chai_1.expect(loadedCategory).not.to.be.undefined;
                    chai_1.expect(loadedCategory.postsWithVeryLongName).not.to.be.undefined;
                    chai_1.expect(loadedCategory.postsWithVeryLongName).not.to.be.empty;
                    chai_1.expect(loadedCategory.postsWithVeryLongName[0].authorWithVeryLongName).not.to.be.undefined;
                    chai_1.expect(loadedCategory.postsWithVeryLongName[0].authorWithVeryLongName.firstName).to.equal(author.firstName);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should shorten table names which exceed the max length", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var shortName, normalName, maxAliasLength, expectedTableName;
        return tslib_1.__generator(this, function (_a) {
            shortName = "cat_wit_ver_lon_nam_pos_wit_ver_lon_nam_pos_wit_ver_lon_nam";
            normalName = "category_with_very_long_name_posts_with_very_long_name_post_with_very_long_name";
            maxAliasLength = connection.driver.maxAliasLength;
            expectedTableName = maxAliasLength && maxAliasLength > 0 && normalName.length > maxAliasLength ? shortName : normalName;
            chai_1.expect(connection.entityMetadatas.some(function (em) { return em.tableName === expectedTableName; })).to.be.true;
            return [2 /*return*/];
        });
    }); })); });
});
//# sourceMappingURL=max-alias-length-in-postgres.js.map