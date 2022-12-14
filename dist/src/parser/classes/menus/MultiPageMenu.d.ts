import { YTNode } from '../../helpers';
declare class MultiPageMenu extends YTNode {
    static type: string;
    header: import("../../helpers").SuperParsedResult<YTNode>;
    sections: import("../../helpers").SuperParsedResult<YTNode>;
    style: string;
    constructor(data: any);
}
export default MultiPageMenu;
