import { YTNode } from '../../helpers.js';
import type LiveChatBanner from './items/LiveChatBanner.js';
declare class AddBannerToLiveChatCommand extends YTNode {
    static type: string;
    banner: LiveChatBanner | null;
    constructor(data: any);
}
export default AddBannerToLiveChatCommand;
