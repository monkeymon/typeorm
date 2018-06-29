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
var Column_1 = require("../../../../../src/decorator/columns/Column");
var PostEmbedded_1 = require("./PostEmbedded");
var PrimaryColumn_1 = require("../../../../../src/decorator/columns/PrimaryColumn");
var PostComplex = /** @class */ (function () {
    function PostComplex() {
    }
    __decorate([
        PrimaryColumn_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], PostComplex.prototype, "firstId", void 0);
    __decorate([
        Column_1.Column({ default: "Hello Complexity" }),
        __metadata("design:type", String)
    ], PostComplex.prototype, "text", void 0);
    __decorate([
        Column_1.Column(function (type) { return PostEmbedded_1.PostEmbedded; }),
        __metadata("design:type", PostEmbedded_1.PostEmbedded)
    ], PostComplex.prototype, "embed", void 0);
    PostComplex = __decorate([
        Entity_1.Entity()
    ], PostComplex);
    return PostComplex;
}());
exports.PostComplex = PostComplex;
//# sourceMappingURL=PostComplex.js.map