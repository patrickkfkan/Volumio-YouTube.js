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
var _HomeFeed_page, _HomeFeed_actions, _HomeFeed_continuation;
import { InnertubeError } from '../../utils/Utils.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';
import Parser, { SectionListContinuation } from '../index.js';
class HomeFeed {
    constructor(response, actions) {
        var _a, _b, _c, _d;
        _HomeFeed_page.set(this, void 0);
        _HomeFeed_actions.set(this, void 0);
        _HomeFeed_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _HomeFeed_actions, actions, "f");
        __classPrivateFieldSet(this, _HomeFeed_page, Parser.parseResponse(response.data), "f");
        const tab = (_a = __classPrivateFieldGet(this, _HomeFeed_page, "f").contents) === null || _a === void 0 ? void 0 : _a.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });
        if (!tab)
            throw new InnertubeError('Could not find Home tab.');
        if (tab.key('content').isNull()) {
            if (!__classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents)
                throw new InnertubeError('Continuation did not have any content.');
            __classPrivateFieldSet(this, _HomeFeed_continuation, __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).continuation, "f");
            this.sections = (_b = __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).contents) === null || _b === void 0 ? void 0 : _b.as(MusicCarouselShelf);
            return;
        }
        __classPrivateFieldSet(this, _HomeFeed_continuation, (_c = tab.content) === null || _c === void 0 ? void 0 : _c.as(SectionList).continuation, "f");
        this.sections = (_d = tab.content) === null || _d === void 0 ? void 0 : _d.as(SectionList).contents.as(MusicCarouselShelf);
    }
    /**
     * Retrieves home feed continuation.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _HomeFeed_continuation, "f"))
                throw new InnertubeError('Continuation not found.');
            const response = yield __classPrivateFieldGet(this, _HomeFeed_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: __classPrivateFieldGet(this, _HomeFeed_continuation, "f")
            });
            return new HomeFeed(response, __classPrivateFieldGet(this, _HomeFeed_actions, "f"));
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _HomeFeed_continuation, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _HomeFeed_page, "f");
    }
}
_HomeFeed_page = new WeakMap(), _HomeFeed_actions = new WeakMap(), _HomeFeed_continuation = new WeakMap();
export default HomeFeed;
//# sourceMappingURL=HomeFeed.js.map