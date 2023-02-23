import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class SectionList extends YTNode {
    constructor(data) {
        super();
        if (data.targetId) {
            this.target_id = data.targetId;
        }
        // TODO: this should be Parser#parseArray
        this.contents = Parser.parseArray(data.contents);
        if (data.continuations) {
            if (data.continuations[0].nextContinuationData) {
                this.continuation = data.continuations[0].nextContinuationData.continuation;
            }
            else if (data.continuations[0].reloadContinuationData) {
                this.continuation = data.continuations[0].reloadContinuationData.continuation;
            }
        }
        if (data.header) {
            this.header = Parser.parse(data.header);
        }
        if (data.subMenu) {
            this.sub_menu = Parser.parseItem(data.subMenu);
        }
    }
}
SectionList.type = 'SectionList';
export default SectionList;
//# sourceMappingURL=SectionList.js.map