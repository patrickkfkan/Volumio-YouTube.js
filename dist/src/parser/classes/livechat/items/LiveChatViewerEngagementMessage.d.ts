import LiveChatTextMessage from './LiveChatTextMessage.js';
declare class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
    static type: string;
    icon_type: string;
    action_button: import("../../../helpers.js").YTNode | null;
    constructor(data: any);
}
export default LiveChatViewerEngagementMessage;
