"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class PlayerOverlay extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.end_screen = index_1.default.parse(data.endScreen);
        this.autoplay = index_1.default.parse(data.autoplay);
        this.share_button = index_1.default.parse(data.shareButton);
        this.add_to_menu = index_1.default.parse(data.addToMenu);
        this.fullscreen_engagement = index_1.default.parse(data.fullscreenEngagement);
    }
}
PlayerOverlay.type = 'PlayerOverlay';
exports.default = PlayerOverlay;
//# sourceMappingURL=PlayerOverlay.js.map