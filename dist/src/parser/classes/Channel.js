import Parser from '../index.js';
import Text from './misc/Text.js';
import Author from './misc/Author.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class Channel extends YTNode {
    constructor(data) {
        super();
        this.id = data.channelId;
        this.author = new Author(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.ownerBadges, data.thumbnail);
        // TODO: subscriberCountText is now the channel's handle and videoCountText is the subscriber count. Why haven't they renamed the properties?
        this.subscribers = new Text(data.subscriberCountText);
        this.videos = new Text(data.videoCountText);
        this.long_byline = new Text(data.longBylineText);
        this.short_byline = new Text(data.shortBylineText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.subscribe_button = Parser.parseItem(data.subscribeButton);
        this.description_snippet = new Text(data.descriptionSnippet);
    }
}
Channel.type = 'Channel';
export default Channel;
//# sourceMappingURL=Channel.js.map