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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _VideoInfo_instances, _VideoInfo_page, _VideoInfo_actions, _VideoInfo_player, _VideoInfo_cpn, _VideoInfo_watch_next_continuation, _VideoInfo_el, _VideoInfo_generateAdaptationSet, _VideoInfo_generateRepresentationVideo, _VideoInfo_generateRepresentationAudio;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Constants_1 = __importDefault(require("../../utils/Constants"));
const TwoColumnWatchNextResults_1 = __importDefault(require("../classes/TwoColumnWatchNextResults"));
const VideoPrimaryInfo_1 = __importDefault(require("../classes/VideoPrimaryInfo"));
const VideoSecondaryInfo_1 = __importDefault(require("../classes/VideoSecondaryInfo"));
const MerchandiseShelf_1 = __importDefault(require("../classes/MerchandiseShelf"));
const RelatedChipCloud_1 = __importDefault(require("../classes/RelatedChipCloud"));
const ChipCloud_1 = __importDefault(require("../classes/ChipCloud"));
const ItemSection_1 = __importDefault(require("../classes/ItemSection"));
const PlayerOverlay_1 = __importDefault(require("../classes/PlayerOverlay"));
const ToggleButton_1 = __importDefault(require("../classes/ToggleButton"));
const CommentsEntryPointHeader_1 = __importDefault(require("../classes/comments/CommentsEntryPointHeader"));
const ContinuationItem_1 = __importDefault(require("../classes/ContinuationItem"));
const PlayerMicroformat_1 = __importDefault(require("../classes/PlayerMicroformat"));
const MicroformatData_1 = __importDefault(require("../classes/MicroformatData"));
const LiveChat_1 = __importDefault(require("../classes/LiveChat"));
const LiveChat_2 = __importDefault(require("./LiveChat"));
const linkedom_1 = require("linkedom");
const Utils_1 = require("../../utils/Utils");
class VideoInfo {
    /**
     * @param data - API response.
     * @param cpn - Client Playback Nonce
     */
    constructor(data, actions, player, cpn) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
        _VideoInfo_instances.add(this);
        _VideoInfo_page.set(this, void 0);
        _VideoInfo_actions.set(this, void 0);
        _VideoInfo_player.set(this, void 0);
        _VideoInfo_cpn.set(this, void 0);
        _VideoInfo_watch_next_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _VideoInfo_actions, actions, "f");
        __classPrivateFieldSet(this, _VideoInfo_player, player, "f");
        __classPrivateFieldSet(this, _VideoInfo_cpn, cpn, "f");
        const info = index_1.default.parseResponse(data[0].data);
        const next = ((_a = data === null || data === void 0 ? void 0 : data[1]) === null || _a === void 0 ? void 0 : _a.data) ? index_1.default.parseResponse(data[1].data) : undefined;
        __classPrivateFieldSet(this, _VideoInfo_page, [info, next], "f");
        if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === 'ERROR')
            throw new Utils_1.InnertubeError('This video is unavailable', info.playability_status);
        if (info.microformat && !((_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is(PlayerMicroformat_1.default, MicroformatData_1.default)))
            throw new Utils_1.InnertubeError('Invalid microformat', info.microformat);
        this.basic_info = Object.assign(Object.assign(Object.assign({}, info.video_details), {
            /**
             * Microformat is a bit redundant, so only
             * a few things there are interesting to us.
             */
            embed: ((_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is(PlayerMicroformat_1.default)) ? (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.embed : null,
            channel: ((_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is(PlayerMicroformat_1.default)) ? (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.channel : null,
            is_unlisted: (_h = info.microformat) === null || _h === void 0 ? void 0 : _h.is_unlisted,
            is_family_safe: (_j = info.microformat) === null || _j === void 0 ? void 0 : _j.is_family_safe,
            has_ypc_metadata: ((_k = info.microformat) === null || _k === void 0 ? void 0 : _k.is(PlayerMicroformat_1.default)) ? (_l = info.microformat) === null || _l === void 0 ? void 0 : _l.has_ypc_metadata : null
        }), { like_count: undefined, is_liked: undefined, is_disliked: undefined });
        this.streaming_data = info.streaming_data;
        this.playability_status = info.playability_status;
        this.annotations = info.annotations;
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        this.captions = info.captions;
        this.cards = info.cards;
        const two_col = next === null || next === void 0 ? void 0 : next.contents.item().as(TwoColumnWatchNextResults_1.default);
        const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
        const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
        if (results && secondary_results) {
            this.primary_info = (_m = results.get({ type: 'VideoPrimaryInfo' })) === null || _m === void 0 ? void 0 : _m.as(VideoPrimaryInfo_1.default);
            this.secondary_info = (_o = results.get({ type: 'VideoSecondaryInfo' })) === null || _o === void 0 ? void 0 : _o.as(VideoSecondaryInfo_1.default);
            this.merchandise = (_p = results.get({ type: 'MerchandiseShelf' })) === null || _p === void 0 ? void 0 : _p.as(MerchandiseShelf_1.default);
            this.related_chip_cloud = (_r = (_q = secondary_results.get({ type: 'RelatedChipCloud' })) === null || _q === void 0 ? void 0 : _q.as(RelatedChipCloud_1.default)) === null || _r === void 0 ? void 0 : _r.content.item().as(ChipCloud_1.default);
            this.watch_next_feed = (_t = (_s = secondary_results.get({ type: 'ItemSection' })) === null || _s === void 0 ? void 0 : _s.as(ItemSection_1.default)) === null || _t === void 0 ? void 0 : _t.contents;
            if (this.watch_next_feed && Array.isArray(this.watch_next_feed))
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_u = this.watch_next_feed.pop()) === null || _u === void 0 ? void 0 : _u.as(ContinuationItem_1.default), "f");
            this.player_overlays = next === null || next === void 0 ? void 0 : next.player_overlays.item().as(PlayerOverlay_1.default);
            this.basic_info.like_count = (_z = (_y = (_x = (_w = (_v = this.primary_info) === null || _v === void 0 ? void 0 : _v.menu) === null || _w === void 0 ? void 0 : _w.top_level_buttons) === null || _x === void 0 ? void 0 : _x.get({ icon_type: 'LIKE' })) === null || _y === void 0 ? void 0 : _y.as(ToggleButton_1.default)) === null || _z === void 0 ? void 0 : _z.like_count;
            this.basic_info.is_liked = (_4 = (_3 = (_2 = (_1 = (_0 = this.primary_info) === null || _0 === void 0 ? void 0 : _0.menu) === null || _1 === void 0 ? void 0 : _1.top_level_buttons) === null || _2 === void 0 ? void 0 : _2.get({ icon_type: 'LIKE' })) === null || _3 === void 0 ? void 0 : _3.as(ToggleButton_1.default)) === null || _4 === void 0 ? void 0 : _4.is_toggled;
            this.basic_info.is_disliked = (_9 = (_8 = (_7 = (_6 = (_5 = this.primary_info) === null || _5 === void 0 ? void 0 : _5.menu) === null || _6 === void 0 ? void 0 : _6.top_level_buttons) === null || _7 === void 0 ? void 0 : _7.get({ icon_type: 'DISLIKE' })) === null || _8 === void 0 ? void 0 : _8.as(ToggleButton_1.default)) === null || _9 === void 0 ? void 0 : _9.is_toggled;
            const comments_entry_point = (_10 = results.get({ target_id: 'comments-entry-point' })) === null || _10 === void 0 ? void 0 : _10.as(ItemSection_1.default);
            this.comments_entry_point_header = (_12 = (_11 = comments_entry_point === null || comments_entry_point === void 0 ? void 0 : comments_entry_point.contents) === null || _11 === void 0 ? void 0 : _11.get({ type: 'CommentsEntryPointHeader' })) === null || _12 === void 0 ? void 0 : _12.as(CommentsEntryPointHeader_1.default);
            this.livechat = (_13 = next === null || next === void 0 ? void 0 : next.contents_memo.getType(LiveChat_1.default)) === null || _13 === void 0 ? void 0 : _13[0];
        }
    }
    /**
     * Applies given filter to the watch next feed.
     */
    selectFilter(name) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.filters.includes(name))
                throw new Utils_1.InnertubeError('Invalid filter', { available_filters: this.filters });
            const filter = (_b = (_a = this.related_chip_cloud) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.get({ text: name });
            if (filter === null || filter === void 0 ? void 0 : filter.is_selected)
                return this;
            const response = yield ((_c = filter === null || filter === void 0 ? void 0 : filter.endpoint) === null || _c === void 0 ? void 0 : _c.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"), undefined, true));
            const data = (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _d === void 0 ? void 0 : _d.get({ target_id: 'watch-next-feed' });
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            return this;
        });
    }
    /**
     * Retrieves watch next feed continuation.
     */
    getWatchNextContinuation() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield ((_a = __classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f")) === null || _a === void 0 ? void 0 : _a.endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"), undefined, true));
            const data = (_b = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b.get({ type: 'appendContinuationItemsAction' });
            if (!data)
                throw new Utils_1.InnertubeError('Continuation not found');
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_d = (_c = this.watch_next_feed) === null || _c === void 0 ? void 0 : _c.pop()) === null || _d === void 0 ? void 0 : _d.as(ContinuationItem_1.default), "f");
            return this;
        });
    }
    /**
     * Likes the video.
     */
    like() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const button = (_d = (_c = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons) === null || _c === void 0 ? void 0 : _c.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_LIKE' })) === null || _d === void 0 ? void 0 : _d.as(ToggleButton_1.default);
            if (!button)
                throw new Utils_1.InnertubeError('Like button not found', { video_id: this.basic_info.id });
            if (button.is_toggled)
                throw new Utils_1.InnertubeError('This video is already liked', { video_id: this.basic_info.id });
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"));
            return response;
        });
    }
    /**
     * Dislikes the video.
     */
    dislike() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const button = (_d = (_c = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons) === null || _c === void 0 ? void 0 : _c.get({ button_id: 'TOGGLE_BUTTON_ID_TYPE_DISLIKE' })) === null || _d === void 0 ? void 0 : _d.as(ToggleButton_1.default);
            if (!button)
                throw new Utils_1.InnertubeError('Dislike button not found', { video_id: this.basic_info.id });
            if (button.is_toggled)
                throw new Utils_1.InnertubeError('This video is already disliked', { video_id: this.basic_info.id });
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"));
            return response;
        });
    }
    /**
     * Removes like/dislike.
     */
    removeLike() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const button = (_d = (_c = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons) === null || _c === void 0 ? void 0 : _c.get({ is_toggled: true })) === null || _d === void 0 ? void 0 : _d.as(ToggleButton_1.default);
            if (!button)
                throw new Utils_1.InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });
            const response = yield button.toggled_endpoint.call(__classPrivateFieldGet(this, _VideoInfo_actions, "f"));
            return response;
        });
    }
    /**
     * Retrieves Live Chat if available.
     */
    getLiveChat() {
        if (!this.livechat)
            throw new Utils_1.InnertubeError('Live Chat is not available', { video_id: this.basic_info.id });
        return new LiveChat_2.default(this);
    }
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.related_chip_cloud) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.map((chip) => chip.text.toString())) || [];
    }
    get actions() {
        return __classPrivateFieldGet(this, _VideoInfo_actions, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _VideoInfo_page, "f");
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
                    if (row.content.toString().toLowerCase().startsWith('music')) {
                        is_music_section = true;
                        i++; // Skip the learn more link
                    }
                    continue;
                }
                if (!is_music_section)
                    continue;
                if (row.is(MetadataRow))
                    current_song[row.title.toString().toLowerCase().replace(/ /g, '_')] = row.contents;
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
    chooseFormat(options) {
        if (!this.streaming_data)
            throw new Utils_1.InnertubeError('Streaming data not available', { video_id: this.basic_info.id });
        const formats = [
            ...(this.streaming_data.formats || []),
            ...(this.streaming_data.adaptive_formats || [])
        ];
        const requires_audio = options.type ? options.type.includes('audio') : true;
        const requires_video = options.type ? options.type.includes('video') : true;
        const quality = options.quality || '360p';
        let best_width = -1;
        const is_best = ['best', 'bestefficiency'].includes(quality);
        const use_most_efficient = quality !== 'best';
        let candidates = formats.filter((format) => {
            if (requires_audio && !format.has_audio)
                return false;
            if (requires_video && !format.has_video)
                return false;
            if (options.format !== 'any' && !format.mime_type.includes(options.format || 'mp4'))
                return false;
            if (!is_best && format.quality_label !== quality)
                return false;
            if (best_width < format.width)
                best_width = format.width;
            return true;
        });
        if (!candidates.length) {
            throw new Utils_1.InnertubeError('No matching formats found', {
                options
            });
        }
        if (is_best && requires_video)
            candidates = candidates.filter((format) => format.width === best_width);
        if (requires_audio && !requires_video) {
            const audio_only = candidates.filter((format) => !format.has_video);
            if (audio_only.length > 0) {
                candidates = audio_only;
            }
        }
        if (use_most_efficient) {
            // Sort by bitrate (lower is better)
            candidates.sort((a, b) => a.bitrate - b.bitrate);
        }
        else {
            // Sort by bitrate (higher is better)
            candidates.sort((a, b) => b.bitrate - a.bitrate);
        }
        return candidates[0];
    }
    toDash(url_transformer = (url) => url) {
        if (!this.streaming_data)
            throw new Utils_1.InnertubeError('Streaming data not available', { video_id: this.basic_info.id });
        const { adaptive_formats } = this.streaming_data;
        const length = adaptive_formats[0].approx_duration_ms / 1000;
        const document = new linkedom_1.DOMParser().parseFromString('', 'text/xml');
        const period = document.createElement('Period');
        document.appendChild(__classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'MPD', {
            xmlns: 'urn:mpeg:dash:schema:mpd:2011',
            minBufferTime: 'PT1.500S',
            profiles: 'urn:mpeg:dash:profile:isoff-main:2011',
            type: 'static',
            mediaPresentationDuration: `PT${length}S`,
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xsi:schemaLocation': 'urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd'
        }, [
            period
        ]));
        __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_generateAdaptationSet).call(this, document, period, adaptive_formats, url_transformer);
        return `${document}`;
    }
    /**
     * @param options - download options.
     */
    download(options = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (((_a = this.playability_status) === null || _a === void 0 ? void 0 : _a.status) === 'UNPLAYABLE')
                throw new Utils_1.InnertubeError('Video is unplayable', { video: this, error_type: 'UNPLAYABLE' });
            if (((_b = this.playability_status) === null || _b === void 0 ? void 0 : _b.status) === 'LOGIN_REQUIRED')
                throw new Utils_1.InnertubeError('Video is login required', { video: this, error_type: 'LOGIN_REQUIRED' });
            if (!this.streaming_data)
                throw new Utils_1.InnertubeError('Streaming data not available.', { video: this, error_type: 'NO_STREAMING_DATA' });
            const opts = Object.assign({ quality: '360p', type: 'video+audio', format: 'mp4', range: undefined }, options);
            const format = this.chooseFormat(opts);
            const format_url = format.decipher(__classPrivateFieldGet(this, _VideoInfo_player, "f"));
            // If we're not downloading the video in chunks, we just use fetch once.
            if (opts.type === 'video+audio' && !options.range) {
                const response = yield __classPrivateFieldGet(this, _VideoInfo_actions, "f").session.http.fetch_function(`${format_url}&cpn=${__classPrivateFieldGet(this, _VideoInfo_cpn, "f")}`, {
                    method: 'GET',
                    headers: Constants_1.default.STREAM_HEADERS,
                    redirect: 'follow'
                });
                // Throw if the response is not 2xx
                if (!response.ok)
                    throw new Utils_1.InnertubeError('The server responded with a non 2xx status code', { video: this, error_type: 'FETCH_FAILED', response });
                const body = response.body;
                if (!body)
                    throw new Utils_1.InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });
                return body;
            }
            // We need to download in chunks.
            const chunk_size = 1048576 * 10; // 10MB
            let chunk_start = (options.range ? options.range.start : 0);
            let chunk_end = (options.range ? options.range.end : chunk_size);
            let must_end = false;
            let cancel;
            const readable_stream = new ReadableStream({
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                start() { },
                pull: (controller) => __awaiter(this, void 0, void 0, function* () {
                    if (must_end) {
                        controller.close();
                        return;
                    }
                    if ((chunk_end >= format.content_length) || options.range) {
                        must_end = true;
                    }
                    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                        var e_1, _c;
                        try {
                            cancel = new AbortController();
                            const response = yield __classPrivateFieldGet(this, _VideoInfo_actions, "f").session.http.fetch_function(`${format_url}&cpn=${__classPrivateFieldGet(this, _VideoInfo_cpn, "f")}&range=${chunk_start}-${chunk_end || ''}`, {
                                method: 'GET',
                                headers: Object.assign({}, Constants_1.default.STREAM_HEADERS
                                // XXX: use YouTube's range parameter instead of a Range header.
                                // Range: `bytes=${chunk_start}-${chunk_end}`
                                ),
                                signal: cancel.signal
                            });
                            const body = response.body;
                            if (!body)
                                throw new Utils_1.InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });
                            try {
                                for (var _d = __asyncValues((0, Utils_1.streamToIterable)(body)), _e; _e = yield _d.next(), !_e.done;) {
                                    const chunk = _e.value;
                                    controller.enqueue(chunk);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_e && !_e.done && (_c = _d.return)) yield _c.call(_d);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            chunk_start = chunk_end + 1;
                            chunk_end += chunk_size;
                            resolve();
                            return;
                        }
                        catch (e) {
                            reject(e);
                        }
                    }));
                }),
                cancel(reason) {
                    return __awaiter(this, void 0, void 0, function* () {
                        cancel.abort(reason);
                    });
                }
            }, {
                highWaterMark: 1,
                size(chunk) {
                    return chunk.byteLength;
                }
            });
            return readable_stream;
        });
    }
}
_VideoInfo_page = new WeakMap(), _VideoInfo_actions = new WeakMap(), _VideoInfo_player = new WeakMap(), _VideoInfo_cpn = new WeakMap(), _VideoInfo_watch_next_continuation = new WeakMap(), _VideoInfo_instances = new WeakSet(), _VideoInfo_el = function _VideoInfo_el(document, tag, attrs, children = []) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, value);
    }
    for (const child of children) {
        if (typeof child === 'undefined')
            continue;
        el.appendChild(child);
    }
    return el;
}, _VideoInfo_generateAdaptationSet = function _VideoInfo_generateAdaptationSet(document, period, formats, url_transformer) {
    const mimeTypes = [];
    const mimeObjects = [[]];
    formats.forEach((videoFormat) => {
        if (!videoFormat.index_range || !videoFormat.init_range) {
            return;
        }
        const mimeType = videoFormat.mime_type;
        const mimeTypeIndex = mimeTypes.indexOf(mimeType);
        if (mimeTypeIndex > -1) {
            mimeObjects[mimeTypeIndex].push(videoFormat);
        }
        else {
            mimeTypes.push(mimeType);
            mimeObjects.push([]);
            mimeObjects[mimeTypes.length - 1].push(videoFormat);
        }
    });
    for (let i = 0; i < mimeTypes.length; i++) {
        const set = __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'AdaptationSet', {
            id: `${i}`,
            mimeType: mimeTypes[i].split(';')[0],
            startWithSAP: '1',
            subsegmentAlignment: 'true'
        });
        period.appendChild(set);
        mimeObjects[i].forEach((format) => {
            if (format.has_video) {
                __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_generateRepresentationVideo).call(this, document, set, format, url_transformer);
            }
            else {
                __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_generateRepresentationAudio).call(this, document, set, format, url_transformer);
            }
        });
    }
}, _VideoInfo_generateRepresentationVideo = function _VideoInfo_generateRepresentationVideo(document, set, format, url_transformer) {
    const codecs = (0, Utils_1.getStringBetweenStrings)(format.mime_type, 'codecs="', '"');
    if (!format.index_range || !format.init_range)
        throw new Utils_1.InnertubeError('Index and init ranges not available', { format });
    const url = new URL(format.decipher(__classPrivateFieldGet(this, _VideoInfo_player, "f")));
    url.searchParams.set('cpn', __classPrivateFieldGet(this, _VideoInfo_cpn, "f"));
    set.appendChild(__classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'Representation', {
        id: format.itag,
        codecs,
        bandwidth: format.bitrate,
        width: format.width,
        height: format.height,
        maxPlayoutRate: '1',
        frameRate: format.fps
    }, [
        __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'BaseURL', {}, [
            document.createTextNode(url_transformer(url).toString())
        ]),
        __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'SegmentBase', {
            indexRange: `${format.index_range.start}-${format.index_range.end}`
        }, [
            __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'Initialization', {
                range: `${format.init_range.start}-${format.init_range.end}`
            })
        ])
    ]));
}, _VideoInfo_generateRepresentationAudio = function _VideoInfo_generateRepresentationAudio(document, set, format, url_transformer) {
    const codecs = (0, Utils_1.getStringBetweenStrings)(format.mime_type, 'codecs="', '"');
    if (!format.index_range || !format.init_range)
        throw new Utils_1.InnertubeError('Index and init ranges not available', { format });
    const url = new URL(format.decipher(__classPrivateFieldGet(this, _VideoInfo_player, "f")));
    url.searchParams.set('cpn', __classPrivateFieldGet(this, _VideoInfo_cpn, "f"));
    set.appendChild(__classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'Representation', {
        id: format.itag,
        codecs,
        bandwidth: format.bitrate
    }, [
        __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'AudioChannelConfiguration', {
            schemeIdUri: 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011',
            value: format.audio_channels || '2'
        }),
        __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'BaseURL', {}, [
            document.createTextNode(url_transformer(url).toString())
        ]),
        __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'SegmentBase', {
            indexRange: `${format.index_range.start}-${format.index_range.end}`
        }, [
            __classPrivateFieldGet(this, _VideoInfo_instances, "m", _VideoInfo_el).call(this, document, 'Initialization', {
                range: `${format.init_range.start}-${format.init_range.end}`
            })
        ])
    ]));
};
exports.default = VideoInfo;
//# sourceMappingURL=VideoInfo.js.map