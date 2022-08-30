import LiveChatTextMessage from './LiveChatTextMessage';
declare class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
    static type: string;
    icon_type: string;
    action_button: import("../../../helpers").SuperParsedResult<import("../../../helpers").YTNode>;
    constructor(data: any);
}
export default LiveChatViewerEngagementMessage;
