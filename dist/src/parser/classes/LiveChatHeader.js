"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class LiveChatHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.overflow_menu = index_1.default.parse(data.overflowMenu);
        this.collapse_button = index_1.default.parse(data.collapseButton);
        this.view_selector = index_1.default.parse(data.viewSelector);
    }
}
LiveChatHeader.type = 'LiveChatHeader';
exports.default = LiveChatHeader;
//# sourceMappingURL=LiveChatHeader.js.map