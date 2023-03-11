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
var _VideoInfo_page, _VideoInfo_actions, _VideoInfo_player, _VideoInfo_cpn, _VideoInfo_watch_next_continuation, _VideoInfo_playback_tracking;
import Constants from '../../utils/Constants.js';
import Parser from '../index.js';
import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader.js';
import ContinuationItem from '../classes/ContinuationItem.js';
import ItemSection from '../classes/ItemSection.js';
import LiveChat from '../classes/LiveChat.js';
import MerchandiseShelf from '../classes/MerchandiseShelf.js';
import MicroformatData from '../classes/MicroformatData.js';
import PlayerMicroformat from '../classes/PlayerMicroformat.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import RelatedChipCloud from '../classes/RelatedChipCloud.js';
import RichMetadata from '../classes/RichMetadata.js';
import RichMetadataRow from '../classes/RichMetadataRow.js';
import SegmentedLikeDislikeButton from '../classes/SegmentedLikeDislikeButton.js';
import ToggleButton from '../classes/ToggleButton.js';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.js';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo.js';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo.js';
import LiveChatWrap from './LiveChat.js';
import PlayerLegacyDesktopYpcTrailer from '../classes/PlayerLegacyDesktopYpcTrailer.js';
import FormatUtils from '../../utils/FormatUtils.js';
import { InnertubeError } from '../../utils/Utils.js';
class VideoInfo {
    /**
     * @param data - API response.
     * @param actions - Actions instance.
     * @param player - Player instance.
     * @param cpn - Client Playback Nonce.
     */
    constructor(data, actions, player, cpn) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
        _VideoInfo_page.set(this, void 0);
        _VideoInfo_actions.set(this, void 0);
        _VideoInfo_player.set(this, void 0);
        _VideoInfo_cpn.set(this, void 0);
        _VideoInfo_watch_next_continuation.set(this, void 0);
        _VideoInfo_playback_tracking.set(this, void 0);
        __classPrivateFieldSet(this, _VideoInfo_actions, actions, "f");
        __classPrivateFieldSet(this, _VideoInfo_player, player, "f");
        __classPrivateFieldSet(this, _VideoInfo_cpn, cpn, "f");
        const info = Parser.parseResponse(data[0].data);
        const next = ((_a = data === null || data === void 0 ? void 0 : data[1]) === null || _a === void 0 ? void 0 : _a.data) ? Parser.parseResponse(data[1].data) : undefined;
        __classPrivateFieldSet(this, _VideoInfo_page, [info, next], "f");
        if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === 'ERROR')
            throw new InnertubeError('This video is unavailable', info.playability_status);
        if (info.microformat && !((_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is(PlayerMicroformat, MicroformatData)))
            throw new InnertubeError('Invalid microformat', info.microformat);
        this.basic_info = Object.assign(Object.assign(Object.assign({}, info.video_details), {
            embed: ((_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is(PlayerMicroformat)) ? (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.embed : null,
            channel: ((_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is(PlayerMicroformat)) ? (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.channel : null,
            is_unlisted: (_h = info.microformat) === null || _h === void 0 ? void 0 : _h.is_unlisted,
            is_family_safe: (_j = info.microformat) === null || _j === void 0 ? void 0 : _j.is_family_safe,
            category: ((_k = info.microformat) === null || _k === void 0 ? void 0 : _k.is(PlayerMicroformat)) ? (_l = info.microformat) === null || _l === void 0 ? void 0 : _l.category : null,
            has_ypc_metadata: ((_m = info.microformat) === null || _m === void 0 ? void 0 : _m.is(PlayerMicroformat)) ? (_o = info.microformat) === null || _o === void 0 ? void 0 : _o.has_ypc_metadata : null,
            start_timestamp: ((_p = info.microformat) === null || _p === void 0 ? void 0 : _p.is(PlayerMicroformat)) ? info.microformat.start_timestamp : null
        }), { like_count: undefined, is_liked: undefined, is_disliked: undefined });
        this.streaming_data = info.streaming_data;
        this.playability_status = info.playability_status;
        this.annotations = info.annotations;
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        this.captions = info.captions;
        this.cards = info.cards;
        __classPrivateFieldSet(this, _VideoInfo_playback_tracking, info.playback_tracking, "f");
        const two_col = (_q = next === null || next === void 0 ? void 0 : next.contents) === null || _q === void 0 ? void 0 : _q.item().as(TwoColumnWatchNextResults);
        const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
        const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
        if (results && secondary_results) {
            if (((_r = info.microformat) === null || _r === void 0 ? void 0 : _r.is(PlayerMicroformat)) && ((_s = info.microformat) === null || _s === void 0 ? void 0 : _s.category) === 'Gaming') {
                const row = (_v = (_u = (_t = results.firstOfType(VideoSecondaryInfo)) === null || _t === void 0 ? void 0 : _t.metadata) === null || _u === void 0 ? void 0 : _u.rows) === null || _v === void 0 ? void 0 : _v.firstOfType(RichMetadataRow);
                if (row === null || row === void 0 ? void 0 : row.is(RichMetadataRow)) {
                    this.game_info = {
                        title: (_x = (_w = row === null || row === void 0 ? void 0 : row.contents) === null || _w === void 0 ? void 0 : _w.firstOfType(RichMetadata)) === null || _x === void 0 ? void 0 : _x.title,
                        release_year: (_z = (_y = row === null || row === void 0 ? void 0 : row.contents) === null || _y === void 0 ? void 0 : _y.firstOfType(RichMetadata)) === null || _z === void 0 ? void 0 : _z.subtitle
                    };
                }
            }
            this.primary_info = results.firstOfType(VideoPrimaryInfo);
            this.secondary_info = results.firstOfType(VideoSecondaryInfo);
            this.merchandise = results.firstOfType(MerchandiseShelf);
            this.related_chip_cloud = (_0 = secondary_results.firstOfType(RelatedChipCloud)) === null || _0 === void 0 ? void 0 : _0.content.item().as(ChipCloud);
            if (two_col === null || two_col === void 0 ? void 0 : two_col.playlist) {
                this.playlist = two_col.playlist;
            }
            this.watch_next_feed = ((_1 = secondary_results.firstOfType(ItemSection)) === null || _1 === void 0 ? void 0 : _1.contents) || secondary_results;
            if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && ((_2 = this.watch_next_feed.at(-1)) === null || _2 === void 0 ? void 0 : _2.is(ContinuationItem)))
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_3 = this.watch_next_feed.pop()) === null || _3 === void 0 ? void 0 : _3.as(ContinuationItem), "f");
            this.player_overlays = (_4 = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _4 === void 0 ? void 0 : _4.item().as(PlayerOverlay);
            if (two_col === null || two_col === void 0 ? void 0 : two_col.autoplay) {
                this.autoplay = two_col.autoplay;
            }
            const segmented_like_dislike_button = (_6 = (_5 = this.primary_info) === null || _5 === void 0 ? void 0 : _5.menu) === null || _6 === void 0 ? void 0 : _6.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            if (((_7 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _7 === void 0 ? void 0 : _7.is(ToggleButton)) && ((_8 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _8 === void 0 ? void 0 : _8.is(ToggleButton))) {
                this.basic_info.like_count = (_9 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _9 === void 0 ? void 0 : _9.like_count;
                this.basic_info.is_liked = (_10 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _10 === void 0 ? void 0 : _10.is_toggled;
                this.basic_info.is_disliked = (_11 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _11 === void 0 ? void 0 : _11.is_toggled;
            }
            const comments_entry_point = (_12 = results.get({ target_id: 'comments-entry-point' })) === null || _12 === void 0 ? void 0 : _12.as(ItemSection);
            this.comments_entry_point_header = (_13 = comments_entry_point === null || comments_entry_point === void 0 ? void 0 : comments_entry_point.contents) === null || _13 === void 0 ? void 0 : _13.firstOfType(CommentsEntryPointHeader);
            this.livechat = (_14 = next === null || next === void 0 ? void 0 : next.contents_memo) === null || _14 === void 0 ? void 0 : _14.getType(LiveChat).first();
        }
    }
    /**
     * Applies given filter to the watch next feed. Use {@link filters} to get available filters.
     * @param target_filter - Filter to apply.
     */
    selectFilter(target_filter) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.related_chip_cloud)
                throw new InnertubeError('Chip cloud not found, cannot apply filter');
            let cloud_chip;
            if (typeof target_filter === 'string') {
                const filter = (_b = (_a = this.related_chip_cloud) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.get({ text: target_filter });
                if (!filter)
                    throw new InnertubeError('Invalid filter', { available_filters: this.filters });
                cloud_chip = filter;
            }
            else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip)) {
                cloud_chip = target_filter;
            }
            else {
                throw new InnertubeError('Invalid cloud chip', target_filter);
            }
            if (cloud_chip.is_selected)
                return this;
            const response = yield ((_c = cloud_chip.endpoint) === null || _c === void 0 ? void 0 : _c.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"), { parse: true }));
            const data = (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _d === void 0 ? void 0 : _d.get({ target_id: 'watch-next-feed' });
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            return this;
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
     * Retrieves watch next feed continuation.
     */
    getWatchNextContinuation() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f"))
                throw new InnertubeError('Watch next feed continuation not found');
            const response = yield ((_a = __classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f")) === null || _a === void 0 ? void 0 : _a.endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"), { parse: true }));
            const data = (_b = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b.get({ type: 'appendContinuationItemsAction' });
            if (!data)
                throw new InnertubeError('AppendContinuationItemsAction not found');
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            if ((_d = (_c = this.watch_next_feed) === null || _c === void 0 ? void 0 : _c.at(-1)) === null || _d === void 0 ? void 0 : _d.is(ContinuationItem)) {
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_e = this.watch_next_feed.pop()) === null || _e === void 0 ? void 0 : _e.as(ContinuationItem), "f");
            }
            else {
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, undefined, "f");
            }
            return this;
        });
    }
    /**
     * Likes the video.
     */
    like() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const segmented_like_dislike_button = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
            if (!button)
                throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });
            if (!button.is(ToggleButton))
                throw new InnertubeError('Like button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });
            if (button.is_toggled)
                throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"));
            return response;
        });
    }
    /**
     * Dislikes the video.
     */
    dislike() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const segmented_like_dislike_button = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
            if (!button)
                throw new InnertubeError('Dislike button not found', { video_id: this.basic_info.id });
            if (!button.is(ToggleButton))
                throw new InnertubeError('Dislike button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });
            if (button.is_toggled)
                throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"));
            return response;
        });
    }
    /**
     * Removes like/dislike.
     */
    removeRating() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let button;
            const segmented_like_dislike_button = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            const like_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
            const dislike_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
            if (!(like_button === null || like_button === void 0 ? void 0 : like_button.is(ToggleButton)) || !(dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is(ToggleButton)))
                throw new InnertubeError('Like/Dislike button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });
            if (like_button === null || like_button === void 0 ? void 0 : like_button.is_toggled) {
                button = like_button;
            }
            else if (dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is_toggled) {
                button = dislike_button;
            }
            if (!button)
                throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });
            const response = yield button.toggled_endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"));
            return response;
        });
    }
    /**
     * Retrieves Live Chat if available.
     */
    getLiveChat() {
        if (!this.livechat)
            throw new InnertubeError('Live Chat is not available', { video_id: this.basic_info.id });
        return new LiveChatWrap(this);
    }
    /**
     * Retrieves trailer info if available (typically for non-purchased movies or films).
     * @returns `VideoInfo` for the trailer, or `null` if none.
     */
    getTrailerInfo() {
        var _a, _b;
        if (this.has_trailer) {
            const player_response = (_b = (_a = this.playability_status.error_screen) === null || _a === void 0 ? void 0 : _a.as(PlayerLegacyDesktopYpcTrailer).trailer) === null || _b === void 0 ? void 0 : _b.player_response;
            if (player_response) {
                return new VideoInfo([{ data: player_response }], __classPrivateFieldGet(this, _VideoInfo_actions, "f"), __classPrivateFieldGet(this, _VideoInfo_player, "f"), __classPrivateFieldGet(this, _VideoInfo_cpn, "f"));
            }
        }
        return null;
    }
    /**
     * Selects the format that best matches the given options.
     * @param options - Options
     */
    chooseFormat(options) {
        return FormatUtils.chooseFormat(options, this.streaming_data);
    }
    /**
     * Generates a DASH manifest from the streaming data.
     * @param url_transformer - Function to transform the URLs.
     * @param format_filter - Function to filter the formats.
     * @returns DASH manifest
     */
    toDash(url_transformer, format_filter) {
        return FormatUtils.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet(this, _VideoInfo_cpn, "f"), __classPrivateFieldGet(this, _VideoInfo_player, "f"));
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
     * Watch next feed filters.
     */
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.related_chip_cloud) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.map((chip) => { var _a; return (_a = chip.text) === null || _a === void 0 ? void 0 : _a.toString(); })) || [];
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
    /**
     * Checks if continuation is available for the watch next feed.
     */
    get wn_has_continuation() {
        return !!__classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f");
    }
    /**
     * Gets the endpoint of the autoplay video
     */
    get autoplay_video_endpoint() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this.autoplay) === null || _a === void 0 ? void 0 : _a.sets) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.autoplay_video) || null;
    }
    /**
     * Checks if trailer is available.
     */
    get has_trailer() {
        var _a;
        return !!((_a = this.playability_status.error_screen) === null || _a === void 0 ? void 0 : _a.is(PlayerLegacyDesktopYpcTrailer));
    }
    /**
     * Get songs used in the video.
     */
    // TODO: this seems to be broken with the new UI, further investigation needed
    get music_tracks() {
        /*
            Const metadata = this.secondary_info?.metadata;
            if (!metadata)
                return [];
            const songs = [];
            let current_song: Record<string, Text[]> = {};
            let is_music_section = false;
            for (let i = 0; i < metadata.rows.length; i++) {
                const row = metadata.rows[i];
                if (row.is(MetadataRowHeader)) {
                    if (row.content?.toString().toLowerCase().startsWith('music')) {
                        is_music_section = true;
                        i++; // Skip the learn more link
                    }
                    continue;
                }
                if (!is_music_section)
                    continue;
                if (row.is(MetadataRow))
                    current_song[row.title?.toString().toLowerCase().replace(/ /g, '_')] = row.contents;
                // TODO: this makes no sense, we continue above when
                if (row.has_divider_line) {
                    songs.push(current_song);
                    current_song = {};
                }
    
            }
            if (is_music_section)
                songs.push(current_song);
            return songs;
            */
        return [];
    }
    /**
     * Original parsed InnerTube response.
     */
    get page() {
        return __classPrivateFieldGet(this, _VideoInfo_page, "f");
    }
}
_VideoInfo_page = new WeakMap(), _VideoInfo_actions = new WeakMap(), _VideoInfo_player = new WeakMap(), _VideoInfo_cpn = new WeakMap(), _VideoInfo_watch_next_continuation = new WeakMap(), _VideoInfo_playback_tracking = new WeakMap();
export default VideoInfo;
//# sourceMappingURL=VideoInfo.js.map