import { YTNode } from '../helpers';
declare class MerchandiseShelf extends YTNode {
    static type: string;
    title: string;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    items: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers").SuperParsedResult<YTNode>;
}
export default MerchandiseShelf;
