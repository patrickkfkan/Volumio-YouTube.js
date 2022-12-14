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
var _PlaylistManager_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const Playlist_1 = __importDefault(require("../parser/youtube/Playlist"));
const Utils_1 = require("../utils/Utils");
class PlaylistManager {
    constructor(actions) {
        _PlaylistManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _PlaylistManager_actions, actions, "f");
    }
    /**
     * Creates a playlist.
     */
    create(title, video_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ title, video_ids });
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute('/playlist/create', { title, ids: video_ids, parse: false });
            return {
                success: response.success,
                status_code: response.status_code,
                playlist_id: response.data.playlistId,
                data: response.data
            };
        });
    }
    /**
     * Deletes a given playlist.
     */
    delete(playlist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ playlist_id });
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute('playlist/delete', { playlistId: playlist_id });
            return {
                playlist_id,
                success: response.success,
                status_code: response.status_code,
                data: response.data
            };
        });
    }
    /**
     * Adds videos to a given playlist.
     */
    addVideos(playlist_id, video_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ playlist_id, video_ids });
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute('/browse/edit_playlist', {
                playlistId: playlist_id,
                actions: video_ids.map((id) => ({
                    action: 'ACTION_ADD_VIDEO',
                    addedVideoId: id
                })),
                parse: false
            });
            return {
                playlist_id,
                action_result: response.data.actions // TODO: implement actions in the parser
            };
        });
    }
    /**
     * Removes videos from a given playlist.
     */
    removeVideos(playlist_id, video_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ playlist_id, video_ids });
            const info = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute('/browse', { browseId: `VL${playlist_id}`, parse: true });
            const playlist = new Playlist_1.default(__classPrivateFieldGet(this, _PlaylistManager_actions, "f"), info, true);
            if (!playlist.info.is_editable)
                throw new Utils_1.InnertubeError('This playlist cannot be edited.', playlist_id);
            const payload = {
                playlistId: playlist_id,
                actions: []
            };
            const getSetVideoIds = (pl) => __awaiter(this, void 0, void 0, function* () {
                const videos = pl.videos.filter((video) => video_ids.includes(video.key('id').string()));
                videos.forEach((video) => payload.actions.push({
                    action: 'ACTION_REMOVE_VIDEO',
                    setVideoId: video.key('set_video_id').string()
                }));
                if (payload.actions.length < video_ids.length) {
                    const next = yield pl.getContinuation();
                    return getSetVideoIds(next);
                }
            });
            yield getSetVideoIds(playlist);
            if (!payload.actions.length)
                throw new Utils_1.InnertubeError('Given video ids were not found in this playlist.', video_ids);
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute('/browse/edit_playlist', Object.assign(Object.assign({}, payload), { parse: false }));
            return {
                playlist_id,
                action_result: response.data.actions // TODO: implement actions in the parser
            };
        });
    }
    /**
     * Moves a video to a new position within a given playlist.
     */
    moveVideo(playlist_id, moved_video_id, predecessor_video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ playlist_id, moved_video_id, predecessor_video_id });
            const info = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute('/browse', { browseId: `VL${playlist_id}`, parse: true });
            const playlist = new Playlist_1.default(__classPrivateFieldGet(this, _PlaylistManager_actions, "f"), info, true);
            if (!playlist.info.is_editable)
                throw new Utils_1.InnertubeError('This playlist cannot be edited.', playlist_id);
            const payload = {
                playlistId: playlist_id,
                actions: []
            };
            let set_video_id_0, set_video_id_1;
            const getSetVideoIds = (pl) => __awaiter(this, void 0, void 0, function* () {
                const video_0 = pl.videos.find((video) => moved_video_id === video.key('id').string());
                const video_1 = pl.videos.find((video) => predecessor_video_id === video.key('id').string());
                set_video_id_0 = set_video_id_0 || (video_0 === null || video_0 === void 0 ? void 0 : video_0.key('set_video_id').string());
                set_video_id_1 = set_video_id_1 || (video_1 === null || video_1 === void 0 ? void 0 : video_1.key('set_video_id').string());
                if (!set_video_id_0 || !set_video_id_1) {
                    const next = yield pl.getContinuation();
                    return getSetVideoIds(next);
                }
            });
            yield getSetVideoIds(playlist);
            payload.actions.push({
                action: 'ACTION_MOVE_VIDEO_AFTER',
                setVideoId: set_video_id_0,
                movedSetVideoIdPredecessor: set_video_id_1
            });
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute('/browse/edit_playlist', Object.assign(Object.assign({}, payload), { parse: false }));
            return {
                playlist_id,
                action_result: response.data.actions // TODO: implement actions in the parser
            };
        });
    }
}
_PlaylistManager_actions = new WeakMap();
exports.default = PlaylistManager;
//# sourceMappingURL=PlaylistManager.js.map