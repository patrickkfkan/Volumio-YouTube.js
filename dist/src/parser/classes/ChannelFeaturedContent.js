import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ChannelFeaturedContent extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.items = Parser.parse(data.items);
    }
}
ChannelFeaturedContent.type = 'ChannelFeaturedContent';
export default ChannelFeaturedContent;
//# sourceMappingURL=ChannelFeaturedContent.js.map