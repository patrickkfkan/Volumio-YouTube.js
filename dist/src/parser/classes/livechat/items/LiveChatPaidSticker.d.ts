import NavigationEndpoint from '../../NavigationEndpoint';
import Thumbnail from '../../misc/Thumbnail';
import Text from '../../misc/Text';
import { YTNode } from '../../../helpers';
declare class LiveChatPaidSticker extends YTNode {
    static type: string;
    id: string;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: any;
    };
    money_chip_background_color: number;
    money_chip_text_color: number;
    background_color: number;
    author_name_text_color: number;
    sticker: Thumbnail[];
    purchase_amount: string;
    context_menu: NavigationEndpoint;
    timestamp: number;
    constructor(data: any);
}
export default LiveChatPaidSticker;
