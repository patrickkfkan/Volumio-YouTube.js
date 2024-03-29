import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
class Playlist extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.author = ((_a = data.shortBylineText) === null || _a === void 0 ? void 0 : _a.simpleText) ?
            new Text(data.shortBylineText) :
            new Author(data.longBylineText, data.ownerBadges, null);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail || { thumbnails: data.thumbnails.map((th) => th.thumbnails).flat(1) });
        this.video_count = new Text(data.thumbnailText);
        this.video_count_short = new Text(data.videoCountShortText);
        this.first_videos = Parser.parseArray(data.videos);
        this.share_url = data.shareUrl || null;
        this.menu = Parser.parseItem(data.menu);
        this.badges = Parser.parseArray(data.ownerBadges);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        if (Reflect.has(data, 'viewPlaylistText')) {
            this.view_playlist = new Text(data.viewPlaylistText);
        }
    }
}
Playlist.type = 'Playlist';
export default Playlist;
//# sourceMappingURL=Playlist.js.map