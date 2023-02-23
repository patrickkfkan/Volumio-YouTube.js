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
var _Library_instances, _Library_getAll;
import { InnertubeError } from '../../utils/Utils.js';
import Feed from '../../core/Feed.js';
import History from './History.js';
import Playlist from './Playlist.js';
import Menu from '../classes/menus/Menu.js';
import Shelf from '../classes/Shelf.js';
import Button from '../classes/Button.js';
import ProfileColumnStats from '../classes/ProfileColumnStats.js';
import ProfileColumnUserInfo from '../classes/ProfileColumnUserInfo.js';
class Library extends Feed {
    constructor(actions, data) {
        var _a, _b;
        super(actions, data);
        _Library_instances.add(this);
        if (!this.page.contents_memo)
            throw new InnertubeError('Page contents not found');
        const stats = (_a = this.page.contents_memo.getType(ProfileColumnStats)) === null || _a === void 0 ? void 0 : _a[0];
        const user_info = (_b = this.page.contents_memo.getType(ProfileColumnUserInfo)) === null || _b === void 0 ? void 0 : _b[0];
        this.profile = { stats, user_info };
        const shelves = this.page.contents_memo.getType(Shelf);
        this.sections = shelves.map((shelf) => {
            var _a;
            return ({
                type: shelf.icon_type,
                title: shelf.title,
                contents: ((_a = shelf.content) === null || _a === void 0 ? void 0 : _a.key('items').array()) || [],
                getAll: () => __classPrivateFieldGet(this, _Library_instances, "m", _Library_getAll).call(this, shelf)
            });
        });
    }
    get history() {
        return this.sections.find((section) => section.type === 'WATCH_HISTORY');
    }
    get watch_later() {
        return this.sections.find((section) => section.type === 'WATCH_LATER');
    }
    get liked_videos() {
        return this.sections.find((section) => section.type === 'LIKE');
    }
    get playlists_section() {
        return this.sections.find((section) => section.type === 'PLAYLISTS');
    }
    get clips() {
        return this.sections.find((section) => section.type === 'CONTENT_CUT');
    }
}
_Library_instances = new WeakSet(), _Library_getAll = function _Library_getAll(shelf) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!((_a = shelf.menu) === null || _a === void 0 ? void 0 : _a.as(Menu).hasKey('top_level_buttons')))
            throw new InnertubeError(`The ${shelf.title.text} shelf doesn't have more items`);
        const button = shelf.menu.as(Menu).top_level_buttons.firstOfType(Button);
        if (!button)
            throw new InnertubeError('Did not find target button.');
        const page = yield button.as(Button).endpoint.call(this.actions, { parse: true });
        switch (shelf.icon_type) {
            case 'LIKE':
            case 'WATCH_LATER':
                return new Playlist(this.actions, page, true);
            case 'WATCH_HISTORY':
                return new History(this.actions, page, true);
            case 'CONTENT_CUT':
                return new Feed(this.actions, page, true);
            default:
                throw new InnertubeError('Target shelf not implemented.');
        }
    });
};
export default Library;
//# sourceMappingURL=Library.js.map