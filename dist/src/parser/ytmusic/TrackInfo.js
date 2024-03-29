import { __awaiter } from "tslib";
import * as Constants from '../../utils/Constants.js';
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
import { MediaInfo } from '../../core/mixins/index.js';
class TrackInfo extends MediaInfo {
    constructor(data, actions, cpn) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super(data, actions, cpn);
        const [info, next] = this.page;
        if (!((_a = info.microformat) === null || _a === void 0 ? void 0 : _a.is(MicroformatData)))
            throw new InnertubeError('Invalid microformat', info.microformat);
        this.basic_info = Object.assign(Object.assign({}, info.video_details), {
            description: (_b = info.microformat) === null || _b === void 0 ? void 0 : _b.description,
            is_unlisted: (_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is_unlisted,
            is_family_safe: (_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is_family_safe,
            url_canonical: (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.url_canonical,
            tags: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.tags
        });
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        if (next) {
            const tabbed_results = (_h = (_g = next.contents_memo) === null || _g === void 0 ? void 0 : _g.getType(WatchNextTabbedResults)) === null || _h === void 0 ? void 0 : _h[0];
            this.tabs = tabbed_results === null || tabbed_results === void 0 ? void 0 : tabbed_results.tabs.array().as(Tab);
            this.current_video_endpoint = next.current_video_endpoint;
            // TODO: update PlayerOverlay, YTMusic's is a little bit different.
            this.player_overlays = (_j = next.player_overlays) === null || _j === void 0 ? void 0 : _j.item().as(PlayerOverlay);
        }
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
            const page = yield target_tab.endpoint.call(this.actions, { client: 'YTMUSIC', parse: true });
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
                const page = yield ((_a = automix_preview_video.playlist_video) === null || _a === void 0 ? void 0 : _a.endpoint.call(this.actions, {
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
        const _super = Object.create(null, {
            addToWatchHistory: { get: () => super.addToWatchHistory }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.addToWatchHistory.call(this, Constants.CLIENTS.YTMUSIC.NAME, Constants.CLIENTS.YTMUSIC.VERSION, 'https://music.');
        });
    }
    get available_tabs() {
        return this.tabs ? this.tabs.map((tab) => tab.title) : [];
    }
}
export default TrackInfo;
//# sourceMappingURL=TrackInfo.js.map