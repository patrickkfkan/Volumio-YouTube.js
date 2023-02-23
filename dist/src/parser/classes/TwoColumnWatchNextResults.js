import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class TwoColumnWatchNextResults extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.results = Parser.parseArray((_a = data.results) === null || _a === void 0 ? void 0 : _a.results.contents);
        this.secondary_results = Parser.parseArray((_b = data.secondaryResults) === null || _b === void 0 ? void 0 : _b.secondaryResults.results);
        this.conversation_bar = Parser.parseItem(data === null || data === void 0 ? void 0 : data.conversationBar);
    }
}
TwoColumnWatchNextResults.type = 'TwoColumnWatchNextResults';
export default TwoColumnWatchNextResults;
//# sourceMappingURL=TwoColumnWatchNextResults.js.map