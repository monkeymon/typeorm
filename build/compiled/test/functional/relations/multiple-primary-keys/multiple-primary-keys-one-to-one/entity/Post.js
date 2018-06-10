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
var Entity_1 = require("../../../../../../src/decorator/entity/Entity");
var Column_1 = require("../../../../../../src/decorator/columns/Column");
var PrimaryGeneratedColumn_1 = require("../../../../../../src/decorator/columns/PrimaryGeneratedColumn");
var JoinColumn_1 = require("../../../../../../src/decorator/relations/JoinColumn");
var OneToOne_1 = require("../../../../../../src/decorator/relations/OneToOne");
var Category_1 = require("./Category");
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Post.prototype, "id", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Category_1.Category; }, function (category) { return category.post; }),
        JoinColumn_1.JoinColumn(),
        __metadata("design:type", Category_1.Category)
    ], Post.prototype, "category", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Category_1.Category; }, function (category) { return category.postWithOptions; }),
        JoinColumn_1.JoinColumn([
            { name: "category_name", referencedColumnName: "name" },
            { name: "category_type", referencedColumnName: "type" }
        ]),
        __metadata("design:type", Category_1.Category)
    ], Post.prototype, "categoryWithOptions", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Category_1.Category; }, function (category) { return category.postWithNonPrimaryColumns; }),
        JoinColumn_1.JoinColumn([
            { name: "category_code", referencedColumnName: "code" },
            { name: "category_version", referencedColumnName: "version" },
            { name: "category_description", referencedColumnName: "description" }
        ]),
        __metadata("design:type", Category_1.Category)
    ], Post.prototype, "categoryWithNonPrimaryColumns", void 0);
    Post = __decorate([
        Entity_1.Entity()
    ], Post);
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=Post.js.map