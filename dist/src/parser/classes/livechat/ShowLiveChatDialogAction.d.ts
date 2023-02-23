import { YTNode } from '../../helpers.js';
declare class ShowLiveChatDialogAction extends YTNode {
    static type: string;
    dialog: YTNode | null;
    constructor(data: any);
}
export default ShowLiveChatDialogAction;
