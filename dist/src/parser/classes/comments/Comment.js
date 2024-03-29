var _Comment_actions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../../index.js';
import Author from '../misc/Author.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import Menu from '../menus/Menu.js';
import AuthorCommentBadge from './AuthorCommentBadge.js';
import CommentActionButtons from './CommentActionButtons.js';
import CommentReplyDialog from './CommentReplyDialog.js';
import PdgCommentChip from './PdgCommentChip.js';
import SponsorCommentBadge from './SponsorCommentBadge.js';
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
        this.sponsor_comment_badge = Parser.parseItem(data.sponsorCommentBadge, SponsorCommentBadge);
        this.paid_comment_chip = Parser.parseItem(data.paidCommentChipRenderer, PdgCommentChip);
        this.author_badge = Parser.parseItem(data.authorCommentBadge, AuthorCommentBadge);
        this.author = new Author(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), this.author_badge ? [{
                metadataBadgeRenderer: (_a = this.author_badge) === null || _a === void 0 ? void 0 : _a.orig_badge
            }] : null, data.authorThumbnail);
        this.action_menu = Parser.parseItem(data.actionMenu, Menu);
        this.action_buttons = Parser.parseItem(data.actionButtons, CommentActionButtons);
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
            const dialog = button.endpoint.dialog.as(CommentReplyDialog);
            const dialog_button = dialog.reply_button;
            if (!dialog_button)
                throw new InnertubeError('Reply button was not found in the dialog.', { comment_id: this.comment_id });
            if (!dialog_button.endpoint)
                throw new InnertubeError('Reply button endpoint was not found.', { comment_id: this.comment_id });
            const response = yield dialog_button.endpoint.call(__classPrivateFieldGet(this, _Comment_actions, "f"), { commentText: text });
            return response;
        });
    }
    /**
     * Translates the comment to a given language.
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
            // XXX: Should move this to Parser#parseResponse
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