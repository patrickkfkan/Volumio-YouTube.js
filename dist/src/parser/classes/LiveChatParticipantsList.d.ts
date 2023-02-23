import Text from './misc/Text.js';
import { ObservedArray, YTNode } from '../helpers.js';
import type LiveChatParticipant from './LiveChatParticipant.js';
declare class LiveChatParticipantsList extends YTNode {
    static type: string;
    title: Text;
    participants: ObservedArray<LiveChatParticipant>;
    constructor(data: any);
}
export default LiveChatParticipantsList;
