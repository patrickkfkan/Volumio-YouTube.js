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
var _TrackInfo_page, _TrackInfo_actions, _TrackInfo_cpn, _TrackInfo_playback_tracking;
import Parser from '../index.js';
import Constants from '../../utils/Constants.js';
import { InnertubeError } from '../../utils/Utils.js';
import AutomixPreviewVideo from '../classes/AutomixPreviewVideo.js';
import Message from '../classes/Message.js';
import MicroformatData from '../classes/MicroformatData.js';
import MusicDescriptionShelf from '../classes/MusicDescriptionShelf.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import PlaylistPanel from '../classes/PlaylistPanel.js';
import SectionList from '../classes/SectionList.js';
import Tab from '../classes/Tab.js';
import WatchNextTabbedResults from '../classes/WatchNextTabbedResults.js';
import FormatUtils from '../../utils/FormatUtils.js';
class TrackInfo {
    constructor(data, actions, cpn) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        _TrackInfo_page.set(this, void 0);
        _TrackInfo_actions.set(this, void 0);
        _TrackInfo_cpn.set(this, void 0);
        _TrackInfo_playback_tracking.set(this, void 0);
        __classPrivateFieldSet(this, _TrackInfo_actions, actions, "f");
        const info = Parser.parseResponse(data[0].data);
        const next = ((_a = data === null || data === void 0 ? void 0 : data[1]) === null || _a === void 0 ? void 0 : _a.data) ? Parser.parseResponse(data[1].data) : undefined;
        __classPrivateFieldSet(this, _TrackInfo_page, [info, next], "f");
        __classPrivateFieldSet(this, _TrackInfo_cpn, cpn, "f");
        if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === 'ERROR')
            throw new InnertubeError('This video is unavailable', info.playability_status);
        if (!((_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is(MicroformatData)))
            throw new InnertubeError('Invalid microformat', info.microformat);
        this.basic_info = Object.assign(Object.assign({}, info.video_details), {
            description: (_d = info.microformat) === null || _d === void 0 ? void 0 : _d.description,
            is_unlisted: (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.is_unlisted,
            is_family_safe: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is_family_safe,
            url_canonical: (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.url_canonical,
            tags: (_h = info.microformat) === null || _h === void 0 ? void 0 : _h.tags
        });
        this.streaming_data = info.streaming_data;
        this.playability_status = info.playability_status;
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        __classPrivateFieldSet(this, _TrackInfo_playback_tracking, info.playback_tracking, "f");
        if (next) {
            const tabbed_results = (_k = (_j = next.contents_memo) === null || _j === void 0 ? void 0 : _j.getType(WatchNextTabbedResults)) === null || _k === void 0 ? void 0 : _k[0];
            this.tabs = tabbed_results === null || tabbed_results === void 0 ? void 0 : tabbed_results.tabs.array().as(Tab);
            this.current_video_endpoint = next.current_video_endpoint;
            // TODO: update PlayerOverlay, YTMusic's is a little bit different.
            this.player_overlays = (_l = next.player_overlays) === null || _l === void 0 ? void 0 : _l.item().as(PlayerOverlay);
        }
    }
    /**
   * Generates a DASH manifest from the streaming data.
   * @param url_transformer - Function to transform the URLs.
   * @param format_filter - Function to filter the formats.
   * @returns DASH manifest
   */
    toDash(url_transformer, format_filter) {
        return FormatUtils.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet(this, _TrackInfo_cpn, "f"), __classPrivateFieldGet(this, _TrackInfo_actions, "f").session.player);
    }
    /**
     * Selects the format that best matches the given options.
     * @param options - Options
     */
    chooseFormat(options) {
        return FormatUtils.chooseFormat(options, this.streaming_data);
    }
    /**
     * Downloads the video.
     * @param options - Download options.
     */
    download(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return FormatUtils.download(options, __classPrivateFieldGet(this, _TrackInfo_actions, "f"), this.playability_status, this.streaming_data, __classPrivateFieldGet(this, _TrackInfo_actions, "f").session.player);
        });
    }
    /**
     * Retrieves contents of the given tab.
     */
    getTab(title_or_page_type) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.tabs)
                throw new InnertubeError('Could not find any tab');
            const target_tab = this.tabs.get({ title: title_or_page_type }) ||
                this.tabs.matchCondition((tab) => { var _a, _b; return ((_b = (_a = tab.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a === void 0 ? void 0 : _a.browseEndpointContextMusicConfig) === null || _b === void 0 ? void 0 : _b.pageType) === title_or_page_type; }) ||
                ((_a = this.tabs) === null || _a === void 0 ? void 0 : _a[0]);
            if (!target_tab)
                throw new InnertubeError(`Tab "${title_or_page_type}" not found`, { available_tabs: this.available_tabs });
            if (target_tab.content)
                return target_tab.content;
            const page = yield target_tab.endpoint.call(__classPrivateFieldGet(this, _TrackInfo_actions, "f"), { client: 'YTMUSIC', parse: true });
            if (((_b = page.contents) === null || _b === void 0 ? void 0 : _b.item().key('type').string()) === 'Message')
                return page.contents.item().as(Message);
            if (!page.contents)
                throw new InnertubeError('Page contents was empty', page);
            return page.contents.item().as(SectionList).contents;
        });
    }
    /**
     * Retrieves up next.
     */
    getUpNext(automix = true) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const music_queue = yield this.getTab('Up next');
            if (!music_queue || !music_queue.content)
                throw new InnertubeError('Music queue was empty, the video id is probably invalid.', music_queue);
            const playlist_panel = music_queue.content.as(PlaylistPanel);
            if (!playlist_panel.playlist_id && automix) {
                const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo);
                if (!automix_preview_video)
                    throw new InnertubeError('Automix item not found');
                const page = yield ((_a = automix_preview_video.playlist_video) === null || _a === void 0 ? void 0 : _a.endpoint.call(__classPrivateFieldGet(this, _TrackInfo_actions, "f"), {
                    videoId: this.basic_info.id,
                    client: 'YTMUSIC',
                    parse: true
                }));
                if (!page || !page.contents_memo)
                    throw new InnertubeError('Could not fetch automix');
                return (_b = page.contents_memo.getType(PlaylistPanel)) === null || _b === void 0 ? void 0 : _b[0];
            }
            return playlist_panel;
        });
    }
    /**
     * Retrieves related content.
     */
    getRelated() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('MUSIC_PAGE_TYPE_TRACK_RELATED');
            return tab;
        });
    }
    /**
     * Retrieves lyrics.
     */
    getLyrics() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('MUSIC_PAGE_TYPE_TRACK_LYRICS');
            return tab.firstOfType(MusicDescriptionShelf);
        });
    }
    /**
     * Adds the song to the watch history.
     */
    addToWatchHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _TrackInfo_playback_tracking, "f"))
                throw new InnertubeError('Playback tracking not available');
            const url_params = {
                cpn: __classPrivateFieldGet(this, _TrackInfo_cpn, "f"),
                fmt: 251,
                rtn: 0,
                rt: 0
            };
            const url = __classPrivateFieldGet(this, _TrackInfo_playback_tracking, "f").videostats_playback_url.replace('https://s.', 'https://music.');
            const response = yield __classPrivateFieldGet(this, _TrackInfo_actions, "f").stats(url, {
                client_name: Constants.CLIENTS.YTMUSIC.NAME,
                client_version: Constants.CLIENTS.YTMUSIC.VERSION
            }, url_params);
            return response;
        });
    }
    get available_tabs() {
        return this.tabs ? this.tabs.map((tab) => tab.title) : [];
    }
    get page() {
        return __classPrivateFieldGet(this, _TrackInfo_page, "f");
    }
}
_TrackInfo_page = new WeakMap(), _TrackInfo_actions = new WeakMap(), _TrackInfo_cpn = new WeakMap(), _TrackInfo_playback_tracking = new WeakMap();
export default TrackInfo;
//# sourceMappingURL=TrackInfo.js.map