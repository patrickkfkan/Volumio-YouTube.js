"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
class PlaylistPanelVideoWrapper extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.primary = __1.default.parseItem(data.primaryRenderer);
        this.counterpart = ((_a = data.counterpart) === null || _a === void 0 ? void 0 : _a.map((item) => __1.default.parseItem(item.counterpartRenderer))) || [];
    }
}
PlaylistPanelVideoWrapper.type = 'PlaylistPanelVideoWrapper';
exports.default = PlaylistPanelVideoWrapper;
//# sourceMappingURL=PlaylistPanelVideoWrapper.js.map