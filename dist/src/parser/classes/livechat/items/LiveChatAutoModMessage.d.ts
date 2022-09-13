import Text from '../../misc/Text';
import { YTNode } from '../../../helpers';
declare class LiveChatAutoModMessage extends YTNode {
    static type: string;
    auto_moderated_item: import("../../../helpers").SuperParsedResult<YTNode>;
    header_text: Text;
    timestamp: number;
    id: string;
    constructor(data: any);
}
export default LiveChatAutoModMessage;
