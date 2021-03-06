"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Entity_1 = require("../../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../../src/decorator/columns/PrimaryGeneratedColumn");
var Column_1 = require("../../../../../src/decorator/columns/Column");
var ManyToMany_1 = require("../../../../../src/decorator/relations/ManyToMany");
var Category_1 = require("./Category");
var JoinTable_1 = require("../../../../../src/decorator/relations/JoinTable");
var Question = /** @class */ (function () {
    function Question() {
        this.categories = [];
    }
    tslib_1.__decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Question.prototype, "id", void 0);
    tslib_1.__decorate([
        Column_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Question.prototype, "title", void 0);
    tslib_1.__decorate([
        ManyToMany_1.ManyToMany(function (type) { return Category_1.Category; }, { persistence: false }),
        JoinTable_1.JoinTable(),
        tslib_1.__metadata("design:type", Array)
    ], Question.prototype, "categories", void 0);
    Question = tslib_1.__decorate([
        Entity_1.Entity()
    ], Question);
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.js.map