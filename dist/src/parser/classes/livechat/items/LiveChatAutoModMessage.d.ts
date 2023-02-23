import { ObservedArray, YTNode } from '../../../helpers.js';
import Button from '../../Button.js';
import Text from '../../misc/Text.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
declare class LiveChatAutoModMessage extends YTNode {
    static type: string;
    auto_moderated_item: YTNode | null;
    header_text: Text;
    menu_endpoint?: NavigationEndpoint;
    moderation_buttons: ObservedArray<Button>;
    timestamp: number;
    id: string;
    constructor(data: any);
}
export default LiveChatAutoModMessage;
