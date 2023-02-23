import Text from './misc/Text.js';
import Author from './misc/Author.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type SubscribeButton from './SubscribeButton.js';
import { YTNode } from '../helpers.js';
declare class Channel extends YTNode {
    static type: string;
    id: string;
    author: Author;
    subscribers: Text;
    videos: Text;
    long_byline: Text;
    short_byline: Text;
    endpoint: NavigationEndpoint;
    subscribe_button: SubscribeButton | null;
    description_snippet: Text;
    constructor(data: any);
}
export default Channel;
