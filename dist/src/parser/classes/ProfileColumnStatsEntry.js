"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class ProfileColumnStatsEntry extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.label = new Text_1.default(data.label);
        this.value = new Text_1.default(data.value);
    }
}
ProfileColumnStatsEntry.type = 'ProfileColumnStatsEntry';
exports.default = ProfileColumnStatsEntry;
//# sourceMappingURL=ProfileColumnStatsEntry.js.map