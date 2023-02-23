import { YTNode } from '../../helpers.js';
declare class ReplayChatItemAction extends YTNode {
    static type: string;
    actions: import("../../helpers.js").ObservedArray<YTNode>;
    video_offset_time_msec: string;
    constructor(data: any);
}
export default ReplayChatItemAction;
