"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var src_1 = require("../../../../src");
var Product = /** @class */ (function () {
    function Product() {
    }
    tslib_1.__decorate([
        src_1.Column({ primary: true }),
        tslib_1.__metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    tslib_1.__decorate([
        src_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    Product = tslib_1.__decorate([
        src_1.Entity()
    ], Product);
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map