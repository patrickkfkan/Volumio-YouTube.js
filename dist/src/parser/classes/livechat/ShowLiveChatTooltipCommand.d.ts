import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class ShowLiveChatTooltipCommand extends YTNode {
    static type: string;
    tooltip: YTNode | null;
    constructor(data: RawNode);
}
export default ShowLiveChatTooltipCommand;
