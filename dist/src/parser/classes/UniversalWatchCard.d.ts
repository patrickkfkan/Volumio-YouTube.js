import { YTNode } from '../helpers';
declare class UniversalWatchCard extends YTNode {
    static type: string;
    header: import("../helpers").SuperParsedResult<YTNode>;
    call_to_action: import("../helpers").SuperParsedResult<YTNode>;
    sections: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default UniversalWatchCard;
