"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("../../../src/index");
var Author = /** @class */ (function () {
    function Author() {
    }
    tslib_1.__decorate([
        index_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Author.prototype, "id", void 0);
    tslib_1.__decorate([
        index_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Author.prototype, "name", void 0);
    Author = tslib_1.__decorate([
        index_1.Entity("sample19_author")
    ], Author);
    return Author;
}());
exports.Author = Author;
//# sourceMappingURL=Author.js.map