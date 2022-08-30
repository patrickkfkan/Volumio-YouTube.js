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
var _InteractionManager_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../utils/Utils");
class InteractionManager {
    constructor(actions) {
        _InteractionManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _InteractionManager_actions, actions, "f");
    }
    /**
     * Likes a given video.
     */
    like(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").engage('like/like', { video_id });
            return action;
        });
    }
    /**
     * Dislikes a given video.
     */
    dislike(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").engage('like/dislike', { video_id });
            return action;
        });
    }
    /**
     * Removes a like/dislike.
     */
    removeLike(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").engage('like/removelike', { video_id });
            return action;
        });
    }
    /**
     * Subscribes to a given channel.
     */
    subscribe(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ channel_id });
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").engage('subscription/subscribe', { channel_id });
            return action;
        });
    }
    /**
     * Unsubscribes from a given channel.
     */
    unsubscribe(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ channel_id });
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").engage('subscription/unsubscribe', { channel_id });
            return action;
        });
    }
    /**
     * Posts a comment on a given video.
     */
    comment(video_id, text) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id, text });
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").engage('comment/create_comment', { video_id, text });
            return action;
        });
    }
    /**
     * Translates a given text using YouTube's comment translate feature.
     *
     * @param target_language - an ISO language code
     * @param args - optional arguments
     */
    translate(text, target_language, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ text, target_language });
            const response = yield yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").engage('comment/perform_comment_action', {
                video_id: args.video_id,
                comment_id: args.comment_id,
                target_language: target_language,
                comment_action: 'translate',
                text
            });
            const translated_content = (0, Utils_1.findNode)(response.data, 'frameworkUpdates', 'content', 7, false);
            return {
                success: response.success,
                status_code: response.status_code,
                translated_content: translated_content.content,
                data: response.data
            };
        });
    }
    /**
     * Changes notification preferences for a given channel.
     * Only works with channels you are subscribed to.
     */
    setNotificationPreferences(channel_id, type) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ channel_id, type });
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").notifications('modify_channel_preference', { channel_id, pref: type || 'NONE' });
            return action;
        });
    }
}
_InteractionManager_actions = new WeakMap();
exports.default = InteractionManager;
//# sourceMappingURL=InteractionManager.js.map