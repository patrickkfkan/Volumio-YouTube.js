"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class MusicDetailHeader extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super();
        this.title = new Text_1.default(data.title);
        this.description = new Text_1.default(data.description);
        this.subtitle = new Text_1.default(data.subtitle);
        this.second_subtitle = new Text_1.default(data.secondSubtitle);
        this.year = ((_b = (_a = this.subtitle.runs) === null || _a === void 0 ? void 0 : _a.find((run) => (/^[12][0-9]{3}$/).test(run.text))) === null || _b === void 0 ? void 0 : _b.text) || '';
        this.song_count = ((_d = (_c = this.second_subtitle.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text) || '';
        this.total_duration = ((_f = (_e = this.second_subtitle.runs) === null || _e === void 0 ? void 0 : _e[2]) === null || _f === void 0 ? void 0 : _f.text) || '';
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
        this.badges = index_1.default.parse(data.subtitleBadges);
        const author = (_g = this.subtitle.runs) === null || _g === void 0 ? void 0 : _g.find((run) => { var _a, _b; return (_b = (_a = run === null || run === void 0 ? void 0 : run.endpoint) === null || _a === void 0 ? void 0 : _a.browse) === null || _b === void 0 ? void 0 : _b.id.startsWith('UC'); });
        if (author) {
            this.author = {
                name: author.text,
                channel_id: (_j = (_h = author.endpoint) === null || _h === void 0 ? void 0 : _h.browse) === null || _j === void 0 ? void 0 : _j.id,
                endpoint: author.endpoint
            };
        }
        this.menu = index_1.default.parse(data.menu);
    }
}
MusicDetailHeader.type = 'MusicDetailHeader';
exports.default = MusicDetailHeader;
//# sourceMappingURL=MusicDetailHeader.js.map