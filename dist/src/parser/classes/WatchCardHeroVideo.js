"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class WatchCardHeroVideo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.call_to_action_button = index_1.default.parse(data.callToActionButton);
        this.hero_image = index_1.default.parse(data.heroImage);
        this.label = data.accessibility.accessibilityData.label;
    }
}
WatchCardHeroVideo.type = 'WatchCardHeroVideo';
exports.default = WatchCardHeroVideo;
//# sourceMappingURL=WatchCardHeroVideo.js.map