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
import Proto from '../proto/index.js';
import { throwIfMissing } from '../utils/Utils.js';
class InteractionManager {
    constructor(actions) {
        _InteractionManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _InteractionManager_actions, actions, "f");
    }
    /**
     * Likes a given video.
     * @param video_id - The video ID
     */
    like(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/like/like', {
                client: 'ANDROID',
                target: {
                    videoId: video_id
                }
            });
            return action;
        });
    }
    /**
     * Dislikes a given video.
     * @param video_id - The video ID
     */
    dislike(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/like/dislike', {
                client: 'ANDROID',
                target: {
                    videoId: video_id
                }
            });
            return action;
        });
    }
    /**
     * Removes a like/dislike.
     * @param video_id - The video ID
     */
    removeRating(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/like/removelike', {
                client: 'ANDROID',
                target: {
                    videoId: video_id
                }
            });
            return action;
        });
    }
    /**
     * Subscribes to a given channel.
     * @param channel_id - The channel ID
     */
    subscribe(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ channel_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/subscription/subscribe', {
                client: 'ANDROID',
                channelIds: [channel_id],
                params: 'EgIIAhgA'
            });
            return action;
        });
    }
    /**
     * Unsubscribes from a given channel.
     * @param channel_id - The channel ID
     */
    unsubscribe(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ channel_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/subscription/unsubscribe', {
                client: 'ANDROID',
                channelIds: [channel_id],
                params: 'CgIIAhgA'
            });
            return action;
        });
    }
    /**
     * Posts a comment on a given video.
     * @param video_id - The video ID
     * @param text - The comment text
     */
    comment(video_id, text) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id, text });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/comment/create_comment', {
                client: 'ANDROID',
                commentText: text,
                createCommentParams: Proto.encodeCommentParams(video_id)
            });
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
            throwIfMissing({ text, target_language });
            const target_action = Proto.encodeCommentActionParams(22, Object.assign({ text, target_language }, args));
            const response = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/comment/perform_comment_action', {
                client: 'ANDROID',
                actions: [target_action]
            });
            const mutation = response.data.frameworkUpdates.entityBatchUpdate.mutations[0].payload.commentEntityPayload;
            return {
                success: response.success,
                status_code: response.status_code,
                translated_content: mutation.translatedContent.content,
                data: response.data
            };
        });
    }
    /**
     * Changes notification preferences for a given channel.
     * Only works with channels you are subscribed to.
     * @param channel_id - The channel ID.
     * @param type - The notification type.
     */
    setNotificationPreferences(channel_id, type) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ channel_id, type });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const pref_types = {
                PERSONALIZED: 1,
                ALL: 2,
                NONE: 3
            };
            if (!Object.keys(pref_types).includes(type.toUpperCase()))
                throw new Error(`Invalid notification preference type: ${type}`);
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute('/notification/modify_channel_preference', {
                client: 'WEB',
                params: Proto.encodeNotificationPref(channel_id, pref_types[type.toUpperCase()])
            });
            return action;
        });
    }
}
_InteractionManager_actions = new WeakMap();
export default InteractionManager;
//# sourceMappingURL=InteractionManager.js.map