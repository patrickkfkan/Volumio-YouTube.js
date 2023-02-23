import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import { YTNode } from '../../../helpers.js';
declare class PollHeader extends YTNode {
    static type: string;
    poll_question: Text;
    thumbnails: Thumbnail[];
    metadata: Text;
    live_chat_poll_type: string;
    context_menu_button: YTNode | null;
    constructor(data: any);
}
export default PollHeader;
