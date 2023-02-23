import Text from './misc/Text.js';
import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import NavigatableText from './misc/NavigatableText.js';
import { YTNode } from '../helpers.js';
class GridPlaylist extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.id = data.playlistId;
        this.title = new Text(data.title);
        if (data.shortBylineText) {
            this.author = new PlaylistAuthor(data.shortBylineText, data.ownerBadges);
        }
        this.badges = Parser.parse(data.ownerBadges);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.view_playlist = new NavigatableText(data.viewPlaylistText);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
        this.sidebar_thumbnails = [].concat(...((_a = data.sidebarThumbnails) === null || _a === void 0 ? void 0 : _a.map((thumbnail) => Thumbnail.fromResponse(thumbnail))) || []) || null;
        this.video_count = new Text(data.thumbnailText);
        this.video_count_short = new Text(data.videoCountShortText);
    }
}
GridPlaylist.type = 'GridPlaylist';
export default GridPlaylist;
//# sourceMappingURL=GridPlaylist.js.map