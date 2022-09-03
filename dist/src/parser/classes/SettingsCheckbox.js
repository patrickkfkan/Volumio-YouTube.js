"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class SettingsCheckbox extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.help_text = new Text_1.default(data.helpText);
        this.enabled = data.enabled;
        this.disabled = data.disabled;
        this.id = data.id;
    }
}
SettingsCheckbox.type = 'SettingsCheckbox';
exports.default = SettingsCheckbox;
//# sourceMappingURL=SettingsCheckbox.js.map