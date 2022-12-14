"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("../misc/Thumbnail"));
const helpers_1 = require("../../helpers");
class AnalyticsVideo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.videoTitle;
        this.metadata = {
            views: data.videoDescription.split('·')[0].trim(),
            published: data.videoDescription.split('·')[1].trim(),
            thumbnails: Thumbnail_1.default.fromResponse(data.thumbnailDetails),
            duration: data.formattedLength,
            is_short: data.isShort
        };
    }
}
AnalyticsVideo.type = 'AnalyticsVideo';
exports.default = AnalyticsVideo;
//# sourceMappingURL=AnalyticsVideo.js.map