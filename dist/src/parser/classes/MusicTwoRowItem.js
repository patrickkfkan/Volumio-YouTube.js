"use strict";
// TODO: refactor this
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const MusicItemThumbnailOverlay_1 = __importDefault(require("./MusicItemThumbnailOverlay"));
const Menu_1 = __importDefault(require("./menus/Menu"));
const helpers_1 = require("../helpers");
class MusicTwoRowItem extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        super();
        this.title = new Text_1.default(data.title);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.id =
            ((_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id) ||
                ((_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.watch) === null || _d === void 0 ? void 0 : _d.video_id);
        this.subtitle = new Text_1.default(data.subtitle);
        this.badges = index_1.default.parse(data.subtitleBadges);
        switch ((_f = (_e = this.endpoint) === null || _e === void 0 ? void 0 : _e.browse) === null || _f === void 0 ? void 0 : _f.page_type) {
            case 'MUSIC_PAGE_TYPE_ARTIST':
                this.item_type = 'artist';
                break;
            case 'MUSIC_PAGE_TYPE_PLAYLIST':
                this.item_type = 'playlist';
                break;
            case 'MUSIC_PAGE_TYPE_ALBUM':
                this.item_type = 'album';
                break;
            default:
                if ((_g = this.endpoint) === null || _g === void 0 ? void 0 : _g.watch_playlist) {
                    this.item_type = 'endpoint';
                }
                else if ((_h = this.subtitle.runs) === null || _h === void 0 ? void 0 : _h[0]) {
                    if (this.subtitle.runs[0].text !== 'Song') {
                        this.item_type = 'video';
                    }
                    else {
                        this.item_type = 'song';
                    }
                }
                else if (this.endpoint) {
                    this.item_type = 'endpoint';
                }
                else {
                    this.item_type = 'unknown';
                }
                break;
        }
        if (this.item_type == 'artist') {
            this.subscribers = ((_k = (_j = this.subtitle.runs) === null || _j === void 0 ? void 0 : _j.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))) === null || _k === void 0 ? void 0 : _k.text) || '';
        }
        else if (this.item_type == 'playlist') {
            const item_count_run = (_l = this.subtitle.runs) === null || _l === void 0 ? void 0 : _l.find((run) => run.text.match(/\d+ songs|song/));
            this.item_count = item_count_run ? item_count_run.text : null;
        }
        else if (this.item_type == 'album') {
            const artists = (_m = this.subtitle.runs) === null || _m === void 0 ? void 0 : _m.filter((run) => { var _a, _b; return (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id.startsWith('UC'); });
            if (artists) {
                this.artists = artists.map((artist) => ({
                    name: artist.text,
                    channel_id: artist.endpoint.browse.id,
                    endpoint: artist.endpoint
                }));
            }
            this.year = (_o = this.subtitle.runs) === null || _o === void 0 ? void 0 : _o.slice(-1)[0].text;
            if (isNaN(Number(this.year)))
                delete this.year;
        }
        else if (this.item_type == 'video') {
            this.views = ((_q = (_p = this === null || this === void 0 ? void 0 : this.subtitle.runs) === null || _p === void 0 ? void 0 : _p.find((run) => run === null || run === void 0 ? void 0 : run.text.match(/(.*?) views/))) === null || _q === void 0 ? void 0 : _q.text) || 'N/A';
            const author = (_r = this.subtitle.runs) === null || _r === void 0 ? void 0 : _r.find((run) => { var _a, _b, _c; return (_c = (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.startsWith('UC'); });
            if (author) {
                this.author = {
                    name: author === null || author === void 0 ? void 0 : author.text,
                    channel_id: (_t = (_s = author === null || author === void 0 ? void 0 : author.endpoint) === null || _s === void 0 ? void 0 : _s.browse) === null || _t === void 0 ? void 0 : _t.id,
                    endpoint: author === null || author === void 0 ? void 0 : author.endpoint
                };
            }
        }
        else if (this.item_type == 'song') {
            const artists = (_u = this.subtitle.runs) === null || _u === void 0 ? void 0 : _u.filter((run) => { var _a, _b; return (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id.startsWith('UC'); });
            if (artists) {
                this.artists = artists.map((artist) => {
                    var _a, _b;
                    return ({
                        name: artist === null || artist === void 0 ? void 0 : artist.text,
                        channel_id: (_b = (_a = artist === null || artist === void 0 ? void 0 : artist.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id,
                        endpoint: artist === null || artist === void 0 ? void 0 : artist.endpoint
                    });
                });
            }
        }
        this.thumbnail = Thumbnail_1.default.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
        this.thumbnail_overlay = index_1.default.parseItem(data.thumbnailOverlay, MusicItemThumbnailOverlay_1.default);
        this.menu = index_1.default.parseItem(data.menu, Menu_1.default);
    }
}
MusicTwoRowItem.type = 'MusicTwoRowItem';
exports.default = MusicTwoRowItem;
//# sourceMappingURL=MusicTwoRowItem.js.map