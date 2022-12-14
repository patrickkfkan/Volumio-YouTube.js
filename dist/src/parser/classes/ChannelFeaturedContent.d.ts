import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ChannelFeaturedContent extends YTNode {
    static type: string;
    title: Text;
    items: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default ChannelFeaturedContent;
