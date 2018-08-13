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
var src_1 = require("../../../../src");
var TestEntity2_1 = require("./TestEntity2");
var TestEntity4_1 = require("./TestEntity4");
var TestEntity3 = /** @class */ (function () {
    function TestEntity3() {
    }
    __decorate([
        src_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], TestEntity3.prototype, "id", void 0);
    __decorate([
        src_1.OneToOne(function (t) { return TestEntity2_1.TestEntity2; }, function (a) { return a.Entity3; }),
        __metadata("design:type", TestEntity2_1.TestEntity2)
    ], TestEntity3.prototype, "Entity2", void 0);
    __decorate([
        src_1.Column(),
        __metadata("design:type", String)
    ], TestEntity3.prototype, "name", void 0);
    __decorate([
        src_1.OneToMany(function (t) { return TestEntity4_1.TestEntity4; }, function (entity4) { return entity4.Entity3; }),
        __metadata("design:type", Array)
    ], TestEntity3.prototype, "Entity4", void 0);
    TestEntity3 = __decorate([
        src_1.Entity()
    ], TestEntity3);
    return TestEntity3;
}());
exports.TestEntity3 = TestEntity3;
//# sourceMappingURL=TestEntity3.js.map