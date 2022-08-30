import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class LiveChatParticipantsList extends YTNode {
    static type: string;
    title: Text;
    participants: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default LiveChatParticipantsList;
