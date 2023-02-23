import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class Notification extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    video_thumbnails: Thumbnail[];
    short_message: Text;
    sent_time: Text;
    notification_id: any;
    endpoint: NavigationEndpoint;
    record_click_endpoint: NavigationEndpoint;
    menu: import("../helpers.js").SuperParsedResult<YTNode>;
    read: boolean;
    constructor(data: any);
}
export default Notification;
