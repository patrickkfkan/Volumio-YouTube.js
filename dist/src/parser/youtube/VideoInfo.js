var _VideoInfo_watch_next_continuation;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
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
import { InnertubeError } from '../../utils/Utils.js';
import { MediaInfo } from '../../core/mixins/index.js';
class VideoInfo extends MediaInfo {
    /**
     * @param data - API response.
     * @param actions - Actions instance.
     * @param player - Player instance.
     * @param cpn - Client Playback Nonce.
     */
    constructor(data, actions, cpn) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15;
        super(data, actions, cpn);
        _VideoInfo_watch_next_continuation.set(this, void 0);
        const [info, next] = this.page;
        if (info.microformat && !((_a = info.microformat) === null || _a === void 0 ? void 0 : _a.is(PlayerMicroformat, MicroformatData)))
            throw new InnertubeError('Invalid microformat', info.microformat);
        this.basic_info = Object.assign(Object.assign(Object.assign({}, info.video_details), {
            embed: ((_b = info.microformat) === null || _b === void 0 ? void 0 : _b.is(PlayerMicroformat)) ? (_c = info.microformat) === null || _c === void 0 ? void 0 : _c.embed : null,
            channel: ((_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is(PlayerMicroformat)) ? (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.channel : null,
            is_unlisted: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is_unlisted,
            is_family_safe: (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.is_family_safe,
            category: ((_h = info.microformat) === null || _h === void 0 ? void 0 : _h.is(PlayerMicroformat)) ? (_j = info.microformat) === null || _j === void 0 ? void 0 : _j.category : null,
            has_ypc_metadata: ((_k = info.microformat) === null || _k === void 0 ? void 0 : _k.is(PlayerMicroformat)) ? (_l = info.microformat) === null || _l === void 0 ? void 0 : _l.has_ypc_metadata : null,
            start_timestamp: ((_m = info.microformat) === null || _m === void 0 ? void 0 : _m.is(PlayerMicroformat)) ? info.microformat.start_timestamp : null,
            view_count: ((_o = info.microformat) === null || _o === void 0 ? void 0 : _o.is(PlayerMicroformat)) && isNaN((_p = info.video_details) === null || _p === void 0 ? void 0 : _p.view_count) ? info.microformat.view_count : (_q = info.video_details) === null || _q === void 0 ? void 0 : _q.view_count
        }), { like_count: undefined, is_liked: undefined, is_disliked: undefined });
        this.annotations = info.annotations;
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        this.captions = info.captions;
        this.cards = info.cards;
        const two_col = (_r = next === null || next === void 0 ? void 0 : next.contents) === null || _r === void 0 ? void 0 : _r.item().as(TwoColumnWatchNextResults);
        const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
        const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
        if (results && secondary_results) {
            if (((_s = info.microformat) === null || _s === void 0 ? void 0 : _s.is(PlayerMicroformat)) && ((_t = info.microformat) === null || _t === void 0 ? void 0 : _t.category) === 'Gaming') {
                const row = (_w = (_v = (_u = results.firstOfType(VideoSecondaryInfo)) === null || _u === void 0 ? void 0 : _u.metadata) === null || _v === void 0 ? void 0 : _v.rows) === null || _w === void 0 ? void 0 : _w.firstOfType(RichMetadataRow);
                if (row === null || row === void 0 ? void 0 : row.is(RichMetadataRow)) {
                    this.game_info = {
                        title: (_y = (_x = row === null || row === void 0 ? void 0 : row.contents) === null || _x === void 0 ? void 0 : _x.firstOfType(RichMetadata)) === null || _y === void 0 ? void 0 : _y.title,
                        release_year: (_0 = (_z = row === null || row === void 0 ? void 0 : row.contents) === null || _z === void 0 ? void 0 : _z.firstOfType(RichMetadata)) === null || _0 === void 0 ? void 0 : _0.subtitle
                    };
                }
            }
            this.primary_info = results.firstOfType(VideoPrimaryInfo);
            this.secondary_info = results.firstOfType(VideoSecondaryInfo);
            this.merchandise = results.firstOfType(MerchandiseShelf);
            this.related_chip_cloud = (_1 = secondary_results.firstOfType(RelatedChipCloud)) === null || _1 === void 0 ? void 0 : _1.content.as(ChipCloud);
            if (two_col === null || two_col === void 0 ? void 0 : two_col.playlist) {
                this.playlist = two_col.playlist;
            }
            this.watch_next_feed = ((_2 = secondary_results.firstOfType(ItemSection)) === null || _2 === void 0 ? void 0 : _2.contents) || secondary_results;
            /*** Volumio-YouTube.js ***/
            if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && ((_3 = this.watch_next_feed[this.watch_next_feed.length - 1]) === null || _3 === void 0 ? void 0 : _3.is(ContinuationItem)))
                //if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && this.watch_next_feed.at(-1)?.is(ContinuationItem))
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_4 = this.watch_next_feed.pop()) === null || _4 === void 0 ? void 0 : _4.as(ContinuationItem), "f");
            this.player_overlays = (_5 = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _5 === void 0 ? void 0 : _5.item().as(PlayerOverlay);
            if (two_col === null || two_col === void 0 ? void 0 : two_col.autoplay) {
                this.autoplay = two_col.autoplay;
            }
            const segmented_like_dislike_button = (_7 = (_6 = this.primary_info) === null || _6 === void 0 ? void 0 : _6.menu) === null || _7 === void 0 ? void 0 : _7.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            if (((_8 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _8 === void 0 ? void 0 : _8.is(ToggleButton)) && ((_9 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _9 === void 0 ? void 0 : _9.is(ToggleButton))) {
                this.basic_info.like_count = (_10 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _10 === void 0 ? void 0 : _10.like_count;
                this.basic_info.is_liked = (_11 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _11 === void 0 ? void 0 : _11.is_toggled;
                this.basic_info.is_disliked = (_12 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _12 === void 0 ? void 0 : _12.is_toggled;
            }
            const comments_entry_point = (_13 = results.get({ target_id: 'comments-entry-point' })) === null || _13 === void 0 ? void 0 : _13.as(ItemSection);
            this.comments_entry_point_header = (_14 = comments_entry_point === null || comments_entry_point === void 0 ? void 0 : comments_entry_point.contents) === null || _14 === void 0 ? void 0 : _14.firstOfType(CommentsEntryPointHeader);
            this.livechat = (_15 = next === null || next === void 0 ? void 0 : next.contents_memo) === null || _15 === void 0 ? void 0 : _15.getType(LiveChat).first();
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
            const response = yield ((_c = cloud_chip.endpoint) === null || _c === void 0 ? void 0 : _c.call(this.actions, { parse: true }));
            const data = (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _d === void 0 ? void 0 : _d.get({ target_id: 'watch-next-feed' });
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            return this;
        });
    }
    /**
     * Adds video to the watch history.
     */
    addToWatchHistory() {
        const _super = Object.create(null, {
            addToWatchHistory: { get: () => super.addToWatchHistory }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.addToWatchHistory.call(this);
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
            const response = yield ((_a = __classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f")) === null || _a === void 0 ? void 0 : _a.endpoint.call(this.actions, { parse: true }));
            const data = (_b = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b.get({ type: 'appendContinuationItemsAction' });
            if (!data)
                throw new InnertubeError('AppendContinuationItemsAction not found');
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            /*** Volumio-YouTube.js ***/
            if ((_d = (_c = this.watch_next_feed) === null || _c === void 0 ? void 0 : _c[this.watch_next_feed.length - 1]) === null || _d === void 0 ? void 0 : _d.is(ContinuationItem)) {
                //if (this.watch_next_feed?.at(-1)?.is(ContinuationItem)) {
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
            const response = yield button.endpoint.call(this.actions);
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
            const response = yield button.endpoint.call(this.actions);
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
            const response = yield button.toggled_endpoint.call(this.actions);
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
                return new VideoInfo([{ data: player_response }], this.actions, this.cpn);
            }
        }
        return null;
    }
    /**
     * Watch next feed filters.
     */
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.related_chip_cloud) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.map((chip) => { var _a; return (_a = chip.text) === null || _a === void 0 ? void 0 : _a.toString(); })) || [];
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
}
_VideoInfo_watch_next_continuation = new WeakMap();
export default VideoInfo;
//# sourceMappingURL=VideoInfo.js.map