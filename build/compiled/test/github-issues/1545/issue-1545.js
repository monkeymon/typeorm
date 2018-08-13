"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var test_utils_1 = require("../../utils/test-utils");
var ValidationModel_1 = require("./entity/ValidationModel");
var MainModel_1 = require("./entity/MainModel");
var DataModel_1 = require("./entity/DataModel");
describe("github issues > #1545 Typeorm runs insert query instead of update query on save of existing entity for ManyToOne relationships", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        enabledDrivers: ["postgres"]
                    })];
                case 1: return [2 /*return*/, connections = _a.sent()];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("should add intial validation data", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var validation1, validation2, _a, _b, _c, data1_1, main1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    validation1 = new ValidationModel_1.ValidationModel();
                    validation1.validation = 123;
                    validation2 = new ValidationModel_1.ValidationModel();
                    validation2.validation = 456;
                    _b = (_a = Promise).all;
                    return [4 /*yield*/, connection.manager.save(validation1)];
                case 1:
                    _c = [_d.sent()];
                    return [4 /*yield*/, connection.manager.save(validation2)];
                case 2: return [4 /*yield*/, _b.apply(_a, [_c.concat([_d.sent()])])];
                case 3:
                    _d.sent();
                    data1_1 = new DataModel_1.DataModel();
                    data1_1.active = true;
                    data1_1.validations = validation1;
                    main1 = new MainModel_1.MainModel();
                    main1.dataModel = [data1_1];
                    return [4 /*yield*/, connection.manager.save(main1)];
                case 4:
                    _d.sent();
                    // console.dir(main1, { colors: true, depth: null });
                    main1.dataModel[0].active = false;
                    return [4 /*yield*/, connection.manager.save(main1)];
                case 5:
                    _d.sent();
                    // console.dir(main1, { colors: true, depth: null });
                    return [2 /*return*/, true];
            }
        });
    }); })); });
});
//# sourceMappingURL=issue-1545.js.map