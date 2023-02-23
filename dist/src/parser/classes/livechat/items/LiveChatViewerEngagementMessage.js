import Parser from '../../../index.js';
import LiveChatTextMessage from './LiveChatTextMessage.js';
class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
    constructor(data) {
        super(data);
        delete this.author;
        delete this.menu_endpoint;
        this.icon_type = data.icon.iconType;
        this.action_button = Parser.parseItem(data.actionButton);
    }
}
LiveChatViewerEngagementMessage.type = 'LiveChatViewerEngagementMessage';
export default LiveChatViewerEngagementMessage;
//# sourceMappingURL=LiveChatViewerEngagementMessage.js.map