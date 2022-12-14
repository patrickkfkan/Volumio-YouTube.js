"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class ThumbnailOverlayResumePlayback extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.percent_duration_watched = data.percentDurationWatched;
    }
}
ThumbnailOverlayResumePlayback.type = 'ThumbnailOverlayResumePlayback';
exports.default = ThumbnailOverlayResumePlayback;
//# sourceMappingURL=ThumbnailOverlayResumePlayback.js.map