import { YTNode } from '../helpers.js';
declare class MerchandiseShelf extends YTNode {
    static type: string;
    title: string;
    menu: import("../helpers.js").SuperParsedResult<YTNode>;
    items: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers.js").SuperParsedResult<YTNode>;
}
export default MerchandiseShelf;
