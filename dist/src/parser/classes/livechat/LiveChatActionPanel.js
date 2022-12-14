"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class LiveChatActionPanel extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.contents = index_1.default.parse(data.contents);
        this.target_id = data.targetId;
    }
}
LiveChatActionPanel.type = 'LiveChatActionPanel';
exports.default = LiveChatActionPanel;
//# sourceMappingURL=LiveChatActionPanel.js.map