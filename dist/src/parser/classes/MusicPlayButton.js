"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class MusicPlayButton extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.endpoint = new NavigationEndpoint_1.default(data.playNavigationEndpoint);
        this.play_icon_type = data.playIcon.iconType;
        this.pause_icon_type = data.pauseIcon.iconType;
        if (data.accessibilityPlayData) {
            this.play_label = data.accessibilityPlayData.accessibilityData.label;
        }
        if (data.accessibilityPlayData) {
            this.pause_label = (_a = data.accessibilityPauseData) === null || _a === void 0 ? void 0 : _a.accessibilityData.label;
        }
        this.icon_color = data.iconColor;
    }
}
MusicPlayButton.type = 'MusicPlayButton';
exports.default = MusicPlayButton;
//# sourceMappingURL=MusicPlayButton.js.map