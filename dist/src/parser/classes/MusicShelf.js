import Parser from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import { YTNode } from '../helpers.js';
class MusicShelf extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.title = new Text(data.title);
        this.contents = Parser.parseArray(data.contents, MusicResponsiveListItem);
        if (data.bottomEndpoint) {
            this.endpoint = new NavigationEndpoint(data.bottomEndpoint);
        }
        if (data.continuations) {
            this.continuation =
                ((_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0].nextContinuationData) === null || _b === void 0 ? void 0 : _b.continuation) ||
                    ((_d = (_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation);
        }
        if (data.bottomText) {
            this.bottom_text = new Text(data.bottomText);
        }
        if (data.bottomButton) {
            this.bottom_button = Parser.parseItem(data.bottomButton);
        }
        if (data.subheaders) {
            this.subheaders = Parser.parseArray(data.subheaders);
        }
    }
}
MusicShelf.type = 'MusicShelf';
export default MusicShelf;
//# sourceMappingURL=MusicShelf.js.map