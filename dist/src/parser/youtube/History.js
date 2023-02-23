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
import ItemSection from '../classes/ItemSection.js';
import BrowseFeedActions from '../classes/BrowseFeedActions.js';
// TODO: make feed actions usable
class History extends Feed {
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        this.sections = this.memo.getType(ItemSection);
        this.feed_actions = this.memo.getType(BrowseFeedActions).first();
    }
    /**
     * Retrieves next batch of contents.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getContinuationData();
            if (!response)
                throw new Error('No continuation data found');
            return new History(this.actions, response, true);
        });
    }
}
export default History;
//# sourceMappingURL=History.js.map