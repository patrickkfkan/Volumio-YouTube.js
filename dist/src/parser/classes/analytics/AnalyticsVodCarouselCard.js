"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnalyticsVideo_1 = __importDefault(require("./AnalyticsVideo"));
const helpers_1 = require("../../helpers");
class AnalyticsVodCarouselCard extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = data.title;
        if (data.noDataMessage) {
            this.no_data_message = data.noDataMessage;
        }
        this.videos = ((_a = data.videoCarouselData) === null || _a === void 0 ? void 0 : _a.videos.map((video) => new AnalyticsVideo_1.default(video))) || null;
    }
}
AnalyticsVodCarouselCard.type = 'AnalyticsVodCarouselCard';
exports.default = AnalyticsVodCarouselCard;
//# sourceMappingURL=AnalyticsVodCarouselCard.js.map