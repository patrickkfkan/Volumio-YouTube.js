import { YTNode } from '../../helpers';
declare class ReplayChatItemAction extends YTNode {
    static type: string;
    actions: import("../../helpers").SuperParsedResult<YTNode>;
    video_offset_time_msec: string;
    constructor(data: any);
}
export default ReplayChatItemAction;
