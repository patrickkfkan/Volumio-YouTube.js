"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class MovingThumbnail extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        return (_a = data.movingThumbnailDetails) === null || _a === void 0 ? void 0 : _a.thumbnails.map((thumbnail) => new Thumbnail_1.default(thumbnail)).sort((a, b) => b.width - a.width);
    }
}
MovingThumbnail.type = 'MovingThumbnail';
exports.default = MovingThumbnail;
//# sourceMappingURL=MovingThumbnail.js.map