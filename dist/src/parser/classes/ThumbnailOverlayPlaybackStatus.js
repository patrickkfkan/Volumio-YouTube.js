"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class ThumbnailOverlayPlaybackStatus extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.text = data.texts.map((text) => new Text_1.default(text))[0].toString();
    }
}
ThumbnailOverlayPlaybackStatus.type = 'ThumbnailOverlayPlaybackStatus';
exports.default = ThumbnailOverlayPlaybackStatus;
//# sourceMappingURL=ThumbnailOverlayPlaybackStatus.js.map