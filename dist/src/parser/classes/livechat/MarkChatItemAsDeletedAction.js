"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../misc/Text"));
const helpers_1 = require("../../helpers");
class MarkChatItemAsDeletedAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.deleted_state_message = new Text_1.default(data.deletedStateMessage);
        this.target_item_id = data.targetItemId;
    }
}
MarkChatItemAsDeletedAction.type = 'MarkChatItemAsDeletedAction';
exports.default = MarkChatItemAsDeletedAction;
//# sourceMappingURL=MarkChatItemAsDeletedAction.js.map