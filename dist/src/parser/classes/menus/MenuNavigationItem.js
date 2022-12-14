"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("../Button"));
class MenuNavigationItem extends Button_1.default {
    constructor(data) {
        super(data);
    }
}
MenuNavigationItem.type = 'MenuNavigationItem';
exports.default = MenuNavigationItem;
//# sourceMappingURL=MenuNavigationItem.js.map