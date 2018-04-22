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
var PrimaryColumn_1 = require("../../../../../../src/decorator/columns/PrimaryColumn");
var Column_1 = require("../../../../../../src/decorator/columns/Column");
var PostWithOptions = /** @class */ (function () {
    function PostWithOptions() {
    }
    __decorate([
        PrimaryColumn_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "id", void 0);
    __decorate([
        Column_1.Column({ length: 10 }),
        __metadata("design:type", String)
    ], PostWithOptions.prototype, "name", void 0);
    __decorate([
        Column_1.Column("int", { length: 3 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "int", void 0);
    __decorate([
        Column_1.Column("tinyint", { length: 3 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "tinyint", void 0);
    __decorate([
        Column_1.Column("smallint", { length: 3 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "smallint", void 0);
    __decorate([
        Column_1.Column("mediumint", { length: 3 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "mediumint", void 0);
    __decorate([
        Column_1.Column("bigint", { length: 3 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "bigint", void 0);
    __decorate([
        Column_1.Column("float", { precision: 5, scale: 2 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "float", void 0);
    __decorate([
        Column_1.Column("double", { precision: 5, scale: 2 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "double", void 0);
    __decorate([
        Column_1.Column("decimal", { precision: 5, scale: 2 }),
        __metadata("design:type", Number)
    ], PostWithOptions.prototype, "decimal", void 0);
    __decorate([
        Column_1.Column("char", { length: 5 }),
        __metadata("design:type", String)
    ], PostWithOptions.prototype, "char", void 0);
    __decorate([
        Column_1.Column("varchar", { length: 30 }),
        __metadata("design:type", String)
    ], PostWithOptions.prototype, "varchar", void 0);
    __decorate([
        Column_1.Column("datetime", { precision: 6 }),
        __metadata("design:type", Date)
    ], PostWithOptions.prototype, "datetime", void 0);
    __decorate([
        Column_1.Column("timestamp", { precision: 6 }),
        __metadata("design:type", Date)
    ], PostWithOptions.prototype, "timestamp", void 0);
    __decorate([
        Column_1.Column("time", { precision: 3 }),
        __metadata("design:type", String)
    ], PostWithOptions.prototype, "time", void 0);
    PostWithOptions = __decorate([
        Entity_1.Entity()
    ], PostWithOptions);
    return PostWithOptions;
}());
exports.PostWithOptions = PostWithOptions;
//# sourceMappingURL=PostWithOptions.js.map