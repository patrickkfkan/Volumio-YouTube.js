"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Button_1 = __importDefault(require("./Button"));
const ChipCloudChip_1 = __importDefault(require("./ChipCloudChip"));
const helpers_1 = require("../helpers");
class ChipCloud extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: check this assumption that chipcloudchip is always returned
        this.chips = index_1.default.parseArray(data.chips, ChipCloudChip_1.default);
        this.next_button = index_1.default.parseItem(data.nextButton, Button_1.default);
        this.previous_button = index_1.default.parseItem(data.previousButton, Button_1.default);
        this.horizontal_scrollable = data.horizontalScrollable;
    }
}
ChipCloud.type = 'ChipCloud';
exports.default = ChipCloud;
//# sourceMappingURL=ChipCloud.js.map