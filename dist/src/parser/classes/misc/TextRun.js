"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("../NavigationEndpoint"));
class TextRun {
    constructor(data) {
        this.text = data.text;
        this.endpoint = data.navigationEndpoint ? new NavigationEndpoint_1.default(data.navigationEndpoint) : undefined;
    }
}
exports.default = TextRun;
//# sourceMappingURL=TextRun.js.map