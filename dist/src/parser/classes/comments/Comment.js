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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Comment_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const Text_1 = __importDefault(require("../misc/Text"));
const Thumbnail_1 = __importDefault(require("../misc/Thumbnail"));
const Author_1 = __importDefault(require("../misc/Author"));
const ToggleButton_1 = __importDefault(require("../ToggleButton"));
const CommentReplyDialog_1 = __importDefault(require("./CommentReplyDialog"));
const CommentActionButtons_1 = __importDefault(require("./CommentActionButtons"));
const AuthorCommentBadge_1 = __importDefault(require("./AuthorCommentBadge"));
const index_2 = __importDefault(require("../../../proto/index"));
const Utils_1 = require("../../../utils/Utils");
const helpers_1 = require("../../helpers");
class Comment extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        _Comment_actions.set(this, void 0);
        this.content = new Text_1.default(data.contentText);
        this.published = new Text_1.default(data.publishedTimeText);
        this.author_is_channel_owner = data.authorIsChannelOwner;
        this.current_user_reply_thumbnail = Thumbnail_1.default.fromResponse(data.currentUserReplyThumbnail);
        this.author_badge = index_1.default.parseItem(data.authorCommentBadge, AuthorCommentBadge_1.default);
        this.author = new Author_1.default(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), this.author_badge ? [{
                metadataBadgeRenderer: (_a = this.author_badge) === null || _a === void 0 ? void 0 : _a.orig_badge
            }] : null, data.authorThumbnail);
        this.action_menu = index_1.default.parse(data.actionMenu);
        this.action_buttons = index_1.default.parse(data.actionButtons);
        this.comment_id = data.commentId;
        this.vote_status = data.voteStatus;
        this.vote_count = {
            text: data.voteCount ? (_b = data.voteCount.accessibility.accessibilityData) === null || _b === void 0 ? void 0 : _b.label.replace(/\D/g, '') : '0',
            short_text: data.voteCount ? new Text_1.default(data.voteCount).toString() : '0'
        };
        this.reply_count = data.replyCount || 0;
        this.is_liked = this.action_buttons.item().as(CommentActionButtons_1.default).like_button.item().as(ToggleButton_1.default).is_toggled;
        this.is_disliked = this.action_buttons.item().as(CommentActionButtons_1.default).dislike_button.item().as(ToggleButton_1.default).is_toggled;
        this.is_pinned = !!data.pinnedCommentBadge;
    }
    /**
     * Likes the comment.
     */
    like() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new Utils_1.InnertubeError('An active caller must be provide to perform this operation.');
            const button = this.action_buttons.item().as(CommentActionButtons_1.default).like_button.item().as(ToggleButton_1.default);
            if (button.is_toggled)
                throw new Utils_1.InnertubeError('This comment is already liked', { comment_id: this.comment_id });
            const response = yield button.endpoint.callTest(__classPrivateFieldGet(this, _Comment_actions, "f"), { parse: false });
            return response;
        });
    }
    /**
     * Dislikes the comment.
     */
    dislike() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new Utils_1.InnertubeError('An active caller must be provide to perform this operation.');
            const button = this.action_buttons.item().as(CommentActionButtons_1.default).dislike_button.item().as(ToggleButton_1.default);
            if (button.is_toggled)
                throw new Utils_1.InnertubeError('This comment is already disliked', { comment_id: this.comment_id });
            const response = yield button.endpoint.callTest(__classPrivateFieldGet(this, _Comment_actions, "f"), { parse: false });
            return response;
        });
    }
    /**
     * Creates a reply to the comment.
     */
    reply(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new Utils_1.InnertubeError('An active caller must be provide to perform this operation.');
            if (!this.action_buttons.item().as(CommentActionButtons_1.default).reply_button)
                throw new Utils_1.InnertubeError('Cannot reply to another reply. Try mentioning the user instead.', { comment_id: this.comment_id });
            const button = this.action_buttons.item().as(CommentActionButtons_1.default).reply_button.item().as(ToggleButton_1.default);
            if (!button.endpoint.dialog)
                throw new Utils_1.InnertubeError('Reply button endpoint did not have a dialog.');
            const dialog = button.endpoint.dialog;
            const dialog_button = dialog.item().as(CommentReplyDialog_1.default).reply_button.item().as(ToggleButton_1.default);
            const payload = {
                params: {
                    commentText: text
                }
            };
            const response = yield dialog_button.endpoint.callTest(__classPrivateFieldGet(this, _Comment_actions, "f"), payload);
            return response;
        });
    }
    /**
     * Translates the comment to the given language.
     * @param target_language - Ex; en, ja
     */
    translate(target_language) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new Utils_1.InnertubeError('An active caller must be provide to perform this operation.');
            // Emojis must be removed otherwise InnerTube throws a 400 status code at us.
            const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '');
            const payload = {
                text,
                target_language,
                comment_id: this.comment_id
            };
            const action = index_2.default.encodeCommentActionParams(22, payload);
            const response = yield __classPrivateFieldGet(this, _Comment_actions, "f").execute('comment/perform_comment_action', { action, client: 'ANDROID' });
            // TODO: maybe add these to Parser#parseResponse?
            const mutations = response.data.frameworkUpdates.entityBatchUpdate.mutations;
            const content = mutations[0].payload.commentEntityPayload.translatedContent.content;
            return Object.assign(Object.assign({}, response), { content });
        });
    }
    setActions(actions) {
        __classPrivateFieldSet(this, _Comment_actions, actions, "f");
    }
}
_Comment_actions = new WeakMap();
Comment.type = 'Comment';
exports.default = Comment;
//# sourceMappingURL=Comment.js.map