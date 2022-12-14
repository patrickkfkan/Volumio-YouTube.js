"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ToggleMenuServiceItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.text = new Text_1.default(data.defaultText);
        this.toggled_text = new Text_1.default(data.toggledText);
        this.icon_type = data.defaultIcon.iconType;
        this.toggled_icon_type = data.toggledIcon.iconType;
        this.endpoint = new NavigationEndpoint_1.default(data.toggledServiceEndpoint);
    }
}
ToggleMenuServiceItem.type = 'ToggleMenuServiceItem';
exports.default = ToggleMenuServiceItem;
//# sourceMappingURL=ToggleMenuServiceItem.js.map