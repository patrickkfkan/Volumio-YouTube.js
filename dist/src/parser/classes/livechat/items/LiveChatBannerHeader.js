"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
const Text_1 = __importDefault(require("../../misc/Text"));
const helpers_1 = require("../../../helpers");
class LiveChatBannerHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.text = new Text_1.default(data.text).toString();
        this.icon_type = data.icon.iconType;
        this.context_menu_button = index_1.default.parse(data.contextMenuButton);
    }
}
LiveChatBannerHeader.type = 'LiveChatBannerHeader';
exports.default = LiveChatBannerHeader;
//# sourceMappingURL=LiveChatBannerHeader.js.map