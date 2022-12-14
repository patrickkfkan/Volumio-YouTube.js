"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SubFeedOption extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.name = new Text_1.default(data.name);
        this.is_selected = data.isSelected;
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
    }
}
SubFeedOption.type = 'SubFeedOption';
exports.default = SubFeedOption;
//# sourceMappingURL=SubFeedOption.js.map