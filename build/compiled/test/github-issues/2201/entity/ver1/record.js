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
var index_1 = require("../../../../../src/index");
var Entity_1 = require("../../../../../src/decorator/entity/Entity");
var BaseEntity_1 = require("../../../../../src/repository/BaseEntity");
var context_1 = require("./context");
var Record = /** @class */ (function (_super) {
    __extends(Record, _super);
    function Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        index_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Record.prototype, "id", void 0);
    __decorate([
        index_1.OneToMany(function (type) { return context_1.RecordContext; }, function (context) { return context.record; }),
        __metadata("design:type", Array)
    ], Record.prototype, "contexts", void 0);
    Record = __decorate([
        Entity_1.Entity({ name: "records" })
    ], Record);
    return Record;
}(BaseEntity_1.BaseEntity));
exports.Record = Record;
//# sourceMappingURL=record.js.map