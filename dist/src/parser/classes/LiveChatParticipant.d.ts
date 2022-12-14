import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class LiveChatParticipant extends YTNode {
    static type: string;
    name: Text;
    photo: Thumbnail[];
    badges: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default LiveChatParticipant;
