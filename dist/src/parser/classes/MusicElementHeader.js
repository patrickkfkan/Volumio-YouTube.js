"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Element_1 = __importDefault(require("./Element"));
const helpers_1 = require("../helpers");
class MusicElementHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.element = Reflect.has(data, 'elementRenderer') ? index_1.default.parseItem(data, Element_1.default) : null;
    }
}
MusicElementHeader.type = 'MusicElementHeader';
exports.default = MusicElementHeader;
//# sourceMappingURL=MusicElementHeader.js.map