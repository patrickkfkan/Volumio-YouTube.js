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
var _Comments_page, _Comments_actions, _Comments_continuation;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Utils_1 = require("../../utils/Utils");
const Button_1 = __importDefault(require("../classes/Button"));
const CommentsHeader_1 = __importDefault(require("../classes/comments/CommentsHeader"));
const CommentSimplebox_1 = __importDefault(require("../classes/comments/CommentSimplebox"));
const CommentThread_1 = __importDefault(require("../classes/comments/CommentThread"));
const ContinuationItem_1 = __importDefault(require("../classes/ContinuationItem"));
class Comments {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c, _d, _e;
        _Comments_page.set(this, void 0);
        _Comments_actions.set(this, void 0);
        _Comments_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _Comments_page, already_parsed ? data : __1.default.parseResponse(data), "f");
        __classPrivateFieldSet(this, _Comments_actions, actions, "f");
        const contents = __classPrivateFieldGet(this, _Comments_page, "f").on_response_received_endpoints;
        if (!contents)
            throw new Utils_1.InnertubeError('Comments page did not have any content.');
        this.header = (_b = (_a = contents[0].contents) === null || _a === void 0 ? void 0 : _a.get({ type: 'CommentsHeader' })) === null || _b === void 0 ? void 0 : _b.as(CommentsHeader_1.default);
        const threads = ((_c = contents[1].contents) === null || _c === void 0 ? void 0 : _c.filterType(CommentThread_1.default)) || [];
        this.contents = threads.map((thread) => {
            var _a;
            (_a = thread.comment) === null || _a === void 0 ? void 0 : _a.setActions(__classPrivateFieldGet(this, _Comments_actions, "f"));
            thread.setActions(__classPrivateFieldGet(this, _Comments_actions, "f"));
            return thread;
        });
        __classPrivateFieldSet(this, _Comments_continuation, (_e = (_d = contents[1].contents) === null || _d === void 0 ? void 0 : _d.get({ type: 'ContinuationItem' })) === null || _e === void 0 ? void 0 : _e.as(ContinuationItem_1.default), "f");
    }
    /**
     * Creates a top-level comment.
     */
    createComment(text) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.header)
                throw new Utils_1.InnertubeError('Page header is missing.');
            const button = (_a = this.header.create_renderer) === null || _a === void 0 ? void 0 : _a.as(CommentSimplebox_1.default).submit_button.item().as(Button_1.default);
            if (!button)
                throw new Utils_1.InnertubeError('Could not find target button.');
            const response = yield button.endpoint.callTest(__classPrivateFieldGet(this, _Comments_actions, "f"), {
                commentText: text
            });
            return response;
        });
    }
    /**
     * Retrieves next batch of comments.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comments_continuation, "f"))
                throw new Utils_1.InnertubeError('Continuation not found');
            const data = yield __classPrivateFieldGet(this, _Comments_continuation, "f").endpoint.callTest(__classPrivateFieldGet(this, _Comments_actions, "f"), { parse: true });
            // Copy the previous page so we can keep the header.
            const page = Object.assign({}, __classPrivateFieldGet(this, _Comments_page, "f"));
            if (!page.on_response_received_endpoints || !data.on_response_received_endpoints)
                throw new Utils_1.InnertubeError('Invalid reponse format, missing on_response_received_endpoints');
            // Remove previous items and append the continuation.
            page.on_response_received_endpoints.pop();
            page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);
            return new Comments(__classPrivateFieldGet(this, _Comments_actions, "f"), page, true);
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _Comments_page, "f");
    }
}
_Comments_page = new WeakMap(), _Comments_actions = new WeakMap(), _Comments_continuation = new WeakMap();
exports.default = Comments;
//# sourceMappingURL=Comments.js.map