import { YTNode } from '../helpers.js';
import Parser from '../parser.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ShowCustomThumbnail from './ShowCustomThumbnail.js';
import ThumbnailOverlayBottomPanel from './ThumbnailOverlayBottomPanel.js';
class GridShow extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.thumbnail_renderer = Parser.parseItem(data.thumbnailRenderer, ShowCustomThumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.long_byline_text = new Text(data.longBylineText);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays, ThumbnailOverlayBottomPanel);
        this.author = new Author(data.shortBylineText, undefined);
    }
}
GridShow.type = 'GridShow';
export default GridShow;
//# sourceMappingURL=GridShow.js.map