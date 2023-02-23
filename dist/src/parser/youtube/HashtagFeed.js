var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FilterableFeed from '../../core/FilterableFeed.js';
import { InnertubeError } from '../../utils/Utils.js';
import HashtagHeader from '../classes/HashtagHeader.js';
import RichGrid from '../classes/RichGrid.js';
import Tab from '../classes/Tab.js';
export default class HashtagFeed extends FilterableFeed {
    constructor(actions, response) {
        super(actions, response);
        if (!this.page.contents_memo)
            throw new InnertubeError('Unexpected response', this.page);
        const tab = this.page.contents_memo.getType(Tab).first();
        if (!tab.content)
            throw new InnertubeError('Content tab has no content', tab);
        if (this.page.header) {
            this.header = this.page.header.item().as(HashtagHeader);
        }
        this.contents = tab.content.as(RichGrid);
    }
    /**
     * Applies given filter and returns a new {@link HashtagFeed} object. Use {@link HashtagFeed.filters} to get available filters.
     * @param filter - Filter to apply.
     */
    applyFilter(filter) {
        const _super = Object.create(null, {
            getFilteredFeed: { get: () => super.getFilteredFeed }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield _super.getFilteredFeed.call(this, filter);
            return new HashtagFeed(this.actions, response.page);
        });
    }
}
//# sourceMappingURL=HashtagFeed.js.map