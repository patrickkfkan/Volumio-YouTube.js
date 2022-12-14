"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MusicMultiSelectMenuItem_1 = __importDefault(require("./MusicMultiSelectMenuItem"));
const MusicMenuItemDivider_1 = __importDefault(require("./MusicMenuItemDivider"));
const helpers_1 = require("../../helpers");
const Text_1 = __importDefault(require("../misc/Text"));
const __1 = __importDefault(require("../.."));
class MusicMultiSelectMenu extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text_1.default((_a = data.title.musicMenuTitleRenderer) === null || _a === void 0 ? void 0 : _a.primaryText).text;
        this.options = __1.default.parseArray(data.options, [MusicMultiSelectMenuItem_1.default, MusicMenuItemDivider_1.default]);
    }
}
MusicMultiSelectMenu.type = 'MusicMultiSelectMenu';
exports.default = MusicMultiSelectMenu;
//# sourceMappingURL=MusicMultiSelectMenu.js.map