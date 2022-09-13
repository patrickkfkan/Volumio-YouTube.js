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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Music_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const TrackInfo_1 = __importDefault(require("../parser/ytmusic/TrackInfo"));
const Search_1 = __importDefault(require("../parser/ytmusic/Search"));
const HomeFeed_1 = __importDefault(require("../parser/ytmusic/HomeFeed"));
const Explore_1 = __importDefault(require("../parser/ytmusic/Explore"));
const Library_1 = __importDefault(require("../parser/ytmusic/Library"));
const Artist_1 = __importDefault(require("../parser/ytmusic/Artist"));
const Album_1 = __importDefault(require("../parser/ytmusic/Album"));
const Playlist_1 = __importDefault(require("../parser/ytmusic/Playlist"));
const Recap_1 = __importDefault(require("../parser/ytmusic/Recap"));
const index_1 = __importDefault(require("../parser/index"));
const helpers_1 = require("../parser/helpers");
const Tab_1 = __importDefault(require("../parser/classes/Tab"));
const Tabbed_1 = __importDefault(require("../parser/classes/Tabbed"));
const SingleColumnMusicWatchNextResults_1 = __importDefault(require("../parser/classes/SingleColumnMusicWatchNextResults"));
const WatchNextTabbedResults_1 = __importDefault(require("../parser/classes/WatchNextTabbedResults"));
const SectionList_1 = __importDefault(require("../parser/classes/SectionList"));
const MusicQueue_1 = __importDefault(require("../parser/classes/MusicQueue"));
const PlaylistPanel_1 = __importDefault(require("../parser/classes/PlaylistPanel"));
const Message_1 = __importDefault(require("../parser/classes/Message"));
const MusicDescriptionShelf_1 = __importDefault(require("../parser/classes/MusicDescriptionShelf"));
const MusicCarouselShelf_1 = __importDefault(require("../parser/classes/MusicCarouselShelf"));
const SearchSuggestionsSection_1 = __importDefault(require("../parser/classes/SearchSuggestionsSection"));
const Utils_1 = require("../utils/Utils");
class Music {
    constructor(session) {
        _Music_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Music_actions, session.actions, "f");
    }
    /**
     * Retrieves track info.
     */
    /**
     * 'playlist_id': ID of the *watch* playlist, which if provided will be used to generate the playback tracking URL.
     * When `addToWatchHistory()` is called:
     * - If playlist_id not provided, then the song / video will be added to 'Recent Activity'.
     * - If provided, then the list itself (which can correspond to a playlist or album) will be added to 'Recent Activity'.
     * Full history (Recent Activity - Show All) will always include the song / video, even if playlist_id is provided.
     * Similar changes have been made (not by me) to the YouTube.js repo, but keeping the following as it is to maintain
     * compatibility with the ytmusic plugin.
     */
    getInfo(video_id, playlist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpn = (0, Utils_1.generateRandomString)(16);
            const initial_info = yield __classPrivateFieldGet(this, _Music_actions, "f").getVideoInfo(video_id, cpn, 'YTMUSIC', playlist_id);
            const continuation = __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', { client: 'YTMUSIC', videoId: video_id });
            const response = yield Promise.all([initial_info, continuation]);
            return new TrackInfo_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"), cpn);
        });
    }
    /**
     * Searches on YouTube Music.
     */
    search(query, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ query });
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").search({ query, filters, client: 'YTMUSIC' });
            return new Search_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"), { is_filtered: Reflect.has(filters, 'type') && filters.type !== 'all' });
        });
    }
    /**
     * Retrieves the home feed.
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").browse('FEmusic_home', { client: 'YTMUSIC' });
            return new HomeFeed_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves the Explore feed.
     */
    getExplore() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").browse('FEmusic_explore', { client: 'YTMUSIC' });
            return new Explore_1.default(response);
            // TODO: return new Explore(response, this.#actions);
        });
    }
    /**
     * Retrieves the Library.
     */
    getLibrary() {
        return new Library_1.default(__classPrivateFieldGet(this, _Music_actions, "f"));
    }
    /**
     * Retrieves artist's info & content.
     */
    getArtist(artist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ artist_id });
            if (!artist_id.startsWith('UC') && !artist_id.startsWith('FEmusic_library_privately_owned_artist'))
                throw new Utils_1.InnertubeError('Invalid artist id', artist_id);
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").browse(artist_id, { client: 'YTMUSIC' });
            return new Artist_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves album.
     */
    getAlbum(album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ album_id });
            if (!album_id.startsWith('MPR') && !album_id.startsWith('FEmusic_library_privately_owned_release'))
                throw new Utils_1.InnertubeError('Invalid album id', album_id);
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").browse(album_id, { client: 'YTMUSIC' });
            return new Album_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves playlist.
     */
    getPlaylist(playlist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ playlist_id });
            if (!playlist_id.startsWith('VL')) {
                playlist_id = `VL${playlist_id}`;
            }
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").browse(playlist_id, { client: 'YTMUSIC' });
            return new Playlist_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves song lyrics.
     */
    getLyrics(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").next({ video_id, client: 'YTMUSIC' });
            const data = index_1.default.parseResponse(response.data);
            const tabs = data.contents.item()
                .as(SingleColumnMusicWatchNextResults_1.default).contents.item()
                .as(Tabbed_1.default).contents.item()
                .as(WatchNextTabbedResults_1.default)
                .tabs.array().as(Tab_1.default);
            const tab = tabs.get({ title: 'Lyrics' });
            if (!tab)
                throw new Utils_1.InnertubeError('Could not find target tab.');
            const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), 'YTMUSIC', true);
            if (!page)
                throw new Utils_1.InnertubeError('Could not retrieve tab contents, the given id may be invalid or is not a song.');
            if (page.contents.item().key('type').string() === 'Message')
                throw new Utils_1.InnertubeError(page.contents.item().as(Message_1.default).text, video_id);
            const section_list = page.contents.item().as(SectionList_1.default).contents.array();
            const description_shelf = section_list.firstOfType(MusicDescriptionShelf_1.default);
            return {
                text: description_shelf === null || description_shelf === void 0 ? void 0 : description_shelf.description.toString(),
                footer: description_shelf === null || description_shelf === void 0 ? void 0 : description_shelf.footer
            };
        });
    }
    /**
     * Retrieves up next.
     */
    getUpNext(video_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").next({ video_id, client: 'YTMUSIC' });
            const data = index_1.default.parseResponse(response.data);
            const tabs = data.contents.item()
                .as(SingleColumnMusicWatchNextResults_1.default).contents.item()
                .as(Tabbed_1.default).contents.item()
                .as(WatchNextTabbedResults_1.default)
                .tabs.array().as(Tab_1.default);
            const tab = tabs.find((tab) => { var _a; return ((_a = tab.content) === null || _a === void 0 ? void 0 : _a.type) === 'MusicQueue'; });
            if (!tab)
                throw new Utils_1.InnertubeError('Could not find target tab.');
            const music_queue = (_a = tab.content) === null || _a === void 0 ? void 0 : _a.as(MusicQueue_1.default);
            if (!music_queue || !music_queue.content)
                throw new Utils_1.InnertubeError('Music queue was empty, the given id is probably invalid.', music_queue);
            const playlist_panel = music_queue.content.as(PlaylistPanel_1.default);
            return playlist_panel;
        });
    }
    /**
     * Retrieves related content.
     */
    getRelated(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, Utils_1.throwIfMissing)({ video_id });
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").next({ video_id, client: 'YTMUSIC' });
            const data = index_1.default.parseResponse(response.data);
            const tabs = data.contents.item()
                .as(SingleColumnMusicWatchNextResults_1.default).contents.item()
                .as(Tabbed_1.default).contents.item()
                .as(WatchNextTabbedResults_1.default)
                .tabs.array().as(Tab_1.default);
            const tab = tabs.get({ title: 'Related' });
            if (!tab)
                throw new Utils_1.InnertubeError('Could not find target tab.');
            const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), 'YTMUSIC', true);
            if (!page)
                throw new Utils_1.InnertubeError('Could not retrieve tab contents, the given id may be invalid or is not a song.');
            const shelves = page.contents.item().as(SectionList_1.default).contents.array().as(MusicCarouselShelf_1.default, MusicDescriptionShelf_1.default);
            return shelves;
        });
    }
    getRecap() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                browseId: 'FEmusic_listening_review',
                client: 'YTMUSIC_ANDROID'
            });
            return new Recap_1.default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves search suggestions for the given query.
     */
    getSearchSuggestions(query) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/music/get_search_suggestions', {
                parse: true,
                input: query,
                client: 'YTMUSIC'
            });
            const search_suggestions_section = (_a = response.contents_memo.getType(SearchSuggestionsSection_1.default)) === null || _a === void 0 ? void 0 : _a[0];
            if (!search_suggestions_section.contents.is_array)
                return (0, helpers_1.observe)([]);
            return search_suggestions_section === null || search_suggestions_section === void 0 ? void 0 : search_suggestions_section.contents.array();
        });
    }
}
_Music_actions = new WeakMap();
exports.default = Music;
//# sourceMappingURL=Music.js.map