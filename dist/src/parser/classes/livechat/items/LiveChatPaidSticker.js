"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
const NavigationEndpoint_1 = __importDefault(require("../../NavigationEndpoint"));
const Thumbnail_1 = __importDefault(require("../../misc/Thumbnail"));
const Text_1 = __importDefault(require("../../misc/Text"));
const helpers_1 = require("../../../helpers");
class LiveChatPaidSticker extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text_1.default(data.authorName),
            thumbnails: Thumbnail_1.default.fromResponse(data.authorPhoto),
            badges: index_1.default.parse(data.authorBadges)
        };
        this.money_chip_background_color = data.moneyChipBackgroundColor;
        this.money_chip_text_color = data.moneyChipTextColor;
        this.background_color = data.backgroundColor;
        this.author_name_text_color = data.authorNameTextColor;
        this.sticker = Thumbnail_1.default.fromResponse(data.sticker);
        this.purchase_amount = new Text_1.default(data.purchaseAmountText).toString();
        this.context_menu = new NavigationEndpoint_1.default(data.contextMenuEndpoint);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    }
}
LiveChatPaidSticker.type = 'LiveChatPaidSticker';
exports.default = LiveChatPaidSticker;
//# sourceMappingURL=LiveChatPaidSticker.js.map