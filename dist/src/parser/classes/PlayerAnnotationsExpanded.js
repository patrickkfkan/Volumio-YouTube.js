"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class PlayerAnnotationsExpanded extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.featured_channel = {
            start_time_ms: data.featuredChannel.startTimeMs,
            end_time_ms: data.featuredChannel.endTimeMs,
            watermark: Thumbnail_1.default.fromResponse(data.featuredChannel.watermark),
            channel_name: data.featuredChannel.channelName,
            endpoint: new NavigationEndpoint_1.default(data.featuredChannel.navigationEndpoint),
            subscribe_button: index_1.default.parse(data.featuredChannel.subscribeButton)
        };
        this.allow_swipe_dismiss = data.allowSwipeDismiss;
        this.annotation_id = data.annotationId;
    }
}
PlayerAnnotationsExpanded.type = 'PlayerAnnotationsExpanded';
exports.default = PlayerAnnotationsExpanded;
//# sourceMappingURL=PlayerAnnotationsExpanded.js.map