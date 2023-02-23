import { YTNode } from '../../helpers.js';
declare class ShowLiveChatTooltipCommand extends YTNode {
    static type: string;
    tooltip: YTNode | null;
    constructor(data: any);
}
export default ShowLiveChatTooltipCommand;
