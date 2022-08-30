"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
const ChipCloudChip_1 = __importDefault(require("./ChipCloudChip"));
class ChipCloud extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: check this assumption that chipcloudchip is always returned
        this.chips = index_1.default.parseArray(data.chips, ChipCloudChip_1.default);
        this.next_button = index_1.default.parse(data.nextButton);
        this.previous_button = index_1.default.parse(data.previousButton);
        this.horizontal_scrollable = data.horizontalScrollable;
    }
}
ChipCloud.type = 'ChipCloud';
exports.default = ChipCloud;
//# sourceMappingURL=ChipCloud.js.map