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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _NavigationEndpoint_instances, _NavigationEndpoint_call;
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: refactor this
const helpers_1 = require("../helpers");
const index_1 = __importDefault(require("../index"));
const CreatePlaylistDialog_1 = __importDefault(require("./CreatePlaylistDialog"));
class NavigationEndpoint extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        super();
        _NavigationEndpoint_instances.add(this);
        // This is only present in Android nav endpoints
        if (Reflect.has(data || {}, 'innertubeCommand'))
            data = data.innertubeCommand;
        const name = Object.keys(data || {})
            .find((item) => item.endsWith('Endpoint') ||
            item.endsWith('Command'));
        this.payload = name ? Reflect.get(data, name) : {};
        if (Reflect.has(this.payload, 'dialog')) {
            this.dialog = index_1.default.parse(this.payload.dialog);
        }
        if (data === null || data === void 0 ? void 0 : data.serviceEndpoint) {
            data = data.serviceEndpoint;
        }
        this.metadata = {};
        if ((_b = (_a = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _a === void 0 ? void 0 : _a.webCommandMetadata) === null || _b === void 0 ? void 0 : _b.url) {
            this.metadata.url = data.commandMetadata.webCommandMetadata.url;
        }
        if ((_d = (_c = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _c === void 0 ? void 0 : _c.webCommandMetadata) === null || _d === void 0 ? void 0 : _d.webPageType) {
            this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType;
        }
        if ((_f = (_e = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _e === void 0 ? void 0 : _e.webCommandMetadata) === null || _f === void 0 ? void 0 : _f.apiUrl) {
            this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace('/youtubei/v1/', '');
        }
        if ((_h = (_g = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _g === void 0 ? void 0 : _g.webCommandMetadata) === null || _h === void 0 ? void 0 : _h.sendPost) {
            this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost;
        }
        if (data === null || data === void 0 ? void 0 : data.browseEndpoint) {
            const configs = (_k = (_j = data === null || data === void 0 ? void 0 : data.browseEndpoint) === null || _j === void 0 ? void 0 : _j.browseEndpointContextSupportedConfigs) === null || _k === void 0 ? void 0 : _k.browseEndpointContextMusicConfig;
            this.browse = {
                id: ((_l = data === null || data === void 0 ? void 0 : data.browseEndpoint) === null || _l === void 0 ? void 0 : _l.browseId) || null,
                params: (data === null || data === void 0 ? void 0 : data.browseEndpoint.params) || null,
                base_url: ((_m = data === null || data === void 0 ? void 0 : data.browseEndpoint) === null || _m === void 0 ? void 0 : _m.canonicalBaseUrl) || null,
                page_type: (configs === null || configs === void 0 ? void 0 : configs.pageType) || null
            };
        }
        if (data === null || data === void 0 ? void 0 : data.watchEndpoint) {
            const configs = (_p = (_o = data === null || data === void 0 ? void 0 : data.watchEndpoint) === null || _o === void 0 ? void 0 : _o.watchEndpointMusicSupportedConfigs) === null || _p === void 0 ? void 0 : _p.watchEndpointMusicConfig;
            this.watch = {
                video_id: (_q = data === null || data === void 0 ? void 0 : data.watchEndpoint) === null || _q === void 0 ? void 0 : _q.videoId,
                playlist_id: (data === null || data === void 0 ? void 0 : data.watchEndpoint.playlistId) || null,
                params: (data === null || data === void 0 ? void 0 : data.watchEndpoint.params) || null,
                index: (data === null || data === void 0 ? void 0 : data.watchEndpoint.index) || null,
                supported_onesie_config: (_r = data === null || data === void 0 ? void 0 : data.watchEndpoint) === null || _r === void 0 ? void 0 : _r.watchEndpointSupportedOnesieConfig,
                music_video_type: (configs === null || configs === void 0 ? void 0 : configs.musicVideoType) || null
            };
        }
        if (data === null || data === void 0 ? void 0 : data.searchEndpoint) {
            this.search = {
                query: data.searchEndpoint.query,
                params: data.searchEndpoint.params
            };
        }
        if (data === null || data === void 0 ? void 0 : data.subscribeEndpoint) {
            this.subscribe = {
                channel_ids: data.subscribeEndpoint.channelIds,
                params: data.subscribeEndpoint.params
            };
        }
        if (data === null || data === void 0 ? void 0 : data.unsubscribeEndpoint) {
            this.unsubscribe = {
                channel_ids: data.unsubscribeEndpoint.channelIds,
                params: data.unsubscribeEndpoint.params
            };
        }
        if (data === null || data === void 0 ? void 0 : data.likeEndpoint) {
            this.like = {
                status: data.likeEndpoint.status,
                target: {
                    video_id: data.likeEndpoint.target.videoId,
                    playlist_id: data.likeEndpoint.target.playlistId
                },
                params: ((_s = data.likeEndpoint) === null || _s === void 0 ? void 0 : _s.removeLikeParams) ||
                    ((_t = data.likeEndpoint) === null || _t === void 0 ? void 0 : _t.likeParams) ||
                    ((_u = data.likeEndpoint) === null || _u === void 0 ? void 0 : _u.dislikeParams)
            };
        }
        if (data === null || data === void 0 ? void 0 : data.performCommentActionEndpoint) {
            this.perform_comment_action = {
                action: data === null || data === void 0 ? void 0 : data.performCommentActionEndpoint.action
            };
        }
        if (data === null || data === void 0 ? void 0 : data.offlineVideoEndpoint) {
            this.offline_video = {
                video_id: data.offlineVideoEndpoint.videoId,
                on_add_command: {
                    get_download_action: {
                        video_id: data.offlineVideoEndpoint.videoId,
                        params: data.offlineVideoEndpoint.onAddCommand.getDownloadActionCommand.params
                    }
                }
            };
        }
        if (data === null || data === void 0 ? void 0 : data.continuationCommand) {
            this.continuation = {
                request: ((_v = data === null || data === void 0 ? void 0 : data.continuationCommand) === null || _v === void 0 ? void 0 : _v.request) || null,
                token: ((_w = data === null || data === void 0 ? void 0 : data.continuationCommand) === null || _w === void 0 ? void 0 : _w.token) || null
            };
        }
        if (data === null || data === void 0 ? void 0 : data.feedbackEndpoint) {
            this.feedback = {
                token: data.feedbackEndpoint.feedbackToken
            };
        }
        if (data === null || data === void 0 ? void 0 : data.watchPlaylistEndpoint) {
            this.watch_playlist = {
                playlist_id: (_x = data.watchPlaylistEndpoint) === null || _x === void 0 ? void 0 : _x.playlistId,
                params: ((_y = data.watchPlaylistEndpoint) === null || _y === void 0 ? void 0 : _y.params) || null
            };
        }
        if (data === null || data === void 0 ? void 0 : data.playlistEditEndpoint) {
            this.playlist_edit = {
                playlist_id: data.playlistEditEndpoint.playlistId,
                actions: data.playlistEditEndpoint.actions.map((item) => ({
                    action: item.action,
                    removed_video_id: item.removedVideoId
                }))
            };
        }
        if (data === null || data === void 0 ? void 0 : data.addToPlaylistEndpoint) {
            this.add_to_playlist = {
                video_id: data.addToPlaylistEndpoint.videoId
            };
        }
        if (data === null || data === void 0 ? void 0 : data.addToPlaylistServiceEndpoint) {
            this.add_to_playlist = {
                video_id: data.addToPlaylistServiceEndpoint.videoId
            };
        }
        if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint) {
            if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog) {
                this.dialog = index_1.default.parseItem(data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog, CreatePlaylistDialog_1.default);
            }
            this.create_playlist = {
            // Nothing to put here - data.createPlaylistEndpoint has only one prop `createPlaylistDialog`
            // Which was already parsed and referred to by `this.dialog`. But still useful to have this as
            // A quick indicator of what the endpoint does.
            };
        }
        if (data === null || data === void 0 ? void 0 : data.getReportFormEndpoint) {
            this.get_report_form = {
                params: data.getReportFormEndpoint.params
            };
        }
        if (data === null || data === void 0 ? void 0 : data.liveChatItemContextMenuEndpoint) {
            this.live_chat_item_context_menu = {
                params: (_z = data === null || data === void 0 ? void 0 : data.liveChatItemContextMenuEndpoint) === null || _z === void 0 ? void 0 : _z.params
            };
        }
        if (data === null || data === void 0 ? void 0 : data.sendLiveChatVoteEndpoint) {
            this.send_live_chat_vote = {
                params: data.sendLiveChatVoteEndpoint.params
            };
        }
        if (data === null || data === void 0 ? void 0 : data.liveChatItemContextMenuEndpoint) {
            this.live_chat_item_context_menu = {
                params: data.liveChatItemContextMenuEndpoint.params
            };
        }
    }
    callTest(actions, args) {
        if (!actions)
            throw new Error('An active caller must be provided');
        if (!this.metadata.api_url)
            throw new Error('Expected an api_url, but none was found, this is a bug.');
        return actions.execute(this.metadata.api_url, Object.assign(Object.assign({}, this.payload), args));
    }
    call(actions, client, parse) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield __classPrivateFieldGet(this, _NavigationEndpoint_instances, "m", _NavigationEndpoint_call).call(this, actions, client);
            if (parse && result)
                return index_1.default.parseResponse(result.data);
            return __classPrivateFieldGet(this, _NavigationEndpoint_instances, "m", _NavigationEndpoint_call).call(this, actions, client);
        });
    }
}
_NavigationEndpoint_instances = new WeakSet(), _NavigationEndpoint_call = function _NavigationEndpoint_call(actions, client) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!actions)
            throw new Error('An active caller must be provided');
        if (this.continuation) {
            switch (this.continuation.request) {
                case 'CONTINUATION_REQUEST_TYPE_BROWSE': {
                    return yield actions.browse(this.continuation.token, { is_ctoken: true });
                }
                case 'CONTINUATION_REQUEST_TYPE_SEARCH': {
                    return yield actions.search({ ctoken: this.continuation.token });
                }
                case 'CONTINUATION_REQUEST_TYPE_WATCH_NEXT': {
                    return yield actions.next({ ctoken: this.continuation.token });
                }
                default:
                    throw new Error(`${this.continuation.request} not implemented`);
            }
        }
        if (this.search) {
            return yield actions.search({ query: this.search.query, params: this.search.params, client });
        }
        if (this.browse) {
            return yield actions.browse(this.browse.id, Object.assign(Object.assign({}, this.browse), { client }));
        }
        if (this.like) {
            if (!this.metadata.api_url)
                throw new Error('Like endpoint requires an api_url, but was not parsed from the response.');
            const response = yield actions.engage(this.metadata.api_url, { video_id: this.like.target.video_id, params: this.like.params });
            return response;
        }
    });
};
NavigationEndpoint.type = 'NavigationEndpoint';
exports.default = NavigationEndpoint;
//# sourceMappingURL=NavigationEndpoint.js.map