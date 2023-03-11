import { YTNode } from '../../../helpers.js';
import type Button from '../../Button.js';
import type { RawNode } from '../../../index.js';
declare class LiveChatBannerHeader extends YTNode {
    static type: string;
    text: string;
    icon_type: string;
    context_menu_button: Button | null;
    constructor(data: RawNode);
}
export default LiveChatBannerHeader;
