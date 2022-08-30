"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class HorizontalCardList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.cards = index_1.default.parse(data.cards);
        this.header = index_1.default.parse(data.header);
        this.previous_button = index_1.default.parse(data.previousButton);
        this.next_button = index_1.default.parse(data.nextButton);
    }
}
HorizontalCardList.type = 'HorizontalCardList';
exports.default = HorizontalCardList;
//# sourceMappingURL=HorizontalCardList.js.map