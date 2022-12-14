import Author from './misc/Author';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class WatchCardRichHeader extends YTNode {
    static type: string;
    title: Text;
    title_endpoint: NavigationEndpoint;
    subtitle: Text;
    author: Author;
    style: string;
    constructor(data: any);
}
export default WatchCardRichHeader;
