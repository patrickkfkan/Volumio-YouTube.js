import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class LiveChatMessageInput extends YTNode {
    static type: string;
    author_name: Text;
    author_photo: Thumbnail[];
    send_button: import("../helpers").SuperParsedResult<YTNode>;
    target_id: string;
    constructor(data: any);
}
export default LiveChatMessageInput;
