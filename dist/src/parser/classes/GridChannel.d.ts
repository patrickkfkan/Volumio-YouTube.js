import Author from './misc/Author';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class GridChannel extends YTNode {
    static type: string;
    id: string;
    author: Author;
    subscribers: Text;
    video_count: Text;
    endpoint: NavigationEndpoint;
    subscribe_button: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default GridChannel;
