"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Button_1 = __importDefault(require("./Button"));
const helpers_1 = require("../helpers");
class CopyLink extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.copy_button = index_1.default.parseItem(data.copyButton, Button_1.default);
        this.short_url = data.shortUrl;
        this.style = data.style;
    }
}
CopyLink.type = 'CopyLink';
exports.default = CopyLink;
//# sourceMappingURL=CopyLink.js.map