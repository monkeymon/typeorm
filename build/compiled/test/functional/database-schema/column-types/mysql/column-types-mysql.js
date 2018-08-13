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
var Post_1 = require("./entity/Post");
var test_utils_1 = require("../../../../utils/test-utils");
var PostWithOptions_1 = require("./entity/PostWithOptions");
var PostWithoutTypes_1 = require("./entity/PostWithoutTypes");
var FruitEnum_1 = require("./enum/FruitEnum");
describe("database schema > column types > mysql", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        enabledDrivers: ["mysql"],
                    })];
                case 1:
                    connections = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("all types should work correctly - persist and hydrate", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var postRepository, queryRunner, table, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(Post_1.Post);
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post")];
                case 1:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    post = new Post_1.Post();
                    post.id = 1;
                    post.int = 2147483647;
                    post.tinyint = 127;
                    post.smallint = 32767;
                    post.mediumint = 8388607;
                    post.bigint = "8223372036854775807";
                    post.float = 10.53;
                    post.double = 10.1234;
                    post.decimal = "822337";
                    post.char = "A";
                    post.varchar = "This is varchar";
                    post.text = "This is text";
                    post.tinytext = "This is tinytext";
                    post.mediumtext = "This is mediumtext";
                    post.longtext = "This is longtext";
                    post.date = "2017-06-21";
                    post.datetime = new Date();
                    post.datetime.setMilliseconds(0); // set milliseconds to zero, because if datetime type specified without precision, milliseconds won't save in database
                    post.timestamp = new Date();
                    post.timestamp.setMilliseconds(0); // set milliseconds to zero, because if datetime type specified without precision, milliseconds won't save in database
                    post.time = "15:30:00";
                    post.year = 2017;
                    post.binary = new Buffer("A");
                    post.varbinary = new Buffer("B");
                    post.blob = new Buffer("This is blob");
                    post.tinyblob = new Buffer("This is tinyblob");
                    post.mediumblob = new Buffer("This is mediumblob");
                    post.longblob = new Buffer("This is longblob");
                    post.geometry = "POINT(1 1)";
                    post.point = "POINT(1 1)";
                    post.linestring = "LINESTRING(0 0,1 1,2 2)";
                    post.polygon = "POLYGON((0 0,10 0,10 10,0 10,0 0),(5 5,7 5,7 7,5 7,5 5))";
                    post.multipoint = "MULTIPOINT((0 0),(20 20),(60 60))";
                    post.multilinestring = "MULTILINESTRING((10 10,20 20),(15 15,30 15))";
                    post.multipolygon = "MULTIPOLYGON(((0 0,10 0,10 10,0 10,0 0)),((5 5,7 5,7 7,5 7,5 5)))";
                    post.geometrycollection = "GEOMETRYCOLLECTION(POINT(10 10),POINT(30 30),LINESTRING(15 15,20 20))";
                    post.enum = "A";
                    post.classEnum1 = FruitEnum_1.FruitEnum.Apple;
                    post.json = { id: 1, name: "Post" };
                    post.simpleArray = ["A", "B", "C"];
                    post.simpleJson = { param: "VALUE" };
                    return [4 /*yield*/, postRepository.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOne(1)];
                case 4:
                    loadedPost = (_a.sent());
                    loadedPost.id.should.be.equal(post.id);
                    loadedPost.int.should.be.equal(post.int);
                    loadedPost.tinyint.should.be.equal(post.tinyint);
                    loadedPost.smallint.should.be.equal(post.smallint);
                    loadedPost.mediumint.should.be.equal(post.mediumint);
                    loadedPost.bigint.should.be.equal(post.bigint);
                    loadedPost.float.should.be.equal(post.float);
                    loadedPost.double.should.be.equal(post.double);
                    loadedPost.decimal.should.be.equal(post.decimal);
                    loadedPost.char.should.be.equal(post.char);
                    loadedPost.varchar.should.be.equal(post.varchar);
                    loadedPost.text.should.be.equal(post.text);
                    loadedPost.tinytext.should.be.equal(post.tinytext);
                    loadedPost.mediumtext.should.be.equal(post.mediumtext);
                    loadedPost.longtext.should.be.equal(post.longtext);
                    loadedPost.date.should.be.equal(post.date);
                    loadedPost.datetime.getTime().should.be.equal(post.datetime.getTime());
                    loadedPost.timestamp.getTime().should.be.equal(post.timestamp.getTime());
                    loadedPost.time.should.be.equal(post.time);
                    loadedPost.year.should.be.equal(post.year);
                    loadedPost.binary.toString().should.be.equal(post.binary.toString());
                    loadedPost.varbinary.toString().should.be.equal(post.varbinary.toString());
                    loadedPost.blob.toString().should.be.equal(post.blob.toString());
                    loadedPost.tinyblob.toString().should.be.equal(post.tinyblob.toString());
                    loadedPost.mediumblob.toString().should.be.equal(post.mediumblob.toString());
                    loadedPost.longblob.toString().should.be.equal(post.longblob.toString());
                    loadedPost.geometry.should.be.equal(post.geometry);
                    loadedPost.point.should.be.equal(post.point);
                    loadedPost.linestring.should.be.equal(post.linestring);
                    loadedPost.polygon.should.be.equal(post.polygon);
                    loadedPost.multipoint.should.be.equal(post.multipoint);
                    loadedPost.multilinestring.should.be.equal(post.multilinestring);
                    loadedPost.multipolygon.should.be.equal(post.multipolygon);
                    loadedPost.geometrycollection.should.be.equal(post.geometrycollection);
                    loadedPost.enum.should.be.equal(post.enum);
                    loadedPost.classEnum1.should.be.equal(post.classEnum1);
                    loadedPost.json.should.be.eql(post.json);
                    loadedPost.simpleArray[0].should.be.equal(post.simpleArray[0]);
                    loadedPost.simpleArray[1].should.be.equal(post.simpleArray[1]);
                    loadedPost.simpleArray[2].should.be.equal(post.simpleArray[2]);
                    loadedPost.simpleJson.param.should.be.equal(post.simpleJson.param);
                    table.findColumnByName("id").type.should.be.equal("int");
                    table.findColumnByName("int").type.should.be.equal("int");
                    table.findColumnByName("tinyint").type.should.be.equal("tinyint");
                    table.findColumnByName("smallint").type.should.be.equal("smallint");
                    table.findColumnByName("mediumint").type.should.be.equal("mediumint");
                    table.findColumnByName("bigint").type.should.be.equal("bigint");
                    table.findColumnByName("float").type.should.be.equal("float");
                    table.findColumnByName("double").type.should.be.equal("double");
                    table.findColumnByName("decimal").type.should.be.equal("decimal");
                    table.findColumnByName("char").type.should.be.equal("char");
                    table.findColumnByName("varchar").type.should.be.equal("varchar");
                    table.findColumnByName("text").type.should.be.equal("text");
                    table.findColumnByName("tinytext").type.should.be.equal("tinytext");
                    table.findColumnByName("mediumtext").type.should.be.equal("mediumtext");
                    table.findColumnByName("longtext").type.should.be.equal("longtext");
                    table.findColumnByName("date").type.should.be.equal("date");
                    table.findColumnByName("datetime").type.should.be.equal("datetime");
                    table.findColumnByName("timestamp").type.should.be.equal("timestamp");
                    table.findColumnByName("time").type.should.be.equal("time");
                    table.findColumnByName("year").type.should.be.equal("year");
                    table.findColumnByName("binary").type.should.be.equal("binary");
                    table.findColumnByName("varbinary").type.should.be.equal("varbinary");
                    table.findColumnByName("blob").type.should.be.equal("blob");
                    table.findColumnByName("tinyblob").type.should.be.equal("tinyblob");
                    table.findColumnByName("mediumblob").type.should.be.equal("mediumblob");
                    table.findColumnByName("longblob").type.should.be.equal("longblob");
                    table.findColumnByName("geometry").type.should.be.equal("geometry");
                    table.findColumnByName("point").type.should.be.equal("point");
                    table.findColumnByName("linestring").type.should.be.equal("linestring");
                    table.findColumnByName("polygon").type.should.be.equal("polygon");
                    table.findColumnByName("multipoint").type.should.be.equal("multipoint");
                    table.findColumnByName("multilinestring").type.should.be.equal("multilinestring");
                    table.findColumnByName("multipolygon").type.should.be.equal("multipolygon");
                    table.findColumnByName("geometrycollection").type.should.be.equal("geometrycollection");
                    table.findColumnByName("enum").type.should.be.equal("enum");
                    table.findColumnByName("enum").enum[0].should.be.equal("A");
                    table.findColumnByName("enum").enum[1].should.be.equal("B");
                    table.findColumnByName("enum").enum[2].should.be.equal("C");
                    table.findColumnByName("classEnum1").type.should.be.equal("enum");
                    table.findColumnByName("classEnum1").enum[0].should.be.equal("apple");
                    table.findColumnByName("classEnum1").enum[1].should.be.equal("pineapple");
                    table.findColumnByName("classEnum1").enum[2].should.be.equal("banana");
                    table.findColumnByName("json").type.should.be.equal("json");
                    table.findColumnByName("simpleArray").type.should.be.equal("text");
                    table.findColumnByName("simpleJson").type.should.be.equal("text");
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("all types should work correctly - persist and hydrate when options are specified on columns", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var postRepository, queryRunner, table, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(PostWithOptions_1.PostWithOptions);
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post_with_options")];
                case 1:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    post = new PostWithOptions_1.PostWithOptions();
                    post.id = 1;
                    post.name = "Post";
                    post.float = 10.53;
                    post.double = 10.12;
                    post.decimal = "12345.00";
                    post.char = "A";
                    post.varchar = "This is varchar";
                    post.datetime = new Date();
                    post.timestamp = new Date();
                    post.time = "15:30:00.256";
                    return [4 /*yield*/, postRepository.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOne(1)];
                case 4:
                    loadedPost = (_a.sent());
                    loadedPost.id.should.be.equal(post.id);
                    loadedPost.name.should.be.equal(post.name);
                    loadedPost.float.should.be.equal(post.float);
                    loadedPost.double.should.be.equal(post.double);
                    loadedPost.decimal.should.be.equal(post.decimal);
                    loadedPost.char.should.be.equal(post.char);
                    loadedPost.varchar.should.be.equal(post.varchar);
                    loadedPost.datetime.getTime().should.be.equal(post.datetime.getTime());
                    loadedPost.timestamp.getTime().should.be.equal(post.timestamp.getTime());
                    loadedPost.time.should.be.equal(post.time);
                    table.findColumnByName("id").type.should.be.equal("int");
                    table.findColumnByName("name").type.should.be.equal("varchar");
                    table.findColumnByName("name").length.should.be.equal("10");
                    table.findColumnByName("float").type.should.be.equal("float");
                    table.findColumnByName("float").precision.should.be.equal(5);
                    table.findColumnByName("float").scale.should.be.equal(2);
                    table.findColumnByName("double").type.should.be.equal("double");
                    table.findColumnByName("double").precision.should.be.equal(5);
                    table.findColumnByName("double").scale.should.be.equal(2);
                    table.findColumnByName("decimal").type.should.be.equal("decimal");
                    table.findColumnByName("decimal").precision.should.be.equal(7);
                    table.findColumnByName("decimal").scale.should.be.equal(2);
                    table.findColumnByName("char").type.should.be.equal("char");
                    table.findColumnByName("char").length.should.be.equal("5");
                    table.findColumnByName("varchar").type.should.be.equal("varchar");
                    table.findColumnByName("varchar").length.should.be.equal("30");
                    table.findColumnByName("datetime").type.should.be.equal("datetime");
                    table.findColumnByName("datetime").precision.should.be.equal(6);
                    table.findColumnByName("timestamp").type.should.be.equal("timestamp");
                    table.findColumnByName("timestamp").precision.should.be.equal(6);
                    table.findColumnByName("time").type.should.be.equal("time");
                    table.findColumnByName("time").precision.should.be.equal(3);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("all types should work correctly - persist and hydrate when types are not specified on columns", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var postRepository, queryRunner, table, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(PostWithoutTypes_1.PostWithoutTypes);
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post_without_types")];
                case 1:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    post = new PostWithoutTypes_1.PostWithoutTypes();
                    post.id = 1;
                    post.name = "Post";
                    post.boolean = true;
                    post.blob = new Buffer("A");
                    post.datetime = new Date();
                    post.datetime.setMilliseconds(0); // set milliseconds to zero, because if datetime type specified without precision, milliseconds won't save in database
                    return [4 /*yield*/, postRepository.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOne(1)];
                case 4:
                    loadedPost = (_a.sent());
                    loadedPost.id.should.be.equal(post.id);
                    loadedPost.name.should.be.equal(post.name);
                    loadedPost.boolean.should.be.equal(post.boolean);
                    loadedPost.blob.toString().should.be.equal(post.blob.toString());
                    loadedPost.datetime.getTime().should.be.equal(post.datetime.getTime());
                    table.findColumnByName("id").type.should.be.equal("int");
                    table.findColumnByName("name").type.should.be.equal("varchar");
                    table.findColumnByName("boolean").type.should.be.equal("tinyint");
                    table.findColumnByName("blob").type.should.be.equal("blob");
                    table.findColumnByName("datetime").type.should.be.equal("datetime");
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=column-types-mysql.js.map