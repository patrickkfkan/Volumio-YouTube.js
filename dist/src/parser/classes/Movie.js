import Parser from '../index.js';
import Author from './misc/Author.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { timeToSeconds } from '../../utils/Utils.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class Movie extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        const overlay_time_status = ((_a = data.thumbnailOverlays
            .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || 'N/A';
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet) : null;
        this.top_metadata_items = new Text(data.topMetadataItems);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.author = new Author(data.longBylineText, data.ownerBadges, (_c = (_b = data.channelThumbnailSupportedRenderers) === null || _b === void 0 ? void 0 : _b.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
        this.duration = {
            text: data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text,
            seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.badges = Parser.parse(data.badges);
        this.use_vertical_poster = data.useVerticalPoster;
        this.show_action_menu = data.showActionMenu;
        this.menu = Parser.parse(data.menu);
    }
}
Movie.type = 'Movie';
export default Movie;
//# sourceMappingURL=Movie.js.map