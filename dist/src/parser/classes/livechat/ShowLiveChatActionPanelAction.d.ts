import { YTNode } from '../../helpers.js';
import LiveChatActionPanel from './LiveChatActionPanel.js';
declare class ShowLiveChatActionPanelAction extends YTNode {
    static type: string;
    panel_to_show: LiveChatActionPanel | null;
    constructor(data: any);
}
export default ShowLiveChatActionPanelAction;
