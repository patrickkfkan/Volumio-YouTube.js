"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const Menu_1 = __importDefault(require("./menus/Menu"));
class MusicVisualHeader extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text_1.default(data.title);
        this.thumbnails = data.thumbnail ? Thumbnail_1.default.fromResponse((_a = data.thumbnail.musicThumbnailRenderer) === null || _a === void 0 ? void 0 : _a.thumbnail) : [];
        this.menu = index_1.default.parseItem(data.menu, Menu_1.default);
        this.foreground_thumbnails = data.foregroundThumbnail ? Thumbnail_1.default.fromResponse((_b = data.foregroundThumbnail.musicThumbnailRenderer) === null || _b === void 0 ? void 0 : _b.thumbnail) : [];
    }
}
MusicVisualHeader.type = 'MusicVisualHeader';
exports.default = MusicVisualHeader;
//# sourceMappingURL=MusicVisualHeader.js.map