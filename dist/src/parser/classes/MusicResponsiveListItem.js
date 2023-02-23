// TODO: this needs a refactor
// Seems like a mess to use
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MusicResponsiveListItem_instances, _MusicResponsiveListItem_flex_columns, _MusicResponsiveListItem_fixed_columns, _MusicResponsiveListItem_playlist_item_data, _MusicResponsiveListItem_parseOther, _MusicResponsiveListItem_parseVideoOrSong, _MusicResponsiveListItem_parseSong, _MusicResponsiveListItem_parseVideo, _MusicResponsiveListItem_parseArtist, _MusicResponsiveListItem_parseLibraryArtist, _MusicResponsiveListItem_parseAlbum, _MusicResponsiveListItem_parsePlaylist;
import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import MusicResponsiveListItemFlexColumn from './MusicResponsiveListItemFlexColumn.js';
import MusicResponsiveListItemFixedColumn from './MusicResponsiveListItemFixedColumn.js';
import Menu from './menus/Menu.js';
import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
class MusicResponsiveListItem extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        super();
        _MusicResponsiveListItem_instances.add(this);
        _MusicResponsiveListItem_flex_columns.set(this, void 0);
        _MusicResponsiveListItem_fixed_columns.set(this, void 0);
        _MusicResponsiveListItem_playlist_item_data.set(this, void 0);
        __classPrivateFieldSet(this, _MusicResponsiveListItem_flex_columns, Parser.parseArray(data.flexColumns, MusicResponsiveListItemFlexColumn), "f");
        __classPrivateFieldSet(this, _MusicResponsiveListItem_fixed_columns, Parser.parseArray(data.fixedColumns, MusicResponsiveListItemFixedColumn), "f");
        __classPrivateFieldSet(this, _MusicResponsiveListItem_playlist_item_data, {
            video_id: ((_a = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _a === void 0 ? void 0 : _a.videoId) || null,
            playlist_set_video_id: ((_b = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _b === void 0 ? void 0 : _b.playlistSetVideoId) || null
        }, "f");
        this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : null;
        const page_type = (_f = (_e = (_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseEndpointContextSupportedConfigs) === null || _e === void 0 ? void 0 : _e.browseEndpointContextMusicConfig) === null || _f === void 0 ? void 0 : _f.pageType;
        switch (page_type) {
            case 'MUSIC_PAGE_TYPE_ALBUM':
                this.item_type = 'album';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseAlbum).call(this);
                break;
            case 'MUSIC_PAGE_TYPE_PLAYLIST':
                this.item_type = 'playlist';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parsePlaylist).call(this);
                break;
            case 'MUSIC_PAGE_TYPE_ARTIST':
            case 'MUSIC_PAGE_TYPE_USER_CHANNEL':
                this.item_type = 'artist';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseArtist).call(this);
                break;
            case 'MUSIC_PAGE_TYPE_LIBRARY_ARTIST':
                this.item_type = 'library_artist';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseLibraryArtist).call(this);
                break;
            default:
                if (__classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1]) {
                    __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideoOrSong).call(this);
                }
                else {
                    __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseOther).call(this);
                }
                break;
        }
        if (data.index) {
            this.index = new Text(data.index);
        }
        this.thumbnails = data.thumbnail ? Thumbnail.fromResponse((_g = data.thumbnail.musicThumbnailRenderer) === null || _g === void 0 ? void 0 : _g.thumbnail) : [];
        this.badges = Parser.parseArray(data.badges);
        this.menu = Parser.parseItem(data.menu, Menu);
        this.overlay = Parser.parseItem(data.overlay, MusicItemThumbnailOverlay);
    }
}
_MusicResponsiveListItem_flex_columns = new WeakMap(), _MusicResponsiveListItem_fixed_columns = new WeakMap(), _MusicResponsiveListItem_playlist_item_data = new WeakMap(), _MusicResponsiveListItem_instances = new WeakSet(), _MusicResponsiveListItem_parseOther = function _MusicResponsiveListItem_parseOther() {
    this.title = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[0].key('title').instanceof(Text).toString();
    if (this.endpoint) {
        this.item_type = 'endpoint';
    }
    else {
        this.item_type = 'unknown';
    }
}, _MusicResponsiveListItem_parseVideoOrSong = function _MusicResponsiveListItem_parseVideoOrSong() {
    var _a;
    const is_video = (_a = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _a === void 0 ? void 0 : _a.some((run) => run.text.match(/(.*?) views/));
    if (is_video) {
        this.item_type = 'video';
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideo).call(this);
    }
    else {
        this.item_type = 'song';
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseSong).call(this);
    }
}, _MusicResponsiveListItem_parseSong = function _MusicResponsiveListItem_parseSong() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    this.id = __classPrivateFieldGet(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id || ((_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.videoId);
    this.title = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[0].key('title').instanceof(Text).toString();
    /*** Volumio-YouTube.js ***/
    this.subtitle = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text);
    const duration_text = ((_d = (_c = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _c === void 0 ? void 0 : _c.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))) === null || _d === void 0 ? void 0 : _d.text) ||
        ((_g = (_f = (_e = __classPrivateFieldGet(this, _MusicResponsiveListItem_fixed_columns, "f")) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.key('title').instanceof(Text)) === null || _g === void 0 ? void 0 : _g.toString());
    duration_text && (this.duration = {
        text: duration_text,
        seconds: timeToSeconds(duration_text)
    });
    const album = ((_h = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _h === void 0 ? void 0 : _h.find((run) => { var _a, _b; return (_b = (_a = Reflect.get(run, 'endpoint')) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('MPR'); })) ||
        ((_k = (_j = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[2]) === null || _j === void 0 ? void 0 : _j.key('title').instanceof(Text).runs) === null || _k === void 0 ? void 0 : _k.find((run) => { var _a, _b; return (_b = (_a = Reflect.get(run, 'endpoint')) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('MPR'); }));
    if (album) {
        this.album = {
            id: (_m = (_l = album.endpoint) === null || _l === void 0 ? void 0 : _l.payload) === null || _m === void 0 ? void 0 : _m.browseId,
            name: album.text,
            endpoint: album.endpoint
        };
    }
    const artists = (_o = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _o === void 0 ? void 0 : _o.filter((run) => { var _a, _b; return (_b = (_a = Reflect.get(run, 'endpoint')) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('UC'); });
    if (artists) {
        this.artists = artists.map((artist) => {
            var _a, _b;
            return ({
                name: artist.text,
                channel_id: (_b = (_a = artist.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId,
                endpoint: artist.endpoint
            });
        });
    }
}, _MusicResponsiveListItem_parseVideo = function _MusicResponsiveListItem_parseVideo() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.id = __classPrivateFieldGet(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id;
    this.title = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[0].key('title').instanceof(Text).toString();
    /*** Volumio-YouTube.js ***/
    this.subtitle = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text);
    this.views = (_b = (_a = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _a === void 0 ? void 0 : _a.find((run) => run.text.match(/(.*?) views/))) === null || _b === void 0 ? void 0 : _b.text;
    const authors = (_c = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _c === void 0 ? void 0 : _c.filter((run) => { var _a, _b; return (_b = (_a = Reflect.get(run, 'endpoint')) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('UC'); });
    if (authors) {
        this.authors = authors.map((author) => {
            var _a, _b;
            return ({
                name: author.text,
                channel_id: (_b = (_a = author.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId,
                endpoint: author.endpoint
            });
        });
    }
    const duration_text = ((_e = (_d = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _d === void 0 ? void 0 : _d.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))) === null || _e === void 0 ? void 0 : _e.text) ||
        ((_h = (_g = (_f = __classPrivateFieldGet(this, _MusicResponsiveListItem_fixed_columns, "f")[0]) === null || _f === void 0 ? void 0 : _f.key('title').instanceof(Text).runs) === null || _g === void 0 ? void 0 : _g.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))) === null || _h === void 0 ? void 0 : _h.text);
    duration_text && (this.duration = {
        text: duration_text,
        seconds: timeToSeconds(duration_text)
    });
}, _MusicResponsiveListItem_parseArtist = function _MusicResponsiveListItem_parseArtist() {
    var _a, _b, _c, _d;
    this.id = (_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId;
    this.name = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[0].key('title').instanceof(Text).toString();
    this.subtitle = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text);
    this.subscribers = ((_d = (_c = this.subtitle.runs) === null || _c === void 0 ? void 0 : _c.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))) === null || _d === void 0 ? void 0 : _d.text) || '';
}, _MusicResponsiveListItem_parseLibraryArtist = function _MusicResponsiveListItem_parseLibraryArtist() {
    var _a, _b, _c;
    this.name = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[0].key('title').instanceof(Text).toString();
    this.subtitle = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text);
    this.song_count = ((_c = (_b = (_a = this.subtitle) === null || _a === void 0 ? void 0 : _a.runs) === null || _b === void 0 ? void 0 : _b.find((run) => (/^\d+(,\d+)? songs?$/i).test(run.text))) === null || _c === void 0 ? void 0 : _c.text) || '';
}, _MusicResponsiveListItem_parseAlbum = function _MusicResponsiveListItem_parseAlbum() {
    var _a, _b, _c, _d, _e, _f, _g;
    this.id = (_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId;
    this.title = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[0].key('title').instanceof(Text).toString();
    /*** Volumio-YouTube.js ***/
    this.subtitle = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text);
    const author = (_c = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _c === void 0 ? void 0 : _c.find((run) => { var _a, _b; return (_b = (_a = Reflect.get(run, 'endpoint')) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('UC'); });
    author && (this.author = {
        name: author.text,
        channel_id: (_e = (_d = author.endpoint) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.browseId,
        endpoint: author.endpoint
    });
    this.year = (_g = (_f = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _f === void 0 ? void 0 : _f.find((run) => (/^[12][0-9]{3}$/).test(run.text))) === null || _g === void 0 ? void 0 : _g.text;
}, _MusicResponsiveListItem_parsePlaylist = function _MusicResponsiveListItem_parsePlaylist() {
    var _a, _b, _c, _d, _e, _f;
    this.id = (_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId;
    this.title = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[0].key('title').instanceof(Text).toString();
    /*** Volumio-YouTube.js ***/
    this.subtitle = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text);
    const item_count_run = (_c = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title')
        .instanceof(Text).runs) === null || _c === void 0 ? void 0 : _c.find((run) => run.text.match(/\d+ (song|songs)/));
    this.item_count = item_count_run ? item_count_run.text : undefined;
    const author = (_d = __classPrivateFieldGet(this, _MusicResponsiveListItem_flex_columns, "f")[1].key('title').instanceof(Text).runs) === null || _d === void 0 ? void 0 : _d.find((run) => { var _a, _b; return (_b = (_a = Reflect.get(run, 'endpoint')) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('UC'); });
    if (author) {
        this.author = {
            name: author.text,
            channel_id: (_f = (_e = author.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseId,
            endpoint: author.endpoint
        };
    }
};
MusicResponsiveListItem.type = 'MusicResponsiveListItem';
export default MusicResponsiveListItem;
//# sourceMappingURL=MusicResponsiveListItem.js.map