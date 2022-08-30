import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import { YTNode } from '../../../helpers';
declare class LiveChatTickerSponsorItem extends YTNode {
    static type: string;
    id: string;
    detail_text: string;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
    };
    duration_sec: string;
    constructor(data: any);
}
export default LiveChatTickerSponsorItem;
