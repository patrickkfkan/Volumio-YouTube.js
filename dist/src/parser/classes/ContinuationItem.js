"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ContinuationItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.trigger = data.trigger;
        if (data.button) {
            this.button = index_1.default.parse(data.button);
        }
        this.endpoint = new NavigationEndpoint_1.default(data.continuationEndpoint);
    }
}
ContinuationItem.type = 'ContinuationItem';
exports.default = ContinuationItem;
//# sourceMappingURL=ContinuationItem.js.map