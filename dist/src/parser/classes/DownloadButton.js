"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class DownloadButton extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.style = data.style;
        this.size = data.size;
        this.endpoint = new NavigationEndpoint_1.default(data.command);
        this.target_id = data.targetId;
    }
}
DownloadButton.type = 'DownloadButton';
exports.default = DownloadButton;
//# sourceMappingURL=DownloadButton.js.map