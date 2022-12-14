"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ActionButton {
    constructor(data) {
        this.icon_name = data.iconName;
        this.endpoint = new NavigationEndpoint_1.default(data.onTap);
        this.a11y_text = data.a11yText;
        this.style = data.style;
    }
}
ActionButton.type = 'ActionButton';
class Panel {
    constructor(data) {
        this.image = data.image.image.sources;
        this.content_mode = data.image.contentMode;
        this.crop_options = data.image.cropOptions;
        this.image_aspect_ratio = data.imageAspectRatio;
        this.caption = data.caption;
        this.action_buttons = data.actionButtons.map((el) => new ActionButton(el));
    }
}
Panel.type = 'Panel';
class MusicLargeCardItemCarousel extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: check this
        this.header = data.shelf.header;
        this.panels = data.shelf.panels.map((el) => new Panel(el));
    }
}
MusicLargeCardItemCarousel.type = 'MusicLargeCardItemCarousel';
exports.default = MusicLargeCardItemCarousel;
//# sourceMappingURL=MusicLargeCardItemCarousel.js.map