"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Utils_1 = require("../../utils/Utils");
const helpers_1 = require("../helpers");
class PlaylistPanelVideo extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e;
        super();
        this.title = new Text_1.default(data.title);
        this.thumbnail = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.selected = data.selected;
        this.video_id = data.videoId;
        this.duration = {
            text: new Text_1.default(data.lengthText).toString(),
            seconds: (0, Utils_1.timeToSeconds)(new Text_1.default(data.lengthText).toString())
        };
        const album = (_a = new Text_1.default(data.longBylineText).runs) === null || _a === void 0 ? void 0 : _a.find((run) => { var _a, _b; return (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id.startsWith('MPR'); });
        const artists = (_b = new Text_1.default(data.longBylineText).runs) === null || _b === void 0 ? void 0 : _b.filter((run) => { var _a, _b; return (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id.startsWith('UC'); });
        this.author = new Text_1.default(data.shortBylineText).toString();
        if (album) {
            this.album = {
                id: (_d = (_c = album.endpoint) === null || _c === void 0 ? void 0 : _c.browse) === null || _d === void 0 ? void 0 : _d.id,
                name: album.text,
                year: (_e = new Text_1.default(data.longBylineText).runs) === null || _e === void 0 ? void 0 : _e.slice(-1)[0].text,
                endpoint: album.endpoint
            };
        }
        if (artists) {
            this.artists = artists.map((artist) => {
                var _a, _b;
                return ({
                    name: artist.text,
                    channel_id: (_b = (_a = artist.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id,
                    endpoint: artist.endpoint
                });
            });
        }
        this.badges = index_1.default.parse(data.badges);
        this.menu = index_1.default.parse(data.menu);
        this.set_video_id = data.playlistSetVideoId;
    }
}
PlaylistPanelVideo.type = 'PlaylistPanelVideo';
exports.default = PlaylistPanelVideo;
//# sourceMappingURL=PlaylistPanelVideo.js.map