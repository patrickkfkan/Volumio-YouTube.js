import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SubscribeButton extends YTNode {
    static type: string;
    title: Text;
    subscribed: boolean;
    enabled: boolean;
    item_type: string;
    channel_id: string;
    show_preferences: boolean;
    subscribed_text: Text;
    unsubscribed_text: Text;
    notification_preference_button: import("../helpers").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SubscribeButton;
