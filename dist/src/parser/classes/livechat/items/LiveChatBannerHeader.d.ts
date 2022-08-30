import { YTNode } from '../../../helpers';
declare class LiveChatBannerHeader extends YTNode {
    static type: string;
    text: string;
    icon_type: string;
    context_menu_button: import("../../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default LiveChatBannerHeader;
