import Text from './misc/Text.js';
import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class Shelf extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text(data.title);
        if (data.endpoint) {
            this.endpoint = new NavigationEndpoint(data.endpoint);
        }
        this.content = Parser.parseItem(data.content) || null;
        if ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType) {
            this.icon_type = (_b = data.icon) === null || _b === void 0 ? void 0 : _b.iconType;
        }
        if (data.menu) {
            this.menu = Parser.parseItem(data.menu);
        }
    }
}
Shelf.type = 'Shelf';
export default Shelf;
//# sourceMappingURL=Shelf.js.map