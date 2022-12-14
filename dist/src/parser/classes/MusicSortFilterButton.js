"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
const MusicMultiSelectMenu_1 = __importDefault(require("./menus/MusicMultiSelectMenu"));
const Text_1 = __importDefault(require("./misc/Text"));
class MusicSortFilterButton extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text_1.default(data.title).text;
        this.icon_type = ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.icon_type) || null;
        this.menu = index_1.default.parseItem(data.menu, MusicMultiSelectMenu_1.default);
    }
}
MusicSortFilterButton.type = 'MusicSortFilterButton';
exports.default = MusicSortFilterButton;
//# sourceMappingURL=MusicSortFilterButton.js.map