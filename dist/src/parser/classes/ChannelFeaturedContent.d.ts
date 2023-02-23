import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ChannelFeaturedContent extends YTNode {
    static type: string;
    title: Text;
    items: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default ChannelFeaturedContent;
