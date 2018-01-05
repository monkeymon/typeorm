"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Entity_1 = require("../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
var BaseEntity_1 = require("../../../../src/repository/BaseEntity");
var OneToOne_1 = require("../../../../src/decorator/relations/OneToOne");
var Foo_1 = require("./Foo");
var JoinColumn_1 = require("../../../../src/decorator/relations/JoinColumn");
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Bar.prototype, "id", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Foo_1.Foo; }, {
            onDelete: "SET NULL"
        }),
        JoinColumn_1.JoinColumn(),
        __metadata("design:type", Foo_1.Foo)
    ], Bar.prototype, "foo", void 0);
    Bar = __decorate([
        Entity_1.Entity()
    ], Bar);
    return Bar;
}(BaseEntity_1.BaseEntity));
exports.Bar = Bar;
//# sourceMappingURL=Bar.js.map