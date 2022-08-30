import Author from './misc/Author';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class Channel extends YTNode {
    static type: string;
    id: string;
    author: Author;
    subscribers: Text;
    videos: Text;
    endpoint: NavigationEndpoint;
    description_snippet: Text;
    constructor(data: any);
}
export default Channel;
