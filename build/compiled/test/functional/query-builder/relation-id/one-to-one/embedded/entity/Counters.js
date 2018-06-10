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
var Column_1 = require("../../../../../../../src/decorator/columns/Column");
var Category_1 = require("./Category");
var Subcounters_1 = require("./Subcounters");
var OneToOne_1 = require("../../../../../../../src/decorator/relations/OneToOne");
var JoinColumn_1 = require("../../../../../../../src/decorator/relations/JoinColumn");
var Counters = /** @class */ (function () {
    function Counters() {
    }
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Number)
    ], Counters.prototype, "likes", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Number)
    ], Counters.prototype, "comments", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Number)
    ], Counters.prototype, "favorites", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Category_1.Category; }, function (category) { return category.post; }),
        JoinColumn_1.JoinColumn(),
        __metadata("design:type", Category_1.Category)
    ], Counters.prototype, "category", void 0);
    __decorate([
        Column_1.Column(function () { return Subcounters_1.Subcounters; }),
        __metadata("design:type", Subcounters_1.Subcounters)
    ], Counters.prototype, "subcounters", void 0);
    return Counters;
}());
exports.Counters = Counters;
//# sourceMappingURL=Counters.js.map