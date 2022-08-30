import { YTNode } from '../../../helpers';
import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import NavigationEndpoint from '../../NavigationEndpoint';
declare class LiveChatProductItem extends YTNode {
    static type: string;
    title: string;
    accessibility_title: string;
    thumbnail: Thumbnail[];
    price: string;
    vendor_name: string;
    from_vendor_text: string;
    information_button: import("../../../helpers").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint;
    creator_message: string;
    creator_name: string;
    author_photo: Thumbnail[];
    information_dialog: import("../../../helpers").SuperParsedResult<YTNode>;
    is_verified: boolean;
    creator_custom_message: Text;
    constructor(data: any);
}
export default LiveChatProductItem;
