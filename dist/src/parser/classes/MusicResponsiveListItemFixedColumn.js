"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class MusicResponsiveListItemFixedColumn extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.text);
        this.display_priority = data.displayPriority;
    }
}
MusicResponsiveListItemFixedColumn.type = 'musicResponsiveListItemFlexColumnRenderer';
exports.default = MusicResponsiveListItemFixedColumn;
//# sourceMappingURL=MusicResponsiveListItemFixedColumn.js.map