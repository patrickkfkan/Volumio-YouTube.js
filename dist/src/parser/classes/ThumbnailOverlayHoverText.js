"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class ThumbnailOverlayHoverText extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.text = new Text_1.default(data.text);
        this.icon_type = data.icon.iconType;
    }
}
ThumbnailOverlayHoverText.type = 'ThumbnailOverlayHoverText';
exports.default = ThumbnailOverlayHoverText;
//# sourceMappingURL=ThumbnailOverlayHoverText.js.map