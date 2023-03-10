import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class OpenPopupAction extends YTNode {
    static type: string;
    popup: import("../../helpers.js").SuperParsedResult<YTNode>;
    popup_type: any;
    constructor(data: RawNode);
}
export default OpenPopupAction;
