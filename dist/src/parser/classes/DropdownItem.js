"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
class DropdownItem extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.label = new Text_1.default(data.label).toString();
        this.selected = !!data.isSelected;
        if (data.int32Value) {
            this.value = data.int32Value;
        }
        else if (data.stringValue) {
            this.value = data.stringValue;
        }
        if ((_a = data.onSelectCommand) === null || _a === void 0 ? void 0 : _a.browseEndpoint) {
            this.endpoint = new NavigationEndpoint_1.default(data.onSelectCommand);
        }
        if ((_b = data.icon) === null || _b === void 0 ? void 0 : _b.iconType) {
            this.icon_type = (_c = data.icon) === null || _c === void 0 ? void 0 : _c.iconType;
        }
        if (data.descriptionText) {
            this.description = new Text_1.default(data.descriptionText).toString();
        }
    }
}
DropdownItem.type = 'DropdownItem';
exports.default = DropdownItem;
//# sourceMappingURL=DropdownItem.js.map