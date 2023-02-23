import Parser from '../index.js';
import Text from './misc/Text.js';
import Author from './misc/Author.js';
import Menu from './menus/Menu.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MetadataBadge from './MetadataBadge.js';
import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
class Video extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        const overlay_time_status = ((_a = data.thumbnailOverlays
            .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || 'N/A';
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.description_snippet = data.descriptionSnippet ? new Text(data.descriptionSnippet) : null;
        this.snippets = ((_b = data.detailedMetadataSnippets) === null || _b === void 0 ? void 0 : _b.map((snippet) => ({
            text: new Text(snippet.snippetText),
            hover_text: new Text(snippet.snippetHoverText)
        }))) || [];
        this.expandable_metadata = Parser.parseItem(data.expandableMetadata);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        this.rich_thumbnail = data.richThumbnail ? Parser.parseItem(data.richThumbnail) : null;
        this.author = new Author(data.ownerText, data.ownerBadges, (_d = (_c = data.channelThumbnailSupportedRenderers) === null || _c === void 0 ? void 0 : _c.channelThumbnailWithLinkRenderer) === null || _d === void 0 ? void 0 : _d.thumbnail);
        this.badges = Parser.parseArray(data.badges, MetadataBadge);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.published = new Text(data.publishedTimeText);
        this.view_count = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
        if (upcoming) {
            this.upcoming = new Date(upcoming);
        }
        this.duration = {
            text: data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text,
            seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).text : new Text(overlay_time_status).text)
        };
        this.show_action_menu = data.showActionMenu;
        this.is_watched = data.isWatched || false;
        this.menu = Parser.parseItem(data.menu, Menu);
        this.search_video_result_entity_key = data.searchVideoResultEntityKey;
    }
    get description() {
        var _a;
        if (this.snippets.length > 0) {
            return this.snippets.map((snip) => snip.text.toString()).join('');
        }
        return ((_a = this.description_snippet) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    }
    get is_live() {
        return this.badges.some((badge) => {
            if (badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW' || badge.label === 'LIVE')
                return true;
        });
    }
    get is_upcoming() {
        return this.upcoming && this.upcoming > new Date();
    }
    get is_premiere() {
        return this.badges.some((badge) => badge.label === 'PREMIERE');
    }
    get is_4k() {
        return this.badges.some((badge) => badge.label === '4K');
    }
    get has_captions() {
        return this.badges.some((badge) => badge.label === 'CC');
    }
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
Video.type = 'Video';
export default Video;
//# sourceMappingURL=Video.js.map