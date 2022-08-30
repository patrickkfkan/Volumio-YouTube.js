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
var _Library_instances, _Library_actions, _Library_getBrowseId, _Library_fetchPage, _Library_fetchAndParseTabContents, _Library_fetchAndParseShuffledSongs, _Library_applySortBy, _LibraryResultsBase_continuation, _LibraryResultsBase_page, _LibraryResultsBase_actions, _LibraryItemList_instances, _LibraryItemList_filter, _LibraryItemList_actions, _LibraryItemList_all_items, _LibraryItemList_getSortBy, _LibrarySectionList_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importStar(require(".."));
const Utils_1 = require("../../utils/Utils");
const DropdownItem_1 = __importDefault(require("../classes/DropdownItem"));
const PlaylistPanel_1 = __importDefault(require("../classes/PlaylistPanel"));
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const BROWSE_IDS = {
    'history': 'FEmusic_history',
    'playlists': 'FEmusic_liked_playlists',
    'albums': 'FEmusic_liked_albums',
    'songs': 'FEmusic_liked_videos',
    'artists': 'FEmusic_library_corpus_track_artists',
    'subscriptions': 'FEmusic_library_corpus_artists'
};
const SORT_BY_TEXTS = {
    'recently_added': 'Recently added',
    'a_z': 'A to Z',
    'z_a': 'Z to A'
};
const SORT_BY_TEXTS_R = {};
for (const [key, value] of Object.entries(SORT_BY_TEXTS)) {
    SORT_BY_TEXTS_R[value] = key;
}
class Library {
    constructor(actions) {
        _Library_instances.add(this);
        _Library_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Library_actions, actions, "f");
    }
    /**
     * Retrieves the library's playlists
     */
    getPlaylists(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchAndParseTabContents).call(this, __classPrivateFieldGet(this, _Library_instances, "m", _Library_getBrowseId).call(this, 'playlists'), (item) => item.item_type === 'playlist');
            const sort_by = (args === null || args === void 0 ? void 0 : args.sort_by) || null;
            return sort_by ? __classPrivateFieldGet(this, _Library_instances, "m", _Library_applySortBy).call(this, data, sort_by) : data;
        });
    }
    /**
     * Retrieves the library's albums
     */
    getAlbums(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchAndParseTabContents).call(this, __classPrivateFieldGet(this, _Library_instances, "m", _Library_getBrowseId).call(this, 'albums'), (item) => item.item_type === 'album');
            const sort_by = (args === null || args === void 0 ? void 0 : args.sort_by) || null;
            return sort_by ? __classPrivateFieldGet(this, _Library_instances, "m", _Library_applySortBy).call(this, data, sort_by) : data;
        });
    }
    /**
     * Retrieves the library's artists
     */
    getArtists(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchAndParseTabContents).call(this, __classPrivateFieldGet(this, _Library_instances, "m", _Library_getBrowseId).call(this, 'artists'), (item) => item.item_type === 'library_artist');
            const sort_by = (args === null || args === void 0 ? void 0 : args.sort_by) || null;
            return sort_by ? __classPrivateFieldGet(this, _Library_instances, "m", _Library_applySortBy).call(this, data, sort_by) : data;
        });
    }
    /**
     * Retrieves the library's songs
     */
    getSongs(args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchAndParseTabContents).call(this, __classPrivateFieldGet(this, _Library_instances, "m", _Library_getBrowseId).call(this, 'songs'), (item) => (item.item_type === 'song' || item.item_type === 'video'));
            const sort_by = (args === null || args === void 0 ? void 0 : args.sort_by) || null;
            const shuffle = (sort_by === 'random');
            const shuffle_endpoint = shuffle ?
                (_a = data.all_items.find((item) => item.item_type === 'endpoint' && item.title.toString() === 'Shuffle all')) === null || _a === void 0 ? void 0 : _a.endpoint : null;
            if (shuffle) {
                if (!shuffle_endpoint) {
                    if (data.items.length <= 1) {
                        return data;
                    }
                    throw new Utils_1.InnertubeError('Unable to obtain endpoint for sort_by value \'random\'');
                }
                return __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchAndParseShuffledSongs).call(this, shuffle_endpoint);
            }
            return sort_by ? __classPrivateFieldGet(this, _Library_instances, "m", _Library_applySortBy).call(this, data, sort_by) : data;
        });
    }
    /**
     * Retrieves the library's subscriptions
     */
    getSubscriptions(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchAndParseTabContents).call(this, __classPrivateFieldGet(this, _Library_instances, "m", _Library_getBrowseId).call(this, 'subscriptions'));
            const sort_by = (args === null || args === void 0 ? void 0 : args.sort_by) || null;
            return sort_by ? __classPrivateFieldGet(this, _Library_instances, "m", _Library_applySortBy).call(this, data, sort_by) : data;
        });
    }
    /**
     * Retrieves recent activity
     */
    getRecentActivity(args) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const all = !!(args === null || args === void 0 ? void 0 : args.all);
            if (all) {
                const page = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchPage).call(this, __classPrivateFieldGet(this, _Library_instances, "m", _Library_getBrowseId).call(this, 'history'));
                const section_list = (_a = page.contents_memo.get('SectionList')) === null || _a === void 0 ? void 0 : _a[0].as(SectionList_1.default);
                const sections = ((_b = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _b === void 0 ? void 0 : _b.array()) || [];
                const continuation = (section_list === null || section_list === void 0 ? void 0 : section_list.continuation) ? {
                    type: 'browse',
                    token: section_list === null || section_list === void 0 ? void 0 : section_list.continuation
                } : null;
                return new LibrarySectionList(sections, continuation, page, __classPrivateFieldGet(this, _Library_actions, "f"));
            }
            const page = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchPage).call(this, __classPrivateFieldGet(this, _Library_instances, "m", _Library_getBrowseId).call(this, 'songs'));
            const sections = ((_c = page.contents_memo.get('SectionList')) === null || _c === void 0 ? void 0 : _c[0].as(SectionList_1.default).contents.array()) || [];
            const contents_section = sections.find((section) => { var _a, _b; return ((_a = section.header) === null || _a === void 0 ? void 0 : _a.type) === 'MusicCarouselShelfBasicHeader' && ((_b = section.header) === null || _b === void 0 ? void 0 : _b.title.toString()) === 'Recent activity'; });
            const items = (contents_section === null || contents_section === void 0 ? void 0 : contents_section.contents) || [];
            return new LibraryItemList(items, null, null, page, __classPrivateFieldGet(this, _Library_actions, "f"), { sort_by: null });
        });
    }
}
_Library_actions = new WeakMap(), _Library_instances = new WeakSet(), _Library_getBrowseId = function _Library_getBrowseId(type) {
    return BROWSE_IDS[type];
}, _Library_fetchPage = function _Library_fetchPage(browse_id, fetchArgs = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield __classPrivateFieldGet(this, _Library_actions, "f").browse(browse_id, Object.assign(Object.assign({}, fetchArgs), { client: 'YTMUSIC' }));
        return __1.default.parseResponse(response.data);
    });
}, _Library_fetchAndParseTabContents = function _Library_fetchAndParseTabContents(browse_id, filter = null, fetchArgs = {}) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const getItemsFromDataNode = (node) => {
            var _a;
            switch (node === null || node === void 0 ? void 0 : node.type) {
                case 'Grid':
                    return (_a = node.contents) === null || _a === void 0 ? void 0 : _a.array();
                case 'MusicShelf':
                    return node.contents;
                default:
                    return [];
            }
        };
        const page = yield __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchPage).call(this, browse_id, fetchArgs);
        const sections = ((_a = page.contents_memo.get('SectionList')) === null || _a === void 0 ? void 0 : _a[0].as(SectionList_1.default).contents.array()) || [];
        const contents_section = sections.find((section) => { var _a; return ((_a = section.header) === null || _a === void 0 ? void 0 : _a.type) === 'ItemSectionTabbedHeader'; });
        const data_node = (_b = contents_section === null || contents_section === void 0 ? void 0 : contents_section.contents) === null || _b === void 0 ? void 0 : _b[0];
        const continuation = (data_node === null || data_node === void 0 ? void 0 : data_node.continuation) ? {
            type: 'browse',
            token: data_node === null || data_node === void 0 ? void 0 : data_node.continuation
        } : null;
        return new LibraryItemList(getItemsFromDataNode(data_node) || [], filter, continuation, page, __classPrivateFieldGet(this, _Library_actions, "f"));
    });
}, _Library_fetchAndParseShuffledSongs = function _Library_fetchAndParseShuffledSongs(endpoint) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const payload = {
            playlist_id: endpoint.payload.playlistId,
            params: endpoint.payload.params
        };
        const response = yield __classPrivateFieldGet(this, _Library_actions, "f").next(Object.assign(Object.assign({}, payload), { client: 'YTMUSIC' }));
        const page = __1.default.parseResponse(response.data);
        const playlist_panel = (_a = page.contents_memo.get('PlaylistPanel')) === null || _a === void 0 ? void 0 : _a[0].as(PlaylistPanel_1.default);
        const items = (playlist_panel === null || playlist_panel === void 0 ? void 0 : playlist_panel.contents) || [];
        const continuation = (playlist_panel === null || playlist_panel === void 0 ? void 0 : playlist_panel.continuation) ? {
            type: 'next',
            token: playlist_panel === null || playlist_panel === void 0 ? void 0 : playlist_panel.continuation,
            payload
        } : null;
        const filter = (item) => item.type === 'PlaylistPanelVideo';
        return new LibraryItemList(items, filter, continuation, page, __classPrivateFieldGet(this, _Library_actions, "f"), { sort_by: 'random' });
    });
}, _Library_applySortBy = function _Library_applySortBy(data, sort_by) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const page = data.page;
        const dropdownItem = (_b = (_a = page === null || page === void 0 ? void 0 : page.contents_memo.get('DropdownItem')) === null || _a === void 0 ? void 0 : _a.find((item) => item.as(DropdownItem_1.default).label === SORT_BY_TEXTS[sort_by])) === null || _b === void 0 ? void 0 : _b.as(DropdownItem_1.default);
        if (!((_c = dropdownItem === null || dropdownItem === void 0 ? void 0 : dropdownItem.endpoint) === null || _c === void 0 ? void 0 : _c.browse)) {
            if (data.items.length <= 1) {
                return data;
            }
            throw new Utils_1.InnertubeError(`Unable to obtain browse endpoint for sort_by value '${sort_by}'`);
        }
        if (dropdownItem === null || dropdownItem === void 0 ? void 0 : dropdownItem.selected) {
            return data;
        }
        const fetchArgs = { params: dropdownItem.endpoint.browse.params };
        return __classPrivateFieldGet(this, _Library_instances, "m", _Library_fetchAndParseTabContents).call(this, dropdownItem.endpoint.browse.id, data.filter, fetchArgs);
    });
};
class LibraryResultsBase {
    constructor(continuation, page, actions) {
        _LibraryResultsBase_continuation.set(this, void 0);
        _LibraryResultsBase_page.set(this, void 0);
        _LibraryResultsBase_actions.set(this, void 0);
        __classPrivateFieldSet(this, _LibraryResultsBase_continuation, continuation, "f");
        __classPrivateFieldSet(this, _LibraryResultsBase_page, page, "f");
        __classPrivateFieldSet(this, _LibraryResultsBase_actions, actions, "f");
        this.has_continuation = !!continuation;
    }
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _LibraryResultsBase_continuation, "f")) {
                throw new Utils_1.InnertubeError('Continuation not found.');
            }
            let responsePromise;
            const payload = __classPrivateFieldGet(this, _LibraryResultsBase_continuation, "f").payload || {};
            switch (__classPrivateFieldGet(this, _LibraryResultsBase_continuation, "f").type) {
                case 'next':
                    responsePromise = __classPrivateFieldGet(this, _LibraryResultsBase_actions, "f").next(Object.assign(Object.assign({}, payload), { ctoken: __classPrivateFieldGet(this, _LibraryResultsBase_continuation, "f").token, client: 'YTMUSIC' }));
                    break;
                default:
                    responsePromise = __classPrivateFieldGet(this, _LibraryResultsBase_actions, "f").browse(__classPrivateFieldGet(this, _LibraryResultsBase_continuation, "f").token, Object.assign(Object.assign({}, payload), { is_ctoken: true, client: 'YTMUSIC' }));
            }
            const response = yield responsePromise;
            const page = __1.default.parseResponse(response.data);
            if (!page.continuation_contents) {
                throw new Utils_1.InnertubeError('No continuation data found.');
            }
            return this.parseContinuationContents(page, __classPrivateFieldGet(this, _LibraryResultsBase_continuation, "f"));
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _LibraryResultsBase_page, "f");
    }
}
_LibraryResultsBase_continuation = new WeakMap(), _LibraryResultsBase_page = new WeakMap(), _LibraryResultsBase_actions = new WeakMap();
class LibraryItemList extends LibraryResultsBase {
    constructor(items, filter, continuation, page, actions, overrides) {
        super(continuation, page, actions);
        _LibraryItemList_instances.add(this);
        _LibraryItemList_filter.set(this, void 0);
        _LibraryItemList_actions.set(this, void 0);
        _LibraryItemList_all_items.set(this, void 0); // Unfiltered items
        __classPrivateFieldSet(this, _LibraryItemList_filter, filter, "f");
        __classPrivateFieldSet(this, _LibraryItemList_actions, actions, "f");
        __classPrivateFieldSet(this, _LibraryItemList_all_items, items, "f");
        this.items = filter ? items.filter(filter) : items;
        this.sort_by = ((overrides === null || overrides === void 0 ? void 0 : overrides.sort_by) !== undefined) ? overrides.sort_by : __classPrivateFieldGet(this, _LibraryItemList_instances, "m", _LibraryItemList_getSortBy).call(this);
    }
    parseContinuationContents(page, from_continuation) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = (_a = page.continuation_contents) === null || _a === void 0 ? void 0 : _a.as(__1.MusicShelfContinuation, __1.GridContinuation, __1.PlaylistPanelContinuation);
            const continuation = (data === null || data === void 0 ? void 0 : data.continuation) ? Object.assign(Object.assign({}, from_continuation), { token: data === null || data === void 0 ? void 0 : data.continuation }) : null;
            return new LibraryItemList((data === null || data === void 0 ? void 0 : data.contents) || [], __classPrivateFieldGet(this, _LibraryItemList_filter, "f"), continuation, page, __classPrivateFieldGet(this, _LibraryItemList_actions, "f"), { sort_by: this.sort_by });
        });
    }
    get all_items() {
        return __classPrivateFieldGet(this, _LibraryItemList_all_items, "f");
    }
    get filter() {
        return __classPrivateFieldGet(this, _LibraryItemList_filter, "f");
    }
}
_LibraryItemList_filter = new WeakMap(), _LibraryItemList_actions = new WeakMap(), _LibraryItemList_all_items = new WeakMap(), _LibraryItemList_instances = new WeakSet(), _LibraryItemList_getSortBy = function _LibraryItemList_getSortBy() {
    var _a, _b;
    const selected = ((_b = (_a = this.page) === null || _a === void 0 ? void 0 : _a.contents_memo.get('DropdownItem')) === null || _b === void 0 ? void 0 : _b.filter((item) => item.as(DropdownItem_1.default).selected)) || [];
    for (const s of selected) {
        const v = SORT_BY_TEXTS_R[s.label];
        if (v) {
            return v;
        }
    }
    return null;
};
class LibrarySectionList extends LibraryResultsBase {
    constructor(sections, continuation, page, actions) {
        super(continuation, page, actions);
        _LibrarySectionList_actions.set(this, void 0);
        __classPrivateFieldSet(this, _LibrarySectionList_actions, actions, "f");
        this.sections = sections;
    }
    parseContinuationContents(page, from_continuation) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = (_a = page.continuation_contents) === null || _a === void 0 ? void 0 : _a.as(__1.SectionListContinuation);
            const continuation = (data === null || data === void 0 ? void 0 : data.continuation) ? Object.assign(Object.assign({}, from_continuation), { token: data === null || data === void 0 ? void 0 : data.continuation }) : null;
            return new LibrarySectionList((data === null || data === void 0 ? void 0 : data.contents) || [], continuation, page, __classPrivateFieldGet(this, _LibrarySectionList_actions, "f"));
        });
    }
}
_LibrarySectionList_actions = new WeakMap();
exports.default = Library;
//# sourceMappingURL=Library.js.map