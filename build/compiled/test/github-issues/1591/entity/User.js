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
var Photo_1 = require("./Photo");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        src_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        src_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        src_1.ManyToMany(function (type) { return Photo_1.Photo; }),
        src_1.JoinTable(),
        __metadata("design:type", Array)
    ], User.prototype, "photos", void 0);
    User = __decorate([
        src_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map