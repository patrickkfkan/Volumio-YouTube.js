"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class CollageHeroImage extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.left = Thumbnail_1.default.fromResponse(data.leftThumbnail);
        this.top_right = Thumbnail_1.default.fromResponse(data.topRightThumbnail);
        this.bottom_right = Thumbnail_1.default.fromResponse(data.bottomRightThumbnail);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
    }
}
CollageHeroImage.type = 'CollageHeroImage';
exports.default = CollageHeroImage;
//# sourceMappingURL=CollageHeroImage.js.map