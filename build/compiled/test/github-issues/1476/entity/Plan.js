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
var index_1 = require("../../../../src/index");
var Plan = /** @class */ (function () {
    function Plan() {
    }
    __decorate([
        index_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Plan.prototype, "planId", void 0);
    __decorate([
        index_1.Column(),
        __metadata("design:type", String)
    ], Plan.prototype, "planName", void 0);
    Plan = __decorate([
        index_1.Entity()
    ], Plan);
    return Plan;
}());
exports.Plan = Plan;
//# sourceMappingURL=Plan.js.map