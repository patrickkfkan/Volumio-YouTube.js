"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ChipCloudChip extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: is this isSelected or just selected
        this.is_selected = data.isSelected;
        this.endpoint = data.navigationEndpoint ? new NavigationEndpoint_1.default(data.navigationEndpoint) : undefined;
        this.text = new Text_1.default(data.text).toString();
    }
}
ChipCloudChip.type = 'ChipCloudChip';
exports.default = ChipCloudChip;
//# sourceMappingURL=ChipCloudChip.js.map