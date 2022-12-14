"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ThumbnailOverlayToggleButton extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.is_toggled = data.isToggled || null;
        this.icon_type = {
            toggled: data.toggledIcon.iconType,
            untoggled: data.untoggledIcon.iconType
        };
        this.tooltip = {
            toggled: data.toggledTooltip,
            untoggled: data.untoggledTooltip
        };
        this.toggled_endpoint = new NavigationEndpoint_1.default(data.toggledServiceEndpoint);
        this.untoggled_endpoint = new NavigationEndpoint_1.default(data.untoggledServiceEndpoint);
    }
}
ThumbnailOverlayToggleButton.type = 'ThumbnailOverlayToggleButton';
exports.default = ThumbnailOverlayToggleButton;
//# sourceMappingURL=ThumbnailOverlayToggleButton.js.map