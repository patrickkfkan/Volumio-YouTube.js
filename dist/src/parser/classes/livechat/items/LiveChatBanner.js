"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
const helpers_1 = require("../../../helpers");
class LiveChatBanner extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.header = index_1.default.parse(data.header);
        this.contents = index_1.default.parse(data.contents);
        this.action_id = data.actionId;
        this.viewer_is_creator = data.viewerIsCreator;
        this.target_id = data.targetId;
        this.is_stackable = data.isStackable;
        this.background_type = data.backgroundType;
    }
}
LiveChatBanner.type = 'LiveChatBanner';
exports.default = LiveChatBanner;
//# sourceMappingURL=LiveChatBanner.js.map