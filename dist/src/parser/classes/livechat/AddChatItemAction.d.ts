import { YTNode } from '../../helpers';
declare class AddChatItemAction extends YTNode {
    static type: string;
    item: YTNode | null;
    client_id: string | null;
    constructor(data: any);
}
export default AddChatItemAction;
