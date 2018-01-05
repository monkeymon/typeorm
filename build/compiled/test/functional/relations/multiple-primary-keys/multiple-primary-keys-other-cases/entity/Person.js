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
var Column_1 = require("../../../../../../src/decorator/columns/Column");
var OneToOne_1 = require("../../../../../../src/decorator/relations/OneToOne");
var JoinColumn_1 = require("../../../../../../src/decorator/relations/JoinColumn");
var User_1 = require("./User");
var Person = /** @class */ (function () {
    function Person() {
    }
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Person.prototype, "fullName", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return User_1.User; }, { primary: true }),
        JoinColumn_1.JoinColumn(),
        __metadata("design:type", User_1.User)
    ], Person.prototype, "user", void 0);
    Person = __decorate([
        Entity_1.Entity()
    ], Person);
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map