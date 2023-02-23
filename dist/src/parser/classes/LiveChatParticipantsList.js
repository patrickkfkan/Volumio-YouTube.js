import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class LiveChatParticipantsList extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.participants = Parser.parseArray(data.participants);
    }
}
LiveChatParticipantsList.type = 'LiveChatParticipantsList';
export default LiveChatParticipantsList;
//# sourceMappingURL=LiveChatParticipantsList.js.map