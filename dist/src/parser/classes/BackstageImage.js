"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class BackstageImage extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.image = Thumbnail_1.default.fromResponse(data.image);
    }
}
BackstageImage.type = 'BackstageImage';
exports.default = BackstageImage;
//# sourceMappingURL=BackstageImage.js.map