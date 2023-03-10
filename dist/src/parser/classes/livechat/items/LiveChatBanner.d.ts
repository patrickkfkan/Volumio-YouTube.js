import { YTNode } from '../../../helpers.js';
import type LiveChatBannerHeader from './LiveChatBannerHeader.js';
import type { RawNode } from '../../../index.js';
declare class LiveChatBanner extends YTNode {
    static type: string;
    header: LiveChatBannerHeader | null;
    contents: YTNode | null;
    action_id: string;
    viewer_is_creator: boolean;
    target_id: string;
    is_stackable: boolean;
    background_type: string;
    constructor(data: RawNode);
}
export default LiveChatBanner;
