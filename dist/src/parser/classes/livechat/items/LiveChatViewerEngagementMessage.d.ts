import LiveChatTextMessage from './LiveChatTextMessage.js';
import type { RawNode } from '../../../index.js';
declare class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
    static type: string;
    icon_type: string;
    action_button: import("../../../helpers.js").YTNode | null;
    constructor(data: RawNode);
}
export default LiveChatViewerEngagementMessage;
