"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class MultiPageMenuNotificationSection extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.items = index_1.default.parse(data.items);
    }
    get contents() {
        return this.items;
    }
}
MultiPageMenuNotificationSection.type = 'MultiPageMenuNotificationSection';
exports.default = MultiPageMenuNotificationSection;
//# sourceMappingURL=MultiPageMenuNotificationSection.js.map