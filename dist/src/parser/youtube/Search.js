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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const Utils_1 = require("../../utils/Utils");
const Feed_1 = __importDefault(require("../../core/Feed"));
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const ItemSection_1 = __importDefault(require("../classes/ItemSection"));
const HorizontalCardList_1 = __importDefault(require("../classes/HorizontalCardList"));
const RichListHeader_1 = __importDefault(require("../classes/RichListHeader"));
const SearchRefinementCard_1 = __importDefault(require("../classes/SearchRefinementCard"));
const TwoColumnSearchResults_1 = __importDefault(require("../classes/TwoColumnSearchResults"));
const UniversalWatchCard_1 = __importDefault(require("../classes/UniversalWatchCard"));
const WatchCardHeroVideo_1 = __importDefault(require("../classes/WatchCardHeroVideo"));
const WatchCardSectionSequence_1 = __importDefault(require("../classes/WatchCardSectionSequence"));
class Search extends Feed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c, _d, _e, _f;
        super(actions, data, already_parsed);
        const contents = ((_a = this.page.contents) === null || _a === void 0 ? void 0 : _a.item().as(TwoColumnSearchResults_1.default).primary_contents.item().as(SectionList_1.default).contents.array()) ||
            ((_b = this.page.on_response_received_commands) === null || _b === void 0 ? void 0 : _b[0].contents);
        const secondary_contents_maybe = (_c = this.page.contents) === null || _c === void 0 ? void 0 : _c.item().key('secondary_contents');
        const secondary_contents = (secondary_contents_maybe === null || secondary_contents_maybe === void 0 ? void 0 : secondary_contents_maybe.isParsed()) ? secondary_contents_maybe.parsed().item().key('contents').parsed().array() : undefined;
        this.results = (_d = contents.firstOfType(ItemSection_1.default)) === null || _d === void 0 ? void 0 : _d.contents;
        const card_list = (_f = (_e = this.results) === null || _e === void 0 ? void 0 : _e.get({ type: 'HorizontalCardList' }, true)) === null || _f === void 0 ? void 0 : _f.as(HorizontalCardList_1.default);
        const universal_watch_card = secondary_contents === null || secondary_contents === void 0 ? void 0 : secondary_contents.firstOfType(UniversalWatchCard_1.default);
        this.refinements = this.page.refinements || [];
        this.estimated_results = this.page.estimated_results;
        this.watch_card = {
            header: (universal_watch_card === null || universal_watch_card === void 0 ? void 0 : universal_watch_card.header.item()) || null,
            call_to_action: (universal_watch_card === null || universal_watch_card === void 0 ? void 0 : universal_watch_card.call_to_action.item().as(WatchCardHeroVideo_1.default)) || null,
            sections: (universal_watch_card === null || universal_watch_card === void 0 ? void 0 : universal_watch_card.sections.array().filterType(WatchCardSectionSequence_1.default)) || []
        };
        this.refinement_cards = {
            header: (card_list === null || card_list === void 0 ? void 0 : card_list.header.item().as(RichListHeader_1.default)) || null,
            cards: (card_list === null || card_list === void 0 ? void 0 : card_list.cards.array().filterType(SearchRefinementCard_1.default)) || (0, helpers_1.observe)([])
        };
    }
    /**
     * Applies given refinement card and returns a new {@link Search} object.
     */
    selectRefinementCard(card) {
        return __awaiter(this, void 0, void 0, function* () {
            let target_card;
            if (typeof card === 'string') {
                target_card = this.refinement_cards.cards.get({ query: card });
                if (!target_card)
                    throw new Utils_1.InnertubeError('Refinement card not found!', { available_cards: this.refinement_card_queries });
            }
            else if (card.type === 'SearchRefinementCard') {
                target_card = card;
            }
            else {
                throw new Utils_1.InnertubeError('Invalid refinement card!');
            }
            const page = yield target_card.endpoint.call(this.actions, undefined, true);
            return new Search(this.actions, page, true);
        });
    }
    get refinement_card_queries() {
        return this.refinement_cards.cards.map((card) => card.query);
    }
    /**
     * Retrieves next batch of results.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const continuation = yield this.getContinuationData();
            return new Search(this.actions, continuation, true);
        });
    }
}
exports.default = Search;
//# sourceMappingURL=Search.js.map