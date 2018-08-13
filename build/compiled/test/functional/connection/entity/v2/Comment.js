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
var Entity_1 = require("../../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../../src/decorator/columns/PrimaryGeneratedColumn");
var Column_1 = require("../../../../../src/decorator/columns/Column");
var ManyToOne_1 = require("../../../../../src/decorator/relations/ManyToOne");
var Index_1 = require("../../../../../src/decorator/Index");
var Guest_1 = require("./Guest");
var Comment = /** @class */ (function () {
    function Comment() {
    }
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Comment.prototype, "id", void 0);
    __decorate([
        Column_1.Column(),
        Index_1.Index(),
        __metadata("design:type", String)
    ], Comment.prototype, "title", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Comment.prototype, "context", void 0);
    __decorate([
        ManyToOne_1.ManyToOne(function (type) { return Guest_1.Guest; }, function (guest) { return guest.comments; }),
        __metadata("design:type", Guest_1.Guest)
    ], Comment.prototype, "author", void 0);
    Comment = __decorate([
        Entity_1.Entity(),
        Index_1.Index("author_and_title_unique_rename", ["author", "title", "context"], { unique: true })
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map