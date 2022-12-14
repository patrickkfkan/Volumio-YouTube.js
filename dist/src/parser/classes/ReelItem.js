"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class ReelItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text_1.default(data.headline);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.views = new Text_1.default(data.viewCountText);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
    }
}
ReelItem.type = 'ReelItem';
exports.default = ReelItem;
//# sourceMappingURL=ReelItem.js.map