import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import { YTNode } from '../../../helpers';
declare class LiveChatBannerPoll extends YTNode {
    static type: string;
    poll_question: Text;
    author_photo: Thumbnail[];
    choices: {
        option_id: string;
        text: string;
    }[];
    collapsed_state_entity_key: string;
    live_chat_poll_state_entity_key: string;
    context_menu_button: import("../../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default LiveChatBannerPoll;
