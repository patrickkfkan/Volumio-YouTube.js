"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class Endscreen extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.elements = index_1.default.parseArray(data.elements);
        this.start_ms = data.startMs;
    }
}
Endscreen.type = 'Endscreen';
exports.default = Endscreen;
//# sourceMappingURL=Endscreen.js.map