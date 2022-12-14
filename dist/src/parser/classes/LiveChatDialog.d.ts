import Text from './misc/Text';
import Button from './Button';
import { YTNode } from '../helpers';
declare class LiveChatDialog extends YTNode {
    static type: string;
    confirm_button: Button | null;
    dialog_messages: Text[];
    constructor(data: any);
}
export default LiveChatDialog;
