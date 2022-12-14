"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _Feed_page, _Feed_continuation, _Feed_actions, _Feed_memo;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("../parser/index"));
const Utils_1 = require("../utils/Utils");
const Post_1 = __importDefault(require("../parser/classes/Post"));
const BackstagePost_1 = __importDefault(require("../parser/classes/BackstagePost"));
const Channel_1 = __importDefault(require("../parser/classes/Channel"));
const CompactVideo_1 = __importDefault(require("../parser/classes/CompactVideo"));
const GridChannel_1 = __importDefault(require("../parser/classes/GridChannel"));
const GridPlaylist_1 = __importDefault(require("../parser/classes/GridPlaylist"));
const GridVideo_1 = __importDefault(require("../parser/classes/GridVideo"));
const Playlist_1 = __importDefault(require("../parser/classes/Playlist"));
const PlaylistPanelVideo_1 = __importDefault(require("../parser/classes/PlaylistPanelVideo"));
const PlaylistVideo_1 = __importDefault(require("../parser/classes/PlaylistVideo"));
const Tab_1 = __importDefault(require("../parser/classes/Tab"));
const ReelShelf_1 = __importDefault(require("../parser/classes/ReelShelf"));
const RichShelf_1 = __importDefault(require("../parser/classes/RichShelf"));
const Shelf_1 = __importDefault(require("../parser/classes/Shelf"));
const TwoColumnBrowseResults_1 = __importDefault(require("../parser/classes/TwoColumnBrowseResults"));
const TwoColumnSearchResults_1 = __importDefault(require("../parser/classes/TwoColumnSearchResults"));
const WatchCardCompactVideo_1 = __importDefault(require("../parser/classes/WatchCardCompactVideo"));
const AppendContinuationItemsAction_1 = __importDefault(require("../parser/classes/actions/AppendContinuationItemsAction"));
const ContinuationItem_1 = __importDefault(require("../parser/classes/ContinuationItem"));
const Video_1 = __importDefault(require("../parser/classes/Video"));
// TODO: add a way subdivide into sections and return subfeeds?
class Feed {
    constructor(actions, data, already_parsed = false) {
        _Feed_page.set(this, void 0);
        _Feed_continuation.set(this, void 0);
        _Feed_actions.set(this, void 0);
        _Feed_memo.set(this, void 0);
        if (data.on_response_received_actions || data.on_response_received_endpoints || already_parsed) {
            __classPrivateFieldSet(this, _Feed_page, data, "f");
        }
        else {
            __classPrivateFieldSet(this, _Feed_page, index_1.default.parseResponse(data), "f");
        }
        // Xxx: this can be extremely confusing ??? maybe refactor?
        const memo = __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_commands ?
            __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_commands_memo :
            __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_endpoints ?
                __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_endpoints_memo :
                __classPrivateFieldGet(this, _Feed_page, "f").contents ?
                    __classPrivateFieldGet(this, _Feed_page, "f").contents_memo :
                    __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_actions ?
                        __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_actions_memo : undefined;
        if (!memo)
            throw new Utils_1.InnertubeError('No memo found in feed');
        __classPrivateFieldSet(this, _Feed_memo, memo, "f");
        __classPrivateFieldSet(this, _Feed_actions, actions, "f");
    }
    /**
     * Get all videos on a given page via memo
     */
    static getVideosFromMemo(memo) {
        return memo.getType([
            Video_1.default,
            GridVideo_1.default,
            CompactVideo_1.default,
            PlaylistVideo_1.default,
            PlaylistPanelVideo_1.default,
            WatchCardCompactVideo_1.default
        ]);
    }
    /**
     * Get all playlists on a given page via memo
     */
    static getPlaylistsFromMemo(memo) {
        return memo.getType([Playlist_1.default, GridPlaylist_1.default]);
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
        return __classPrivateFieldGet(this, _Feed_memo, "f").getType([BackstagePost_1.default, Post_1.default]);
    }
    /**
     * Get all the channels in the feed
     */
    get channels() {
        return __classPrivateFieldGet(this, _Feed_memo, "f").getType([Channel_1.default, GridChannel_1.default]);
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
    get contents() {
        var _a, _b, _c, _d;
        const tab_content = (_b = (_a = __classPrivateFieldGet(this, _Feed_memo, "f").getType(Tab_1.default)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content;
        const reload_continuation_items = (_c = __classPrivateFieldGet(this, _Feed_memo, "f").getType(index_1.ReloadContinuationItemsCommand)) === null || _c === void 0 ? void 0 : _c[0];
        const append_continuation_items = (_d = __classPrivateFieldGet(this, _Feed_memo, "f").getType(AppendContinuationItemsAction_1.default)) === null || _d === void 0 ? void 0 : _d[0];
        return tab_content || reload_continuation_items || append_continuation_items;
    }
    /**
     * Returns all segments/sections from the page.
     */
    get shelves() {
        return __classPrivateFieldGet(this, _Feed_memo, "f").getType([Shelf_1.default, RichShelf_1.default, ReelShelf_1.default]);
    }
    /**
     * Finds shelf by title.
     */
    getShelf(title) {
        return this.shelves.find((shelf) => shelf.title.toString() === title);
    }
    /**
     * Returns secondary contents from the page.
     */
    get secondary_contents() {
        if (!__classPrivateFieldGet(this, _Feed_page, "f").contents.is_node)
            return undefined;
        const node = __classPrivateFieldGet(this, _Feed_page, "f").contents.item();
        if (!node.is(TwoColumnBrowseResults_1.default, TwoColumnSearchResults_1.default))
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
                    throw new Utils_1.InnertubeError('There are too many continuations, you\'ll need to find the correct one yourself in this.page');
                if (__classPrivateFieldGet(this, _Feed_continuation, "f").length === 0)
                    throw new Utils_1.InnertubeError('There are no continuations');
                const response = yield __classPrivateFieldGet(this, _Feed_continuation, "f")[0].endpoint.call(__classPrivateFieldGet(this, _Feed_actions, "f"), undefined, true);
                return response;
            }
            __classPrivateFieldSet(this, _Feed_continuation, __classPrivateFieldGet(this, _Feed_memo, "f").getType(ContinuationItem_1.default), "f");
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
            return new Feed(this.actions, continuation_data, true);
        });
    }
}
_Feed_page = new WeakMap(), _Feed_continuation = new WeakMap(), _Feed_actions = new WeakMap(), _Feed_memo = new WeakMap();
exports.default = Feed;
//# sourceMappingURL=Feed.js.map