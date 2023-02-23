import { YTNode } from '../../../helpers.js';
import type Button from '../../Button.js';
declare class LiveChatBannerHeader extends YTNode {
    static type: string;
    text: string;
    icon_type: string;
    context_menu_button: Button | null;
    constructor(data: any);
}
export default LiveChatBannerHeader;
