"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feed_1 = __importDefault(require("../../core/Feed"));
const BrowseFeedActions_1 = __importDefault(require("../classes/BrowseFeedActions"));
// TODO: make feed actions usable
class History extends Feed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a, _b;
        super(actions, data, already_parsed);
        this.sections = this.memo.get('ItemSection');
        this.feed_actions = ((_b = (_a = this.memo.get('BrowseFeedActions')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.as(BrowseFeedActions_1.default)) || [];
    }
    /**
     * Retrieves next batch of contents.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const continuation = yield this.getContinuationData();
            return new History(this.actions, continuation, true);
        });
    }
}
exports.default = History;
//# sourceMappingURL=History.js.map