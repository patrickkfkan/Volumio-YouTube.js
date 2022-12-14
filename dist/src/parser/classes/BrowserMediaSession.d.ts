import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class BrowserMediaSession extends YTNode {
    static type: string;
    album: Text;
    thumbnails: Thumbnail[];
    constructor(data: any);
}
export default BrowserMediaSession;
