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
var _VideoInfo_page, _VideoInfo_actions, _VideoInfo_cpn, _VideoInfo_playback_tracking;
import Parser from '../index.js';
import ItemSection from '../classes/ItemSection.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import SlimVideoMetadata from '../classes/SlimVideoMetadata.js';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.js';
import { Constants } from '../../utils/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import FormatUtils from '../../utils/FormatUtils.js';
class VideoInfo {
    constructor(data, actions, cpn) {
        var _a, _b, _c, _d, _e, _f, _g;
        _VideoInfo_page.set(this, void 0);
        _VideoInfo_actions.set(this, void 0);
        _VideoInfo_cpn.set(this, void 0);
        _VideoInfo_playback_tracking.set(this, void 0);
        __classPrivateFieldSet(this, _VideoInfo_actions, actions, "f");
        const info = Parser.parseResponse(data[0].data);
        const next = ((_a = data === null || data === void 0 ? void 0 : data[1]) === null || _a === void 0 ? void 0 : _a.data) ? Parser.parseResponse(data[1].data) : undefined;
        __classPrivateFieldSet(this, _VideoInfo_page, [info, next], "f");
        __classPrivateFieldSet(this, _VideoInfo_cpn, cpn, "f");
        if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === 'ERROR')
            throw new InnertubeError('This video is unavailable', info.playability_status);
        this.basic_info = info.video_details;
        this.streaming_data = info.streaming_data;
        this.playability_status = info.playability_status;
        this.captions = info.captions;
        __classPrivateFieldSet(this, _VideoInfo_playback_tracking, info.playback_tracking, "f");
        const two_col = (_c = next === null || next === void 0 ? void 0 : next.contents) === null || _c === void 0 ? void 0 : _c.item().as(TwoColumnWatchNextResults);
        const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
        const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
        if (results && secondary_results) {
            this.slim_video_metadata = (_e = (_d = results.firstOfType(ItemSection)) === null || _d === void 0 ? void 0 : _d.contents) === null || _e === void 0 ? void 0 : _e.firstOfType(SlimVideoMetadata);
            this.watch_next_feed = ((_f = secondary_results.firstOfType(ItemSection)) === null || _f === void 0 ? void 0 : _f.contents) || secondary_results;
            this.current_video_endpoint = next === null || next === void 0 ? void 0 : next.current_video_endpoint;
            this.player_overlays = (_g = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _g === void 0 ? void 0 : _g.item().as(PlayerOverlay);
        }
    }
    /**
     * Generates a DASH manifest from the streaming data.
     * @param url_transformer - Function to transform the URLs.
     * @param format_filter - Function to filter the formats.
     * @returns DASH manifest
     */
    toDash(url_transformer, format_filter) {
        return FormatUtils.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet(this, _VideoInfo_cpn, "f"), __classPrivateFieldGet(this, _VideoInfo_actions, "f").session.player);
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
            return FormatUtils.download(options, __classPrivateFieldGet(this, _VideoInfo_actions, "f"), this.playability_status, this.streaming_data, __classPrivateFieldGet(this, _VideoInfo_actions, "f").session.player, this.cpn);
        });
    }
    /**
   * Adds video to the watch history.
   */
    addToWatchHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _VideoInfo_playback_tracking, "f"))
                throw new InnertubeError('Playback tracking not available');
            const url_params = {
                cpn: __classPrivateFieldGet(this, _VideoInfo_cpn, "f"),
                fmt: 251,
                rtn: 0,
                rt: 0
            };
            const url = __classPrivateFieldGet(this, _VideoInfo_playback_tracking, "f").videostats_playback_url.replace('https://s.', 'https://www.');
            const response = yield __classPrivateFieldGet(this, _VideoInfo_actions, "f").stats(url, {
                client_name: Constants.CLIENTS.WEB.NAME,
                client_version: Constants.CLIENTS.WEB.VERSION
            }, url_params);
            return response;
        });
    }
    /**
   * Actions instance.
   */
    get actions() {
        return __classPrivateFieldGet(this, _VideoInfo_actions, "f");
    }
    /**
     * Content Playback Nonce.
     */
    get cpn() {
        return __classPrivateFieldGet(this, _VideoInfo_cpn, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _VideoInfo_page, "f");
    }
}
_VideoInfo_page = new WeakMap(), _VideoInfo_actions = new WeakMap(), _VideoInfo_cpn = new WeakMap(), _VideoInfo_playback_tracking = new WeakMap();
export default VideoInfo;
//# sourceMappingURL=VideoInfo.js.map