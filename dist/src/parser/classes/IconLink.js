"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
class IconLink extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.icon_type = (_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType;
        if (data.tooltip) {
            this.tooltip = new Text_1.default(data.tooltip).toString();
        }
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
    }
}
IconLink.type = 'IconLink';
exports.default = IconLink;
//# sourceMappingURL=IconLink.js.map