import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class CompactChannel extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.channel_id = data.channelId;
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.display_name = new Text(data.displayName);
        this.video_count = new Text(data.videoCountText);
        this.subscriber_count = new Text(data.subscriberCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
        this.menu = Parser.parseItem(data.menu);
    }
}
CompactChannel.type = 'CompactChannel';
export default CompactChannel;
//# sourceMappingURL=CompactChannel.js.map