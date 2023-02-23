var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Playlist_instances, _Playlist_getStat;
import Feed from '../../core/Feed.js';
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
        var _a, _b;
        super(actions, data, already_parsed);
        _Playlist_instances.add(this);
        const header = this.memo.getType(PlaylistHeader).first();
        const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo).first();
        const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo).first();
        if (!primary_info && !secondary_info)
            throw new InnertubeError('This playlist does not exist');
        this.info = Object.assign(Object.assign({}, (_a = this.page.metadata) === null || _a === void 0 ? void 0 : _a.item().as(PlaylistMetadata)), {
            author: (_b = secondary_info === null || secondary_info === void 0 ? void 0 : secondary_info.owner.item().as(VideoOwner).author) !== null && _b !== void 0 ? _b : header === null || header === void 0 ? void 0 : header.author,
            thumbnails: primary_info === null || primary_info === void 0 ? void 0 : primary_info.thumbnail_renderer.item().as(PlaylistVideoThumbnail, PlaylistCustomThumbnail).thumbnail,
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