var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Session from './core/Session.js';
import Channel from './parser/youtube/Channel.js';
import Comments from './parser/youtube/Comments.js';
import History from './parser/youtube/History.js';
import Library from './parser/youtube/Library.js';
import NotificationsMenu from './parser/youtube/NotificationsMenu.js';
import Playlist from './parser/youtube/Playlist.js';
import Search from './parser/youtube/Search.js';
import VideoInfo from './parser/youtube/VideoInfo.js';
import HashtagFeed from './parser/youtube/HashtagFeed.js';
import AccountManager from './core/AccountManager.js';
import Feed from './core/Feed.js';
import InteractionManager from './core/InteractionManager.js';
import YTKids from './core/Kids.js';
import YTMusic from './core/Music.js';
import PlaylistManager from './core/PlaylistManager.js';
import YTStudio from './core/Studio.js';
import TabbedFeed from './core/TabbedFeed.js';
import HomeFeed from './parser/youtube/HomeFeed.js';
import Proto from './proto/index.js';
import Constants from './utils/Constants.js';
import { generateRandomString, throwIfMissing } from './utils/Utils.js';
class Innertube {
    constructor(session) {
        this.session = session;
        this.account = new AccountManager(this.session.actions);
        this.playlist = new PlaylistManager(this.session.actions);
        this.interact = new InteractionManager(this.session.actions);
        this.music = new YTMusic(this.session);
        this.studio = new YTStudio(this.session);
        this.kids = new YTKids(this.session);
        this.actions = this.session.actions;
    }
    static create(config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Innertube(yield Session.create(config));
        });
    }
    /**
     * Retrieves video info.
     * @param video_id - The video id.
     * @param client - The client to use.
     */
    getInfo(video_id, client) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const cpn = generateRandomString(16);
            const initial_info = this.actions.getVideoInfo(video_id, cpn, client);
            const continuation = this.actions.execute('/next', { videoId: video_id });
            const response = yield Promise.all([initial_info, continuation]);
            return new VideoInfo(response, this.actions, this.session.player, cpn);
        });
    }
    /**
     * Retrieves basic video info.
     * @param video_id - The video id.
     * @param client - The client to use.
     */
    getBasicInfo(video_id, client) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const cpn = generateRandomString(16);
            const response = yield this.actions.getVideoInfo(video_id, cpn, client);
            return new VideoInfo([response], this.actions, this.session.player, cpn);
        });
    }
    /**
     * Searches a given query.
     * @param query - The search query.
     * @param filters - Search filters.
     */
    search(query, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ query });
            const args = Object.assign({ query }, {
                params: filters ? Proto.encodeSearchFilters(filters) : undefined
            });
            const response = yield this.actions.execute('/search', args);
            return new Search(this.actions, response);
        });
    }
    /**
     * Retrieves search suggestions for a given query.
     * @param query - The search query.
     */
    getSearchSuggestions(query) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ query });
            const url = new URL(`${Constants.URLS.YT_SUGGESTIONS}search`);
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
     * @param video_id - The video id.
     * @param sort_by - Sorting options.
     */
    getComments(video_id, sort_by) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const payload = Proto.encodeCommentsSectionParams(video_id, {
                sort_by: sort_by || 'TOP_COMMENTS'
            });
            const response = yield this.actions.execute('/next', { continuation: payload });
            return new Comments(this.actions, response.data);
        });
    }
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/browse', { browseId: 'FEwhat_to_watch' });
            return new HomeFeed(this.actions, response);
        });
    }
    /**
     * Returns the account's library.
     */
    getLibrary() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/browse', { browseId: 'FElibrary' });
            return new Library(this.actions, response);
        });
    }
    /**
     * Retrieves watch history.
     * Which can also be achieved with {@link getLibrary}.
     */
    getHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/browse', { browseId: 'FEhistory' });
            return new History(this.actions, response);
        });
    }
    /**
     * Retrieves trending content.
     */
    getTrending() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/browse', { browseId: 'FEtrending', parse: true });
            return new TabbedFeed(this.actions, response);
        });
    }
    /**
     * Retrieves subscriptions feed.
     */
    getSubscriptionsFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/browse', { browseId: 'FEsubscriptions', parse: true });
            return new Feed(this.actions, response);
        });
    }
    /**
     * Retrieves contents for a given channel.
     * @param id - Channel id
     */
    getChannel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ id });
            const response = yield this.actions.execute('/browse', { browseId: id });
            return new Channel(this.actions, response);
        });
    }
    /**
     * Retrieves notifications.
     */
    getNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/notification/get_notification_menu', { notificationsMenuRequestType: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX' });
            return new NotificationsMenu(this.actions, response);
        });
    }
    /**
     * Retrieves unseen notifications count.
     */
    getUnseenNotificationsCount() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/notification/get_unseen_count');
            // TODO: properly parse this
            return ((_a = response.data) === null || _a === void 0 ? void 0 : _a.unseenCount) || ((_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.actions) === null || _c === void 0 ? void 0 : _c[0].updateNotificationsUnseenCountAction) === null || _d === void 0 ? void 0 : _d.unseenCount) || 0;
        });
    }
    /**
     * Retrieves playlist contents.
     * @param id - Playlist id
     */
    getPlaylist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ id });
            if (!id.startsWith('VL')) {
                id = `VL${id}`;
            }
            const response = yield this.actions.execute('/browse', { browseId: id });
            return new Playlist(this.actions, response);
        });
    }
    /**
     * Retrieves a given hashtag's page.
     * @param hashtag - The hashtag to fetch.
     */
    getHashtag(hashtag) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ hashtag });
            const params = Proto.encodeHashtag(hashtag);
            const response = yield this.actions.execute('/browse', { browseId: 'FEhashtag', params });
            return new HashtagFeed(this.actions, response);
        });
    }
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     * @param video_id - The video id.
     * @param options - Format options.
     */
    getStreamingData(video_id, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getBasicInfo(video_id);
            return info.chooseFormat(options);
        });
    }
    /**
     * Downloads a given video. If you only need the direct download link see {@link getStreamingData}.
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     * @param video_id - The video id.
     * @param options - Download options.
     */
    download(video_id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getBasicInfo(video_id, options === null || options === void 0 ? void 0 : options.client);
            return info.download(options);
        });
    }
    /**
     * Resolves the given URL.
     * @param url - The URL.
     */
    resolveURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/navigation/resolve_url', { url, parse: true });
            return response.endpoint;
        });
    }
    call(endpoint, args) {
        return endpoint.call(this.actions, args);
    }
}
export default Innertube;
//# sourceMappingURL=Innertube.js.map