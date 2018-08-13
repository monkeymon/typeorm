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
var User_1 = require("./User");
var string_decoder_1 = require("string_decoder");
var Photo = /** @class */ (function () {
    function Photo() {
    }
    Object.defineProperty(Photo.prototype, "id", {
        get: function () {
            var decoder = new string_decoder_1.StringDecoder("hex");
            return decoder.end(this._id);
        },
        set: function (value) {
            this._id = Buffer.from(value, "hex");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        src_1.PrimaryColumn("binary", {
            length: 2
        }),
        __metadata("design:type", Buffer)
    ], Photo.prototype, "_id", void 0);
    __decorate([
        src_1.Column(),
        __metadata("design:type", String)
    ], Photo.prototype, "description", void 0);
    __decorate([
        src_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.photos; }),
        __metadata("design:type", User_1.User)
    ], Photo.prototype, "user", void 0);
    Photo = __decorate([
        src_1.Entity()
    ], Photo);
    return Photo;
}());
exports.Photo = Photo;
//# sourceMappingURL=Photo.js.map