import Text from '../misc/Text';
import { YTNode } from '../../helpers';
declare class MarkChatItemAsDeletedAction extends YTNode {
    static type: string;
    deleted_state_message: Text;
    target_item_id: string;
    constructor(data: any);
}
export default MarkChatItemAsDeletedAction;
