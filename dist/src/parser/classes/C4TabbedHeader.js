import Parser from '../index.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class C4TabbedHeader extends YTNode {
    constructor(data) {
        super();
        this.author = new Author({
            simpleText: data.title,
            navigationEndpoint: data.navigationEndpoint
        }, data.badges, data.avatar);
        if (data.banner) {
            this.banner = Thumbnail.fromResponse(data.banner);
        }
        if (data.tv_banner) {
            this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
        }
        if (data.mobile_banner) {
            this.mobile_banner = Thumbnail.fromResponse(data.mobileBanner);
        }
        if (data.subscriberCountText) {
            this.subscribers = new Text(data.subscriberCountText);
        }
        if (data.videosCountText) {
            this.videos_count = new Text(data.videosCountText);
        }
        if (data.sponsorButton) {
            this.sponsor_button = Parser.parseItem(data.sponsorButton);
        }
        if (data.subscribeButton) {
            this.subscribe_button = Parser.parseItem(data.subscribeButton);
        }
        if (data.headerLinks) {
            this.header_links = Parser.parseItem(data.headerLinks);
        }
        if (data.channelHandleText) {
            this.channel_handle = new Text(data.channelHandleText);
        }
        if (data.channelId) {
            this.channel_id = data.channelId;
        }
    }
}
C4TabbedHeader.type = 'C4TabbedHeader';
export default C4TabbedHeader;
//# sourceMappingURL=C4TabbedHeader.js.map