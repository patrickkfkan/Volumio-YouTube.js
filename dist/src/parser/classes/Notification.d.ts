import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class Notification extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    video_thumbnails: Thumbnail[];
    short_message: Text;
    sent_time: Text;
    notification_id: any;
    endpoint: NavigationEndpoint;
    record_click_endpoint: NavigationEndpoint;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    read: boolean;
    constructor(data: any);
}
export default Notification;
