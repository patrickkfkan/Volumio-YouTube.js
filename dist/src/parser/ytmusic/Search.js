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
var _Search_page, _Search_actions, _Search_continuation, _SearchContinuation_actions, _SearchContinuation_page;
import { InnertubeError } from '../../utils/Utils.js';
import Parser, { MusicShelfContinuation } from '../index.js';
import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import DidYouMean from '../classes/DidYouMean.js';
import ItemSection from '../classes/ItemSection.js';
import Message from '../classes/Message.js';
import MusicHeader from '../classes/MusicHeader.js';
import MusicShelf from '../classes/MusicShelf.js';
import SectionList from '../classes/SectionList.js';
import ShowingResultsFor from '../classes/ShowingResultsFor.js';
import TabbedSearchResults from '../classes/TabbedSearchResults.js';
class Search {
    constructor(response, actions, is_filtered) {
        var _a, _b, _c;
        _Search_page.set(this, void 0);
        _Search_actions.set(this, void 0);
        _Search_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _Search_actions, actions, "f");
        __classPrivateFieldSet(this, _Search_page, Parser.parseResponse(response.data), "f");
        if (!__classPrivateFieldGet(this, _Search_page, "f").contents || !__classPrivateFieldGet(this, _Search_page, "f").contents_memo)
            throw new InnertubeError('Response did not contain any contents.');
        const tab = __classPrivateFieldGet(this, _Search_page, "f").contents.item().as(TabbedSearchResults).tabs.get({ selected: true });
        if (!tab)
            throw new InnertubeError('Could not find target tab.');
        const tab_content = (_a = tab.content) === null || _a === void 0 ? void 0 : _a.as(SectionList);
        if (!tab_content)
            throw new InnertubeError('Target tab did not have any content.');
        this.header = (_b = tab_content.header) === null || _b === void 0 ? void 0 : _b.item().as(ChipCloud);
        this.contents = tab_content.contents.as(MusicShelf, ItemSection);
        if (is_filtered) {
            __classPrivateFieldSet(this, _Search_continuation, (_c = this.contents.firstOfType(MusicShelf)) === null || _c === void 0 ? void 0 : _c.continuation, "f");
        }
    }
    /**
     * Loads more items for the given shelf.
     */
    getMore(shelf) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!shelf || !shelf.endpoint)
                throw new InnertubeError('Cannot retrieve more items for this shelf because it does not have an endpoint.');
            const response = yield shelf.endpoint.call(__classPrivateFieldGet(this, _Search_actions, "f"), { client: 'YTMUSIC' });
            if (!response)
                throw new InnertubeError('Endpoint did not return any data');
            return new Search(response, __classPrivateFieldGet(this, _Search_actions, "f"), true);
        });
    }
    /**
     * Retrieves search continuation. Only available for filtered searches and shelf continuations.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Search_continuation, "f"))
                throw new InnertubeError('Continuation not found.');
            const response = yield __classPrivateFieldGet(this, _Search_actions, "f").execute('/search', {
                continuation: __classPrivateFieldGet(this, _Search_continuation, "f"),
                client: 'YTMUSIC'
            });
            return new SearchContinuation(__classPrivateFieldGet(this, _Search_actions, "f"), response);
        });
    }
    /**
     * Applies given filter to the search.
     */
    applyFilter(target_filter) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let cloud_chip;
            if (typeof target_filter === 'string') {
                cloud_chip = (_b = (_a = this.header) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip).get({ text: target_filter });
                if (!cloud_chip)
                    throw new InnertubeError('Could not find filter with given name.', { available_filters: this.filters });
            }
            else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip)) {
                cloud_chip = target_filter;
            }
            if (!cloud_chip)
                throw new InnertubeError('Invalid filter', { available_filters: this.filters });
            if (cloud_chip === null || cloud_chip === void 0 ? void 0 : cloud_chip.is_selected)
                return this;
            if (!cloud_chip.endpoint)
                throw new InnertubeError('Selected filter does not have an endpoint.');
            const response = yield cloud_chip.endpoint.call(__classPrivateFieldGet(this, _Search_actions, "f"), { client: 'YTMUSIC' });
            return new Search(response, __classPrivateFieldGet(this, _Search_actions, "f"), true);
        });
    }
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.header) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip).map((chip) => chip.text)) || [];
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _Search_continuation, "f");
    }
    get did_you_mean() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _Search_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(DidYouMean).first();
    }
    get showing_results_for() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _Search_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(ShowingResultsFor).first();
    }
    get message() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _Search_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Message).first();
    }
    get songs() {
        var _a;
        return (_a = this.contents) === null || _a === void 0 ? void 0 : _a.filterType(MusicShelf).find((section) => section.title.toString() === 'Songs');
    }
    get videos() {
        var _a;
        return (_a = this.contents) === null || _a === void 0 ? void 0 : _a.filterType(MusicShelf).find((section) => section.title.toString() === 'Videos');
    }
    get albums() {
        var _a;
        return (_a = this.contents) === null || _a === void 0 ? void 0 : _a.filterType(MusicShelf).find((section) => section.title.toString() === 'Albums');
    }
    get artists() {
        var _a;
        return (_a = this.contents) === null || _a === void 0 ? void 0 : _a.filterType(MusicShelf).find((section) => section.title.toString() === 'Artists');
    }
    get playlists() {
        var _a;
        return (_a = this.contents) === null || _a === void 0 ? void 0 : _a.filterType(MusicShelf).find((section) => section.title.toString() === 'Community playlists');
    }
    /**
     * @deprecated Use {@link Search.contents} instead.
     */
    get results() {
        var _a, _b;
        return (_b = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.firstOfType(MusicShelf)) === null || _b === void 0 ? void 0 : _b.contents;
    }
    /**
     * @deprecated Use {@link Search.contents} instead.
     */
    get sections() {
        var _a;
        return (_a = this.contents) === null || _a === void 0 ? void 0 : _a.filterType(MusicShelf);
    }
    get page() {
        return __classPrivateFieldGet(this, _Search_page, "f");
    }
}
_Search_page = new WeakMap(), _Search_actions = new WeakMap(), _Search_continuation = new WeakMap();
export default Search;
export class SearchContinuation {
    constructor(actions, response) {
        var _a, _b;
        _SearchContinuation_actions.set(this, void 0);
        _SearchContinuation_page.set(this, void 0);
        __classPrivateFieldSet(this, _SearchContinuation_actions, actions, "f");
        __classPrivateFieldSet(this, _SearchContinuation_page, Parser.parseResponse(response.data), "f");
        this.header = (_a = __classPrivateFieldGet(this, _SearchContinuation_page, "f").header) === null || _a === void 0 ? void 0 : _a.item().as(MusicHeader);
        this.contents = (_b = __classPrivateFieldGet(this, _SearchContinuation_page, "f").continuation_contents) === null || _b === void 0 ? void 0 : _b.as(MusicShelfContinuation);
    }
    getContinuation() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = this.contents) === null || _a === void 0 ? void 0 : _a.continuation))
                throw new InnertubeError('Continuation not found.');
            const response = yield __classPrivateFieldGet(this, _SearchContinuation_actions, "f").execute('/search', {
                continuation: this.contents.continuation,
                client: 'YTMUSIC'
            });
            return new SearchContinuation(__classPrivateFieldGet(this, _SearchContinuation_actions, "f"), response);
        });
    }
    get has_continuation() {
        var _a;
        return !!((_a = this.contents) === null || _a === void 0 ? void 0 : _a.continuation);
    }
    get page() {
        return __classPrivateFieldGet(this, _SearchContinuation_page, "f");
    }
}
_SearchContinuation_actions = new WeakMap(), _SearchContinuation_page = new WeakMap();
//# sourceMappingURL=Search.js.map