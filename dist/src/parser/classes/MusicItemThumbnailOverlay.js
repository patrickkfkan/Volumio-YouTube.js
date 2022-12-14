"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const MusicPlayButton_1 = __importDefault(require("./MusicPlayButton"));
const helpers_1 = require("../helpers");
class MusicItemThumbnailOverlay extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.content = index_1.default.parseItem(data.content, MusicPlayButton_1.default);
        this.content_position = data.contentPosition;
        this.display_style = data.displayStyle;
    }
}
MusicItemThumbnailOverlay.type = 'MusicItemThumbnailOverlay';
exports.default = MusicItemThumbnailOverlay;
//# sourceMappingURL=MusicItemThumbnailOverlay.js.map