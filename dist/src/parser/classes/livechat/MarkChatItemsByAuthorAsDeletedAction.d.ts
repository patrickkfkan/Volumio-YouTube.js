import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
declare class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
    static type: string;
    deleted_state_message: Text;
    channel_id: string;
    constructor(data: any);
}
export default MarkChatItemsByAuthorAsDeletedAction;
