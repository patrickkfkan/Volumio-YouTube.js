"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class SingleHeroImage extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.style = data.style;
    }
}
SingleHeroImage.type = 'SingleHeroImage';
exports.default = SingleHeroImage;
//# sourceMappingURL=SingleHeroImage.js.map