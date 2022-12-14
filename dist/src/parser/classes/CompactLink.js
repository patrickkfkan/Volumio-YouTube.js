"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class CompactLink extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title).toString();
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.style = data.style;
    }
}
CompactLink.type = 'CompactLink';
exports.default = CompactLink;
//# sourceMappingURL=CompactLink.js.map