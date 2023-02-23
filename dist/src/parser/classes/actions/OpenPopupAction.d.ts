import { YTNode } from '../../helpers.js';
declare class OpenPopupAction extends YTNode {
    static type: string;
    popup: import("../../helpers.js").SuperParsedResult<YTNode>;
    popup_type: any;
    constructor(data: any);
}
export default OpenPopupAction;
