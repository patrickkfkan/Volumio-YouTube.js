"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class TwoColumnSearchResults extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.primary_contents = index_1.default.parse(data.primaryContents);
        this.secondary_contents = index_1.default.parse(data.secondaryContents);
    }
}
TwoColumnSearchResults.type = 'TwoColumnSearchResults';
exports.default = TwoColumnSearchResults;
//# sourceMappingURL=TwoColumnSearchResults.js.map