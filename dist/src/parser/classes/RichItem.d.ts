import { YTNode } from '../helpers.js';
declare class RichItem extends YTNode {
    static type: string;
    content: YTNode | null;
    constructor(data: any);
}
export default RichItem;
