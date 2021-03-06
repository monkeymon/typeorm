"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Entity_1 = require("../../../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../../../src/decorator/columns/PrimaryGeneratedColumn");
var Column_1 = require("../../../../../../src/decorator/columns/Column");
var ManyToMany_1 = require("../../../../../../src/decorator/relations/ManyToMany");
var OneToMany_1 = require("../../../../../../src/decorator/relations/OneToMany");
var OneToOne_1 = require("../../../../../../src/decorator/relations/OneToOne");
var Post_1 = require("./Post");
var Category = /** @class */ (function () {
    function Category() {
    }
    tslib_1.__decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Category.prototype, "id", void 0);
    tslib_1.__decorate([
        Column_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    tslib_1.__decorate([
        OneToOne_1.OneToOne(function (type) { return Post_1.Post; }, function (post) { return post.oneCategory; }),
        tslib_1.__metadata("design:type", Promise)
    ], Category.prototype, "onePost", void 0);
    tslib_1.__decorate([
        ManyToMany_1.ManyToMany(function (type) { return Post_1.Post; }, function (post) { return post.twoSideCategories; }),
        tslib_1.__metadata("design:type", Promise)
    ], Category.prototype, "twoSidePosts", void 0);
    tslib_1.__decorate([
        OneToMany_1.OneToMany(function (type) { return Post_1.Post; }, function (post) { return post.twoSideCategory; }),
        tslib_1.__metadata("design:type", Promise)
    ], Category.prototype, "twoSidePosts2", void 0);
    tslib_1.__decorate([
        ManyToMany_1.ManyToMany(function (type) { return Post_1.Post; }, function (post) { return post.categoriesNamedTable; }),
        tslib_1.__metadata("design:type", Promise)
    ], Category.prototype, "postsNamedTable", void 0);
    tslib_1.__decorate([
        OneToMany_1.OneToMany(function (type) { return Post_1.Post; }, function (post) { return post.categoryNamedTable; }),
        tslib_1.__metadata("design:type", Promise)
    ], Category.prototype, "onePostsNamedTable", void 0);
    tslib_1.__decorate([
        OneToOne_1.OneToOne(function (type) { return Post_1.Post; }, function (post) { return post.oneCategoryNamedTable; }),
        tslib_1.__metadata("design:type", Promise)
    ], Category.prototype, "onePostNamedTable", void 0);
    Category = tslib_1.__decorate([
        Entity_1.Entity("s_category", {
            orderBy: {
                id: "ASC",
            }
        })
    ], Category);
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=Category.js.map