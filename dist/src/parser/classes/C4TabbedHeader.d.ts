import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class C4TabbedHeader extends YTNode {
    static type: string;
    author: Author;
    banner: Thumbnail[];
    tv_banner: Thumbnail[];
    mobile_banner: Thumbnail[];
    subscribers: Text;
    sponsor_button: YTNode | null | undefined;
    subscribe_button: YTNode | null | undefined;
    header_links: import("../helpers").SuperParsedResult<YTNode> | undefined;
    constructor(data: any);
}
export default C4TabbedHeader;
