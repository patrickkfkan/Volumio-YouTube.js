"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../../misc/Text"));
const Thumbnail_1 = __importDefault(require("../../misc/Thumbnail"));
const helpers_1 = require("../../../helpers");
class LiveChatTickerSponsorItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.detail_text = new Text_1.default(data.detailText).toString();
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text_1.default(data === null || data === void 0 ? void 0 : data.authorName),
            thumbnails: Thumbnail_1.default.fromResponse(data.sponsorPhoto)
        };
        this.duration_sec = data.durationSec;
        // TODO: finish this
    }
}
LiveChatTickerSponsorItem.type = 'LiveChatTickerSponsorItem';
exports.default = LiveChatTickerSponsorItem;
//# sourceMappingURL=LiveChatTickerSponsorItem.js.map