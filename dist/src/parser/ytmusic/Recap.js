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
var _Recap_page, _Recap_actions;
import Parser from '../index.js';
import HighlightsCarousel from '../classes/HighlightsCarousel.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicElementHeader from '../classes/MusicElementHeader.js';
import MusicHeader from '../classes/MusicHeader.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';
import Playlist from './Playlist.js';
import ItemSection from '../classes/ItemSection.js';
import Message from '../classes/Message.js';
import SectionList from '../classes/SectionList.js';
import Tab from '../classes/Tab.js';
import { InnertubeError } from '../../utils/Utils.js';
class Recap {
    constructor(response, actions) {
        var _a, _b, _c, _d, _e, _f, _g;
        _Recap_page.set(this, void 0);
        _Recap_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Recap_page, Parser.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Recap_actions, actions, "f");
        const header = (_a = __classPrivateFieldGet(this, _Recap_page, "f").header) === null || _a === void 0 ? void 0 : _a.item();
        this.header = (header === null || header === void 0 ? void 0 : header.is(MusicElementHeader)) ?
            (_d = (_c = (_b = __classPrivateFieldGet(this, _Recap_page, "f").header) === null || _b === void 0 ? void 0 : _b.item().as(MusicElementHeader).element) === null || _c === void 0 ? void 0 : _c.model) === null || _d === void 0 ? void 0 : _d.item().as(HighlightsCarousel) :
            (_e = __classPrivateFieldGet(this, _Recap_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicHeader);
        const tab = (_f = __classPrivateFieldGet(this, _Recap_page, "f").contents) === null || _f === void 0 ? void 0 : _f.item().as(SingleColumnBrowseResults).tabs.firstOfType(Tab);
        if (!tab)
            throw new InnertubeError('Target tab not found');
        this.sections = (_g = tab.content) === null || _g === void 0 ? void 0 : _g.as(SectionList).contents.as(ItemSection, MusicCarouselShelf, Message);
    }
    /**
     * Retrieves recap playlist.
     */
    getPlaylist() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.header)
                throw new InnertubeError('Header not found');
            if (!this.header.is(HighlightsCarousel))
                throw new InnertubeError('Recap playlist not available, check back later.');
            const endpoint = this.header.panels[0].text_on_tap_endpoint;
            const response = yield endpoint.call(__classPrivateFieldGet(this, _Recap_actions, "f"), { client: 'YTMUSIC' });
            return new Playlist(response, __classPrivateFieldGet(this, _Recap_actions, "f"));
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _Recap_page, "f");
    }
}
_Recap_page = new WeakMap(), _Recap_actions = new WeakMap();
export default Recap;
//# sourceMappingURL=Recap.js.map