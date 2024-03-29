var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Feed_instances, _Feed_page, _Feed_continuation, _Feed_actions, _Feed_memo, _Feed_isParsed;
import Parser, { ReloadContinuationItemsCommand } from '../parser/index.js';
import { concatMemos, InnertubeError } from '../utils/Utils.js';
import BackstagePost from '../parser/classes/BackstagePost.js';
import SharedPost from '../parser/classes/SharedPost.js';
import Channel from '../parser/classes/Channel.js';
import CompactVideo from '../parser/classes/CompactVideo.js';
import GridChannel from '../parser/classes/GridChannel.js';
import GridPlaylist from '../parser/classes/GridPlaylist.js';
import GridVideo from '../parser/classes/GridVideo.js';
import Playlist from '../parser/classes/Playlist.js';
import PlaylistPanelVideo from '../parser/classes/PlaylistPanelVideo.js';
import PlaylistVideo from '../parser/classes/PlaylistVideo.js';
import Post from '../parser/classes/Post.js';
import ReelItem from '../parser/classes/ReelItem.js';
import ReelShelf from '../parser/classes/ReelShelf.js';
import RichShelf from '../parser/classes/RichShelf.js';
import Shelf from '../parser/classes/Shelf.js';
import Tab from '../parser/classes/Tab.js';
import Video from '../parser/classes/Video.js';
import AppendContinuationItemsAction from '../parser/classes/actions/AppendContinuationItemsAction.js';
import ContinuationItem from '../parser/classes/ContinuationItem.js';
import TwoColumnBrowseResults from '../parser/classes/TwoColumnBrowseResults.js';
import TwoColumnSearchResults from '../parser/classes/TwoColumnSearchResults.js';
import WatchCardCompactVideo from '../parser/classes/WatchCardCompactVideo.js';
class Feed {
    constructor(actions, response, already_parsed = false) {
        _Feed_instances.add(this);
        _Feed_page.set(this, void 0);
        _Feed_continuation.set(this, void 0);
        _Feed_actions.set(this, void 0);
        _Feed_memo.set(this, void 0);
        if (__classPrivateFieldGet(this, _Feed_instances, "m", _Feed_isParsed).call(this, response) || already_parsed) {
            __classPrivateFieldSet(this, _Feed_page, response, "f");
        }
        else {
            __classPrivateFieldSet(this, _Feed_page, Parser.parseResponse(response.data), "f");
        }
        const memo = concatMemos(...[
            __classPrivateFieldGet(this, _Feed_page, "f").contents_memo,
            __classPrivateFieldGet(this, _Feed_page, "f").continuation_contents_memo,
            __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_commands_memo,
            __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_endpoints_memo,
            __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_actions_memo,
            __classPrivateFieldGet(this, _Feed_page, "f").sidebar_memo,
            __classPrivateFieldGet(this, _Feed_page, "f").header_memo
        ]);
        if (!memo)
            throw new InnertubeError('No memo found in feed');
        __classPrivateFieldSet(this, _Feed_memo, memo, "f");
        __classPrivateFieldSet(this, _Feed_actions, actions, "f");
    }
    /**
     * Get all videos on a given page via memo
     */
    static getVideosFromMemo(memo) {
        return memo.getType([
            Video,
            GridVideo,
            ReelItem,
            CompactVideo,
            PlaylistVideo,
            PlaylistPanelVideo,
            WatchCardCompactVideo
        ]);
    }
    /**
     * Get all playlists on a given page via memo
     */
    static getPlaylistsFromMemo(memo) {
        return memo.getType([Playlist, GridPlaylist]);
    }
    /**
     * Get all the videos in the feed
     */
    get videos() {
        return Feed.getVideosFromMemo(__classPrivateFieldGet(this, _Feed_memo, "f"));
    }
    /**
     * Get all the community posts in the feed
     */
    get posts() {
        return __classPrivateFieldGet(this, _Feed_memo, "f").getType([BackstagePost, Post, SharedPost]);
    }
    /**
     * Get all the channels in the feed
     */
    get channels() {
        return __classPrivateFieldGet(this, _Feed_memo, "f").getType([Channel, GridChannel]);
    }
    /**
     * Get all playlists in the feed
     */
    get playlists() {
        return Feed.getPlaylistsFromMemo(__classPrivateFieldGet(this, _Feed_memo, "f"));
    }
    get memo() {
        return __classPrivateFieldGet(this, _Feed_memo, "f");
    }
    /**
     * Returns contents from the page.
     */
    get page_contents() {
        var _a;
        const tab_content = (_a = __classPrivateFieldGet(this, _Feed_memo, "f").getType(Tab)) === null || _a === void 0 ? void 0 : _a.first().content;
        const reload_continuation_items = __classPrivateFieldGet(this, _Feed_memo, "f").getType(ReloadContinuationItemsCommand).first();
        const append_continuation_items = __classPrivateFieldGet(this, _Feed_memo, "f").getType(AppendContinuationItemsAction).first();
        return tab_content || reload_continuation_items || append_continuation_items;
    }
    /**
     * Returns all segments/sections from the page.
     */
    get shelves() {
        return __classPrivateFieldGet(this, _Feed_memo, "f").getType([Shelf, RichShelf, ReelShelf]);
    }
    /**
     * Finds shelf by title.
     */
    getShelf(title) {
        return this.shelves.get({ title });
    }
    /**
     * Returns secondary contents from the page.
     */
    get secondary_contents() {
        var _a, _b;
        if (!((_a = __classPrivateFieldGet(this, _Feed_page, "f").contents) === null || _a === void 0 ? void 0 : _a.is_node))
            return undefined;
        const node = (_b = __classPrivateFieldGet(this, _Feed_page, "f").contents) === null || _b === void 0 ? void 0 : _b.item();
        if (!node.is(TwoColumnBrowseResults, TwoColumnSearchResults))
            return undefined;
        return node.secondary_contents;
    }
    get actions() {
        return __classPrivateFieldGet(this, _Feed_actions, "f");
    }
    /**
     * Get the original page data
     */
    get page() {
        return __classPrivateFieldGet(this, _Feed_page, "f");
    }
    /**
     * Checks if the feed has continuation.
     */
    get has_continuation() {
        return (__classPrivateFieldGet(this, _Feed_memo, "f").get('ContinuationItem') || []).length > 0;
    }
    /**
     * Retrieves continuation data as it is.
     */
    getContinuationData() {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _Feed_continuation, "f")) {
                if (__classPrivateFieldGet(this, _Feed_continuation, "f").length > 1)
                    throw new InnertubeError('There are too many continuations, you\'ll need to find the correct one yourself in this.page');
                if (__classPrivateFieldGet(this, _Feed_continuation, "f").length === 0)
                    throw new InnertubeError('There are no continuations');
                const response = yield __classPrivateFieldGet(this, _Feed_continuation, "f")[0].endpoint.call(__classPrivateFieldGet(this, _Feed_actions, "f"), { parse: true });
                return response;
            }
            __classPrivateFieldSet(this, _Feed_continuation, __classPrivateFieldGet(this, _Feed_memo, "f").getType(ContinuationItem), "f");
            if (__classPrivateFieldGet(this, _Feed_continuation, "f"))
                return this.getContinuationData();
        });
    }
    /**
     * Retrieves next batch of contents and returns a new {@link Feed} object.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const continuation_data = yield this.getContinuationData();
            if (!continuation_data)
                throw new InnertubeError('Could not get continuation data');
            return new Feed(this.actions, continuation_data, true);
        });
    }
}
_Feed_page = new WeakMap(), _Feed_continuation = new WeakMap(), _Feed_actions = new WeakMap(), _Feed_memo = new WeakMap(), _Feed_instances = new WeakSet(), _Feed_isParsed = function _Feed_isParsed(response) {
    return !('data' in response);
};
export default Feed;
//# sourceMappingURL=Feed.js.map