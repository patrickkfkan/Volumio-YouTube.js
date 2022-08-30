import { YTNode } from '../../helpers';
declare class AddLiveChatTickerItemAction extends YTNode {
    static type: string;
    item: YTNode | null;
    duration_sec: any;
    constructor(data: any);
}
export default AddLiveChatTickerItemAction;
