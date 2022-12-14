"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class DidYouMean extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.text = new Text_1.default(data.didYouMean).toString();
        this.corrected_query = new Text_1.default(data.correctedQuery);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint || data.correctedQueryEndpoint);
    }
}
DidYouMean.type = 'DidYouMean';
exports.default = DidYouMean;
//# sourceMappingURL=DidYouMean.js.map