"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class MerchandiseItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.description = data.description;
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.price = data.price;
        this.vendor_name = data.vendorName;
        this.button_text = data.buttonText;
        this.button_accessibility_text = data.buttonAccessibilityText;
        this.from_vendor_text = data.fromVendorText;
        this.additional_fees_text = data.additionalFeesText;
        this.region_format = data.regionFormat;
        this.endpoint = new NavigationEndpoint_1.default(data.buttonCommand);
    }
}
MerchandiseItem.type = 'MerchandiseItem';
exports.default = MerchandiseItem;
//# sourceMappingURL=MerchandiseItem.js.map