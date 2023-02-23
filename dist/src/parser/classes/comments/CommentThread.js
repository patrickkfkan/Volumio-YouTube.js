var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CommentThread_actions, _CommentThread_continuation;
import Parser from '../../index.js';
import Comment from './Comment.js';
import ContinuationItem from '../ContinuationItem.js';
import Button from '../Button.js';
import { InnertubeError } from '../../../utils/Utils.js';
import { observe, YTNode } from '../../helpers.js';
class CommentThread extends YTNode {
    constructor(data) {
        super();
        _CommentThread_actions.set(this, void 0);
        _CommentThread_continuation.set(this, void 0);
        this.comment = Parser.parseItem(data.comment, Comment);
        this.comment_replies_data = Parser.parseItem(data.replies);
        this.is_moderated_elq_comment = data.isModeratedElqComment;
        this.has_replies = !!this.comment_replies_data;
    }
    /**
     * Retrieves replies to this comment thread.
     */
    getReplies() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
                throw new InnertubeError('Actions instance not set for this thread.');
            if (!this.comment_replies_data)
                throw new InnertubeError('This comment has no replies.', { comment_id: (_a = this.comment) === null || _a === void 0 ? void 0 : _a.comment_id });
            const continuation = (_b = this.comment_replies_data.contents) === null || _b === void 0 ? void 0 : _b.firstOfType(ContinuationItem);
            if (!continuation)
                throw new InnertubeError('Replies continuation not found.');
            const response = yield continuation.endpoint.call(__classPrivateFieldGet(this, _CommentThread_actions, "f"), { parse: true });
            if (!response.on_response_received_endpoints_memo)
                throw new InnertubeError('Unexpected response.', response);
            this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment).map((comment) => {
                comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
                return comment;
            }));
            __classPrivateFieldSet(this, _CommentThread_continuation, response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(ContinuationItem).first(), "f");
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
                throw new InnertubeError('Cannot retrieve continuation because this thread\'s replies have not been loaded.');
            if (!__classPrivateFieldGet(this, _CommentThread_continuation, "f"))
                throw new InnertubeError('Continuation not found.');
            if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
                throw new InnertubeError('Actions instance not set for this thread.');
            const load_more_button = (_a = __classPrivateFieldGet(this, _CommentThread_continuation, "f").button) === null || _a === void 0 ? void 0 : _a.as(Button);
            if (!load_more_button)
                throw new InnertubeError('"Load more" button not found.');
            const response = yield load_more_button.endpoint.call(__classPrivateFieldGet(this, _CommentThread_actions, "f"), { parse: true });
            if (!response.on_response_received_endpoints_memo)
                throw new InnertubeError('Unexpected response.', response);
            this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment).map((comment) => {
                comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
                return comment;
            }));
            __classPrivateFieldSet(this, _CommentThread_continuation, (_b = response.on_response_received_endpoints_memo.getType(ContinuationItem)) === null || _b === void 0 ? void 0 : _b[0], "f");
            return this;
        });
    }
    get has_continuation() {
        if (!this.replies)
            throw new InnertubeError('Cannot determine if there is a continuation because this thread\'s replies have not been loaded.');
        return !!__classPrivateFieldGet(this, _CommentThread_continuation, "f");
    }
    setActions(actions) {
        __classPrivateFieldSet(this, _CommentThread_actions, actions, "f");
    }
}
_CommentThread_actions = new WeakMap(), _CommentThread_continuation = new WeakMap();
CommentThread.type = 'CommentThread';
export default CommentThread;
//# sourceMappingURL=CommentThread.js.map