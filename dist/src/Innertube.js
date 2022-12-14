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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = __importDefault(require("./core/Session"));
const Search_1 = __importDefault(require("./parser/youtube/Search"));
const Channel_1 = __importDefault(require("./parser/youtube/Channel"));
const Playlist_1 = __importDefault(require("./parser/youtube/Playlist"));
const Library_1 = __importDefault(require("./parser/youtube/Library"));
const History_1 = __importDefault(require("./parser/youtube/History"));
const Comments_1 = __importDefault(require("./parser/youtube/Comments"));
const NotificationsMenu_1 = __importDefault(require("./parser/youtube/NotificationsMenu"));
const VideoInfo_1 = __importDefault(require("./parser/youtube/VideoInfo"));
const Feed_1 = __importDefault(require("./core/Feed"));
const Music_1 = __importDefault(require("./core/Music"));
const Studio_1 = __importDefault(require("./core/Studio"));
const AccountManager_1 = __importDefault(require("./core/AccountManager"));
const PlaylistManager_1 = __importDefault(require("./core/PlaylistManager"));
const InteractionManager_1 = __importDefault(require("./core/InteractionManager"));
const FilterableFeed_1 = __importDefault(require("./core/FilterableFeed"));
const TabbedFeed_1 = __importDefault(require("./core/TabbedFeed"));
const Constants_1 = __importDefault(require("./utils/Constants"));
const index_1 = __importDefault(require("./proto/index"));
const Utils_1 = require("./utils/Utils");
class Innertube {
    constructor(session) {
        this.session = session;
        this.account = new AccountManager_1.default(this.session.actions);
        this.playlist = new PlaylistManager_1.default(this.session.actions);
        this.interact = new InteractionManager_1.default(this.session.actions);
        this.music = new Music_1.default(this.session);
        this.studio = new Studio_1.default(this.session);
        this.actions = this.session.actions;
    }
    static create(config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Innertube(yield Session_1.default.create(config));
        });
    }
    /**
     * Retrieves video info.
     */
    getInfo(video_id, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpn = (0, Utils_1.generateRandomString)(16);
            const initial_info = yield this.actions.getVideoInfo(video_id, cpn, client);
            const continuation = this.actions.next({ video_id });
            const response = yield Promise.all([initial_info, continuation]);
            return new VideoInfo_1.default(response, this.actions, this.session.player, cpn);
        });
    }
    /**
     * Retrieves basic video info.
     */
    getBasicInfo(video_id, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpn = (0, Utils_1.generateRandomString)(16);
            const response = yield this.actions.getVideoInfo(video_id, cpn, client);
            return new VideoInfo_1.default([response], this.actions, this.session.player, cpn);
        });
    }
    /**
     * Searches a given query.
     * @param query - search query.
     * @param filters - search filters.
     */
    search(query, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ query });
            const response = yield this.actions.search({ query, filters });
            return new Search_1.default(this.actions, response.data);
        });
    }
    /**
     * Retrieves search suggestions for a given query.
     * @param query - the search query.
     */
    getSearchSuggestions(query) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ query });
            const url = new URL(`${Constants_1.default.URLS.YT_SUGGESTIONS}search`);
            url.searchParams.set('q', query);
            url.searchParams.set('hl', this.session.context.client.hl);
            url.searchParams.set('gl', this.session.context.client.gl);
            url.searchParams.set('ds', 'yt');
            url.searchParams.set('client', 'youtube');
            url.searchParams.set('xssi', 't');
            url.searchParams.set('oe', 'UTF');
            const response = yield this.session.http.fetch(url);
            const response_data = yield response.text();
            const data = JSON.parse(response_data.replace(')]}\'', ''));
            const suggestions = data[1].map((suggestion) => suggestion[0]);
            return suggestions;
        });
    }
    /**
     * Retrieves comments for a video.
     * @param video_id - the video id.
     * @param sort_by - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
     */
    getComments(video_id, sort_by) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const payload = index_1.default.encodeCommentsSectionParams(video_id, {
                sort_by: sort_by || 'TOP_COMMENTS'
            });
            const response = yield this.actions.next({ ctoken: payload });
            return new Comments_1.default(this.actions, response.data);
        });
    }
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.browse('FEwhat_to_watch');
            return new FilterableFeed_1.default(this.actions, response.data);
        });
    }
    /**
     * Returns the account's library.
     */
    getLibrary() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.browse('FElibrary');
            return new Library_1.default(response.data, this.actions);
        });
    }
    /**
     * Retrieves watch history.
     * Which can also be achieved with {@link getLibrary}.
     */
    getHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.browse('FEhistory');
            return new History_1.default(this.actions, response.data);
        });
    }
    /**
     * Retrieves trending content.
     */
    getTrending() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.browse('FEtrending');
            return new TabbedFeed_1.default(this.actions, response.data);
        });
    }
    /**
     * Retrieves subscriptions feed.
     */
    getSubscriptionsFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.browse('FEsubscriptions');
            return new Feed_1.default(this.actions, response.data);
        });
    }
    /**
     * Retrieves contents for a given channel.
     * @param id - channel id
     */
    getChannel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ id });
            const response = yield this.actions.browse(id);
            return new Channel_1.default(this.actions, response.data);
        });
    }
    /**
     * Retrieves notifications.
     */
    getNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.notifications('get_notification_menu');
            return new NotificationsMenu_1.default(this.actions, response);
        });
    }
    /**
     * Retrieves unseen notifications count.
     */
    getUnseenNotificationsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.notifications('get_unseen_count');
            return response.data.unseenCount;
        });
    }
    /**
     * Retrieves playlist contents.
     */
    getPlaylist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ id });
            const response = yield this.actions.browse(`VL${id.replace(/VL/g, '')}`);
            return new Playlist_1.default(this.actions, response.data);
        });
    }
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     */
    getStreamingData(video_id, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getBasicInfo(video_id);
            return info.chooseFormat(options);
        });
    }
    /**
     * Downloads a given video. If you only need the direct download link see {@link getStreamingData}.
     *
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     */
    download(video_id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getBasicInfo(video_id, options === null || options === void 0 ? void 0 : options.client);
            return info.download(options);
        });
    }
    call(endpoint, args) {
        return endpoint.callTest(this.actions, args);
    }
}
exports.default = Innertube;
//# sourceMappingURL=Innertube.js.map