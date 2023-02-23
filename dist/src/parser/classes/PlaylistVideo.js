import Text from './misc/Text.js';
import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.js';
import { YTNode } from '../helpers.js';
class PlaylistVideo extends YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.index = new Text(data.index);
        this.title = new Text(data.title);
        this.author = new PlaylistAuthor(data.shortBylineText);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        this.set_video_id = data === null || data === void 0 ? void 0 : data.setVideoId;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.is_playable = data.isPlayable;
        this.menu = Parser.parseItem(data.menu);
        const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
        if (upcoming) {
            this.upcoming = new Date(upcoming);
        }
        this.duration = {
            text: new Text(data.lengthText).text,
            seconds: parseInt(data.lengthSeconds)
        };
    }
    get is_live() {
        var _a;
        return ((_a = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus)) === null || _a === void 0 ? void 0 : _a.style) === 'LIVE';
    }
    get is_upcoming() {
        var _a;
        return ((_a = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus)) === null || _a === void 0 ? void 0 : _a.style) === 'UPCOMING';
    }
}
PlaylistVideo.type = 'PlaylistVideo';
export default PlaylistVideo;
//# sourceMappingURL=PlaylistVideo.js.map