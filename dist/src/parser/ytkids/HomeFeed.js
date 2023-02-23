var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Feed from '../../core/Feed.js';
import KidsCategoriesHeader from '../classes/ytkids/KidsCategoriesHeader.js';
import KidsCategoryTab from '../classes/ytkids/KidsCategoryTab.js';
import KidsHomeScreen from '../classes/ytkids/KidsHomeScreen.js';
import { InnertubeError } from '../../utils/Utils.js';
class HomeFeed extends Feed {
    constructor(actions, data, already_parsed = false) {
        var _a, _b;
        super(actions, data, already_parsed);
        this.header = (_a = this.page.header) === null || _a === void 0 ? void 0 : _a.item().as(KidsCategoriesHeader);
        this.contents = (_b = this.page.contents) === null || _b === void 0 ? void 0 : _b.item().as(KidsHomeScreen);
    }
    /**
     * Retrieves the contents of the given category tab. Use {@link HomeFeed.categories} to get a list of available categories.
     * @param tab - The tab to select
     */
    selectCategoryTab(tab) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let target_tab;
            if (typeof tab === 'string') {
                target_tab = (_a = this.header) === null || _a === void 0 ? void 0 : _a.category_tabs.find((t) => t.title.toString() === tab);
            }
            else if (tab === null || tab === void 0 ? void 0 : tab.is(KidsCategoryTab)) {
                target_tab = tab;
            }
            if (!target_tab)
                throw new InnertubeError(`Tab "${tab}" not found`);
            const page = yield target_tab.endpoint.call(this.actions, { client: 'YTKIDS', parse: true });
            // Copy over the header and header memo
            page.header = this.page.header;
            page.header_memo = this.page.header_memo;
            return new HomeFeed(this.actions, page, true);
        });
    }
    get categories() {
        var _a;
        return ((_a = this.header) === null || _a === void 0 ? void 0 : _a.category_tabs.map((tab) => tab.title.toString())) || [];
    }
}
export default HomeFeed;
//# sourceMappingURL=HomeFeed.js.map