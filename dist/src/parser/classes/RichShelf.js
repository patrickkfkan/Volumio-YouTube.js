"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class RichShelf extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.contents = index_1.default.parse(data.contents);
        this.endpoint = data.endpoint ? new NavigationEndpoint_1.default(data.endpoint) : null;
    }
}
RichShelf.type = 'RichShelf';
exports.default = RichShelf;
//# sourceMappingURL=RichShelf.js.map