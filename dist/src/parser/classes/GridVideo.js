import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Author from './misc/Author.js';
import { YTNode } from '../helpers.js';
class GridVideo extends YTNode {
    constructor(data) {
        var _a;
        super();
        const length_alt = (_a = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer;
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
        this.published = new Text(data.publishedTimeText);
        this.duration = data.lengthText ? new Text(data.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text(length_alt.text) : null;
        this.author = data.shortBylineText && new Author(data.shortBylineText, data.ownerBadges);
        this.views = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.menu = Parser.parseItem(data.menu);
    }
}
GridVideo.type = 'GridVideo';
export default GridVideo;
//# sourceMappingURL=GridVideo.js.map