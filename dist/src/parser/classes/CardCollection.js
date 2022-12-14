"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class CardCollection extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.cards = index_1.default.parseArray(data.cards);
        this.header = new Text_1.default(data.headerText);
        this.allow_teaser_dismiss = data.allowTeaserDismiss;
    }
}
CardCollection.type = 'CardCollection';
exports.default = CardCollection;
//# sourceMappingURL=CardCollection.js.map