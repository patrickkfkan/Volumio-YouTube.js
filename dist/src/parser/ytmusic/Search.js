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
var _Search_page, _Search_actions, _Search_continuation;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Utils_1 = require("../../utils/Utils");
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const TabbedSearchResults_1 = __importDefault(require("../classes/TabbedSearchResults"));
const DidYouMean_1 = __importDefault(require("../classes/DidYouMean"));
const ShowingResultsFor_1 = __importDefault(require("../classes/ShowingResultsFor"));
const MusicShelf_1 = __importDefault(require("../classes/MusicShelf"));
const MusicResponsiveListItem_1 = __importDefault(require("../classes/MusicResponsiveListItem"));
const ChipCloud_1 = __importDefault(require("../classes/ChipCloud"));
const ChipCloudChip_1 = __importDefault(require("../classes/ChipCloudChip"));
const ItemSection_1 = __importDefault(require("../classes/ItemSection"));
const Message_1 = __importDefault(require("../classes/Message"));
class Search {
    constructor(response, actions, args = {}) {
        var _a, _b, _c, _d, _e, _f, _g;
        _Search_page.set(this, void 0);
        _Search_actions.set(this, void 0);
        _Search_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _Search_actions, actions, "f");
        __classPrivateFieldSet(this, _Search_page, args.is_continuation ?
            response :
            index_1.default.parseResponse(response.data), "f");
        const tab = __classPrivateFieldGet(this, _Search_page, "f").contents.item().as(TabbedSearchResults_1.default).tabs.get({ selected: true });
        if (!tab)
            throw new Utils_1.InnertubeError('Could not find target tab.');
        const tab_content = (_a = tab.content) === null || _a === void 0 ? void 0 : _a.as(SectionList_1.default);
        if (!tab_content)
            throw new Utils_1.InnertubeError('Target tab did not have any content.');
        this.header = tab_content.hasKey('header') ? (_b = tab_content.header) === null || _b === void 0 ? void 0 : _b.item().as(ChipCloud_1.default) : null;
        const shelves = tab_content.contents.array().as(MusicShelf_1.default, ItemSection_1.default);
        const item_section = shelves.firstOfType(ItemSection_1.default);
        this.did_you_mean = ((_c = item_section === null || item_section === void 0 ? void 0 : item_section.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(DidYouMean_1.default)) || null;
        this.showing_results_for = ((_d = item_section === null || item_section === void 0 ? void 0 : item_section.contents) === null || _d === void 0 ? void 0 : _d.firstOfType(ShowingResultsFor_1.default)) || null;
        this.message = ((_e = item_section === null || item_section === void 0 ? void 0 : item_section.contents) === null || _e === void 0 ? void 0 : _e.firstOfType(Message_1.default)) || null;
        if (args.is_continuation || args.is_filtered) {
            this.results = (_f = shelves.firstOfType(MusicShelf_1.default)) === null || _f === void 0 ? void 0 : _f.contents;
            __classPrivateFieldSet(this, _Search_continuation, (_g = shelves.firstOfType(MusicShelf_1.default)) === null || _g === void 0 ? void 0 : _g.continuation, "f");
        }
        else {
            this.sections = shelves.filterType(MusicShelf_1.default);
        }
    }
    /**
     * Equivalent to clicking on the shelf to load more items.
     */
    getMore(shelf) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!shelf || !shelf.endpoint)
                throw new Utils_1.InnertubeError('Cannot retrieve more items for this shelf because it does not have an endpoint.');
            const response = yield shelf.endpoint.call(__classPrivateFieldGet(this, _Search_actions, "f"), 'YTMUSIC', true);
            if (!response)
                throw new Utils_1.InnertubeError('Endpoint did not return any data');
            return new Search(response, __classPrivateFieldGet(this, _Search_actions, "f"), { is_continuation: true });
        });
    }
    /**
     * Retrieves continuation, only works for individual sections or filtered results.
     */
    getContinuation() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Search_continuation, "f"))
                throw new Utils_1.InnertubeError('Continuation not found.');
            const response = yield __classPrivateFieldGet(this, _Search_actions, "f").search({ ctoken: __classPrivateFieldGet(this, _Search_continuation, "f"), client: 'YTMUSIC' });
            const data = response.data.continuationContents.musicShelfContinuation;
            this.results = index_1.default.parse(data.contents).array().as(MusicResponsiveListItem_1.default);
            __classPrivateFieldSet(this, _Search_continuation, (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation, "f");
            return this;
        });
    }
    /**
     * Applies given filter to the search.
     */
    selectFilter(name) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = this.filters) === null || _a === void 0 ? void 0 : _a.includes(name)))
                throw new Utils_1.InnertubeError('Invalid filter', { available_filters: this.filters });
            const filter = (_c = (_b = this.header) === null || _b === void 0 ? void 0 : _b.chips) === null || _c === void 0 ? void 0 : _c.as(ChipCloudChip_1.default).get({ text: name });
            if (filter === null || filter === void 0 ? void 0 : filter.is_selected)
                return this;
            const response = yield ((_d = filter === null || filter === void 0 ? void 0 : filter.endpoint) === null || _d === void 0 ? void 0 : _d.call(__classPrivateFieldGet(this, _Search_actions, "f"), 'YTMUSIC', true));
            if (!response)
                throw new Utils_1.InnertubeError('Endpoint did not return any data');
            return new Search(response, __classPrivateFieldGet(this, _Search_actions, "f"), { is_continuation: true });
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _Search_continuation, "f");
    }
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.header) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip_1.default).map((chip) => chip.text)) || null;
    }
    get songs() {
        var _a;
        return (_a = this.sections) === null || _a === void 0 ? void 0 : _a.find((section) => section.title.toString() === 'Songs');
    }
    get videos() {
        var _a;
        return (_a = this.sections) === null || _a === void 0 ? void 0 : _a.find((section) => section.title.toString() === 'Videos');
    }
    get albums() {
        var _a;
        return (_a = this.sections) === null || _a === void 0 ? void 0 : _a.find((section) => section.title.toString() === 'Albums');
    }
    get artists() {
        var _a;
        return (_a = this.sections) === null || _a === void 0 ? void 0 : _a.find((section) => section.title.toString() === 'Artists');
    }
    get playlists() {
        var _a;
        return (_a = this.sections) === null || _a === void 0 ? void 0 : _a.find((section) => section.title.toString() === 'Community playlists');
    }
    get page() {
        return __classPrivateFieldGet(this, _Search_page, "f");
    }
}
_Search_page = new WeakMap(), _Search_actions = new WeakMap(), _Search_continuation = new WeakMap();
exports.default = Search;
//# sourceMappingURL=Search.js.map