"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class Panel {
    constructor(data) {
        this.thumbnail = {
            image: data.thumbnail.image.sources,
            endpoint: new NavigationEndpoint_1.default(data.thumbnail.onTap),
            on_long_press_endpoint: new NavigationEndpoint_1.default(data.thumbnail.onLongPress),
            content_mode: data.thumbnail.contentMode,
            crop_options: data.thumbnail.cropOptions
        };
        this.background_image = {
            image: data.backgroundImage.image.sources,
            gradient_image: data.backgroundImage.gradientImage.sources
        };
        this.strapline = data.strapline;
        this.title = data.title;
        this.description = data.description;
        this.cta = {
            icon_name: data.cta.iconName,
            title: data.cta.title,
            endpoint: new NavigationEndpoint_1.default(data.cta.onTap),
            accessibility_text: data.cta.accessibilityText,
            state: data.cta.state
        };
        this.text_on_tap_endpoint = new NavigationEndpoint_1.default(data.textOnTap);
    }
}
Panel.type = 'Panel';
class HighlightsCarousel extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.panels = data.highlightsCarousel.panels.map((el) => new Panel(el));
    }
}
HighlightsCarousel.type = 'HighlightsCarousel';
exports.default = HighlightsCarousel;
//# sourceMappingURL=HighlightsCarousel.js.map