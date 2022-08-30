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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _CommentThread_replies, _CommentThread_actions, _CommentThread_continuation;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const Comment_1 = __importDefault(require("./Comment"));
const ContinuationItem_1 = __importDefault(require("../ContinuationItem"));
const NavigationEndpoint_1 = __importDefault(require("../NavigationEndpoint"));
const Utils_1 = require("../../../utils/Utils");
const helpers_1 = require("../../helpers");
class CommentThread extends helpers_1.YTNode {
    constructor(data) {
        super();
        _CommentThread_replies.set(this, void 0);
        _CommentThread_actions.set(this, void 0);
        _CommentThread_continuation.set(this, void 0);
        this.comment = index_1.default.parseItem(data.comment, Comment_1.default);
        __classPrivateFieldSet(this, _CommentThread_replies, index_1.default.parseItem(data.replies), "f");
        this.is_moderated_elq_comment = data.isModeratedElqComment;
    }
    /**
     * Retrieves replies to this comment thread.
     */
    getReplies() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
                throw new Utils_1.InnertubeError('Actions not set for this CommentThread.');
            if (!__classPrivateFieldGet(this, _CommentThread_replies, "f"))
                throw new Utils_1.InnertubeError('This comment has no replies.', { comment_id: (_a = this.comment) === null || _a === void 0 ? void 0 : _a.comment_id });
            const continuation = (_b = __classPrivateFieldGet(this, _CommentThread_replies, "f").key('contents').parsed().array().get({ type: 'ContinuationItem' })) === null || _b === void 0 ? void 0 : _b.as(ContinuationItem_1.default);
            const response = yield (continuation === null || continuation === void 0 ? void 0 : continuation.endpoint.callTest(__classPrivateFieldGet(this, _CommentThread_actions, "f")));
            this.replies = (_c = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo) === null || _c === void 0 ? void 0 : _c.getType(Comment_1.default).map((comment) => {
                comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
                return comment;
            });
            __classPrivateFieldSet(this, _CommentThread_continuation, (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(ContinuationItem_1.default)) === null || _d === void 0 ? void 0 : _d[0], "f");
            return this;
        });
    }
    /**
     * Retrieves next batch of replies.
     */
    getContinuation() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.replies)
                throw new Utils_1.InnertubeError('Continuation not available.');
            if (!__classPrivateFieldGet(this, _CommentThread_continuation, "f"))
                throw new Utils_1.InnertubeError('Continuation not found.');
            if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
                throw new Utils_1.InnertubeError('Actions not set for this CommentThread.');
            const response = yield ((_a = __classPrivateFieldGet(this, _CommentThread_continuation, "f").button) === null || _a === void 0 ? void 0 : _a.item().key('endpoint').nodeOfType(NavigationEndpoint_1.default).callTest(__classPrivateFieldGet(this, _CommentThread_actions, "f")));
            this.replies = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(Comment_1.default).map((comment) => {
                comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
                return comment;
            });
            __classPrivateFieldSet(this, _CommentThread_continuation, (_b = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(ContinuationItem_1.default)) === null || _b === void 0 ? void 0 : _b[0], "f");
            return this;
        });
    }
    setActions(actions) {
        __classPrivateFieldSet(this, _CommentThread_actions, actions, "f");
    }
}
_CommentThread_replies = new WeakMap(), _CommentThread_actions = new WeakMap(), _CommentThread_continuation = new WeakMap();
CommentThread.type = 'CommentThread';
exports.default = CommentThread;
//# sourceMappingURL=CommentThread.js.map