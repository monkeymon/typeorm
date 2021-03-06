"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PrimaryColumn_1 = require("../../../../../../src/decorator/columns/PrimaryColumn");
var Entity_1 = require("../../../../../../src/decorator/entity/Entity");
var Column_1 = require("../../../../../../src/decorator/columns/Column");
var ManyToMany_1 = require("../../../../../../src/decorator/relations/ManyToMany");
var JoinTable_1 = require("../../../../../../src/decorator/relations/JoinTable");
var RelationCount_1 = require("../../../../../../src/decorator/relations/RelationCount");
var Category_1 = require("./Category");
var Post = /** @class */ (function () {
    function Post() {
        this.isRemoved = false;
    }
    tslib_1.__decorate([
        PrimaryColumn_1.PrimaryColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Post.prototype, "id", void 0);
    tslib_1.__decorate([
        Column_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    tslib_1.__decorate([
        Column_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Post.prototype, "isRemoved", void 0);
    tslib_1.__decorate([
        ManyToMany_1.ManyToMany(function (type) { return Category_1.Category; }, function (category) { return category.posts; }),
        JoinTable_1.JoinTable(),
        tslib_1.__metadata("design:type", Array)
    ], Post.prototype, "categories", void 0);
    tslib_1.__decorate([
        RelationCount_1.RelationCount(function (post) { return post.categories; }),
        tslib_1.__metadata("design:type", Number)
    ], Post.prototype, "categoryCount", void 0);
    tslib_1.__decorate([
        RelationCount_1.RelationCount(function (post) { return post.categories; }, "removedCategories", function (qb) { return qb.andWhere("removedCategories.isRemoved = :isRemoved", { isRemoved: true }); }),
        tslib_1.__metadata("design:type", Number)
    ], Post.prototype, "removedCategoryCount", void 0);
    Post = tslib_1.__decorate([
        Entity_1.Entity()
    ], Post);
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=Post.js.map