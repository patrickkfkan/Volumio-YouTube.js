"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class ChannelVideoPlayer extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text_1.default(data.title);
        this.description = new Text_1.default(data.description);
        this.views = new Text_1.default(data.viewCountText);
        this.published = new Text_1.default(data.publishedTimeText);
    }
}
ChannelVideoPlayer.type = 'ChannelVideoPlayer';
exports.default = ChannelVideoPlayer;
//# sourceMappingURL=ChannelVideoPlayer.js.map