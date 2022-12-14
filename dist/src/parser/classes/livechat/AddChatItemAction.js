"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class AddChatItemAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.item = index_1.default.parseItem(data.item);
        this.client_id = data.clientId || null;
    }
}
AddChatItemAction.type = 'AddChatItemAction';
exports.default = AddChatItemAction;
//# sourceMappingURL=AddChatItemAction.js.map