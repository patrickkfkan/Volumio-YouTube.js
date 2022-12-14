"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class PlaylistVideoThumbnail extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.thumbnail = Thumbnail_1.default.fromResponse(data.thumbnail);
    }
}
PlaylistVideoThumbnail.type = 'PlaylistVideoThumbnail';
exports.default = PlaylistVideoThumbnail;
//# sourceMappingURL=PlaylistVideoThumbnail.js.map