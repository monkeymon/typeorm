"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("../../../../src/decorator/entity/Entity");
var Column_1 = require("../../../../src/decorator/columns/Column");
var ManyToOne_1 = require("../../../../src/decorator/relations/ManyToOne");
var Post_1 = require("./Post");
var RelationId_1 = require("../../../../src/decorator/relations/RelationId");
var PrimaryColumn_1 = require("../../../../src/decorator/columns/PrimaryColumn");
var ManyToMany_1 = require("../../../../src/decorator/relations/ManyToMany");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        PrimaryColumn_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "firstId", void 0);
    __decorate([
        PrimaryColumn_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "secondId", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        ManyToOne_1.ManyToOne(function (type) { return Post_1.Post; }, function (post) { return post.categories; }),
        __metadata("design:type", Object)
    ], Category.prototype, "post", void 0);
    __decorate([
        RelationId_1.RelationId(function (category) { return category.post; }),
        __metadata("design:type", Number)
    ], Category.prototype, "postId", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Post_1.Post; }, function (post) { return post.manyCategories; }),
        __metadata("design:type", Array)
    ], Category.prototype, "manyPosts", void 0);
    __decorate([
        RelationId_1.RelationId(function (category) { return category.manyPosts; }),
        __metadata("design:type", Array)
    ], Category.prototype, "manyPostIds", void 0);
    Category = __decorate([
        Entity_1.Entity()
    ], Category);
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=Category.js.map