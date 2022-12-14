"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
class MusicHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        if (data.header) {
            this.header = index_1.default.parse(data.header);
        }
        if (data.title) {
            this.title = new Text_1.default(data.title);
        }
    }
}
MusicHeader.type = 'MusicHeader';
exports.default = MusicHeader;
//# sourceMappingURL=MusicHeader.js.map