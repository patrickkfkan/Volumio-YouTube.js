import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import { YTNode } from '../../../helpers';
declare class PollHeader extends YTNode {
    static type: string;
    poll_question: Text;
    thumbnails: Thumbnail[];
    metadata: Text;
    live_chat_poll_type: string;
    context_menu_button: import("../../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default PollHeader;
