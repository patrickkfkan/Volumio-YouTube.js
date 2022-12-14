"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
const DropdownItem_1 = __importDefault(require("./DropdownItem"));
class Dropdown extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.label = data.label || '';
        this.entries = __1.default.parseArray(data.entries, DropdownItem_1.default);
    }
}
Dropdown.type = 'Dropdown';
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map