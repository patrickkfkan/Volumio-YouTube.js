"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class ReelShelf extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.items = index_1.default.parse(data.items);
        this.endpoint = data.endpoint ? new NavigationEndpoint_1.default(data.endpoint) : null;
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
ReelShelf.type = 'ReelShelf';
exports.default = ReelShelf;
//# sourceMappingURL=ReelShelf.js.map