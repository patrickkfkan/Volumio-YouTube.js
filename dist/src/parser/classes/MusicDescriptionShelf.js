"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class MusicDescriptionShelf extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.description = new Text_1.default(data.description);
        if (this.max_collapsed_lines) {
            this.max_collapsed_lines = data.maxCollapsedLines;
        }
        if (this.max_expanded_lines) {
            this.max_expanded_lines = data.maxExpandedLines;
        }
        this.footer = new Text_1.default(data.footer);
    }
}
MusicDescriptionShelf.type = 'MusicDescriptionShelf';
exports.default = MusicDescriptionShelf;
//# sourceMappingURL=MusicDescriptionShelf.js.map