import { YTNode } from '../helpers.js';
declare class ProfileColumn extends YTNode {
    static type: string;
    items: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers.js").SuperParsedResult<YTNode>;
}
export default ProfileColumn;
