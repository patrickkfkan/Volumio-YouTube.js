import { YTNode } from '../helpers';
declare class ProfileColumn extends YTNode {
    static type: string;
    items: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers").SuperParsedResult<YTNode>;
}
export default ProfileColumn;
