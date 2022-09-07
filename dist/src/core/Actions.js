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
var _Actions_instances, _Actions_session, _Actions_wrap, _Actions_needsLogin;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../proto/index"));
const index_2 = __importDefault(require("../parser/index"));
const Utils_1 = require("../utils/Utils");
class Actions {
    constructor(session) {
        _Actions_instances.add(this);
        _Actions_session.set(this, void 0);
        __classPrivateFieldSet(this, _Actions_session, session, "f");
    }
    get session() {
        return __classPrivateFieldGet(this, _Actions_session, "f");
    }
    /**
     * Covers `/browse` endpoint, mostly used to access
     * YouTube's sections such as the home feed, etc
     * and sometimes to retrieve continuations.
     *
     * @param id - browseId or a continuation token
     * @param args - additional arguments
     */
    browse(id, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _Actions_instances, "m", _Actions_needsLogin).call(this, id) && !__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = {};
            if (args.params)
                data.params = args.params;
            if (args.is_ctoken) {
                data.continuation = id;
            }
            else {
                data.browseId = id;
            }
            if (args.form_data) {
                data.formData = args.form_data;
            }
            if (args.client) {
                data.client = args.client;
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/browse', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Covers endpoints used to perform direct interactions
     * on YouTube.
     */
    engage(action, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in && !args.hasOwnProperty('text'))
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = {};
            switch (action) {
                case 'like/like':
                case 'like/dislike':
                case 'like/removelike':
                    if (!(0, Utils_1.hasKeys)(args, 'video_id'))
                        throw new Utils_1.MissingParamError('Arguments lacks video_id');
                    data.target = {};
                    data.target.videoId = args.video_id;
                    if (args.params) {
                        data.params = args.params;
                    }
                    break;
                case 'subscription/subscribe':
                case 'subscription/unsubscribe':
                    if (!(0, Utils_1.hasKeys)(args, 'channel_id'))
                        throw new Utils_1.MissingParamError('Arguments lacks channel_id');
                    data.channelIds = [args.channel_id];
                    data.params = action === 'subscription/subscribe' ? 'EgIIAhgA' : 'CgIIAhgA';
                    break;
                case 'comment/create_comment':
                    data.commentText = args.text;
                    if (!(0, Utils_1.hasKeys)(args, 'video_id'))
                        throw new Utils_1.MissingParamError('Arguments lacks video_id');
                    data.createCommentParams = index_1.default.encodeCommentParams(args.video_id);
                    break;
                case 'comment/create_comment_reply':
                    if (!(0, Utils_1.hasKeys)(args, 'comment_id', 'video_id', 'text'))
                        throw new Utils_1.MissingParamError('Arguments lacks comment_id, video_id or text');
                    data.createReplyParams = index_1.default.encodeCommentReplyParams(args.comment_id, args.video_id);
                    data.commentText = args.text;
                    break;
                case 'comment/perform_comment_action':
                    const target_action = (() => {
                        switch (args.comment_action) {
                            case 'like':
                                return index_1.default.encodeCommentActionParams(5, args);
                            case 'dislike':
                                return index_1.default.encodeCommentActionParams(4, args);
                            case 'translate':
                                return index_1.default.encodeCommentActionParams(22, args);
                            default:
                                break;
                        }
                    })();
                    data.actions = [target_action];
                    break;
                default:
                    throw new Utils_1.InnertubeError('Action not implemented', action);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Covers endpoints related to account management.
     */
    account(action, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = { client: args.client };
            switch (action) {
                case 'account/set_setting':
                    data.newValue = {
                        boolValue: args.new_value
                    };
                    data.settingItemId = args.setting_item_id;
                    break;
                case 'account/accounts_list':
                    break;
                default:
                    throw new Utils_1.InnertubeError('Action not implemented', action);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Endpoint used for search.
     */
    search(args = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = { client: args.client };
            if (args.query) {
                data.query = args.query;
            }
            if (args.ctoken) {
                data.continuation = args.ctoken;
            }
            if (args.params) {
                data.params = args.params;
            }
            if (args.filters) {
                if (args.client == 'YTMUSIC' && ((_a = args.filters) === null || _a === void 0 ? void 0 : _a.type) && args.filters.type !== 'all') {
                    data.params = index_1.default.encodeMusicSearchFilters(args.filters);
                }
                else {
                    data.params = index_1.default.encodeSearchFilters(args.filters);
                }
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/search', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Endpoint used fo Shorts' sound search.
     */
    searchSound(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                query: args.query,
                client: 'ANDROID'
            };
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/sfv/search', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Channel management endpoints.
     */
    channel(action, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = { client: args.client || 'ANDROID' };
            switch (action) {
                case 'channel/edit_name':
                    data.givenName = args.new_name;
                    break;
                case 'channel/edit_description':
                    data.description = args.new_description;
                    break;
                case 'channel/get_profile_editor':
                    break;
                default:
                    throw new Utils_1.InnertubeError('Action not implemented', action);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Covers endpoints used for playlist management.
     */
    playlist(action, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = {};
            switch (action) {
                case 'playlist/create':
                    data.title = args.title;
                    data.videoIds = args.ids;
                    break;
                case 'playlist/delete':
                    data.playlistId = args.playlist_id;
                    break;
                case 'browse/edit_playlist':
                    if (!(0, Utils_1.hasKeys)(args, 'ids'))
                        throw new Utils_1.MissingParamError('Arguments lacks ids');
                    data.playlistId = args.playlist_id;
                    data.actions = args.ids.map((id) => {
                        switch (args.action) {
                            case 'ACTION_ADD_VIDEO':
                                return {
                                    action: args.action,
                                    addedVideoId: id
                                };
                            case 'ACTION_REMOVE_VIDEO':
                                return {
                                    action: args.action,
                                    setVideoId: id
                                };
                            default:
                                break;
                        }
                    });
                    break;
                default:
                    throw new Utils_1.InnertubeError('Action not implemented', action);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Covers endpoints used for notifications management.
     */
    notifications(action, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = {};
            switch (action) {
                case 'modify_channel_preference':
                    if (!(0, Utils_1.hasKeys)(args, 'channel_id', 'pref'))
                        throw new Utils_1.MissingParamError('Arguments lacks channel_id or pref');
                    const pref_types = {
                        PERSONALIZED: 1,
                        ALL: 2,
                        NONE: 3
                    };
                    if (!Object.keys(pref_types).includes(args.pref.toUpperCase()))
                        throw new Utils_1.InnertubeError('Invalid preference type', args.pref);
                    data.params = index_1.default.encodeNotificationPref(args.channel_id, pref_types[args.pref.toUpperCase()]);
                    break;
                case 'get_notification_menu':
                    data.notificationsMenuRequestType = 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX';
                    if (args.ctoken)
                        data.ctoken = args.ctoken;
                    break;
                case 'record_interactions':
                    data.serializedRecordNotificationInteractionsRequest = args.params;
                    break;
                case 'get_unseen_count':
                    break;
                default:
                    throw new Utils_1.InnertubeError('Action not implemented', action);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/notification/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Covers livechat endpoints.
     */
    livechat(action, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: should client be required?
            const data = { client: args.client };
            switch (action) {
                case 'live_chat/get_live_chat':
                case 'live_chat/get_live_chat_replay':
                    data.continuation = args.ctoken;
                    break;
                case 'live_chat/send_message':
                    if (!(0, Utils_1.hasKeys)(args, 'channel_id', 'video_id', 'text'))
                        throw new Utils_1.MissingParamError('Arguments lacks channel_id, video_id or text');
                    data.params = index_1.default.encodeMessageParams(args.channel_id, args.video_id);
                    data.clientMessageId = (0, Utils_1.uuidv4)();
                    data.richMessage = {
                        textSegments: [{
                                text: args.text
                            }]
                    };
                    break;
                case 'live_chat/get_item_context_menu':
                    // Note: this is currently broken due to a recent refactor
                    // TODO: this should be implemented
                    break;
                case 'live_chat/moderate':
                    data.params = args.params;
                    break;
                case 'updated_metadata':
                    data.videoId = args.video_id;
                    if (args.ctoken)
                        data.continuation = args.ctoken;
                    break;
                default:
                    throw new Utils_1.InnertubeError('Action not implemented', action);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Endpoint used to retrieve video thumbnails.
     */
    thumbnails(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                client: 'ANDROID',
                videoId: args.video_id
            };
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/thumbnails', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Place Autocomplete endpoint, found it in the APK but
     * doesn't seem to be used anywhere on YouTube (maybe for ads?).
     *
     * Ex:
     * ```js
     * const places = await session.actions.geo('place_autocomplete', { input: 'San diego cafe' });
     * console.info(places.data);
     * ```
     */
    geo(action, args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = {
                input: args.input,
                client: 'ANDROID'
            };
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/geo/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Covers endpoints used to report content.
     */
    flag(action, args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = {};
            switch (action) {
                case 'flag/flag':
                    data.action = args.action;
                    break;
                case 'flag/get_form':
                    data.params = args.params;
                    break;
                default:
                    throw new Utils_1.InnertubeError('Action not implemented', action);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Covers specific YouTube Music endpoints.
     */
    music(action, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                input: args.input || '',
                client: 'YTMUSIC'
            };
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(`/music/${action}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Mostly used for pagination and specific operations.
     */
    next(args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { client: args.client };
            if (args.ctoken) {
                data.continuation = args.ctoken;
            }
            if (args.video_id) {
                data.videoId = args.video_id;
            }
            if (args.playlist_id) {
                data.playlistId = args.playlist_id;
            }
            if (args.params) {
                data.params = args.params;
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/next', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Used to retrieve video info.
     */
    getVideoInfo(id, cpn, client, playlist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                playbackContext: {
                    contentPlaybackContext: {
                        vis: 0,
                        splay: false,
                        referer: 'https://www.youtube.com',
                        currentUrl: `/watch?v=${id}`,
                        autonavState: 'STATE_OFF',
                        signatureTimestamp: __classPrivateFieldGet(this, _Actions_session, "f").player.sts,
                        autoCaptionsDefaultOn: false,
                        html5Preference: 'HTML5_PREF_WANTS',
                        lactMilliseconds: '-1'
                    }
                },
                attestationRequest: {
                    omitBotguardData: true
                },
                videoId: id
            };
            if (client) {
                data.client = client;
            }
            if (cpn) {
                data.cpn = cpn;
            }
            if (playlist_id) {
                data.playlistId = playlist_id;
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/player', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Endpoint used to retrieve user mention suggestions.
     */
    getUserMentionSuggestions(args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const data = {
                input: args.input,
                client: 'ANDROID'
            };
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch('/get_user_mention_suggestions', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
    /**
     * Makes calls to the playback tracking API.
     */
    stats(url, client, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const s_url = new URL(url);
            s_url.searchParams.set('ver', '2');
            s_url.searchParams.set('c', client.client_name.toLowerCase());
            s_url.searchParams.set('cbrver', client.client_version);
            s_url.searchParams.set('cver', client.client_version);
            for (const key of Object.keys(params)) {
                s_url.searchParams.set(key, params[key]);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(s_url);
            return response;
        });
    }
    execute(action, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            if (!args.protobuf) {
                data = Object.assign({}, args);
                if (Reflect.has(data, 'browseId')) {
                    if (__classPrivateFieldGet(this, _Actions_instances, "m", _Actions_needsLogin).call(this, data.browseId) && !__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                        throw new Utils_1.InnertubeError('You are not signed in');
                }
                if (Reflect.has(data, 'parse'))
                    delete data.parse;
                if (Reflect.has(data, 'request'))
                    delete data.request;
                if (Reflect.has(data, 'clientActions'))
                    delete data.clientActions;
                if (Reflect.has(data, 'settingItemIdForClient'))
                    delete data.settingItemIdForClient;
                if (Reflect.has(data, 'action')) {
                    data.actions = [data.action];
                    delete data.action;
                }
                if (Reflect.has(data, 'boolValue')) {
                    data.newValue = { boolValue: data.boolValue };
                    delete data.boolValue;
                }
                if (Reflect.has(data, 'token')) {
                    data.continuation = data.token;
                    delete data.token;
                }
            }
            else {
                data = args.serialized_data;
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(action, {
                method: 'POST',
                body: args.protobuf ? data : JSON.stringify(data),
                headers: {
                    'Content-Type': args.protobuf ?
                        'application/x-protobuf' :
                        'application/json'
                }
            });
            if (args.parse) {
                return index_2.default.parseResponse(yield response.json());
            }
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response, args.protobuf);
        });
    }
}
_Actions_session = new WeakMap(), _Actions_instances = new WeakSet(), _Actions_wrap = function _Actions_wrap(response, protobuf) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            success: response.ok,
            status_code: response.status,
            data: protobuf ? yield response.text() : JSON.parse(yield response.text())
        };
    });
}, _Actions_needsLogin = function _Actions_needsLogin(id) {
    return [
        'FElibrary',
        'FEhistory',
        'FEsubscriptions',
        'FEmusic_listening_review',
        'SPaccount_notifications',
        'SPaccount_privacy',
        'SPtime_watched'
    ].includes(id);
};
// TODO: maybe do this inferrance in a more elegant way
exports.default = Actions;
//# sourceMappingURL=Actions.js.map