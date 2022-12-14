"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class Menu extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.items = index_1.default.parseArray(data.items);
        this.top_level_buttons = index_1.default.parseArray(data.topLevelButtons);
        this.label = ((_b = (_a = data.accessibility) === null || _a === void 0 ? void 0 : _a.accessibilityData) === null || _b === void 0 ? void 0 : _b.label) || null;
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
Menu.type = 'Menu';
exports.default = Menu;
//# sourceMappingURL=Menu.js.map