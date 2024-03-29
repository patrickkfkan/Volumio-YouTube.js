var _MediaInfo_page, _MediaInfo_actions, _MediaInfo_cpn, _MediaInfo_playback_tracking;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import * as Constants from '../../utils/Constants.js';
import FormatUtils from '../../utils/FormatUtils.js';
import { InnertubeError } from '../../utils/Utils.js';
import Parser from '../../parser/index.js';
class MediaInfo {
    constructor(data, actions, cpn) {
        var _a, _b;
        _MediaInfo_page.set(this, void 0);
        _MediaInfo_actions.set(this, void 0);
        _MediaInfo_cpn.set(this, void 0);
        _MediaInfo_playback_tracking.set(this, void 0);
        __classPrivateFieldSet(this, _MediaInfo_actions, actions, "f");
        const info = Parser.parseResponse(data[0].data);
        const next = ((_a = data === null || data === void 0 ? void 0 : data[1]) === null || _a === void 0 ? void 0 : _a.data) ? Parser.parseResponse(data[1].data) : undefined;
        __classPrivateFieldSet(this, _MediaInfo_page, [info, next], "f");
        __classPrivateFieldSet(this, _MediaInfo_cpn, cpn, "f");
        if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === 'ERROR')
            throw new InnertubeError('This video is unavailable', info.playability_status);
        this.streaming_data = info.streaming_data;
        this.playability_status = info.playability_status;
        __classPrivateFieldSet(this, _MediaInfo_playback_tracking, info.playback_tracking, "f");
    }
    /**
     * Generates a DASH manifest from the streaming data.
     * @param url_transformer - Function to transform the URLs.
     * @param format_filter - Function to filter the formats.
     * @returns DASH manifest
     */
    toDash(url_transformer, format_filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return FormatUtils.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet(this, _MediaInfo_cpn, "f"), __classPrivateFieldGet(this, _MediaInfo_actions, "f").session.player, __classPrivateFieldGet(this, _MediaInfo_actions, "f"));
        });
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
            return FormatUtils.download(options, __classPrivateFieldGet(this, _MediaInfo_actions, "f"), this.playability_status, this.streaming_data, __classPrivateFieldGet(this, _MediaInfo_actions, "f").session.player, this.cpn);
        });
    }
    /**
     * Adds video to the watch history.
     */
    addToWatchHistory(client_name = Constants.CLIENTS.WEB.NAME, client_version = Constants.CLIENTS.WEB.VERSION, replacement = 'https://www.') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _MediaInfo_playback_tracking, "f"))
                throw new InnertubeError('Playback tracking not available');
            const url_params = {
                cpn: __classPrivateFieldGet(this, _MediaInfo_cpn, "f"),
                fmt: 251,
                rtn: 0,
                rt: 0
            };
            const url = __classPrivateFieldGet(this, _MediaInfo_playback_tracking, "f").videostats_playback_url.replace('https://s.', replacement);
            const response = yield __classPrivateFieldGet(this, _MediaInfo_actions, "f").stats(url, {
                client_name,
                client_version
            }, url_params);
            return response;
        });
    }
    /**
     * Actions instance.
     */
    get actions() {
        return __classPrivateFieldGet(this, _MediaInfo_actions, "f");
    }
    /**
     * Content Playback Nonce.
     */
    get cpn() {
        return __classPrivateFieldGet(this, _MediaInfo_cpn, "f");
    }
    /**
     * Original parsed InnerTube response.
     */
    get page() {
        return __classPrivateFieldGet(this, _MediaInfo_page, "f");
    }
}
_MediaInfo_page = new WeakMap(), _MediaInfo_actions = new WeakMap(), _MediaInfo_cpn = new WeakMap(), _MediaInfo_playback_tracking = new WeakMap();
export default MediaInfo;
//# sourceMappingURL=MediaInfo.js.map