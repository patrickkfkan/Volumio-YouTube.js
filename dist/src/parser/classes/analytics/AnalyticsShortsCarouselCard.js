"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const NavigationEndpoint_1 = __importDefault(require("../NavigationEndpoint"));
class AnalyticsShortsCarouselCard extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.shorts = data.shortsCarouselData.shorts.map((short) => ({
            description: short.shortsDescription,
            thumbnail_url: short.thumbnailUrl,
            endpoint: new NavigationEndpoint_1.default(short.videoEndpoint)
        }));
    }
}
AnalyticsShortsCarouselCard.type = 'AnalyticsShortsCarouselCard';
exports.default = AnalyticsShortsCarouselCard;
//# sourceMappingURL=AnalyticsShortsCarouselCard.js.map