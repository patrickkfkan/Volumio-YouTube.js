import { YTNode } from '../../helpers';
declare class OpenPopupAction extends YTNode {
    static type: string;
    popup: import("../../helpers").SuperParsedResult<YTNode>;
    popup_type: any;
    constructor(data: any);
}
export default OpenPopupAction;
