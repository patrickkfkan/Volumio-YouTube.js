import { YTNode } from '../../helpers.js';
import type LiveChatBanner from './items/LiveChatBanner.js';
import type { RawNode } from '../../index.js';
declare class AddBannerToLiveChatCommand extends YTNode {
    static type: string;
    banner: LiveChatBanner | null;
    constructor(data: RawNode);
}
export default AddBannerToLiveChatCommand;
