import { YTNode } from '../helpers.js';
declare class BackstagePostThread extends YTNode {
    static type: string;
    post: YTNode | null;
    constructor(data: any);
}
export default BackstagePostThread;
