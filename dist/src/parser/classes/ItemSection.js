import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class ItemSection extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.header = Parser.parseItem(data.header);
        this.contents = Parser.parse(data.contents, true);
        if (data.targetId || data.sectionIdentifier) {
            this.target_id = (data === null || data === void 0 ? void 0 : data.target_id) || (data === null || data === void 0 ? void 0 : data.sectionIdentifier);
        }
        if (data.continuations) {
            /*** Volumio-YouTube.js ***/
            this.continuation = (_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation;
            //this.continuation = data.continuations?.at(0)?.nextContinuationData?.continuation;
        }
    }
}
ItemSection.type = 'ItemSection';
export default ItemSection;
//# sourceMappingURL=ItemSection.js.map