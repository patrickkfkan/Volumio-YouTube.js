import { YTNode } from '../helpers';
declare class MusicQueue extends YTNode {
    static type: string;
    content: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default MusicQueue;
