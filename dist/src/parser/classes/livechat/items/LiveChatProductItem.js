"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
const helpers_1 = require("../../../helpers");
const Text_1 = __importDefault(require("../../misc/Text"));
const Thumbnail_1 = __importDefault(require("../../misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("../../NavigationEndpoint"));
class LiveChatProductItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.accessibility_title = data.accessibilityTitle;
        this.thumbnail = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.price = data.price;
        this.vendor_name = data.vendorName;
        this.from_vendor_text = data.fromVendorText;
        this.information_button = index_1.default.parse(data.informationButton);
        this.endpoint = new NavigationEndpoint_1.default(data.onClickCommand);
        this.creator_message = data.creatorMessage;
        this.creator_name = data.creatorName;
        this.author_photo = Thumbnail_1.default.fromResponse(data.authorPhoto);
        this.information_dialog = index_1.default.parse(data.informationDialog);
        this.is_verified = data.isVerified;
        this.creator_custom_message = new Text_1.default(data.creatorCustomMessage);
    }
}
LiveChatProductItem.type = 'LiveChatProductItem';
exports.default = LiveChatProductItem;
//# sourceMappingURL=LiveChatProductItem.js.map