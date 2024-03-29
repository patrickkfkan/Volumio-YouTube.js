var _Playlist_instances, _Playlist_getStat;
import { __awaiter, __classPrivateFieldGet } from "tslib";
import Feed from '../../core/mixins/Feed.js';
import Message from '../classes/Message.js';
import PlaylistCustomThumbnail from '../classes/PlaylistCustomThumbnail.js';
import PlaylistHeader from '../classes/PlaylistHeader.js';
import PlaylistMetadata from '../classes/PlaylistMetadata.js';
import PlaylistSidebarPrimaryInfo from '../classes/PlaylistSidebarPrimaryInfo.js';
import PlaylistSidebarSecondaryInfo from '../classes/PlaylistSidebarSecondaryInfo.js';
import PlaylistVideoThumbnail from '../classes/PlaylistVideoThumbnail.js';
import VideoOwner from '../classes/VideoOwner.js';
import { InnertubeError } from '../../utils/Utils.js';
class Playlist extends Feed {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c, _d;
        super(actions, data, already_parsed);
        _Playlist_instances.add(this);
        const header = this.memo.getType(PlaylistHeader).first();
        const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo).first();
        const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo).first();
        if (!primary_info && !secondary_info)
            throw new InnertubeError('This playlist does not exist');
        this.info = Object.assign(Object.assign({}, (_a = this.page.metadata) === null || _a === void 0 ? void 0 : _a.item().as(PlaylistMetadata)), {
            author: (_c = (_b = secondary_info === null || secondary_info === void 0 ? void 0 : secondary_info.owner) === null || _b === void 0 ? void 0 : _b.as(VideoOwner).author) !== null && _c !== void 0 ? _c : header === null || header === void 0 ? void 0 : header.author,
            thumbnails: (_d = primary_info === null || primary_info === void 0 ? void 0 : primary_info.thumbnail_renderer) === null || _d === void 0 ? void 0 : _d.as(PlaylistVideoThumbnail, PlaylistCustomThumbnail).thumbnail,
            total_items: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 0, primary_info),
            views: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 1, primary_info),
            last_updated: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 2, primary_info),
            can_share: header === null || header === void 0 ? void 0 : header.can_share,
            can_delete: header === null || header === void 0 ? void 0 : header.can_delete,
            is_editable: header === null || header === void 0 ? void 0 : header.is_editable,
            privacy: header === null || header === void 0 ? void 0 : header.privacy
        });
        this.menu = primary_info === null || primary_info === void 0 ? void 0 : primary_info.menu;
        this.endpoint = primary_info === null || primary_info === void 0 ? void 0 : primary_info.endpoint;
        this.messages = this.memo.getType(Message);
    }
    get items() {
        return this.videos;
    }
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield this.getContinuationData();
            if (!page)
                throw new InnertubeError('Could not get continuation data');
            return new Playlist(this.actions, page, true);
        });
    }
}
_Playlist_instances = new WeakSet(), _Playlist_getStat = function _Playlist_getStat(index, primary_info) {
    var _a;
    if (!primary_info || !primary_info.stats)
        return 'N/A';
    return ((_a = primary_info.stats[index]) === null || _a === void 0 ? void 0 : _a.toString()) || 'N/A';
};
export default Playlist;
//# sourceMappingURL=Playlist.js.map