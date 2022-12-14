"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class MusicSideAlignedItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        if (data.startItems) {
            this.start_items = index_1.default.parseArray(data.startItems);
        }
    }
}
MusicSideAlignedItem.type = 'MusicSideAlignedItem';
exports.default = MusicSideAlignedItem;
//# sourceMappingURL=MusicSideAlignedItem.js.map