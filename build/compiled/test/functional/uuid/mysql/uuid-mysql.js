"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var chai_1 = require("chai");
var test_utils_1 = require("../../../utils/test-utils");
var Post_1 = require("./entity/Post");
var Question_1 = require("./entity/Question");
describe("uuid-mysql", function () {
    var connections;
    before(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
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
    it("should persist uuid correctly when it is generated non primary column", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var postRepository, questionRepository, queryRunner, postTable, questionTable, post, loadedPost, post2, loadedPost2, question, savedQuestion, loadedQuestion, question2, loadedQuestion2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(Post_1.Post);
                    questionRepository = connection.getRepository(Question_1.Question);
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post")];
                case 1:
                    postTable = _a.sent();
                    return [4 /*yield*/, queryRunner.getTable("question")];
                case 2:
                    questionTable = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 3:
                    _a.sent();
                    post = new Post_1.Post();
                    return [4 /*yield*/, postRepository.save(post)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOne(1)];
                case 5:
                    loadedPost = _a.sent();
                    chai_1.expect(loadedPost.uuid).to.be.exist;
                    postTable.findColumnByName("uuid").type.should.be.equal("varchar");
                    post2 = new Post_1.Post();
                    post2.uuid = "fd357b8f-8838-42f6-b7a2-ae027444e895";
                    return [4 /*yield*/, postRepository.save(post2)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOne(2)];
                case 7:
                    loadedPost2 = _a.sent();
                    chai_1.expect(loadedPost2.uuid).to.equal("fd357b8f-8838-42f6-b7a2-ae027444e895");
                    question = new Question_1.Question();
                    question.uuid2 = "fd357b8f-8838-42f6-b7a2-ae027444e895";
                    return [4 /*yield*/, questionRepository.save(question)];
                case 8:
                    savedQuestion = _a.sent();
                    return [4 /*yield*/, questionRepository.findOne(savedQuestion.id)];
                case 9:
                    loadedQuestion = _a.sent();
                    chai_1.expect(loadedQuestion.id).to.be.exist;
                    chai_1.expect(loadedQuestion.uuid).to.be.exist;
                    chai_1.expect(loadedQuestion.uuid2).to.equal("fd357b8f-8838-42f6-b7a2-ae027444e895");
                    chai_1.expect(loadedQuestion.uuid3).to.be.null;
                    chai_1.expect(loadedQuestion.uuid4).to.be.exist;
                    questionTable.findColumnByName("id").type.should.be.equal("varchar");
                    questionTable.findColumnByName("uuid").type.should.be.equal("varchar");
                    questionTable.findColumnByName("uuid2").type.should.be.equal("varchar");
                    questionTable.findColumnByName("uuid3").type.should.be.equal("varchar");
                    question2 = new Question_1.Question();
                    question2.id = "1ecad7f6-23ee-453e-bb44-16eca26d5189";
                    question2.uuid = "35b44650-b2cd-44ec-aa54-137fbdf1c373";
                    question2.uuid2 = "fd357b8f-8838-42f6-b7a2-ae027444e895";
                    question2.uuid3 = null;
                    question2.uuid4 = null;
                    return [4 /*yield*/, questionRepository.save(question2)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, questionRepository.findOne("1ecad7f6-23ee-453e-bb44-16eca26d5189")];
                case 11:
                    loadedQuestion2 = _a.sent();
                    chai_1.expect(loadedQuestion2.id).to.equal("1ecad7f6-23ee-453e-bb44-16eca26d5189");
                    chai_1.expect(loadedQuestion2.uuid).to.equal("35b44650-b2cd-44ec-aa54-137fbdf1c373");
                    chai_1.expect(loadedQuestion2.uuid2).to.equal("fd357b8f-8838-42f6-b7a2-ae027444e895");
                    chai_1.expect(loadedQuestion2.uuid3).to.be.null;
                    chai_1.expect(loadedQuestion2.uuid4).to.be.null;
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("should set generated uuid in the model after save", function () { return Promise.all(connections.map(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var question;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    question = new Question_1.Question();
                    question.uuid2 = "fd357b8f-8838-42f6-b7a2-ae027444e895";
                    return [4 /*yield*/, connection.manager.save(question)];
                case 1:
                    _a.sent();
                    chai_1.expect(question.id).to.exist;
                    chai_1.expect(question.uuid).to.exist;
                    chai_1.expect(question.uuid2).to.exist;
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=uuid-mysql.js.map