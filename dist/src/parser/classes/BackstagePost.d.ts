import Author from './misc/Author';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class BackstagePost extends YTNode {
    static type: string;
    id: string;
    author: Author;
    content: Text;
    published: Text;
    poll_status: string;
    vote_status: string;
    likes: Text;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    actions: import("../helpers").SuperParsedResult<YTNode>;
    vote_button: import("../helpers").SuperParsedResult<YTNode>;
    surface: string;
    endpoint: NavigationEndpoint;
    attachment: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default BackstagePost;
