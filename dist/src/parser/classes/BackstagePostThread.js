"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class BackstagePostThread extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.post = index_1.default.parse(data.post);
    }
}
BackstagePostThread.type = 'BackstagePostThread';
exports.default = BackstagePostThread;
//# sourceMappingURL=BackstagePostThread.js.map