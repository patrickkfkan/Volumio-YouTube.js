import { YTNode } from '../helpers';
declare class Message extends YTNode {
    static type: string;
    text: string;
    constructor(data: any);
}
export default Message;
