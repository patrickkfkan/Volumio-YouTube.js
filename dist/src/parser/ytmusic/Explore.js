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
var _Explore_page;
import Parser from '../index.js';
import Grid from '../classes/Grid.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicNavigationButton from '../classes/MusicNavigationButton.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';
import { InnertubeError } from '../../utils/Utils.js';
class Explore {
    constructor(response) {
        var _a, _b, _c;
        _Explore_page.set(this, void 0);
        __classPrivateFieldSet(this, _Explore_page, Parser.parseResponse(response.data), "f");
        const tab = (_a = __classPrivateFieldGet(this, _Explore_page, "f").contents) === null || _a === void 0 ? void 0 : _a.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });
        if (!tab)
            throw new InnertubeError('Could not find target tab.');
        const section_list = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList);
        if (!section_list)
            throw new InnertubeError('Target tab did not have any content.');
        this.top_buttons = ((_c = section_list.contents.firstOfType(Grid)) === null || _c === void 0 ? void 0 : _c.items.as(MusicNavigationButton)) || [];
        this.sections = section_list.contents.filterType(MusicCarouselShelf);
    }
    get page() {
        return __classPrivateFieldGet(this, _Explore_page, "f");
    }
}
_Explore_page = new WeakMap();
export default Explore;
//# sourceMappingURL=Explore.js.map