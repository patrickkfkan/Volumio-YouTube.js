import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
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
    context_menu_button: YTNode | null;
    constructor(data: any);
}
export default LiveChatBannerPoll;
