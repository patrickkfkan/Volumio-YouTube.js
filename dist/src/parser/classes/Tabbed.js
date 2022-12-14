"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class Tabbed extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: use parseArray instead
        this.contents = index_1.default.parse(data);
    }
}
Tabbed.type = 'Tabbed';
exports.default = Tabbed;
//# sourceMappingURL=Tabbed.js.map