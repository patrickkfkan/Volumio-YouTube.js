import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class KidsHomeScreen extends YTNode {
    constructor(data) {
        super();
        this.anchors = Parser.parseArray(data.anchors);
    }
}
KidsHomeScreen.type = 'kidsHomeScreen';
export default KidsHomeScreen;
//# sourceMappingURL=KidsHomeScreen.js.map