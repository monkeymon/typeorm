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
var chai_1 = require("chai");
var test_utils_1 = require("../../../utils/test-utils");
var Post_1 = require("./entity/Post");
var Counters_1 = require("./entity/Counters");
var Subcounters_1 = require("./entity/Subcounters");
describe("metadata-builder > ColumnMetadata", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        schemaCreate: true,
                        dropSchema: true,
                    })];
                case 1: return [2 /*return*/, connections = _a.sent()];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("getValue", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var post, titleColumnMetadata, codeColumnMetadata, watchesColumnMetadata;
        return __generator(this, function (_a) {
            post = new Post_1.Post();
            post.title = "Post #1";
            post.counters = new Counters_1.Counters();
            post.counters.code = 123;
            post.counters.likes = 2;
            post.counters.comments = 3;
            post.counters.favorites = 4;
            post.counters.subcounters = new Subcounters_1.Subcounters();
            post.counters.subcounters.version = 1;
            post.counters.subcounters.watches = 10;
            titleColumnMetadata = connection.getMetadata(Post_1.Post).columns.find(function (column) { return column.propertyName === "title"; });
            chai_1.expect(titleColumnMetadata).not.to.be.empty;
            chai_1.expect(titleColumnMetadata.getEntityValue(post)).to.be.equal("Post #1");
            codeColumnMetadata = connection.getMetadata(Post_1.Post).columns.find(function (column) { return column.propertyName === "code"; });
            chai_1.expect(codeColumnMetadata).not.to.be.empty;
            chai_1.expect(codeColumnMetadata.getEntityValue(post)).to.be.equal(123);
            watchesColumnMetadata = connection.getMetadata(Post_1.Post).columns.find(function (column) { return column.propertyName === "watches"; });
            chai_1.expect(watchesColumnMetadata).not.to.be.empty;
            chai_1.expect(watchesColumnMetadata.getEntityValue(post)).to.be.equal(10);
            return [2 /*return*/];
        });
    }); })); });
    it("getValueMap", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var post, titleColumnMetadata, codeColumnMetadata, watchesColumnMetadata;
        return __generator(this, function (_a) {
            post = new Post_1.Post();
            post.title = "Post #1";
            post.counters = new Counters_1.Counters();
            post.counters.code = 123;
            post.counters.likes = 2;
            post.counters.comments = 3;
            post.counters.favorites = 4;
            post.counters.subcounters = new Subcounters_1.Subcounters();
            post.counters.subcounters.version = 1;
            post.counters.subcounters.watches = 10;
            titleColumnMetadata = connection.getMetadata(Post_1.Post).columns.find(function (column) { return column.propertyName === "title"; });
            chai_1.expect(titleColumnMetadata).not.to.be.empty;
            chai_1.expect(titleColumnMetadata.getEntityValueMap(post)).to.be.eql({ title: "Post #1" });
            chai_1.expect(titleColumnMetadata.getEntityValueMap({ id: 1 })).to.be.eql({ title: undefined }); // still not sure if it should be undefined or { title: undefined }
            codeColumnMetadata = connection.getMetadata(Post_1.Post).columns.find(function (column) { return column.propertyName === "code"; });
            chai_1.expect(codeColumnMetadata).not.to.be.empty;
            chai_1.expect(codeColumnMetadata.getEntityValueMap(post)).to.be.eql({ counters: { code: 123 } });
            chai_1.expect(codeColumnMetadata.getEntityValueMap({ id: 1 })).to.be.eql({ counters: { code: undefined } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(codeColumnMetadata.getEntityValueMap({ id: 1, counters: undefined })).to.be.eql({ counters: { code: undefined } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(codeColumnMetadata.getEntityValueMap({ id: 1, counters: {} })).to.be.eql({ counters: { code: undefined } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(codeColumnMetadata.getEntityValueMap({ id: 1, counters: { code: undefined } })).to.be.eql({ counters: { code: undefined } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(codeColumnMetadata.getEntityValueMap({ id: 1, counters: { code: null } })).to.be.eql({ counters: { code: null } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(codeColumnMetadata.getEntityValueMap({ id: 1, counters: { code: 0 } })).to.be.eql({ counters: { code: 0 } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(codeColumnMetadata.getEntityValueMap({ id: 1, counters: { likes: 123 } })).to.be.eql({ counters: { code: undefined } }); // still not sure if it should be undefined or { title: undefined }
            watchesColumnMetadata = connection.getMetadata(Post_1.Post).columns.find(function (column) { return column.propertyName === "watches"; });
            chai_1.expect(watchesColumnMetadata).not.to.be.empty;
            chai_1.expect(watchesColumnMetadata.getEntityValueMap(post)).to.be.eql({ counters: { subcounters: { watches: 10 } } });
            chai_1.expect(watchesColumnMetadata.getEntityValueMap({ id: 1 })).to.be.eql({ counters: { subcounters: { watches: undefined } } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(watchesColumnMetadata.getEntityValueMap({ id: 1, counters: undefined })).to.be.eql({ counters: { subcounters: { watches: undefined } } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(watchesColumnMetadata.getEntityValueMap({ id: 1, counters: {} })).to.be.eql({ counters: { subcounters: { watches: undefined } } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(watchesColumnMetadata.getEntityValueMap({ id: 1, counters: { subcounters: undefined } })).to.be.eql({ counters: { subcounters: { watches: undefined } } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(watchesColumnMetadata.getEntityValueMap({ id: 1, counters: { subcounters: { watches: null } } })).to.be.eql({ counters: { subcounters: { watches: null } } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(watchesColumnMetadata.getEntityValueMap({ id: 1, counters: { subcounters: { watches: 0 } } })).to.be.eql({ counters: { subcounters: { watches: 0 } } }); // still not sure if it should be undefined or { title: undefined }
            chai_1.expect(watchesColumnMetadata.getEntityValueMap({ id: 1, counters: { subcounters: { version: 123 } } })).to.be.eql({ counters: { subcounters: { watches: undefined } } }); // still
            return [2 /*return*/];
        });
    }); })); });
});
//# sourceMappingURL=column-metadata.js.map