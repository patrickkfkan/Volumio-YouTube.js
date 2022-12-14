import Text from '../misc/Text';
import { YTNode } from '../../helpers';
declare class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
    static type: string;
    deleted_state_message: Text;
    channel_id: string;
    constructor(data: any);
}
export default MarkChatItemsByAuthorAsDeletedAction;
