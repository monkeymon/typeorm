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
var test_utils_1 = require("../../../../utils/test-utils");
var Question_1 = require("./entity/Question");
var Answer_1 = require("./entity/Answer");
var Photo_1 = require("./entity/Photo");
var User_1 = require("./entity/User");
describe("persistence > cascades > example 2", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                    })];
                case 1: return [2 /*return*/, connections = _a.sent()];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("should insert everything by cascades properly", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var photo, user, answer1, answer2, question, loadedQuestion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    photo = new Photo_1.Photo();
                    user = new User_1.User();
                    answer1 = new Answer_1.Answer();
                    answer1.photo = photo;
                    answer1.user = user;
                    answer2 = new Answer_1.Answer();
                    answer2.photo = photo;
                    answer2.user = user;
                    question = new Question_1.Question();
                    question.answers = [answer1, answer2];
                    user.question = question;
                    return [4 /*yield*/, connection.manager.save(question)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Question_1.Question, "question")
                            .leftJoinAndSelect("question.answers", "answer")
                            .leftJoinAndSelect("answer.photo", "answerPhoto")
                            .leftJoinAndSelect("answer.user", "answerUser")
                            .leftJoinAndSelect("answerUser.question", "userQuestion")
                            .getOne()];
                case 2:
                    loadedQuestion = _a.sent();
                    loadedQuestion.should.be.eql({
                        id: 1,
                        answers: [{
                                id: 1,
                                photo: {
                                    id: 1
                                },
                                user: {
                                    id: 1,
                                    question: {
                                        id: 1
                                    }
                                }
                            }, {
                                id: 2,
                                photo: {
                                    id: 1
                                },
                                user: {
                                    id: 1,
                                    question: {
                                        id: 1
                                    }
                                }
                            }]
                    });
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=cascades-example2.js.map