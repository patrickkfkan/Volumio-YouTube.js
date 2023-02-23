import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class ProfileColumn extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
ProfileColumn.type = 'ProfileColumn';
export default ProfileColumn;
//# sourceMappingURL=ProfileColumn.js.map