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
var _Comment_actions;
import Parser from '../../index.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import CommentReplyDialog from './CommentReplyDialog.js';
import AuthorCommentBadge from './AuthorCommentBadge.js';
import Author from '../misc/Author.js';
import Proto from '../../../proto/index.js';
import { InnertubeError } from '../../../utils/Utils.js';
import { YTNode } from '../../helpers.js';
class Comment extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        super();
        _Comment_actions.set(this, void 0);
        this.content = new Text(data.contentText);
        this.published = new Text(data.publishedTimeText);
        this.author_is_channel_owner = data.authorIsChannelOwner;
        this.current_user_reply_thumbnail = Thumbnail.fromResponse(data.currentUserReplyThumbnail);
        this.sponsor_comment_badge = Parser.parseItem(data.sponsorCommentBadge);
        this.paid_comment_chip = Parser.parseItem(data.paidCommentChipRenderer);
        this.author_badge = Parser.parseItem(data.authorCommentBadge, AuthorCommentBadge);
        this.author = new Author(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), this.author_badge ? [{
                metadataBadgeRenderer: (_a = this.author_badge) === null || _a === void 0 ? void 0 : _a.orig_badge
            }] : null, data.authorThumbnail);
        this.action_menu = Parser.parseItem(data.actionMenu);
        this.action_buttons = Parser.parseItem(data.actionButtons);
        this.comment_id = data.commentId;
        this.vote_status = data.voteStatus;
        this.vote_count = data.voteCount ? new Text(data.voteCount).toString() : '0';
        this.reply_count = data.replyCount || 0;
        this.is_liked = !!((_c = (_b = this.action_buttons) === null || _b === void 0 ? void 0 : _b.like_button) === null || _c === void 0 ? void 0 : _c.is_toggled);
        this.is_disliked = !!((_e = (_d = this.action_buttons) === null || _d === void 0 ? void 0 : _d.dislike_button) === null || _e === void 0 ? void 0 : _e.is_toggled);
        this.is_hearted = !!((_g = (_f = this.action_buttons) === null || _f === void 0 ? void 0 : _f.creator_heart) === null || _g === void 0 ? void 0 : _g.is_hearted);
        this.is_pinned = !!data.pinnedCommentBadge;
        this.is_member = !!data.sponsorCommentBadge;
    }
    /**
     * Likes the comment.
     */
    like() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new InnertubeError('An active caller must be provide to perform this operation.');
            const button = (_a = this.action_buttons) === null || _a === void 0 ? void 0 : _a.like_button;
            if (!button)
                throw new InnertubeError('Like button was not found.', { comment_id: this.comment_id });
            if (button.is_toggled)
                throw new InnertubeError('This comment is already liked', { comment_id: this.comment_id });
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comment_actions, "f"), { parse: false });
            return response;
        });
    }
    /**
     * Dislikes the comment.
     */
    dislike() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new InnertubeError('An active caller must be provide to perform this operation.');
            const button = (_a = this.action_buttons) === null || _a === void 0 ? void 0 : _a.dislike_button;
            if (!button)
                throw new InnertubeError('Dislike button was not found.', { comment_id: this.comment_id });
            if (button.is_toggled)
                throw new InnertubeError('This comment is already disliked', { comment_id: this.comment_id });
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comment_actions, "f"), { parse: false });
            return response;
        });
    }
    /**
     * Creates a reply to the comment.
     */
    reply(text) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new InnertubeError('An active caller must be provide to perform this operation.');
            if (!((_a = this.action_buttons) === null || _a === void 0 ? void 0 : _a.reply_button))
                throw new InnertubeError('Cannot reply to another reply. Try mentioning the user instead.', { comment_id: this.comment_id });
            const button = (_b = this.action_buttons) === null || _b === void 0 ? void 0 : _b.reply_button;
            if (!((_c = button.endpoint) === null || _c === void 0 ? void 0 : _c.dialog))
                throw new InnertubeError('Reply button endpoint did not have a dialog.');
            const dialog = button.endpoint.dialog;
            const dialog_button = dialog.item().as(CommentReplyDialog).reply_button;
            if (!dialog_button)
                throw new InnertubeError('Reply button was not found in the dialog.', { comment_id: this.comment_id });
            if (!dialog_button.endpoint)
                throw new InnertubeError('Reply button endpoint was not found.', { comment_id: this.comment_id });
            const response = yield dialog_button.endpoint.call(__classPrivateFieldGet(this, _Comment_actions, "f"), { commentText: text });
            return response;
        });
    }
    /**
     * Translates the comment to the given language.
     * @param target_language - Ex; en, ja
     */
    translate(target_language) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
                throw new InnertubeError('An active caller must be provide to perform this operation.');
            // Emojis must be removed otherwise InnerTube throws a 400 status code at us.
            const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '');
            const payload = {
                text,
                target_language,
                comment_id: this.comment_id
            };
            const action = Proto.encodeCommentActionParams(22, payload);
            const response = yield __classPrivateFieldGet(this, _Comment_actions, "f").execute('comment/perform_comment_action', { action, client: 'ANDROID' });
            // TODO: maybe add these to Parser#parseResponse?
            const mutations = (_b = (_a = response.data.frameworkUpdates) === null || _a === void 0 ? void 0 : _a.entityBatchUpdate) === null || _b === void 0 ? void 0 : _b.mutations;
            const content = (_f = (_e = (_d = (_c = mutations === null || mutations === void 0 ? void 0 : mutations[0]) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commentEntityPayload) === null || _e === void 0 ? void 0 : _e.translatedContent) === null || _f === void 0 ? void 0 : _f.content;
            return Object.assign(Object.assign({}, response), { content });
        });
    }
    setActions(actions) {
        __classPrivateFieldSet(this, _Comment_actions, actions, "f");
    }
}
_Comment_actions = new WeakMap();
Comment.type = 'Comment';
export default Comment;
//# sourceMappingURL=Comment.js.map