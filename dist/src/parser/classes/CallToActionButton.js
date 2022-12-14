"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class CallToActionButton extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.label = new Text_1.default(data.label);
        this.icon_type = data.icon.iconType;
        this.style = data.style;
    }
}
CallToActionButton.type = 'CallToActionButton';
exports.default = CallToActionButton;
//# sourceMappingURL=CallToActionButton.js.map