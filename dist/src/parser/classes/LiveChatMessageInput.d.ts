import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import type Button from './Button.js';
import { YTNode } from '../helpers.js';
declare class LiveChatMessageInput extends YTNode {
    static type: string;
    author_name: Text;
    author_photo: Thumbnail[];
    send_button: Button | null;
    target_id: string;
    constructor(data: any);
}
export default LiveChatMessageInput;
