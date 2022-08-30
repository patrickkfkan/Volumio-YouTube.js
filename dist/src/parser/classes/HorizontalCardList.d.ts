import { YTNode } from '../helpers';
declare class HorizontalCardList extends YTNode {
    static type: string;
    cards: import("../helpers").SuperParsedResult<YTNode>;
    header: import("../helpers").SuperParsedResult<YTNode>;
    previous_button: import("../helpers").SuperParsedResult<YTNode>;
    next_button: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default HorizontalCardList;
