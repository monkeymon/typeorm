"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Column_1 = require("../../../../../../../src/decorator/columns/Column");
var Entity_1 = require("../../../../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../../../../src/decorator/columns/PrimaryGeneratedColumn");
var ManyToOne_1 = require("../../../../../../../src/decorator/relations/ManyToOne");
var Teacher_1 = require("./Teacher");
var Specialization = /** @class */ (function () {
    function Specialization() {
    }
    tslib_1.__decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Specialization.prototype, "id", void 0);
    tslib_1.__decorate([
        Column_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Specialization.prototype, "name", void 0);
    tslib_1.__decorate([
        ManyToOne_1.ManyToOne(function (type) { return Teacher_1.Teacher; }, function (teacher) { return teacher.specializations; }),
        tslib_1.__metadata("design:type", Teacher_1.Teacher)
    ], Specialization.prototype, "teacher", void 0);
    Specialization = tslib_1.__decorate([
        Entity_1.Entity()
    ], Specialization);
    return Specialization;
}());
exports.Specialization = Specialization;
//# sourceMappingURL=Specialization.js.map