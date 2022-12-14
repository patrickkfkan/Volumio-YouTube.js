"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class RichGrid extends helpers_1.YTNode {
    constructor(data) {
        super();
        // XXX: we don't parse the masthead since it is usually an advertisement
        // XXX: reflowOptions aren't parsed, I think its only used internally for layout
        this.header = index_1.default.parse(data.header);
        this.contents = index_1.default.parse(data.contents);
    }
}
RichGrid.type = 'RichGrid';
exports.default = RichGrid;
//# sourceMappingURL=RichGrid.js.map