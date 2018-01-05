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
var Entity_1 = require("../../../../../../../src/decorator/entity/Entity");
var Column_1 = require("../../../../../../../src/decorator/columns/Column");
var PrimaryColumn_1 = require("../../../../../../../src/decorator/columns/PrimaryColumn");
var Index_1 = require("../../../../../../../src/decorator/Index");
var JoinTable_1 = require("../../../../../../../src/decorator/relations/JoinTable");
var OneToMany_1 = require("../../../../../../../src/decorator/relations/OneToMany");
var ManyToOne_1 = require("../../../../../../../src/decorator/relations/ManyToOne");
var Post_1 = require("./Post");
var Image_1 = require("./Image");
var Category = /** @class */ (function () {
    function Category() {
        this.isRemoved = false;
    }
    __decorate([
        PrimaryColumn_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "id", void 0);
    __decorate([
        PrimaryColumn_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "code", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Boolean)
    ], Category.prototype, "isRemoved", void 0);
    __decorate([
        OneToMany_1.OneToMany(function (type) { return Post_1.Post; }, function (post) { return post.category; }),
        __metadata("design:type", Array)
    ], Category.prototype, "posts", void 0);
    __decorate([
        ManyToOne_1.ManyToOne(function (type) { return Image_1.Image; }, function (image) { return image.categories; }),
        JoinTable_1.JoinTable(),
        __metadata("design:type", Image_1.Image)
    ], Category.prototype, "image", void 0);
    Category = __decorate([
        Entity_1.Entity(),
        Index_1.Index(["id", "code"])
    ], Category);
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=Category.js.map