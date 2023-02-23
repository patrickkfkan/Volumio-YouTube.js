import Author from './misc/Author.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class GridChannel extends YTNode {
    static type: string;
    id: string;
    author: Author;
    subscribers: Text;
    video_count: Text;
    endpoint: NavigationEndpoint;
    subscribe_button: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default GridChannel;
