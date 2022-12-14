"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class Button extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.text = new Text_1.default(data.text).toString();
        if ((_a = data.accessibility) === null || _a === void 0 ? void 0 : _a.label) {
            this.label = (_b = data.accessibility) === null || _b === void 0 ? void 0 : _b.label;
        }
        if (data.tooltip) {
            this.tooltip = data.tooltip;
        }
        if ((_c = data.icon) === null || _c === void 0 ? void 0 : _c.iconType) {
            this.icon_type = (_d = data.icon) === null || _d === void 0 ? void 0 : _d.iconType;
        }
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint || data.serviceEndpoint || data.command);
    }
}
Button.type = 'Button';
exports.default = Button;
//# sourceMappingURL=Button.js.map