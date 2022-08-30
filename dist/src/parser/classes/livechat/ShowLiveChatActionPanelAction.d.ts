import { YTNode } from '../../helpers';
declare class ShowLiveChatActionPanelAction extends YTNode {
    static type: string;
    panel_to_show: import("../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default ShowLiveChatActionPanelAction;
