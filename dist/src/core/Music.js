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
var _Music_instances, _Music_session, _Music_actions, _Music_fetchInfoFromVideoId, _Music_fetchInfoFromListItem;
import Album from '../parser/ytmusic/Album.js';
import Artist from '../parser/ytmusic/Artist.js';
import Explore from '../parser/ytmusic/Explore.js';
import HomeFeed from '../parser/ytmusic/HomeFeed.js';
import Library from '../parser/ytmusic/Library.js';
import Playlist from '../parser/ytmusic/Playlist.js';
import Recap from '../parser/ytmusic/Recap.js';
import Search from '../parser/ytmusic/Search.js';
import TrackInfo from '../parser/ytmusic/TrackInfo.js';
import AutomixPreviewVideo from '../parser/classes/AutomixPreviewVideo.js';
import Message from '../parser/classes/Message.js';
import MusicCarouselShelf from '../parser/classes/MusicCarouselShelf.js';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf.js';
import MusicQueue from '../parser/classes/MusicQueue.js';
import MusicTwoRowItem from '../parser/classes/MusicTwoRowItem.js';
import PlaylistPanel from '../parser/classes/PlaylistPanel.js';
import SearchSuggestionsSection from '../parser/classes/SearchSuggestionsSection.js';
import SectionList from '../parser/classes/SectionList.js';
import Tab from '../parser/classes/Tab.js';
import { observe } from '../parser/helpers.js';
import Proto from '../proto/index.js';
import { generateRandomString, InnertubeError, throwIfMissing } from '../utils/Utils.js';
class Music {
    constructor(session) {
        _Music_instances.add(this);
        _Music_session.set(this, void 0);
        _Music_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Music_session, session, "f");
        __classPrivateFieldSet(this, _Music_actions, session.actions, "f");
    }
    /**
     * Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.
     * @param target - Video id or a list item.
     */
    getInfo(target) {
        if (target instanceof MusicTwoRowItem) {
            return __classPrivateFieldGet(this, _Music_instances, "m", _Music_fetchInfoFromListItem).call(this, target);
        }
        else if (typeof target === 'string') {
            return __classPrivateFieldGet(this, _Music_instances, "m", _Music_fetchInfoFromVideoId).call(this, target);
        }
        throw new InnertubeError('Invalid target, expected either a video id or a valid MusicTwoRowItem', target);
    }
    /**
     * Searches on YouTube Music.
     * @param query - Search query.
     * @param filters - Search filters.
     */
    search(query, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ query });
            const payload = { query, client: 'YTMUSIC' };
            if (filters.type && filters.type !== 'all') {
                payload.params = Proto.encodeMusicSearchFilters(filters);
            }
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/search', payload);
            return new Search(response, __classPrivateFieldGet(this, _Music_actions, "f"), Reflect.has(filters, 'type') && filters.type !== 'all');
        });
    }
    /**
     * Retrieves the home feed.
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: 'FEmusic_home'
            });
            return new HomeFeed(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves the Explore feed.
     */
    getExplore() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: 'FEmusic_explore'
            });
            return new Explore(response);
            // TODO: return new Explore(response, this.#actions);
        });
    }
    /**
     * Retrieves the library.
     */
    getLibrary() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: 'FEmusic_library_landing'
            });
            return new Library(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves artist's info & content.
     * @param artist_id - The artist id.
     */
    getArtist(artist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ artist_id });
            if (!artist_id.startsWith('UC') && !artist_id.startsWith('FEmusic_library_privately_owned_artist'))
                throw new InnertubeError('Invalid artist id', artist_id);
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: artist_id
            });
            return new Artist(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves album.
     * @param album_id - The album id.
     */
    getAlbum(album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ album_id });
            if (!album_id.startsWith('MPR') && !album_id.startsWith('FEmusic_library_privately_owned_release'))
                throw new InnertubeError('Invalid album id', album_id);
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: album_id
            });
            return new Album(response);
        });
    }
    /**
     * Retrieves playlist.
     * @param playlist_id - The playlist id.
     */
    getPlaylist(playlist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ playlist_id });
            if (!playlist_id.startsWith('VL')) {
                playlist_id = `VL${playlist_id}`;
            }
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                browseId: playlist_id
            });
            return new Playlist(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves up next.
     * @param video_id - The video id.
     * @param automix - Whether to enable automix.
     */
    getUpNext(video_id, automix = true) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const data = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
                videoId: video_id,
                client: 'YTMUSIC',
                parse: true
            });
            const tabs = (_a = data.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Tab);
            const tab = tabs === null || tabs === void 0 ? void 0 : tabs.first();
            if (!tab)
                throw new InnertubeError('Could not find target tab.');
            const music_queue = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(MusicQueue);
            if (!music_queue || !music_queue.content)
                throw new InnertubeError('Music queue was empty, the given id is probably invalid.', music_queue);
            const playlist_panel = music_queue.content.as(PlaylistPanel);
            if (!playlist_panel.playlist_id && automix) {
                const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo);
                if (!automix_preview_video)
                    throw new InnertubeError('Automix item not found');
                const page = yield ((_c = automix_preview_video.playlist_video) === null || _c === void 0 ? void 0 : _c.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
                    videoId: video_id,
                    client: 'YTMUSIC',
                    parse: true
                }));
                if (!page || !page.contents_memo)
                    throw new InnertubeError('Could not fetch automix');
                return page.contents_memo.getType(PlaylistPanel).first();
            }
            return playlist_panel;
        });
    }
    /**
     * Retrieves related content.
     * @param video_id - The video id.
     */
    getRelated(video_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const data = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
                videoId: video_id,
                client: 'YTMUSIC',
                parse: true
            });
            const tabs = (_a = data.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Tab);
            const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab) => { var _a, _b; return ((_b = (_a = tab.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a === void 0 ? void 0 : _a.browseEndpointContextMusicConfig) === null || _b === void 0 ? void 0 : _b.pageType) === 'MUSIC_PAGE_TYPE_TRACK_RELATED'; });
            if (!tab)
                throw new InnertubeError('Could not find target tab.');
            const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), { client: 'YTMUSIC', parse: true });
            if (!page.contents)
                throw new InnertubeError('Unexpected response', page);
            const shelves = page.contents.item().as(SectionList).contents.as(MusicCarouselShelf, MusicDescriptionShelf);
            return shelves;
        });
    }
    /**
     * Retrieves song lyrics.
     * @param video_id - The video id.
     */
    getLyrics(video_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const data = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
                videoId: video_id,
                client: 'YTMUSIC',
                parse: true
            });
            const tabs = (_a = data.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Tab);
            const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab) => { var _a, _b; return ((_b = (_a = tab.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a === void 0 ? void 0 : _a.browseEndpointContextMusicConfig) === null || _b === void 0 ? void 0 : _b.pageType) === 'MUSIC_PAGE_TYPE_TRACK_LYRICS'; });
            if (!tab)
                throw new InnertubeError('Could not find target tab.');
            const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), { client: 'YTMUSIC', parse: true });
            if (!page.contents)
                throw new InnertubeError('Unexpected response', page);
            if (page.contents.item().key('type').string() === 'Message')
                throw new InnertubeError(page.contents.item().as(Message).text, video_id);
            const section_list = page.contents.item().as(SectionList).contents;
            return section_list.firstOfType(MusicDescriptionShelf);
        });
    }
    /**
     * Retrieves recap.
     */
    getRecap() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/browse', {
                browseId: 'FEmusic_listening_review',
                client: 'YTMUSIC_ANDROID'
            });
            return new Recap(response, __classPrivateFieldGet(this, _Music_actions, "f"));
        });
    }
    /**
     * Retrieves search suggestions for the given query.
     * @param query - The query.
     */
    getSearchSuggestions(query) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute('/music/get_search_suggestions', {
                parse: true,
                input: query,
                client: 'YTMUSIC'
            });
            const search_suggestions_section = (_b = (_a = response.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(SearchSuggestionsSection)) === null || _b === void 0 ? void 0 : _b[0];
            if (!(search_suggestions_section === null || search_suggestions_section === void 0 ? void 0 : search_suggestions_section.contents.is_array))
                return observe([]);
            return search_suggestions_section === null || search_suggestions_section === void 0 ? void 0 : search_suggestions_section.contents.array();
        });
    }
}
_Music_session = new WeakMap(), _Music_actions = new WeakMap(), _Music_instances = new WeakSet(), _Music_fetchInfoFromVideoId = function _Music_fetchInfoFromVideoId(video_id) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const cpn = generateRandomString(16);
        const initial_info = __classPrivateFieldGet(this, _Music_actions, "f").execute('/player', {
            cpn,
            client: 'YTMUSIC',
            videoId: video_id,
            playbackContext: {
                contentPlaybackContext: {
                    signatureTimestamp: ((_a = __classPrivateFieldGet(this, _Music_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts) || 0
                }
            }
        });
        const continuation = __classPrivateFieldGet(this, _Music_actions, "f").execute('/next', {
            client: 'YTMUSIC',
            videoId: video_id
        });
        const response = yield Promise.all([initial_info, continuation]);
        return new TrackInfo(response, __classPrivateFieldGet(this, _Music_actions, "f"), cpn);
    });
}, _Music_fetchInfoFromListItem = function _Music_fetchInfoFromListItem(list_item) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!list_item)
            throw new InnertubeError('List item cannot be undefined');
        if (!list_item.endpoint)
            throw new Error('This item does not have an endpoint.');
        const cpn = generateRandomString(16);
        const initial_info = list_item.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
            cpn,
            client: 'YTMUSIC',
            playbackContext: {
                contentPlaybackContext: {
                    signatureTimestamp: ((_a = __classPrivateFieldGet(this, _Music_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts) || 0
                }
            }
        });
        const continuation = list_item.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
            client: 'YTMUSIC',
            enablePersistentPlaylistPanel: true,
            override_endpoint: '/next'
        });
        const response = yield Promise.all([initial_info, continuation]);
        return new TrackInfo(response, __classPrivateFieldGet(this, _Music_actions, "f"), cpn);
    });
};
export default Music;
//# sourceMappingURL=Music.js.map