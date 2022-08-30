"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class TwoColumnWatchNextResults extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.results = index_1.default.parse((_a = data.results) === null || _a === void 0 ? void 0 : _a.results.contents, true);
        this.secondary_results = index_1.default.parse((_b = data.secondaryResults) === null || _b === void 0 ? void 0 : _b.secondaryResults.results, true);
        this.conversation_bar = index_1.default.parse(data === null || data === void 0 ? void 0 : data.conversationBar);
    }
}
TwoColumnWatchNextResults.type = 'TwoColumnWatchNextResults';
exports.default = TwoColumnWatchNextResults;
//# sourceMappingURL=TwoColumnWatchNextResults.js.map