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
var index_1 = require("../../../src/index");
var Post_1 = require("./Post");
var PostDetails_1 = require("./PostDetails");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        index_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "id", void 0);
    __decorate([
        index_1.Column(),
        __metadata("design:type", String)
    ], Category.prototype, "description", void 0);
    __decorate([
        index_1.ManyToMany(function (type) { return Post_1.Post; }, function (post) { return post.categories; }),
        __metadata("design:type", Array)
    ], Category.prototype, "posts", void 0);
    __decorate([
        index_1.ManyToOne(function (type) { return PostDetails_1.PostDetails; }, function (postDetails) { return postDetails.categories; }),
        __metadata("design:type", PostDetails_1.PostDetails)
    ], Category.prototype, "details", void 0);
    Category = __decorate([
        index_1.Entity("sample10_category")
    ], Category);
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=Category.js.map