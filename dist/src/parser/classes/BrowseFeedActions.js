"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class BrowseFeedActions extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = index_1.default.parseArray(data.contents);
    }
}
BrowseFeedActions.type = 'BrowseFeedActions';
exports.default = BrowseFeedActions;
//# sourceMappingURL=BrowseFeedActions.js.map