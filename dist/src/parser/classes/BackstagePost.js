import Parser from '../index.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class BackstagePost extends YTNode {
    constructor(data) {
        super();
        this.id = data.postId;
        this.author = new Author(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), null, data.authorThumbnail);
        this.content = new Text(data.contentText);
        this.published = new Text(data.publishedTimeText);
        if (data.pollStatus) {
            this.poll_status = data.pollStatus;
        }
        if (data.voteStatus) {
            this.vote_status = data.voteStatus;
        }
        if (data.voteCount) {
            this.vote_count = new Text(data.voteCount);
        }
        if (data.actionMenu) {
            this.menu = Parser.parseItem(data.actionMenu);
        }
        if (data.actionButtons) {
            this.action_buttons = Parser.parseItem(data.actionButtons);
        }
        if (data.voteButton) {
            this.vote_button = Parser.parseItem(data.voteButton);
        }
        if (data.navigationEndpoint) {
            this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        }
        if (data.backstageAttachment) {
            this.attachment = Parser.parseItem(data.backstageAttachment);
        }
        this.surface = data.surface;
    }
}
BackstagePost.type = 'BackstagePost';
export default BackstagePost;
//# sourceMappingURL=BackstagePost.js.map