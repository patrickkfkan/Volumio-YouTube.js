"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class ReplaceChatItemAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.target_item_id = data.targetItemId;
        this.replacement_item = index_1.default.parse(data.replacementItem);
    }
}
ReplaceChatItemAction.type = 'ReplaceChatItemAction';
exports.default = ReplaceChatItemAction;
//# sourceMappingURL=ReplaceChatItemAction.js.map