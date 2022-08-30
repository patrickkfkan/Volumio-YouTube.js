"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class UniversalWatchCard extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: use parseItem / parseArray for these
        this.header = index_1.default.parse(data.header);
        this.call_to_action = index_1.default.parse(data.callToAction);
        this.sections = index_1.default.parse(data.sections);
    }
}
UniversalWatchCard.type = 'UniversalWatchCard';
exports.default = UniversalWatchCard;
//# sourceMappingURL=UniversalWatchCard.js.map