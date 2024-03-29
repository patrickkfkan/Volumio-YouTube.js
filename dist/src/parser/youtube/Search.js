import { __awaiter } from "tslib";
import Feed from '../../core/mixins/Feed.js';
import { InnertubeError } from '../../utils/Utils.js';
import HorizontalCardList from '../classes/HorizontalCardList.js';
import ItemSection from '../classes/ItemSection.js';
import SearchRefinementCard from '../classes/SearchRefinementCard.js';
import SearchSubMenu from '../classes/SearchSubMenu.js';
import SectionList from '../classes/SectionList.js';
import UniversalWatchCard from '../classes/UniversalWatchCard.js';
class Search extends Feed {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c, _d, _e, _f;
        super(actions, data, already_parsed);
        const contents = ((_a = this.page.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(SectionList).first().contents) ||
            ((_b = this.page.on_response_received_commands) === null || _b === void 0 ? void 0 : _b.first().contents);
        if (!contents)
            throw new InnertubeError('No contents found in search response');
        this.results = (_c = contents.find((content) => content.is(ItemSection) && content.contents && content.contents.length > 0)) === null || _c === void 0 ? void 0 : _c.as(ItemSection).contents;
        this.refinements = this.page.refinements || [];
        this.estimated_results = this.page.estimated_results;
        this.sub_menu = (_d = this.page.contents_memo) === null || _d === void 0 ? void 0 : _d.getType(SearchSubMenu).first();
        this.watch_card = (_e = this.page.contents_memo) === null || _e === void 0 ? void 0 : _e.getType(UniversalWatchCard).first();
        this.refinement_cards = (_f = this.results) === null || _f === void 0 ? void 0 : _f.firstOfType(HorizontalCardList);
    }
    /**
     * Applies given refinement card and returns a new {@link Search} object. Use {@link refinement_card_queries} to get a list of available refinement cards.
     */
    selectRefinementCard(card) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let target_card;
            if (typeof card === 'string') {
                if (!this.refinement_cards)
                    throw new InnertubeError('No refinement cards found.');
                target_card = (_b = (_a = this.refinement_cards) === null || _a === void 0 ? void 0 : _a.cards.get({ query: card })) === null || _b === void 0 ? void 0 : _b.as(SearchRefinementCard);
                if (!target_card)
                    throw new InnertubeError(`Refinement card "${card}" not found`, { available_cards: this.refinement_card_queries });
            }
            else if (card.type === 'SearchRefinementCard') {
                target_card = card;
            }
            else {
                throw new InnertubeError('Invalid refinement card!');
            }
            const page = yield target_card.endpoint.call(this.actions, { parse: true });
            return new Search(this.actions, page, true);
        });
    }
    /**
     * Returns a list of refinement card queries.
     */
    get refinement_card_queries() {
        var _a;
        return ((_a = this.refinement_cards) === null || _a === void 0 ? void 0 : _a.cards.as(SearchRefinementCard).map((card) => card.query)) || [];
    }
    /**
     * Retrieves next batch of results.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getContinuationData();
            if (!response)
                throw new InnertubeError('Could not get continuation data');
            return new Search(this.actions, response, true);
        });
    }
}
export default Search;
//# sourceMappingURL=Search.js.map