"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class SimpleCardTeaser extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.message = new Text_1.default(data.message);
        this.prominent = data.prominent;
    }
}
SimpleCardTeaser.type = 'SimpleCardTeaser';
exports.default = SimpleCardTeaser;
//# sourceMappingURL=SimpleCardTeaser.js.map