"use strict";
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
var _TrackInfo_page, _TrackInfo_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Utils_1 = require("../../utils/Utils");
const Tab_1 = __importDefault(require("../classes/Tab"));
const Tabbed_1 = __importDefault(require("../classes/Tabbed"));
const WatchNextTabbedResults_1 = __importDefault(require("../classes/WatchNextTabbedResults"));
const SingleColumnMusicWatchNextResults_1 = __importDefault(require("../classes/SingleColumnMusicWatchNextResults"));
const MicroformatData_1 = __importDefault(require("../classes/MicroformatData"));
const PlayerOverlay_1 = __importDefault(require("../classes/PlayerOverlay"));
// TODO: add a way to get specific tabs
class TrackInfo {
    constructor(data, actions) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        _TrackInfo_page.set(this, void 0);
        _TrackInfo_actions.set(this, void 0);
        __classPrivateFieldSet(this, _TrackInfo_actions, actions, "f");
        const info = __1.default.parseResponse(data[0].data);
        const next = ((_a = data === null || data === void 0 ? void 0 : data[1]) === null || _a === void 0 ? void 0 : _a.data) ? __1.default.parseResponse(data[1].data) : undefined;
        __classPrivateFieldSet(this, _TrackInfo_page, [info, next], "f");
        if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === 'ERROR')
            throw new Utils_1.InnertubeError('This video is unavailable', info.playability_status);
        if (!((_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is(MicroformatData_1.default)))
            throw new Utils_1.InnertubeError('Invalid microformat', info.microformat);
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
        if (next) {
            const single_col = next.contents.item().as(SingleColumnMusicWatchNextResults_1.default);
            const tabbed_results = single_col.contents.item().as(Tabbed_1.default).contents.item().as(WatchNextTabbedResults_1.default);
            this.tabs = tabbed_results.tabs.array().as(Tab_1.default);
            this.current_video_endpoint = next.current_video_endpoint;
            // TODO: update PlayerOverlay, YTMusic's is a little bit different.
            this.player_overlays = next.player_overlays.item().as(PlayerOverlay_1.default);
        }
    }
    get page() {
        return __classPrivateFieldGet(this, _TrackInfo_page, "f");
    }
}
_TrackInfo_page = new WeakMap(), _TrackInfo_actions = new WeakMap();
exports.default = TrackInfo;
//# sourceMappingURL=TrackInfo.js.map