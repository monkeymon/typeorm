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
var Generated_1 = require("../../../../../src/decorator/Generated");
var Question = /** @class */ (function () {
    function Question() {
    }
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Question.prototype, "id", void 0);
    __decorate([
        Column_1.Column(),
        Generated_1.Generated("uuid"),
        __metadata("design:type", String)
    ], Question.prototype, "uuid", void 0);
    __decorate([
        Column_1.Column("uniqueidentifier", { nullable: true }),
        __metadata("design:type", Object)
    ], Question.prototype, "uuid2", void 0);
    __decorate([
        Column_1.Column("uniqueidentifier", { nullable: true }),
        Generated_1.Generated("uuid"),
        __metadata("design:type", Object)
    ], Question.prototype, "uuid3", void 0);
    Question = __decorate([
        Entity_1.Entity()
    ], Question);
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.js.map